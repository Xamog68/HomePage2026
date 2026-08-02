#!/usr/bin/env python3

from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import quote
from urllib.request import Request, urlopen
import re

BASE = "https://pagine.dm.unipi.it/gobbino/"
BASE_DOCUMENTI_STORICI = BASE + "Home_Page/Files/HP_AD/"

PATTERN_ARCHIVIO = re.compile(
    r'var\s+ArchivioCorso\s*=\s*["\']([^"\']+)["\']'
)

PATTERN_FILE = re.compile(
    r'\bfile\s*:\s*["\']([^"\']+)["\']',
    re.IGNORECASE,
)

controlli = []

for js in sorted(Path("js/corsi").glob("*.js")):
    testo = js.read_text(encoding="utf-8")

    match_archivio = PATTERN_ARCHIVIO.search(testo)
    archivio = match_archivio.group(1) if match_archivio else None

    for nome in PATTERN_FILE.findall(testo):
        if archivio:
            base_documenti = (
                BASE
                + "ArchivioDidattico/"
                + archivio
                + "/Documenti/"
            )
        else:
            base_documenti = BASE_DOCUMENTI_STORICI

        url = base_documenti + quote(nome, safe="/")
        controlli.append((js.name, archivio, nome, url))

ok = 0
errori = 0
sospetti = 0
righe_report = []

print(f"Collegamenti da controllare: {len(controlli)}")
print()

for numero, (js, archivio, nome, url) in enumerate(controlli, 1):
    sospetto = "/" in nome or ".." in nome

    richiesta = Request(
        url,
        headers={"User-Agent": "HomePage2026-link-checker/2.0"},
        method="GET",
    )

    try:
        with urlopen(richiesta, timeout=30) as risposta:
            stato = risposta.status
            risposta.read(1)

        valido = 200 <= stato < 400

    except HTTPError as exc:
        stato = exc.code
        valido = False

    except URLError as exc:
        stato = f"RETE: {exc.reason}"
        valido = False

    except Exception as exc:
        stato = repr(exc)
        valido = False

    if valido:
        esito = "OK"
        ok += 1
    else:
        esito = "ERRORE"
        errori += 1

    if sospetto:
        etichetta = " SOSPETTO"
        sospetti += 1
    else:
        etichetta = ""

    print(
        f"[{numero:3}/{len(controlli)}] "
        f"{esito:6} {str(stato):>4}{etichetta}  "
        f"{js}: {nome}"
    )

    righe_report.append(
        "\n".join([
            f"{esito}{etichetta}",
            f"JS:       {js}",
            f"Archivio: {archivio or '(storico HP_AD)'}",
            f"File:     {nome}",
            f"URL:      {url}",
            f"HTTP:     {stato}",
            "",
        ])
    )

Path("strumenti/report/report-link-documenti.txt").write_text(
    "\n".join([
        "REPORT DEI COLLEGAMENTI AI DOCUMENTI",
        "====================================",
        "",
        f"Collegamenti controllati: {len(controlli)}",
        f"Validi:                   {ok}",
        f"Errori:                   {errori}",
        f"Percorsi sospetti:        {sospetti}",
        "",
        *righe_report,
    ]),
    encoding="utf-8",
)

print()
print(f"Validi:            {ok}")
print(f"Errori:            {errori}")
print(f"Percorsi sospetti: {sospetti}")
print("Report salvato in report-link-documenti.txt")
