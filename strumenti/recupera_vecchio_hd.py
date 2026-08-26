#!/usr/bin/env python3
"""Recupero controllato del backup storico HD250-1.

Senza opzioni di copia lo script opera esclusivamente in lettura e mostra il
manifest normalizzato. Le copie sono additive: nessun file esistente viene
sovrascritto. Se una destinazione esiste con contenuto diverso, l'intera
operazione viene interrotta prima di copiare alcunché.
"""

from __future__ import annotations

import argparse
import csv
import hashlib
import re
import shutil
import sys
from collections import Counter, defaultdict
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable, Optional


DEFAULT_HD = Path("/Volumes/HD250-1/Tablettature/Lezioni")
DEFAULT_VIDEO = (
    Path.home()
    / "OneDrive - University of Pisa"
    / "VideoLezioni"
    / "Corsi_Universitari"
)
DEFAULT_RECORDING = (
    Path.home()
    / "OneDrive - University of Pisa"
    / "Recording_Originali"
    / "Lezioni_Universitarie"
)

SOURCE_EXTENSIONS = {".jnt", ".camrec", ".camproj"}
COPY_EXTENSIONS = SOURCE_EXTENSIONS | {".avi"}

# Duplicati storici byte per byte del JNT canonico PCM_09_L04.jnt.
# SHA-256 comune:
# f5a690e80503dcd8039a3b90f648433078ef517b0cb2df3e8e838781b973e50c
IGNORED_EXACT_DUPLICATES = {
    ("PCM_09", "DisequazioniK", ".jnt"),
    ("PCM_09", "DisequazioniKK", ".jnt"),
}


@dataclass(frozen=True)
class CourseSpec:
    source_dir: str
    family: str
    course: str
    old_prefix: str
    width: int
    convention: str = "standard"


COURSES = (
    CourseSpec("AM09", "AM1", "AM1_09", "AM09", 3),
    CourseSpec("AM10", "AM1", "AM1_10", "AM10", 3),
    CourseSpec("AM11", "AM1", "AM1_11", "AM11", 3),
    CourseSpec("AM12", "AM1", "AM1_12", "AM12", 3),
    CourseSpec("AM_C07", "AM2", "AM2_07", "C07", 2),
    CourseSpec("AM_T06", "AM12", "AM12_06", "T06", 3, "am12_06"),
    CourseSpec("AM_T07", "AM12", "AM12_07", "T07", 3),
    CourseSpec("AM_T08", "AM12", "AM12_08", "T08", 3, "am12_08"),
    CourseSpec("PCM07", "Precorsi", "PCM_07", "PCM07", 2, "pcm07"),
    CourseSpec("PCM08", "Precorsi", "PCM_08", "PCM08", 2, "pcm08"),
    CourseSpec("PCM09", "Precorsi", "PCM_09", "PCM09", 2, "pcm09"),
    CourseSpec("S_Anna_10", "SAnna", "SA_10", "SA10", 2, "sanna"),
    CourseSpec("S_Anna_11", "SAnna", "SA_11", "SA11", 2, "sanna"),
)


@dataclass(frozen=True)
class Item:
    source: Path
    destination: Path
    course: str
    category: str
    extension: str
    lesson: str
    size: int


class ManifestError(RuntimeError):
    pass


def sha256(path: Path, chunk_size: int = 4 * 1024 * 1024) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        while True:
            chunk = stream.read(chunk_size)
            if not chunk:
                return digest.hexdigest()
            digest.update(chunk)


def course_root(spec: CourseSpec, video: Path) -> Path:
    return video / spec.family / spec.course


def recording_root(spec: CourseSpec, recording: Path) -> Path:
    return recording / spec.family / spec.course


def format_lesson(number: int, width: int) -> str:
    return f"{number:0{width}d}"


def standard_lesson_name(
    spec: CourseSpec, stem: str, extension: str
) -> Optional[tuple[str, str]]:
    """Restituisce (nome canonico, descrizione lezione)."""

    prefix = re.escape(spec.old_prefix)
    match = re.fullmatch(rf"{prefix}_L(\d+)(.*)", stem, re.IGNORECASE)
    if not match:
        return None

    first = int(match.group(1))
    suffix = match.group(2)

    # In T08 il JNT L00 è la lezione 100: lo prova il timestamp.
    if spec.convention == "am12_08" and extension == ".jnt" and first == 0:
        first = 100

    # Nello stesso corso PDF, AVI e CAMREC della centesima lezione furono
    # denominati L99+1. Per il recupero delle registrazioni lo normalizziamo
    # esplicitamente come L100, senza trattarlo come parte della lezione 99.
    if (
        spec.convention == "am12_08"
        and extension == ".camrec"
        and first == 99
        and suffix == "+1"
    ):
        first = 100
        suffix = ""

    lesson_label = str(first)

    # Nei JNT C07/T07, L01-03 indica un unico file aggregato che copre
    # l'intervallo 1--3. Nei CAMREC il trattino indica invece una parte.
    if extension == ".jnt":
        interval = re.fullmatch(r"-(\d+)", suffix)
        if interval:
            second = int(interval.group(1))
            if first <= second:
                suffix = f"-{format_lesson(second, spec.width)}"
                lesson_label = f"{first}-{second}"

    canonical = (
        f"{spec.course}_L{format_lesson(first, spec.width)}"
        f"{suffix}{extension}"
    )
    return canonical, lesson_label


def pcm_lesson_name(
    spec: CourseSpec, stem: str, extension: str
) -> Optional[tuple[str, str]]:
    if spec.convention == "pcm07":
        match = re.fullmatch(r"(?:PCM|PMC)07_(\d+)(.*)", stem, re.IGNORECASE)
        if not match:
            return None

        number = int(match.group(1))
        raw_suffix = match.group(2).lower()
        suffix = raw_suffix

        # Nel 2007 c'era una sola lezione al giorno. bis/ter e a/b
        # indicano parti successive della stessa registrazione.
        if extension == ".camrec":
            parts = {
                (1, ""): "-1",
                (1, "bis"): "-2",
                (2, ""): "-1",
                (2, "bis"): "-2",
                (2, "ter"): "-3",
                (9, "a"): "-1",
                (9, "b"): "-2",
            }
            if (number, raw_suffix) in parts:
                suffix = parts[(number, raw_suffix)]
            elif raw_suffix:
                return None

        canonical = (
            f"{spec.course}_L{format_lesson(number, spec.width)}"
            f"{suffix}{extension}"
        )
        return canonical, str(number)

    if spec.convention == "pcm08":
        if extension == ".jnt":
            match = re.fullmatch(
                r"(?:PCM|PMC)08_(\d+)-(1|2)", stem, re.IGNORECASE
            )
            if not match:
                return None
            day, slot = map(int, match.groups())
            number = 2 * (day - 1) + slot
            return (
                f"{spec.course}_L{format_lesson(number, spec.width)}{extension}",
                str(number),
            )

        match = re.fullmatch(
            r"(?:(?:PCM|PMC)08_|PCM)(\d+)-(1|2)(\d*)",
            stem,
            re.IGNORECASE,
        )
        if not match:
            return None
        day = int(match.group(1))
        slot = int(match.group(2))
        part_text = match.group(3)
        number = 2 * (day - 1) + slot
        suffix = f"-{int(part_text)}" if part_text else ""
        return (
            f"{spec.course}_L{format_lesson(number, spec.width)}"
            f"{suffix}{extension}",
            str(number),
        )

    # PCM09: cinque giorni, due lezioni al giorno.
    match = re.fullmatch(
        r"(?:PCM|PMC)09_(\d+)-(1|2)", stem, re.IGNORECASE
    )
    if not match:
        return None
    day, slot = map(int, match.groups())
    number = 2 * (day - 1) + slot
    return (
        f"{spec.course}_L{format_lesson(number, spec.width)}{extension}",
        str(number),
    )


def sanna_lesson_name(
    spec: CourseSpec, stem: str, extension: str
) -> Optional[tuple[str, str]]:
    match = re.fullmatch(
        rf"{re.escape(spec.old_prefix)}_(\d+)(.*)", stem, re.IGNORECASE
    )
    if not match:
        return None
    number = int(match.group(1))
    suffix = match.group(2)
    canonical = (
        f"{spec.course}_L{format_lesson(number, spec.width)}"
        f"{suffix}{extension}"
    )
    return canonical, str(number)


def receipt_name(
    spec: CourseSpec, stem: str, extension: str
) -> Optional[str]:
    match = re.fullmatch(
        rf"{re.escape(spec.old_prefix)}_(R.*)", stem, re.IGNORECASE
    )
    if not match:
        return None
    return f"{spec.course}_{match.group(1)}{extension}"


def special_name(
    spec: CourseSpec, stem: str, extension: str
) -> Optional[str]:
    known = {
        ("AM12_08", "T08_Buro", ".camrec"): "AM12_08_Buro.camrec",
        ("PCM_08", "prova", ".camrec"): "PCM_08_prova.camrec",
    }
    return known.get((spec.course, stem, extension))


def make_item(
    source: Path,
    spec: CourseSpec,
    video: Path,
    recording: Path,
) -> Optional[Item]:
    extension = source.suffix.lower()
    stem = source.name[: -len(source.suffix)] if source.suffix else source.name

    # Desktop_.ini e gli AVI/PDF duplicati dei corsi ordinari non fanno parte
    # del recupero. Gli AVI unici di AM12_06 sono invece inclusi.
    if extension not in SOURCE_EXTENSIONS:
        if not (spec.convention == "am12_06" and extension == ".avi"):
            return None

    if (spec.course, stem, extension) in IGNORED_EXACT_DUPLICATES:
        return None

    receipt = receipt_name(spec, stem, extension)
    if receipt:
        if extension == ".jnt":
            destination = (
                course_root(spec, video) / "Ricevimento" / "Jnt" / receipt
            )
        else:
            destination = recording_root(spec, recording) / "Ricevimento" / receipt
        return Item(
            source, destination, spec.course, "ricevimento", extension, "R", source.stat().st_size
        )

    special = special_name(spec, stem, extension)
    if special:
        if extension == ".jnt":
            destination = course_root(spec, video) / "Jnt" / "Speciali" / special
        else:
            destination = recording_root(spec, recording) / "Speciali" / special
        return Item(
            source, destination, spec.course, "speciale", extension, "", source.stat().st_size
        )

    if spec.convention.startswith("pcm"):
        parsed = pcm_lesson_name(spec, stem, extension)
    elif spec.convention == "sanna":
        parsed = sanna_lesson_name(spec, stem, extension)
    else:
        parsed = standard_lesson_name(spec, stem, extension)

    if not parsed:
        raise ManifestError(f"File non classificato: {source}")

    canonical, lesson = parsed
    if extension == ".jnt":
        destination = course_root(spec, video) / "Jnt" / canonical
    elif extension == ".avi":
        destination = course_root(spec, video) / "Avi" / canonical
    else:
        destination = recording_root(spec, recording) / canonical

    return Item(
        source, destination, spec.course, "lezione", extension, lesson, source.stat().st_size
    )


def build_manifest(hd: Path, video: Path, recording: Path) -> list[Item]:
    if not hd.is_dir():
        raise ManifestError(f"Sorgente non trovata: {hd}")

    items: list[Item] = []
    missing_dirs = []

    for spec in COURSES:
        source_dir = hd / spec.source_dir
        if not source_dir.is_dir():
            missing_dirs.append(str(source_dir))
            continue

        for source in sorted(p for p in source_dir.rglob("*") if p.is_file()):
            item = make_item(source, spec, video, recording)
            if item:
                items.append(item)

    if missing_dirs:
        raise ManifestError("Directory sorgente mancanti:\n  " + "\n  ".join(missing_dirs))

    by_destination: dict[Path, list[Path]] = defaultdict(list)
    for item in items:
        by_destination[item.destination].append(item.source)

    duplicated = {
        destination: sources
        for destination, sources in by_destination.items()
        if len(sources) > 1
    }
    if duplicated:
        lines = ["Più sorgenti producono la stessa destinazione:"]
        for destination, sources in sorted(duplicated.items()):
            lines.append(f"  {destination}")
            lines.extend(f"    <- {source}" for source in sources)
        raise ManifestError("\n".join(lines))

    return sorted(items, key=lambda item: (item.course, item.category, str(item.destination)))


def destination_status(item: Item) -> str:
    destination = item.destination
    if not destination.exists():
        return "PRONTO"
    if not destination.is_file():
        return "COLLISIONE"
    if destination.stat().st_size != item.size:
        return "COLLISIONE"
    return "GIA_PRESENTE" if sha256(destination) == sha256(item.source) else "COLLISIONE"


def selected_items(items: Iterable[Item], args: argparse.Namespace) -> list[Item]:
    selected_extensions = set()
    if args.copy_jnt:
        selected_extensions.add(".jnt")
    if args.copy_recording:
        selected_extensions.update({".camrec", ".camproj"})
    if args.copy_am12_06_avi:
        selected_extensions.add(".avi")
    if args.copy_all:
        selected_extensions.update(COPY_EXTENSIONS)

    result = [item for item in items if not args.course or item.course in args.course]
    if selected_extensions:
        result = [item for item in result if item.extension in selected_extensions]
    return result


def write_csv(path: Path, items: Iterable[Item], statuses: dict[Path, str]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="", encoding="utf-8") as stream:
        writer = csv.writer(stream)
        writer.writerow(
            [
                "Corso",
                "Categoria",
                "Lezione",
                "Estensione",
                "Byte",
                "Stato",
                "Sorgente",
                "Destinazione",
            ]
        )
        for item in items:
            writer.writerow(
                [
                    item.course,
                    item.category,
                    item.lesson,
                    item.extension,
                    item.size,
                    statuses[item.destination],
                    item.source,
                    item.destination,
                ]
            )


def human_size(size: int) -> str:
    value = float(size)
    for unit in ("B", "KiB", "MiB", "GiB", "TiB"):
        if value < 1024 or unit == "TiB":
            return f"{value:.2f} {unit}"
        value /= 1024
    raise AssertionError("unreachable")


def print_summary(items: list[Item], statuses: dict[Path, str]) -> None:
    grouped: dict[str, Counter] = defaultdict(Counter)
    sizes: dict[str, int] = defaultdict(int)

    for item in items:
        key = f"{item.category}:{item.extension}"
        grouped[item.course][key] += 1
        sizes[item.course] += item.size

    keys = sorted({key for counter in grouped.values() for key in counter})
    print("Manifest normalizzato")
    print("=====================")
    for course in sorted(grouped):
        details = ", ".join(f"{key}={grouped[course][key]}" for key in keys if grouped[course][key])
        print(f"{course:10s} {details}; totale={human_size(sizes[course])}")

    status_counter = Counter(statuses.values())
    print("\nDestinazioni")
    print("=============")
    for status in ("PRONTO", "GIA_PRESENTE", "COLLISIONE"):
        print(f"{status:14s} {status_counter[status]:5d}")
    print(f"Byte complessivi: {human_size(sum(item.size for item in items))}")


def copy_items(
    items: list[Item], statuses: dict[Path, str], reserve_gib: float
) -> None:
    collisions = [item for item in items if statuses[item.destination] == "COLLISIONE"]
    if collisions:
        lines = ["Copia annullata: destinazioni in collisione:"]
        lines.extend(f"  {item.destination}" for item in collisions)
        raise ManifestError("\n".join(lines))

    ready = [item for item in items if statuses[item.destination] == "PRONTO"]
    required = sum(item.size for item in ready)
    free = shutil.disk_usage(Path.home()).free
    reserve = int(reserve_gib * 1024**3)
    if required + reserve > free:
        raise ManifestError(
            "Spazio locale insufficiente: servono "
            f"{human_size(required)}, liberi {human_size(free)}, "
            f"riserva richiesta {human_size(reserve)}"
        )

    print(f"\nCopia di {len(ready)} file ({human_size(required)})")
    for index, item in enumerate(ready, 1):
        item.destination.parent.mkdir(parents=True, exist_ok=True)
        print(f"[{index:4d}/{len(ready):4d}] {item.destination}")
        shutil.copy2(item.source, item.destination)

        if item.destination.stat().st_size != item.size:
            raise ManifestError(f"Dimensione errata dopo la copia: {item.destination}")
        if sha256(item.source) != sha256(item.destination):
            raise ManifestError(f"Hash errato dopo la copia: {item.destination}")

    print("Copia completata: dimensioni e SHA-256 verificati.")


def self_test() -> None:
    by_course = {spec.course: spec for spec in COURSES}
    tests = [
        (standard_lesson_name(by_course["AM1_09"], "AM09_L054-1", ".camrec"), ("AM1_09_L054-1.camrec", "54")),
        (standard_lesson_name(by_course["AM12_07"], "T07_L01-03", ".jnt"), ("AM12_07_L001-003.jnt", "1-3")),
        (standard_lesson_name(by_course["AM12_08"], "T08_L00", ".jnt"), ("AM12_08_L100.jnt", "100")),
        (standard_lesson_name(by_course["AM12_08"], "T08_L99+1", ".camrec"), ("AM12_08_L100.camrec", "100")),
        (pcm_lesson_name(by_course["PCM_07"], "PMC07_06", ".camrec"), ("PCM_07_L06.camrec", "6")),
        (pcm_lesson_name(by_course["PCM_07"], "PCM07_2ter", ".camrec"), ("PCM_07_L02-3.camrec", "2")),
        (pcm_lesson_name(by_course["PCM_08"], "PCM08_03-1", ".jnt"), ("PCM_08_L05.jnt", "5")),
        (pcm_lesson_name(by_course["PCM_08"], "PCM5-11", ".camrec"), ("PCM_08_L09-1.camrec", "9")),
        (pcm_lesson_name(by_course["PCM_08"], "PCM6-22", ".camrec"), ("PCM_08_L12-2.camrec", "12")),
        (pcm_lesson_name(by_course["PCM_09"], "PCM09_3-2", ".jnt"), ("PCM_09_L06.jnt", "6")),
        (sanna_lesson_name(by_course["SA_10"], "SA10_02", ".jnt"), ("SA_10_L02.jnt", "2")),
        (receipt_name(by_course["AM12_07"], "T07_R05", ".camrec"), "AM12_07_R05.camrec"),
        (("PCM_09", "DisequazioniK", ".jnt") in IGNORED_EXACT_DUPLICATES, True),
        (("PCM_09", "DisequazioniKK", ".jnt") in IGNORED_EXACT_DUPLICATES, True),
    ]
    failures = [(actual, expected) for actual, expected in tests if actual != expected]
    if failures:
        for actual, expected in failures:
            print(f"ERRORE: ottenuto {actual!r}, atteso {expected!r}", file=sys.stderr)
        raise SystemExit(1)
    print(f"Self-test superato: {len(tests)} casi.")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Manifest e recupero sicuro del vecchio HD250-1"
    )
    parser.add_argument("--hd", type=Path, default=DEFAULT_HD, help="radice del vecchio backup")
    parser.add_argument("--video-root", type=Path, default=DEFAULT_VIDEO)
    parser.add_argument("--recording-root", type=Path, default=DEFAULT_RECORDING)
    parser.add_argument("--course", action="append", help="limita a un corso canonico; ripetibile")
    parser.add_argument("--csv", type=Path, help="scrive anche il manifest CSV nel percorso indicato")
    parser.add_argument("--show-files", action="store_true", help="mostra ogni associazione sorgente -> destinazione")
    parser.add_argument("--copy-jnt", action="store_true", help="copia JNT di lezioni, ricevimenti e speciali")
    parser.add_argument("--copy-recording", action="store_true", help="copia CAMREC e CAMPROJ")
    parser.add_argument("--copy-am12-06-avi", action="store_true", help="copia i cinque AVI storici di AM12_06")
    parser.add_argument("--copy-all", action="store_true", help="copia tutte le categorie")
    parser.add_argument("--reserve-gib", type=float, default=20.0, help="spazio locale da lasciare libero (default: 20 GiB)")
    parser.add_argument("--self-test", action="store_true", help="controlla le regole di normalizzazione ed esce")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    if args.self_test:
        self_test()
        return 0

    copy_requested = any(
        (args.copy_jnt, args.copy_recording, args.copy_am12_06_avi, args.copy_all)
    )

    try:
        manifest = build_manifest(args.hd, args.video_root, args.recording_root)
        selected = selected_items(manifest, args)
        statuses = {item.destination: destination_status(item) for item in selected}
        print_summary(selected, statuses)

        if args.show_files:
            print("\nAssociazioni")
            print("============")
            for item in selected:
                print(f"{statuses[item.destination]:14s} {item.source} -> {item.destination}")

        if args.csv:
            write_csv(args.csv, selected, statuses)
            print(f"\nManifest CSV scritto in: {args.csv}")

        if copy_requested:
            copy_items(selected, statuses, args.reserve_gib)
        else:
            print("\nSola lettura: nessun file copiato.")
        return 0
    except ManifestError as error:
        print(f"ERRORE: {error}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
