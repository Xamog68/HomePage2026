#!/usr/bin/env python3

from pathlib import Path
from collections import Counter
import argparse
import csv
import re
import sys
import tempfile


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


# Casi nei quali il recupero dal vecchio HD ha smentito l'assenza
# delle sorgenti dedotta in precedenza dal flag storico "m" del sito.

RECUPERI_MISSING_STORICO = {
    ("AM1_10", 47): ("JNT",),
    ("AM1_12", 46): ("JNT",),
    ("PCM_08", 5): ("JNT",),
    ("PCM_09", 3): ("JNT", "CAMREC"),
    ("SA_11", 20): ("JNT",),
}


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


def files_per_lesson(
    folder,
    course,
    ext,
    intervalli=False,
    parti_numeriche=False,
):
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

    Se ``intervalli`` e' vero, una raccolta del tipo:

        Corso_L01-03.jnt

    viene associata a tutte le lezioni comprese tra 1 e 3. Negli altri
    casi gli intervalli restano esclusi, per non scambiare una raccolta
    PDF/AVI per il materiale individuale di ciascuna lezione.

    Se ``parti_numeriche`` e' vero, un suffisso come ``-1`` viene invece
    mantenuto come parte della stessa lezione. Questa e' la convenzione
    usata dai CAMREC spezzati.
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

        intervallo = re.fullmatch(r"-(\d+)", suffix)

        if intervallo:
            if parti_numeriche:
                ans.setdefault(n, []).append(f.name)
                continue

            if not intervalli:
                continue

            ultimo = int(intervallo.group(1))

            if ultimo < n:
                continue

            for k in range(n, ultimo + 1):
                ans.setdefault(k, []).append(f.name)

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

    intervallo = re.match(
        rf"^{re.escape(corso)}_L(\d+)-(\d+)$",
        stem,
        re.I,
    )

    if intervallo:
        primo, ultimo = map(int, intervallo.groups())

        if primo <= n <= ultimo:
            return f"{tipo} aggregato: {nomi[0]}"

    m = re.match(
        rf"^{re.escape(corso)}_L0*{n}(.*)$",
        stem
    )

    if m and m.group(1):
        return f"{tipo}: {nomi[0]}"

    return None


def riepilogo(rows):
    print(f"Lezioni censite: {len(rows)}")
    print(f"Corsi censiti:   {len(set(r[1] for r in rows))}")
    print()

    for col, nome in [(5, "JNT"), (6, "CAMREC")]:
        incerti = {}

        for r in rows:
            if r[col] == "?":
                incerti.setdefault(r[1], []).append(r[2])

        print(f"{nome} ancora incerti: {sum(map(len, incerti.values()))}")

        for corso, lezioni in sorted(incerti.items()):
            dettaglio = ""

            if len(lezioni) <= 10:
                dettaglio = "  [" + ", ".join(
                    f"L{int(n):03d}" for n in lezioni
                ) + "]"

            print(f"  {corso:10s} {len(lezioni):4d}{dettaglio}")

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


def leggi_csv(path):
    with path.open(encoding="utf-8-sig", newline="") as f:
        return list(csv.DictReader(f))


def confronta(rows, precedente):
    """Confronta il nuovo inventario con quello canonico corrente."""

    colonne = [
        "Famiglia",
        "Corso",
        "Lezione",
        "PDF",
        "AVI",
        "JNT",
        "CAMREC",
        "CAMPROJ",
        "Note",
    ]
    nuovi = [dict(zip(colonne, map(str, r))) for r in rows]

    def indicizza(righe):
        return {
            (r["Corso"], int(r["Lezione"])): r
            for r in righe
        }

    prima = indicizza(precedente)
    dopo = indicizza(nuovi)

    if set(prima) != set(dopo):
        mancanti = sorted(set(prima) - set(dopo))
        aggiunte = sorted(set(dopo) - set(prima))
        errore(
            "L'universo delle lezioni e' cambiato: "
            f"mancanti={mancanti[:10]}, aggiunte={aggiunte[:10]}"
        )

    transizioni = Counter()
    modifiche = []

    for chiave in sorted(prima):
        vecchia = prima[chiave]
        nuova = dopo[chiave]

        for campo in ["PDF", "AVI", "JNT", "CAMREC", "CAMPROJ"]:
            if vecchia[campo] != nuova[campo]:
                transizioni[(campo, vecchia[campo], nuova[campo])] += 1
                modifiche.append(
                    (chiave[0], chiave[1], campo,
                     vecchia[campo], nuova[campo])
                )

    vietate = [
        m for m in modifiche
        if m[2] in {"PDF", "AVI"}
        or m[4] != "SI"
        or m[3] == "SI"
    ]

    if vietate:
        esempi = ", ".join(
            f"{c} L{n}: {t} {a}->{b}"
            for c, n, t, a, b in vietate[:10]
        )
        errore(
            "Il confronto contiene cambiamenti non autorizzati: " + esempi
        )

    print("Confronto con l'inventario corrente")
    print("====================================")

    if not transizioni:
        print("Nessun cambiamento di stato.")
    else:
        for (campo, prima_stato, dopo_stato), numero in sorted(
            transizioni.items()
        ):
            print(
                f"{campo:7s} {prima_stato:>2s} -> "
                f"{dopo_stato:2s}: {numero:4d}"
            )

    print()


def scrivi_csv(path, rows):
    path.parent.mkdir(parents=True, exist_ok=True)

    with path.open("w", newline="", encoding="utf-8-sig") as f:
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


def self_test():
    with tempfile.TemporaryDirectory() as tmp:
        d = Path(tmp)
        nomi = [
            "AM12_07_L001-003.jnt",
            "AM12_07_L004.jnt",
            "AM12_07_L005-bis.jnt",
            "AM12_07_L054-1.camrec",
        ]

        for nome in nomi:
            (d / nome).touch()

        trovati = files_per_lesson(
            d, "AM12_07", "jnt", intervalli=True
        )

        assert trovati == {
            1: ["AM12_07_L001-003.jnt"],
            2: ["AM12_07_L001-003.jnt"],
            3: ["AM12_07_L001-003.jnt"],
            4: ["AM12_07_L004.jnt"],
            5: ["AM12_07_L005-bis.jnt"],
        }
        assert varianti(
            "JNT", "AM12_07", 2,
            ["AM12_07_L001-003.jnt"],
        ) == "JNT aggregato: AM12_07_L001-003.jnt"

        registrazioni = files_per_lesson(
            d,
            "AM12_07",
            "camrec",
            parti_numeriche=True,
        )
        assert registrazioni == {
            54: ["AM12_07_L054-1.camrec"],
        }

    print(
        "Self-test superato: intervalli JNT e CAMREC spezzati "
        "riconosciuti."
    )


# ============================================================
# Generazione
# ============================================================

def genera_rows():
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
        jnt = files_per_lesson(
            cdir / "Jnt", corso, "jnt", intervalli=True
        )

        camrec = files_per_lesson(
            rdir, corso, "camrec", parti_numeriche=True
        )
        camproj = files_per_lesson(
            rdir, corso, "camproj", parti_numeriche=True
        )

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
                sorgenti_recuperate = RECUPERI_MISSING_STORICO.get(
                    (corso, n)
                )

                if sorgenti_recuperate:
                    note.append(
                        "Missing storico documentato nel JS; "
                        "sorgenti recuperate dal vecchio HD: "
                        + ", ".join(sorgenti_recuperate)
                    )
                else:
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

    return rows


def main():
    parser = argparse.ArgumentParser(
        description="Genera e verifica l'inventario canonico delle lezioni."
    )
    gruppo = parser.add_mutually_exclusive_group(required=True)
    gruppo.add_argument(
        "--preview",
        action="store_true",
        help="scrive in /tmp e confronta, senza modificare l'inventario",
    )
    gruppo.add_argument(
        "--apply",
        action="store_true",
        help="sostituisce l'inventario solo dopo i controlli",
    )
    gruppo.add_argument(
        "--self-test",
        action="store_true",
        help="esegue i test interni senza accedere agli archivi",
    )
    args = parser.parse_args()

    if args.self_test:
        self_test()
        return

    if not OUT.is_file():
        errore(f"Inventario corrente non trovato: {OUT}")

    precedente = leggi_csv(OUT)
    rows = genera_rows()

    print()
    riepilogo(rows)
    confronta(rows, precedente)

    if args.preview:
        destinazione = Path(tempfile.gettempdir()) / OUT.name
        scrivi_csv(destinazione, rows)
        print(f"Anteprima scritta in: {destinazione}")
        print("Inventario canonico non modificato.")
        return

    with tempfile.NamedTemporaryFile(
        mode="w",
        prefix=f".{OUT.name}.",
        suffix=".tmp",
        dir=OUT.parent,
        delete=False,
    ) as tmp:
        temporaneo = Path(tmp.name)

    try:
        scrivi_csv(temporaneo, rows)
        temporaneo.replace(OUT)
    except Exception:
        temporaneo.unlink(missing_ok=True)
        raise

    print(f"Inventario aggiornato: {OUT}")


if __name__ == "__main__":
    main()
