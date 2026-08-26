#!/usr/bin/env python3
"""Corregge i nomi provvisori dei sorgenti PCM_07, PCM_08 e PCM_09.

Il primo recupero interpretava il primo numero dei file PCM08/PCM09 come
numero di lezione, mentre rappresentava il giorno; -1 e -2 erano le due
lezioni della giornata. Questo script confronta ogni copia con il vecchio HD,
mostra il piano corretto e, soltanto con --apply, esegue una rinomina in due
fasi che evita collisioni fra vecchi e nuovi nomi.
"""

from __future__ import annotations

import argparse
import hashlib
import re
import sys
import uuid
from dataclasses import dataclass
from pathlib import Path

import recupera_vecchio_hd as recovery


PCM_COURSES = {"PCM_07", "PCM_08", "PCM_09"}


@dataclass(frozen=True)
class Rename:
    source: Path
    current: Path
    desired: Path


class RenameError(RuntimeError):
    pass


def sha256(path: Path, chunk_size: int = 4 * 1024 * 1024) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        while True:
            chunk = stream.read(chunk_size)
            if not chunk:
                return digest.hexdigest()
            digest.update(chunk)


def legacy_destination(
    item: recovery.Item,
    spec: recovery.CourseSpec,
    video: Path,
    recording: Path,
) -> Path:
    """Destinazione prodotta dalla prima versione dello script."""

    if item.category == "speciale":
        return item.destination

    stem = item.source.name[: -len(item.source.suffix)]
    extension = item.source.suffix.lower()

    if spec.convention == "pcm07":
        match = re.fullmatch(r"(?:PCM|PMC)07_(\d+)(.*)", stem, re.IGNORECASE)
    elif spec.convention == "pcm08":
        if extension == ".jnt":
            match = re.fullmatch(r"(?:PCM|PMC)08_(\d+)(.*)", stem, re.IGNORECASE)
        else:
            match = re.fullmatch(
                r"(?:(?:PCM|PMC)08_|PCM)(\d+)(.*)", stem, re.IGNORECASE
            )
    else:
        match = re.fullmatch(r"(?:PCM|PMC)09_(\d+)(.*)", stem, re.IGNORECASE)

    if not match:
        raise RenameError(f"Nome storico non riconosciuto: {item.source}")

    number = int(match.group(1))
    suffix = match.group(2)
    old_name = (
        f"{spec.course}_L{recovery.format_lesson(number, spec.width)}"
        f"{suffix}{extension}"
    )

    if extension == ".jnt":
        return recovery.course_root(spec, video) / "Jnt" / old_name
    return recovery.recording_root(spec, recording) / old_name


def build_plan(
    hd: Path, video: Path, recording: Path
) -> tuple[list[recovery.Item], list[Rename]]:
    specs = {spec.course: spec for spec in recovery.COURSES}
    manifest = recovery.build_manifest(hd, video, recording)
    items = [item for item in manifest if item.course in PCM_COURSES]
    renames = []

    for item in items:
        spec = specs[item.course]
        current = legacy_destination(item, spec, video, recording)
        if current != item.destination:
            renames.append(Rename(item.source, current, item.destination))

    current_paths = [entry.current for entry in renames]
    desired_paths = [entry.desired for entry in renames]
    if len(current_paths) != len(set(current_paths)):
        raise RenameError("Il piano contiene due sorgenti con lo stesso nome corrente")
    if len(desired_paths) != len(set(desired_paths)):
        raise RenameError("Il piano contiene due file con la stessa destinazione finale")

    return items, sorted(renames, key=lambda entry: str(entry.current))


def preflight(
    items: list[recovery.Item],
    renames: list[Rename],
    video: Path,
    recording: Path,
) -> tuple[list[Rename], dict[Path, str]]:
    specs = {spec.course: spec for spec in recovery.COURSES}
    all_current = {entry.current for entry in renames}
    source_hashes: dict[Path, str] = {}
    active = []

    print("Verifica SHA-256 delle copie correnti...")
    for item in items:
        spec = specs[item.course]
        current = legacy_destination(item, spec, video, recording)
        desired = item.destination
        source_hash = source_hashes.setdefault(item.source, sha256(item.source))

        if current == desired:
            if not current.is_file():
                raise RenameError(f"File atteso non trovato: {current}")
            if sha256(current) != source_hash:
                raise RenameError(f"Copia diversa dalla sorgente: {current}")
            continue

        if current.is_file():
            if sha256(current) != source_hash:
                raise RenameError(f"Copia diversa dalla sorgente: {current}")
            active.append(Rename(item.source, current, desired))
        elif desired.is_file() and sha256(desired) == source_hash:
            # Consente di rilanciare lo script dopo una migrazione completa.
            continue
        else:
            raise RenameError(
                f"Non trovo né la copia provvisoria né quella finale per {item.source}"
            )

        if desired.exists() and desired not in all_current:
            raise RenameError(f"Destinazione finale già occupata: {desired}")

    return active, source_hashes


def rollback(staged: list[tuple[Rename, Path]], placed: list[tuple[Rename, Path]]) -> None:
    for entry, temporary in reversed(placed):
        if entry.desired.exists() and not temporary.exists():
            entry.desired.rename(temporary)
    for entry, temporary in reversed(staged):
        if temporary.exists() and not entry.current.exists():
            temporary.rename(entry.current)


def apply_plan(
    active: list[Rename], source_hashes: dict[Path, str]
) -> None:
    token = uuid.uuid4().hex
    staged: list[tuple[Rename, Path]] = []
    placed: list[tuple[Rename, Path]] = []

    try:
        for index, entry in enumerate(active, 1):
            temporary = entry.current.with_name(
                f"RINOMINA-TEMP-{token}-{index:03d}-{entry.current.name}"
            )
            if temporary.exists():
                raise RenameError(f"Nome temporaneo già occupato: {temporary}")
            entry.current.rename(temporary)
            staged.append((entry, temporary))

        for entry, temporary in staged:
            entry.desired.parent.mkdir(parents=True, exist_ok=True)
            temporary.rename(entry.desired)
            placed.append((entry, temporary))

        print("Verifica SHA-256 delle destinazioni finali...")
        for entry in active:
            if sha256(entry.desired) != source_hashes[entry.source]:
                raise RenameError(f"Hash finale errato: {entry.desired}")
    except Exception:
        rollback(staged, placed)
        raise


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Rinomina sicura dei sorgenti recuperati dei Precorsi"
    )
    parser.add_argument("--hd", type=Path, default=recovery.DEFAULT_HD)
    parser.add_argument("--video-root", type=Path, default=recovery.DEFAULT_VIDEO)
    parser.add_argument(
        "--recording-root", type=Path, default=recovery.DEFAULT_RECORDING
    )
    parser.add_argument(
        "--apply",
        action="store_true",
        help="esegue la rinomina; senza questa opzione opera in sola lettura",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    try:
        items, renames = build_plan(
            args.hd, args.video_root, args.recording_root
        )
        active, source_hashes = preflight(
            items, renames, args.video_root, args.recording_root
        )

        print(f"\nFile PCM verificati: {len(items)}")
        print(f"Rinomine necessarie: {len(active)}")
        for entry in active:
            print(f"  {entry.current} -> {entry.desired}")

        if not args.apply:
            print("\nSola lettura: nessun file rinominato.")
            return 0

        apply_plan(active, source_hashes)
        print(f"\nRinomina completata e verificata: {len(active)} file.")
        return 0
    except (RenameError, recovery.ManifestError) as error:
        print(f"ERRORE: {error}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
