function registraDownload(formato, numeroLezione) {
  gtag("event", "download_lezione", {
    corso: NomeCorso,
    formato: formato,
    lezione: numeroLezione
  });
}

function generaSchedaCorso() {
  if (typeof SchedaCorso === "undefined") {
    return;
  }

  const contenitore = document.getElementById("scheda-corso");
  const avviso = document.getElementById("avviso-corso");

  if (!contenitore) {
    return;
  }

  const righe = [
    ["Nome corso", SchedaCorso.nome],
    ["Anno Accademico", SchedaCorso.annoAccademico],
    ["Crediti", SchedaCorso.crediti],
    ["Ore di lezione", SchedaCorso.ore],
    ["Target", SchedaCorso.target],
    ["Anno", SchedaCorso.anno],
    ["Periodo", SchedaCorso.periodo]
  ];

  for (const [etichetta, valore] of righe) {
    const riga = document.createElement("tr");
    const intestazione = document.createElement("th");
    const cella = document.createElement("td");

    intestazione.textContent = etichetta;
    cella.textContent = valore;

    riga.appendChild(intestazione);
    riga.appendChild(cella);
    contenitore.appendChild(riga);
  }

  if (avviso && SchedaCorso.avviso) {
    avviso.innerHTML =
      "<strong>Achtung!</strong> " + SchedaCorso.avviso;
  }
}

function generaDocumentiCorso() {
  if (typeof DocumentiCorso === "undefined") {
    return;
  }

  for (const documento of DocumentiCorso) {
    const contenitore = document.getElementById(
      "documenti-" + documento.sezione
    );

    if (!contenitore) {
      continue;
    }

    const riga = document.createElement("tr");
    const cella = document.createElement("td");
    const link = document.createElement("a");

    link.href = MEDIA.documenti + documento.file;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = documento.titolo;

    link.addEventListener("click", function () {
      gtag("event", "download_documento", {
        corso: NomeCorso,
        file: documento.file,
        titolo: documento.titolo
      });
    });

    cella.appendChild(link);

    if (documento.nota) {
      cella.append(" (" + documento.nota + ")");
    }

    riga.appendChild(cella);
    contenitore.appendChild(riga);
  }
}

function generaTabellaLezioni() {
  const corpoTabella = document.getElementById("tabella-lezioni");

  if (!corpoTabella) {
    console.error(
      'Impossibile generare la tabella: manca l’elemento con id="tabella-lezioni".'
    );
    return;
  }

  for (let i = 1; i < Lezioni.length; i++) {
    if (!Lezioni[i]) {
      continue;
    }

    const numeroOra = Lezioni[i][0];
    const numeroOraMod = String(numeroOra).padStart(3, "0");

    const indirizzoAvi = Percorso + numeroOraMod + ".avi";
    const indirizzoPdf = Percorso + numeroOraMod + ".pdf";

    const riga = document.createElement("tr");

    const cellaNumero = document.createElement("td");
    cellaNumero.textContent = Lezioni[i][0];

    const cellaData = document.createElement("td");
    cellaData.textContent = Lezioni[i][1];

    const cellaOraInizio = document.createElement("td");
    cellaOraInizio.textContent = Lezioni[i][2];

    const cellaOraFine = document.createElement("td");
    cellaOraFine.textContent = Lezioni[i][3];

    const cellaArgomento = document.createElement("td");
    cellaArgomento.textContent = Lezioni[i][4];

    const cellaAvi = document.createElement("td");

    if (Lezioni[i][5] === "m") {
      cellaAvi.textContent = "Missing!";
    } else {
      const linkAvi = document.createElement("a");

      linkAvi.href = indirizzoAvi;
      linkAvi.target = "_blank";
      linkAvi.rel = "noopener";
      linkAvi.textContent = "avi";

      linkAvi.addEventListener("click", function () {
        registraDownload("avi", numeroOraMod);
      });

      cellaAvi.appendChild(linkAvi);
    }

    const cellaPdf = document.createElement("td");
    const linkPdf = document.createElement("a");

    linkPdf.href = indirizzoPdf;
    linkPdf.target = "_blank";
    linkPdf.rel = "noopener";
    linkPdf.textContent = "pdf";

    linkPdf.addEventListener("click", function () {
      registraDownload("pdf", numeroOraMod);
    });

    cellaPdf.appendChild(linkPdf);

    riga.appendChild(cellaNumero);
    riga.appendChild(cellaData);
    riga.appendChild(cellaOraInizio);
    riga.appendChild(cellaOraFine);
    riga.appendChild(cellaArgomento);
    riga.appendChild(cellaAvi);
    riga.appendChild(cellaPdf);

    corpoTabella.appendChild(riga);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  generaSchedaCorso();
  generaDocumentiCorso();
});
