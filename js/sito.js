function registraDownload(formato, numeroLezione) {
  gtag("event", "download_lezione", {
    corso: NomeCorso,
    formato: formato,
    lezione: numeroLezione
  });
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
