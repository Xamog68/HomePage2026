function generaTabellaLezioni() {
  const corpoTabella = document.getElementById("tabella-lezioni");

  for (let i = 1; i < Lezioni.length; i++) {
    if (!Lezioni[i]) {
      continue;
    }

    const numeroOra = Lezioni[i][0];
    const numeroOraMod = String(numeroOra).padStart(3, "0");

    const indirizzoAvi = Percorso + numeroOraMod + ".avi";
    const indirizzoPdf = Percorso + numeroOraMod + ".pdf";

    const riga = document.createElement("tr");

    const linkAvi =
      Lezioni[i][5] === "m"
        ? "Missing!"
        : `
          <a
            href="${indirizzoAvi}"
            target="_blank"
            onclick="ga('send', 'event', '${NomeCorso}', 'Avi', 'Lezione ${numeroOraMod}')"
          >
            avi
          </a>
        `;

    riga.innerHTML = `
      <td>${Lezioni[i][0]}</td>
      <td>${Lezioni[i][1]}</td>
      <td>${Lezioni[i][2]}</td>
      <td>${Lezioni[i][3]}</td>
      <td>${Lezioni[i][4]}</td>
      <td>${linkAvi}</td>
      <td>
        <a
          href="${indirizzoPdf}"
          target="_blank"
          onclick="ga('send', 'event', '${NomeCorso}', 'Pdf', 'Lezione ${numeroOraMod}')"
        >
          pdf
        </a>
      </td>
    `;

    corpoTabella.appendChild(riga);
  }
}
