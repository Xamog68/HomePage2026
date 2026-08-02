#!/usr/bin/env python3

from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen
import ast
import re

BASE = "https://pagine.dm.unipi.it/gobbino/ArchivioDidattico/"

pattern_archivio = re.compile(
    r'var\s+ArchivioCorso\s*=\s*["\']([^"\']+)["\']'
)

pattern_prefisso = re.compile(
    r'var\s+PrefissoFile\s*=\s*["\']([^"\']+)["\']'
)

pattern_cifre = re.compile(
    r'var\s+CifreNumeroLezione\s*=\s*(\d+)'
)

pattern_lezione = re.compile(
    r'Lezioni\[(\d+)\]\s*=\s*(\[[^\n;]*\])\s*;'
)

controlli = []
mancanti = []

for js in sorted(Path("js/corsi").glob("*.js")):
    testo = js.read_text(encoding="utf-8")

    m_archivio = pattern_archivio.search(testo)
    m_prefisso = pattern_prefisso.search(testo)

    if not m_archivio or not m_prefisso:
        continue

    archivio = m_archivio.group(1)
    prefisso = m_prefisso.group(1)

    m_cifre = pattern_cifre.search(testo)
    cifre = int(m_cifre.group(1)) if m_cifre else 3

    lezioni = []

    for match in pattern_lezione.finditer(testo):
        indice = int(match.group(1))
        contenuto = match.group(2)

        try:
            dati = ast.literal_eval(contenuto)
        except Exception as exc:
            print(f"IGNORATA {js.name}, lezione {indice}: {exc}")
            continue

        avi_mancante = len(dati) > 5 and dati[5] == "m"
        pdf_mancante = len(dati) > 6 and dati[6] == "m"

        if avi_mancante:
            mancanti.append((js.name, indice, "AVI"))

        if pdf_mancante:
            mancanti.append((js.name, indice, "PDF"))

        lezioni.append(
            {
                "indice": indice,
                "avi": not avi_mancante,
                "pdf": not pdf_mancante,
            }
        )

    if not lezioni:
        continue

    avi_disponibili = [x["indice"] for x in lezioni if x["avi"]]
    pdf_disponibili = [x["indice"] for x in lezioni if x["pdf"]]

    campioni = []

    if avi_disponibili:
        campioni.append(("Avi", "avi", avi_disponibili[0], "primo"))
        campioni.append(("Avi", "avi", avi_disponibili[-1], "ultimo"))

    if pdf_disponibili:
        campioni.append(("Pdf", "pdf", pdf_disponibili[0], "primo"))
        campioni.append(("Pdf", "pdf", pdf_disponibili[-1], "ultimo"))

    gia_visti = set()

    for cartella, estensione, indice, posizione in campioni:
        nome = f"{prefisso}{indice:0{cifre}d}.{estensione}"
        url = f"{BASE}{archivio}/{cartella}/{nome}"

        if url in gia_visti:
            continue

        gia_visti.add(url)

        controlli.append(
            {
                "js": js.name,
                "formato": estensione.upper(),
                "posizione": posizione,
                "lezione": indice,
                "url": url,
            }
        )

print(f"Campioni da controllare: {len(controlli)}")
print()

risultati = []

for numero, elemento in enumerate(controlli, 1):
    richiesta = Request(
        elemento["url"],
        headers={
            "User-Agent": "HomePage2026-link-checker/1.0",
            "Range": "bytes=0-0",
        },
        method="GET",
    )

    stato = "-"
    ok = False
    dettaglio = ""

    try:
        with urlopen(richiesta, timeout=30) as risposta:
            stato = risposta.status
            risposta.read(1)
            ok = stato in (200, 206) or 200 <= stato < 400

    except HTTPError as exc:
        stato = exc.code
        dettaglio = str(exc.reason)

    except URLError as exc:
        dettaglio = str(exc.reason)

    except Exception as exc:
        dettaglio = repr(exc)

    risultati.append((elemento, stato, ok, dettaglio))

    print(
        f"[{numero:3}/{len(controlli)}] "
        f"{'OK' if ok else 'ERRORE':6} "
        f"{str(stato):>4}  "
        f"{elemento['js']}  "
        f"{elemento['formato']} {elemento['posizione']} "
        f"(lezione {elemento['lezione']})"
    )

errori = [r for r in risultati if not r[2]]

righe = [
    "REPORT DI VERIFICA DELLE LEZIONI",
    "=================================",
    "",
    f"Campioni controllati: {len(risultati)}",
    f"Campioni validi:      {len(risultati) - len(errori)}",
    f"Campioni con errore:  {len(errori)}",
    f"File dichiarati mancanti nei JS: {len(mancanti)}",
    "",
    "ERRORI",
    "-------",
    "",
]

if not errori:
    righe.append("Nessun errore.")
else:
    for elemento, stato, ok, dettaglio in errori:
        righe.extend(
            [
                (
                    f"{elemento['js']} - "
                    f"{elemento['formato']} {elemento['posizione']} "
                    f"(lezione {elemento['lezione']})"
                ),
                f"HTTP: {stato}",
                f"URL:  {elemento['url']}",
                f"Dettaglio: {dettaglio}" if dettaglio else "",
                "",
            ]
        )

righe.extend(
    [
        "",
        "FILE DICHIARATI MANCANTI",
        "-------------------------",
        "",
    ]
)

if not mancanti:
    righe.append("Nessun file dichiarato mancante.")
else:
    for js, lezione, formato in mancanti:
        righe.append(
            f"{js}: lezione {lezione}, {formato} mancante"
        )

Path("strumenti/report/report-link-lezioni.txt").write_text(
    "\n".join(righe) + "\n",
    encoding="utf-8",
)

print()
print(f"Validi:   {len(risultati) - len(errori)}")
print(f"Errori:   {len(errori)}")
print(f"Mancanti dichiarati nei JS: {len(mancanti)}")
print("Report salvato in report-link-lezioni.txt")
