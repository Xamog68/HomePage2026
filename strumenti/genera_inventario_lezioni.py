#!/usr/bin/env python3

from pathlib import Path
from collections import Counter
import csv
import re
import sys


# ============================================================
# Percorsi
# ============================================================

HOME = Path(__file__).resolve().parent.parent

CORSI = (
    Path.home()
    / "OneDrive - University of Pisa"
    / "VideoLezioni"
    / "Corsi_Universitari"
)

REC = (
    Path.home()
    / "OneDrive - University of Pisa"
    / "Recording_Originali"
    / "Lezioni_Universitarie"
)

JS = HOME / "js" / "corsi"

OUT = HOME / "documentazione" / "INVENTARIO-LEZIONI.csv"


# ============================================================
# Corsi
# ============================================================

# Nome del file JS -> (famiglia, nome canonico del corso)

CORSI_JS = {
    "AL_14": ("AL", "AL_14"),
    "AL_15": ("AL", "AL_15"),
    "AL_19": ("AL", "AL_19"),
    "AL_22": ("AL", "AL_22"),
    "AL_23": ("AL", "AL_23"),
    "AL_24": ("AL", "AL_24"),

    "AM12_07": ("AM12", "AM12_07"),
    "AM12_08": ("AM12", "AM12_08"),

    "AM1_09": ("AM1", "AM1_09"),
    "AM1_10": ("AM1", "AM1_10"),
    "AM1_11": ("AM1", "AM1_11"),
    "AM1_12": ("AM1", "AM1_12"),
    "AM1_13": ("AM1", "AM1_13"),
    "AM1_15": ("AM1", "AM1_15"),
    "AM1_17": ("AM1", "AM1_17"),
    "AM1_25": ("AM1", "AM1_25"),
    "AM1_26": ("AM1", "AM1_26"),

    "AM2_07": ("AM2", "AM2_07"),
    "AM2_14": ("AM2", "AM2_14"),
    "AM2_16": ("AM2", "AM2_16"),
    "AM2_18": ("AM2", "AM2_18"),
    "AM2_20": ("AM2", "AM2_20"),
    "AM2_21": ("AM2", "AM2_21"),
    "AM2_23": ("AM2", "AM2_23"),
    "AM2_24": ("AM2", "AM2_24"),

    "CdV_16": ("CdV", "CdV_16"),
    "CdV_17": ("CdV", "CdV_17"),
    "CdV_18": ("CdV", "CdV_18"),

    "Freiberg_17": ("Freiberg", "Freiberg_17"),

    "IstAM_19": ("IstAM", "IstAM_19"),
    "IstAM_20": ("IstAM", "IstAM_20"),
    "IstAM_21": ("IstAM", "IstAM_21"),
    "IstAM_22": ("IstAM", "IstAM_22"),

    "PCM_07": ("Precorsi", "PCM_07"),
    "PCM_08": ("Precorsi", "PCM_08"),
    "PCM_09": ("Precorsi", "PCM_09"),
    "PCM_25": ("Precorsi", "PCM_25"),

    "SAnna_10": ("SAnna", "SA_10"),
    "SAnna_11": ("SAnna", "SA_11"),
    "SAnna_12": ("SAnna", "SA_12"),
    "SAnna_13": ("SAnna", "SA_13"),
    "SAnna_14": ("SAnna", "SA_14"),
    "SAnna_15": ("SAnna", "SA_15"),
}


# ============================================================
# Certezze storiche particolari
# ============================================================

# In questi casi sappiamo che non esiste alcun materiale
# digitale della lezione.

TUTTO_NO = {
    ("AM1_25", 2),
    ("AM1_25", 3),

    ("AM12_07", 60),
    ("AM12_07", 61),
}


# AM2_21 è un corso PDF-only.
# Le 60 lezioni esistono, ma non furono prodotti AVI, JNT
# o recording originali.

AM2_21_PDF_ONLY = set(range(1, 61))


# ============================================================
# Funzioni
# ============================================================

def errore(msg):
    print(f"ERRORE: {msg}", file=sys.stderr)
    sys.exit(1)


def controlla_radici():
    for nome, path in [
        ("Corsi_Universitari", CORSI),
        ("Recording_Originali/Lezioni_Universitarie", REC),
        ("js/corsi", JS),
    ]:
        if not path.is_dir():
            errore(f"{nome} non trovato: {path}")


def dati_da_js(path):
    """
    Restituisce:
        lezioni = insieme dei numeri di lezione
        missing = insieme delle lezioni storicamente marcate 'm'

    Vengono considerate solo le assegnazioni Lezioni[n] = [...].
    Ricevimenti, compitini e altre strutture non entrano.
    """

    text = path.read_text(encoding="utf-8", errors="replace")

    lezioni = set()
    missing = set()

    rx = re.compile(
        r"\bLezioni\s*\[\s*(\d+)\s*\]\s*=\s*\[(.*?)\]\s*;",
        re.S
    )

    for m in rx.finditer(text):
        n = int(m.group(1))
        contenuto = m.group(2)

        if n <= 0:
            continue

        lezioni.add(n)

        # Qualunque "m" nella definizione della lezione indica
        # un missing documentato storicamente nel sito.
        if re.search(r'["\']m["\']', contenuto):
            missing.add(n)

    return lezioni, missing


def files_per_lesson(folder, course, ext):
    """
    Restituisce:
        {numero_lezione: [nomi_file]}

    Riconosce ad esempio:

        Corso_L01.pdf
        Corso_L001.pdf
        Corso_L20bis.pdf
        Corso_L36-bis.jnt
        Corso_L51-old.jnt

    Una variante rimane associata alla lezione principale.

    Esclude raccolte del tipo:

        Corso_L01-03.pdf
    """

    ans = {}

    if not folder.is_dir():
        return ans

    rx = re.compile(
        rf"^{re.escape(course)}_L(\d+)([^0-9].*)?\.{re.escape(ext)}$",
        re.I
    )

    for f in folder.iterdir():
        if not f.is_file():
            continue

        m = rx.match(f.name)

        if not m:
            continue

        n = int(m.group(1))
        suffix = m.group(2) or ""

        # L01-03 è una raccolta, non una variante di L01.
        if re.match(r"^-\d", suffix):
            continue

        ans.setdefault(n, []).append(f.name)

    return ans


def stato(tipo, corso, n, presenti, missing_storico):
    """
    SI = il materiale è presente.

    NO = sappiamo positivamente che non esiste:
         - casi esplicitamente confermati;
         - lezione storicamente marcata missing nel JS;
         - AM2_21 per AVI/JNT/recording.

    ?  = non lo possediamo, ma potrebbe essere recuperabile.

    -- = CAMPROJ non presente e non necessario/documentato.
    """

    if presenti:
        return "SI"

    if (corso, n) in TUTTO_NO:
        return "NO"

    if corso == "AM2_21" and n in AM2_21_PDF_ONLY:
        if tipo in {"AVI", "JNT", "CAMREC", "CAMPROJ"}:
            return "NO"

    # Regola concordata:
    # se la lezione è già storicamente missing, tutto ciò
    # che manca oggi viene considerato NO certo.
    if missing_storico:
        return "NO"

    if tipo == "CAMPROJ":
        return "--"

    return "?"


def varianti(tipo, corso, n, nomi):
    """
    Produce una nota solo quando il nome è una variante
    oppure esistono più file associati alla stessa lezione.
    """

    if not nomi:
        return None

    nomi = sorted(nomi)

    if len(nomi) > 1:
        return f"{tipo}: " + ", ".join(nomi)

    stem = Path(nomi[0]).stem

    m = re.match(
        rf"^{re.escape(corso)}_L0*{n}(.*)$",
        stem
    )

    if m and m.group(1):
        return f"{tipo}: {nomi[0]}"

    return None


# ============================================================
# Generazione
# ============================================================

def main():
    controlla_radici()

    rows = []

    for jsstem, (famiglia, corso) in CORSI_JS.items():

        jsfile = JS / f"{jsstem}.js"

        if not jsfile.is_file():
            errore(f"JS non trovato: {jsfile}")

        lezioni, missing_js = dati_da_js(jsfile)

        if not lezioni:
            errore(f"Nessuna lezione trovata in {jsfile}")

        cdir = CORSI / famiglia / corso
        rdir = REC / famiglia / corso

        if not cdir.is_dir():
            errore(f"Cartella corso non trovata: {cdir}")

        if not rdir.is_dir():
            errore(f"Placeholder recording non trovato: {rdir}")

        pdf = files_per_lesson(cdir / "Pdf", corso, "pdf")
        avi = files_per_lesson(cdir / "Avi", corso, "avi")
        jnt = files_per_lesson(cdir / "Jnt", corso, "jnt")

        camrec = files_per_lesson(rdir, corso, "camrec")
        camproj = files_per_lesson(rdir, corso, "camproj")

        for n in sorted(lezioni):

            missing_storico = n in missing_js
            note = []

            for tipo, d in [
                ("PDF", pdf),
                ("AVI", avi),
                ("JNT", jnt),
                ("CAMREC", camrec),
                ("CAMPROJ", camproj),
            ]:
                nota = varianti(tipo, corso, n, d.get(n, []))

                if nota:
                    note.append(nota)

            if (corso, n) in {
                ("AM1_25", 2),
                ("AM1_25", 3),
            }:
                note.append(
                    "Lezione svolta alla lavagna per problemi tecnici; "
                    "nessun materiale digitale prodotto"
                )

            elif (corso, n) in {
                ("AM12_07", 60),
                ("AM12_07", 61),
            }:
                note.append(
                    "Missing storico confermato; "
                    "nessun materiale digitale disponibile"
                )

            elif corso == "AM2_21":
                note.append(
                    "Corso PDF-only; AVI, JNT e recording non prodotti"
                )

            elif missing_storico:
                note.append(
                    "Missing storico documentato nel JS del corso"
                )

            rows.append([
                famiglia,
                corso,
                n,

                stato(
                    "PDF",
                    corso,
                    n,
                    pdf.get(n),
                    missing_storico
                ),

                stato(
                    "AVI",
                    corso,
                    n,
                    avi.get(n),
                    missing_storico
                ),

                stato(
                    "JNT",
                    corso,
                    n,
                    jnt.get(n),
                    missing_storico
                ),

                stato(
                    "CAMREC",
                    corso,
                    n,
                    camrec.get(n),
                    missing_storico
                ),

                stato(
                    "CAMPROJ",
                    corso,
                    n,
                    camproj.get(n),
                    missing_storico
                ),

                "; ".join(note),
            ])

    OUT.parent.mkdir(parents=True, exist_ok=True)

    with OUT.open(
        "w",
        newline="",
        encoding="utf-8-sig"
    ) as f:

        w = csv.writer(f)

        w.writerow([
            "Famiglia",
            "Corso",
            "Lezione",
            "PDF",
            "AVI",
            "JNT",
            "CAMREC",
            "CAMPROJ",
            "Note",
        ])

        w.writerows(rows)

    print()
    print(f"Creato: {OUT}")
    print(f"Lezioni censite: {len(rows)}")
    print(f"Corsi censiti:   {len(set(r[1] for r in rows))}")
    print()

    for col, nome in [
        (3, "PDF"),
        (4, "AVI"),
        (5, "JNT"),
        (6, "CAMREC"),
        (7, "CAMPROJ"),
    ]:

        c = Counter(r[col] for r in rows)

        parti = []

        for valore in ["SI", "NO", "?", "--"]:
            if c[valore]:
                parti.append(f"{valore}={c[valore]:4d}")

        print(f"{nome:7s} " + "   ".join(parti))

    print()


if __name__ == "__main__":
    main()
