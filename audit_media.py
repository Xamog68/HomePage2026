#!/usr/bin/env python3

from pathlib import Path
import re
import subprocess

BASE_URL = "https://pagine.dm.unipi.it/gobbino/Tablet/"
CARTELLA_CORSI = Path("js/corsi")


def estrai(pattern, testo):
    match = re.search(pattern, testo)
    return match.group(1) if match else None


def controlla(url):
    risultato = subprocess.run(
        [
            "curl", "-I", "-L", "-s",
            "-o", "/dev/null",
            "-w", "%{http_code} %{content_type}",
            url,
        ],
        capture_output=True,
        text=True,
    )

    if risultato.returncode != 0:
        return "ERR", ""

    parti = risultato.stdout.strip().split(maxsplit=1)
    codice = parti[0] if parti else "ERR"
    tipo = parti[1] if len(parti) > 1 else ""

    return codice, tipo


totale = 0
regolari = 0
anomalie = []

for file_js in sorted(CARTELLA_CORSI.glob("*.js")):
    testo = file_js.read_text(encoding="utf-8")

    percorso = estrai(
        r'Percorso\s*=\s*MEDIA\.lezioni\s*\+\s*"([^"]+)"',
        testo,
    )
    cifre = estrai(
        r'CifreNumeroLezione\s*=\s*(\d+)',
        testo,
    )
    lezioni = [
        int(numero)
        for numero in re.findall(r'Lezioni\[(\d+)\]\s*=', testo)
    ]

    if percorso is None or cifre is None or not lezioni:
        continue

    totale += 1
    numeri = sorted({min(lezioni), max(lezioni)})
    risultati = {}
    problemi = []

    for estensione in ("pdf", "avi"):
        presenti = 0

        for numero in numeri:
            numero_file = str(numero).zfill(int(cifre))
            url = BASE_URL + percorso + numero_file + "." + estensione
            codice, tipo = controlla(url)

            if codice == "200":
                presenti += 1
            else:
                problemi.append(
                    f"  lezione {numero} {estensione.upper()}: "
                    f"{codice} {tipo}\n  {url}"
                )

        risultati[estensione] = presenti

    nome = file_js.stem
    riepilogo = (
        f"{nome:<14} "
        f"PDF {risultati['pdf']}/2   "
        f"AVI {risultati['avi']}/2"
    )

    if problemi:
        print("ATTENZIONE", riepilogo)
        anomalie.append((nome, problemi))
    else:
        print("OK       ", riepilogo)
        regolari += 1

print()
print(f"Corsi controllati: {totale}")
print(f"Completamente regolari: {regolari}")
print(f"Da verificare: {len(anomalie)}")

if anomalie:
    print()
    print("Dettagli delle anomalie:")

    for nome, problemi in anomalie:
        print()
        print(nome)
        for problema in problemi:
            print(problema)
