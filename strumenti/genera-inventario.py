#!/usr/bin/env python3
"""
Genera un inventario dei corsi descritti nei file js/corsi/*.js.

Uso:
    python3 strumenti/genera-inventario.py

Output:
    documentazione/INVENTARIO-CORSI.md

Lo script non esegue JavaScript: legge soltanto le strutture regolari
usate nei file del sito.
"""

from __future__ import annotations

import ast
import re
from dataclasses import dataclass
from pathlib import Path


RADICE = Path(__file__).resolve().parents[1]
CARTELLA_CORSI = RADICE / "js" / "corsi"
FILE_OUTPUT = RADICE / "documentazione" / "INVENTARIO-CORSI.md"


@dataclass
class Corso:
    file: str
    nome: str
    lezioni: int
    video_mancanti: list[str]
    pdf_mancanti: list[str]
    books: list[tuple[str, str]]


def estrai_stringa_variabile(testo: str, nome: str) -> str:
    """
    Estrae una variabile JavaScript assegnata direttamente a una stringa.

    Riconosce sia `var` sia `const` sia `let` e si ferma alla fine
    della stringa, senza oltrepassare la riga successiva.
    """
    modello = (
        rf'^\s*(?:var|const|let)\s+{re.escape(nome)}\s*=\s*'
        rf'(["\'])([^\r\n]*?)\1\s*;'
    )

    risultato = re.search(
        modello,
        testo,
        flags=re.MULTILINE,
    )

    return risultato.group(2).strip() if risultato else ""


def converti_array_js(contenuto: str) -> list:
    """
    Converte un array JavaScript semplice in una lista Python.

    Funziona per numeri, stringhe, null, liste annidate e combinazioni
    di questi elementi. Non esegue codice JavaScript.
    """
    contenuto = re.sub(r"\bnull\b", "None", contenuto)
    contenuto = re.sub(r"\btrue\b", "True", contenuto)
    contenuto = re.sub(r"\bfalse\b", "False", contenuto)

    try:
        valore = ast.literal_eval("[" + contenuto + "]")
    except (SyntaxError, ValueError):
        return []

    return valore if isinstance(valore, list) else []


def trova_blocco_array(testo: str, nome: str) -> str:
    """
    Restituisce il contenuto di un array assegnato a una variabile.

    Cerca forme del tipo:

        const Lezioni = [ ... ];
        var Lezioni = [ ... ];

    Il bilanciamento delle parentesi quadre evita di fermarsi al primo
    `];` eventualmente presente dentro una stringa o un sottoarray.
    """
    inizio = re.search(
        rf'\b(?:var|const|let)\s+{re.escape(nome)}\s*=\s*\[',
        testo,
    )

    if not inizio:
        return ""

    posizione = inizio.end()
    profondita = 1
    virgoletta = None
    escape = False

    for indice in range(posizione, len(testo)):
        carattere = testo[indice]

        if virgoletta is not None:
            if escape:
                escape = False
            elif carattere == "\\":
                escape = True
            elif carattere == virgoletta:
                virgoletta = None

            continue

        if carattere in {"'", '"'}:
            virgoletta = carattere

        elif carattere == "[":
            profondita += 1

        elif carattere == "]":
            profondita -= 1

            if profondita == 0:
                return testo[posizione:indice]

    return ""


def estrai_lezioni_assegnate(testo: str) -> list[list]:
    """
    Estrae tutte le assegnazioni del tipo:

        Lezioni[n] = [ ... ];
    """
    modello = r"Lezioni\s*\[\s*\d+\s*\]\s*=\s*\[(.*?)\]\s*;"
    lezioni = []

    for risultato in re.finditer(
        modello,
        testo,
        flags=re.DOTALL,
    ):
        lezione = converti_array_js(risultato.group(1))

        if lezione:
            lezioni.append(lezione)

    return lezioni


def estrai_lezioni_array(testo: str) -> list[list]:
    """
    Estrae le lezioni dalla forma:

        const Lezioni = [
          null,
          [1, ...],
          [2, ...]
        ];
    """
    blocco = trova_blocco_array(testo, "Lezioni")

    if not blocco:
        return []

    valori = converti_array_js(blocco)

    return [
        valore
        for valore in valori
        if isinstance(valore, list)
    ]


def estrai_lezioni(testo: str) -> list[list]:
    """
    Estrae le lezioni usando entrambe le sintassi ancora presenti
    nell'archivio.

    Il contenuto di ogni lezione usa però sempre lo stesso formato:

        [
          numero,
          data,
          ora_iniziale,
          ora_finale,
          argomento,
          stato_video,
          stato_pdf
        ]
    """
    lezioni = estrai_lezioni_assegnate(testo)

    if lezioni:
        return lezioni

    return estrai_lezioni_array(testo)


def estrai_books(testo: str) -> list[tuple[str, str]]:
    """
    Estrae gli oggetti di DocumentiCorso con `sezione: "book"`.

    Restituisce coppie `(titolo, file)`.
    """
    blocco = trova_blocco_array(testo, "DocumentiCorso")

    if not blocco:
        return []

    books = []

    for oggetto in re.finditer(
        r"\{(.*?)\}",
        blocco,
        flags=re.DOTALL,
    ):
        contenuto = oggetto.group(1)

        sezione = re.search(
            r'\bsezione\s*:\s*(["\'])(.*?)\1',
            contenuto,
            flags=re.DOTALL,
        )

        if not sezione:
            continue

        if sezione.group(2).strip() != "book":
            continue

        file_pdf = re.search(
            r'\bfile\s*:\s*(["\'])(.*?)\1',
            contenuto,
            flags=re.DOTALL,
        )

        titolo = re.search(
            r'\btitolo\s*:\s*(["\'])(.*?)\1',
            contenuto,
            flags=re.DOTALL,
        )

        books.append(
            (
                titolo.group(2).strip() if titolo else "",
                file_pdf.group(2).strip() if file_pdf else "",
            )
        )

    return books


def valore_mancante(
    lezione: list,
    posizione: int,
) -> bool:
    """
    Controlla se una certa posizione della lezione contiene
    il marcatore `m`.
    """
    if len(lezione) <= posizione:
        return False

    return (
        str(lezione[posizione])
        .strip()
        .lower()
        == "m"
    )


def analizza_file(percorso: Path) -> Corso:
    """
    Analizza un singolo file JavaScript del corso.
    """
    testo = percorso.read_text(encoding="utf-8")
    lezioni = estrai_lezioni(testo)

    video_mancanti = []
    pdf_mancanti = []

    for lezione in lezioni:
        if not lezione:
            continue

        numero = str(lezione[0])

        if valore_mancante(lezione, 5):
            video_mancanti.append(numero)

        if valore_mancante(lezione, 6):
            pdf_mancanti.append(numero)

    nome = (
        estrai_stringa_variabile(testo, "TitoloCorso")
        or estrai_stringa_variabile(testo, "NomeCorso")
        or percorso.stem
    )

    return Corso(
        file=percorso.name,
        nome=nome,
        lezioni=len(lezioni),
        video_mancanti=video_mancanti,
        pdf_mancanti=pdf_mancanti,
        books=estrai_books(testo),
    )


def elenco_o_trattino(valori: list[str]) -> str:
    """
    Restituisce un elenco separato da virgole oppure un trattino.
    """
    return ", ".join(valori) if valori else "—"


def descrivi_books(
    books: list[tuple[str, str]],
) -> str:
    """
    Produce il testo Markdown della colonna relativa ai book.
    """
    if not books:
        return "—"

    risultati = []

    for titolo, file_pdf in books:
        if titolo and file_pdf:
            risultati.append(
                f"`{file_pdf}` ({titolo})"
            )

        elif file_pdf:
            risultati.append(
                f"`{file_pdf}`"
            )

        else:
            risultati.append(
                titolo or "book senza nome"
            )

    return "<br>".join(risultati)


def genera_markdown(corsi: list[Corso]) -> str:
    """
    Genera il contenuto del file Markdown finale.
    """
    righe = [
        "# Inventario dei corsi",
        "",
        "<!-- File generato automaticamente da strumenti/genera-inventario.py -->",
        "",
        (
            "| File JS | Corso | Lezioni | Video mancanti | "
            "PDF mancanti | Book | Indice cliccabile |"
        ),
        "|---|---|---:|---|---|---|---|",
    ]

    for corso in corsi:
        righe.append(
            "| "
            + " | ".join(
                [
                    f"`{corso.file}`",
                    corso.nome.replace("|", r"\|"),
                    str(corso.lezioni),
                    elenco_o_trattino(
                        corso.video_mancanti
                    ),
                    elenco_o_trattino(
                        corso.pdf_mancanti
                    ),
                    descrivi_books(
                        corso.books
                    ).replace("|", r"\|"),
                    (
                        "da verificare"
                        if corso.books
                        else "—"
                    ),
                ]
            )
            + " |"
        )

    righe.extend(
        [
            "",
            "## Note",
            "",
            (
                "- Ogni lezione usa il formato "
                "`[numero, data, ora iniziale, ora finale, argomento, "
                "stato video, stato PDF]`: il marcatore `\"m\"` "
                "in posizione 5 indica il video mancante e quello "
                "in posizione 6 il PDF mancante."
            ),
            (
                "- La colonna **Indice cliccabile** richiede "
                "l’analisi diretta del PDF del book e, per ora, "
                "non viene determinata automaticamente."
            ),
            "",
        ]
    )

    return "\n".join(righe)


def main() -> None:
    """
    Analizza tutti i file dei corsi e scrive l'inventario.
    """
    if not CARTELLA_CORSI.is_dir():
        raise SystemExit(
            f"Cartella non trovata: {CARTELLA_CORSI}"
        )

    percorsi = sorted(
        CARTELLA_CORSI.glob("*.js")
    )

    corsi = [
        analizza_file(percorso)
        for percorso in percorsi
    ]

    FILE_OUTPUT.parent.mkdir(
        parents=True,
        exist_ok=True,
    )

    FILE_OUTPUT.write_text(
        genera_markdown(corsi),
        encoding="utf-8",
    )

    print(
        f"Analizzati {len(corsi)} file."
    )

    print(
        f"Creato {FILE_OUTPUT.relative_to(RADICE)}"
    )


if __name__ == "__main__":
    main()
