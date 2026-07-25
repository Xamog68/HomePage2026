/* =========================================================
   REGISTRAZIONE DEI DOWNLOAD
   ========================================================= */

/*
  Comunica a Google Analytics il download di una lezione.

  La funzione gtag viene definita in analytics.js.
  In locale analytics.js non invia dati reali, ma scrive
  l'evento nella console del browser.
*/
function registraDownload(formato, numeroLezione) {
  if (typeof gtag !== "function") {
    return;
  }

  gtag("event", "download_lezione", {
    corso: NomeCorso,
    formato: formato,
    lezione: numeroLezione
  });
}


/* =========================================================
   SCHEDA DEL CORSO
   ========================================================= */

/*
  Costruisce la tabella iniziale con le informazioni generali
  del corso.

  I dati provengono dall'oggetto SchedaCorso, definito nel file
  specifico del corso, per esempio:

      js/corsi/am1-2025-26.js
*/
function generaSchedaCorso() {
  if (typeof SchedaCorso === "undefined") {
    return;
  }

  const contenitore = document.getElementById("scheda-corso");
  const avviso = document.getElementById("avviso-corso");

  /*
    Alcune pagine potrebbero caricare questo file JavaScript
    senza avere una scheda del corso nell'HTML.
  */
  if (!contenitore) {
    return;
  }

  /*
    Ogni elemento dell'array rappresenta una riga della tabella:
    il primo valore è l'etichetta, il secondo è il contenuto.
  */
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

  /*
    L'avviso è facoltativo. Usiamo innerHTML perché vogliamo
    inserire anche la parola "Achtung!" in grassetto.
  */
  if (avviso && SchedaCorso.avviso) {
    avviso.innerHTML =
      "<strong>Achtung!</strong> " + SchedaCorso.avviso;
  }
}


/* =========================================================
   DOCUMENTI DEL CORSO
   ========================================================= */

/*
  Genera i collegamenti ai documenti del corso.

  Ogni documento deve indicare almeno:

      sezione
      file
      titolo

  Può inoltre avere una nota facoltativa.

  La proprietà "sezione" determina in quale tabella viene
  inserito il documento. Per esempio:

      sezione: "book"

  corrisponde all'elemento HTML:

      id="documenti-book"
*/
function generaDocumentiCorso() {
  if (typeof DocumentiCorso === "undefined") {
    return;
  }

  for (const documento of DocumentiCorso) {
    const contenitore = document.getElementById(
      "documenti-" + documento.sezione
    );

    /*
      Se nella pagina non esiste la sezione richiesta,
      saltiamo il documento e passiamo al successivo.
    */
    if (!contenitore) {
      continue;
    }

    const riga = document.createElement("tr");
    const cella = document.createElement("td");
    const link = document.createElement("a");

    /*
      MEDIA.documenti contiene l'indirizzo comune della cartella.
      documento.file contiene soltanto il nome del singolo file.
    */
    link.href = MEDIA.documenti + documento.file;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = documento.titolo;

    /*
      Registra il clic sul documento in Google Analytics.
    */
    link.addEventListener("click", function () {
      if (typeof gtag !== "function") {
        return;
      }

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


/* =========================================================
   TABELLA DELLE LEZIONI
   ========================================================= */

/*
  Costruisce sia l'intestazione sia le righe della tabella
  delle lezioni.

  I dati provengono dall'array Lezioni definito nel file
  specifico del corso.
*/
function generaTabellaLezioni() {
  if (
    typeof Lezioni === "undefined" ||
    typeof Percorso === "undefined"
  ) {
    return;
  }

  const corpoTabella = document.getElementById("tabella-lezioni");

  if (!corpoTabella) {
    return;
  }

  generaIntestazioneLezioni(corpoTabella);
  generaRigheLezioni(corpoTabella);
}


/*
  Genera la prima riga della tabella.

  Le intestazioni "Ora" e "Download" occupano due colonne,
  grazie alla proprietà colspan.
*/
function generaIntestazioneLezioni(corpoTabella) {
  const rigaIntestazione = document.createElement("tr");

  const intestazioni = [
    { testo: "N." },
    { testo: "Data" },
    { testo: "Ora", colspan: 2 },
    { testo: "Argomento sommario" },
    { testo: "Download", colspan: 2 }
  ];

  for (const intestazione of intestazioni) {
    const cella = document.createElement("th");

    cella.textContent = intestazione.testo;

    if (intestazione.colspan) {
      cella.colSpan = intestazione.colspan;
    }

    rigaIntestazione.appendChild(cella);
  }

  corpoTabella.appendChild(rigaIntestazione);
}


/*
  Genera una riga per ogni lezione presente nell'array Lezioni.
*/
function generaRigheLezioni(corpoTabella) {
  /*
    L'indice 0 non viene usato: in questo modo il numero
    dell'indice coincide con il numero della lezione.
  */
  for (let i = 1; i < Lezioni.length; i++) {
    const lezione = Lezioni[i];

    /*
      Nell'array possono esserci posizioni vuote.
    */
    if (!lezione) {
      continue;
    }

    const numeroLezione = lezione[0];

    /*
      I nomi dei file usano numeri di tre cifre:
      1 diventa 001, 12 diventa 012, e così via.
    */
    const cifreNumeroLezione =
      typeof CifreNumeroLezione === "undefined"
        ? 3
        : CifreNumeroLezione;

    const numeroFile = String(numeroLezione).padStart(
      cifreNumeroLezione,
      "0"
    );
    const indirizzoAvi = Percorso + numeroFile + ".avi";
    const indirizzoPdf = Percorso + numeroFile + ".pdf";

    const riga = document.createElement("tr");

    aggiungiCellaTesto(riga, lezione[0]);
    aggiungiCellaTesto(riga, lezione[1]);
    aggiungiCellaTesto(riga, lezione[2]);
    aggiungiCellaTesto(riga, lezione[3]);
    aggiungiCellaTesto(riga, lezione[4]);

    /*
      Il sesto elemento segnala che il video manca.
    */
    if (lezione[5] === "m") {
      aggiungiCellaTesto(riga, "Missing!");
    } else {
      aggiungiCellaDownload(
        riga,
        indirizzoAvi,
        "avi",
        "avi",
        numeroFile
      );
    }

    /*
      Il settimo elemento segnala che il PDF manca.
    */
    if (lezione[6] === "m") {
      aggiungiCellaTesto(riga, "Missing!");
    } else {
      aggiungiCellaDownload(
        riga,
        indirizzoPdf,
        "pdf",
        "pdf",
        numeroFile
      );
    }

    corpoTabella.appendChild(riga);
  }
}


/*
  Aggiunge a una riga una semplice cella di testo.
*/
function aggiungiCellaTesto(riga, testo) {
  const cella = document.createElement("td");

  cella.textContent = testo;
  riga.appendChild(cella);
}


/*
  Aggiunge a una riga una cella contenente un collegamento
  a un file della lezione.
*/
function aggiungiCellaDownload(
  riga,
  indirizzo,
  testoLink,
  formato,
  numeroLezione
) {
  const cella = document.createElement("td");
  const link = document.createElement("a");

  link.href = indirizzo;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = testoLink;

  link.addEventListener("click", function () {
    registraDownload(formato, numeroLezione);
  });

  cella.appendChild(link);
  riga.appendChild(cella);
}

/* =========================================================
   TESTI COMUNI ALLE PAGINE DEI CORSI
   ========================================================= */

/*
  Inserisce i testi introduttivi delle sezioni Book e Lezioni.

  Tenendoli qui evitiamo di copiarli in ogni pagina di corso.
*/
function generaTestiComuni() {
  const testoBook = document.getElementById("testo-book");
  const testoLezioni = document.getElementById("testo-lezioni");

  if (testoBook) {
    testoBook.textContent =
      "I volumi raccolgono in un unico file i PDF delle singole lezioni " +
      "disponibili nella sezione sottostante. Per questo possono avere " +
      "dimensioni piuttosto grandi.";
  }

  /*
    Qui usiamo innerHTML perché il testo contiene un collegamento.
  */
  if (testoLezioni) {
    testoLezioni.innerHTML =
      'Per ogni lezione sono disponibili, quando presenti, il PDF e la ' +
      'registrazione video. Per informazioni sui formati e sulla ' +
      'riproduzione dei video, consulta ' +
      '<a href="AD_Video.html">le note tecniche</a>.';
  }
}


/* =========================================================
   LICENZA DEL SITO
   ========================================================= */

/*
  Inserisce il blocco della licenza nel piè di pagina.
*/
function generaLicenza() {
  const contenitore = document.getElementById("licenza-sito");

  if (!contenitore) {
    return;
  }

  contenitore.innerHTML = `
    <a
      href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
      target="_blank"
      rel="license noopener"
    >
      <img
        src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
        alt="Licenza Creative Commons BY-NC-SA 4.0"
      >
    </a>

    <p>
      I contenuti di questo sito sono distribuiti con licenza
      <a
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        target="_blank"
        rel="license noopener"
      >
        Creative Commons BY-NC-SA 4.0
      </a>,
      salvo diversa indicazione.
    </p>
  `;
}


/* =========================================================
   AVVIO DELLA GENERAZIONE DELLA PAGINA
   ========================================================= */

/*
  Attendiamo che il documento HTML sia stato letto completamente,
  poi generiamo tutte le parti dinamiche della pagina.
*/
document.addEventListener("DOMContentLoaded", function () {
  generaSchedaCorso();
  generaDocumentiCorso();
  generaTestiComuni();
  generaTabellaLezioni();
  generaLicenza();
});
