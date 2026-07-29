from pathlib import Path
from datetime import datetime
import re

LEZIONE_RE = re.compile(
    r'Lezioni\[(\d+)\]\s*=\s*\[\s*"([^"]+)"\s*,\s*"([^"]+)"\s*,'
    r'\s*"([^"]+)"\s*,\s*"([^"]+)"'
)

for path in sorted(Path("js/corsi").glob("*.js")):
    lezioni = []

    for numero_riga, riga in enumerate(
        path.read_text(encoding="utf-8").splitlines(),
        start=1
    ):
        match = LEZIONE_RE.search(riga)

        if not match:
            continue

        indice = int(match.group(1))
        numero = match.group(2)
        data = match.group(3)
        inizio = match.group(4)
        fine = match.group(5)

        try:
            t0 = datetime.strptime(inizio, "%H:%M")
            t1 = datetime.strptime(fine, "%H:%M")
            durata = int((t1 - t0).total_seconds() / 60)
        except ValueError:
            durata = None

        lezioni.append({
            "riga": numero_riga,
            "indice": indice,
            "numero": numero,
            "data": data,
            "inizio": inizio,
            "fine": fine,
            "durata": durata,
        })

    problemi = []

    for lezione in lezioni:
        if lezione["durata"] is not None and lezione["durata"] > 60:
            problemi.append(
                f'riga {lezione["riga"]}: lezione {lezione["numero"]}, '
                f'{lezione["data"]}, {lezione["inizio"]}-{lezione["fine"]} '
                f'({lezione["durata"]} minuti)'
            )

    for prima, seconda in zip(lezioni, lezioni[1:]):
        if (
            prima["data"] == seconda["data"]
            and prima["inizio"] == seconda["inizio"]
            and prima["fine"] == seconda["fine"]
        ):
            problemi.append(
                f'righe {prima["riga"]}-{seconda["riga"]}: '
                f'lezioni consecutive {prima["numero"]} e {seconda["numero"]} '
                f'con lo stesso intervallo '
                f'{prima["data"]}, {prima["inizio"]}-{prima["fine"]}'
            )

    if problemi:
        print()
        print("=" * 72)
        print(path)
        print("=" * 72)

        for problema in problemi:
            print("-", problema)
