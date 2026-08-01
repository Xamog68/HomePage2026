/* =========================================================
   REGISTRAZIONE DEI DOWNLOAD
   ========================================================= */

/*
  Comunica a Google Analytics il download di una lezione.

  La funzione gtag viene definita in analytics.js.
  In locale analytics.js non invia dati reali, ma scrive
  l'evento nella console del browser.
*/
function nomeCorsoAnalytics() {
  if (typeof NomeCorso !== "undefined" && NomeCorso) {
    return NomeCorso;
  }

  if (
    typeof SchedaCorso !== "undefined" &&
    SchedaCorso &&
    SchedaCorso.nome
  ) {
    return SchedaCorso.nome;
  }

  return document.title;
}


function registraDownload(formato, numeroLezione) {
  if (typeof gtag !== "function") {
    return;
  }

  gtag("event", "download_lezione", {
    corso: nomeCorsoAnalytics(),
    formato: formato,
    lezione: numeroLezione
  });
}


/*
  Comunica a Google Analytics il download di un documento.
*/
function registraDownloadDocumento(
  sezione,
  file,
  titolo,
  formato
) {
  if (typeof gtag !== "function") {
    return;
  }

  gtag("event", "download_documento", {
    corso: nomeCorsoAnalytics(),
    sezione: sezione,
    file: file,
    titolo: titolo,
    formato: formato
  });
}


/*
  Estensioni considerate download didattici.
*/
const formatiDownload = new Set([
  "pdf",
  "avi",
  "mp4",
  "zip",
  "tex",
  "ps",
  "dvi"
]);


/*
  Ricava l'estensione del file collegato, ignorando query string
  e frammenti. Restituisce una stringa vuota se il collegamento
  non punta a un formato che vogliamo tracciare.
*/
function ricavaFormatoDownload(link) {
  let percorso;

  try {
    percorso = new URL(link.href, document.baseURI).pathname;
  } catch (errore) {
    return "";
  }

  const corrispondenza = percorso.match(/\.([a-z0-9]+)$/i);

  if (!corrispondenza) {
    return "";
  }

  const formato = corrispondenza[1].toLowerCase();

  return formatiDownload.has(formato) ? formato : "";
}


/*
  Ricava il nome del file dal collegamento.
*/
function ricavaNomeFile(link) {
  try {
    const percorso = new URL(link.href, document.baseURI).pathname;
    return decodeURIComponent(percorso.split("/").pop() || "");
  } catch (errore) {
    return "";
  }
}


/*
  Trasforma un testo in un identificatore stabile e leggibile,
  adatto al parametro Analytics "sezione".
*/
function normalizzaSezioneAnalytics(testo) {
  return testo
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "documenti";
}


/*
  Cerca il titolo della sezione che contiene un collegamento statico.
  Se non lo trova, usa il valore generico "documenti".
*/
function ricavaSezioneDocumento(link) {
  const sezione = link.closest("section");

  if (sezione) {
    if (sezione.id) {
      return normalizzaSezioneAnalytics(
        sezione.id.replace(/^documenti-/, "")
      );
    }

    const titoloSezione = sezione.querySelector("h2, h3");

    if (titoloSezione) {
      return normalizzaSezioneAnalytics(titoloSezione.textContent);
    }
  }

  return "documenti";
}


/*
  Nelle tabelle statiche storiche il numero della lezione compare
  normalmente in una delle prime due celle della riga. La funzione
  lo riconosce senza dipendere dal nome del corso o dall'anno.
*/
function ricavaNumeroLezioneStatica(link) {
  const riga = link.closest("tr");

  if (!riga) {
    return "";
  }

  const primeCelle = Array.from(riga.cells).slice(0, 2);

  for (const cella of primeCelle) {
    const testo = cella.textContent.trim();

    if (/^\d+$/.test(testo)) {
      return testo;
    }
  }

  return "";
}


/*
  Registra i download presenti direttamente nell'HTML.

  I collegamenti generati da questo file vengono marcati con
  data-analytics-gestito e sono quindi ignorati dal listener,
  evitando la registrazione doppia dello stesso clic.
*/
function attivaAnalyticsDownloadStatici() {
  document.addEventListener("click", function (evento) {
    const elemento = evento.target;

    if (!(elemento instanceof Element)) {
      return;
    }

    const link = elemento.closest("a[href]");

    if (!link || link.dataset.analyticsGestito === "true") {
      return;
    }

    const formato = ricavaFormatoDownload(link);

    if (!formato) {
      return;
    }

    const numeroLezione = ricavaNumeroLezioneStatica(link);

    if (
      numeroLezione &&
      ["avi", "pdf", "mp4"].includes(formato)
    ) {
      registraDownload(formato, numeroLezione);
      return;
    }

    registraDownloadDocumento(
      ricavaSezioneDocumento(link),
      ricavaNomeFile(link),
      link.textContent.trim() || ricavaNomeFile(link),
      formato
    );
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

      js/corsi/AM1_26.js
*/
function generaSchedaCorso() {
  if (typeof SchedaCorso === "undefined") {
    return;
  }

  const contenitore = document.getElementById("scheda-corso");

  if (!contenitore) {
    return;
  }

  const righe = [
    ["Nome corso", SchedaCorso.nome],
    ["Anno accademico", SchedaCorso.annoAccademico],
    ["CdS di riferimento", SchedaCorso.target],
    ["Anno di corso", SchedaCorso.anno],
    ["CFU", SchedaCorso.crediti]
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
    const baseDocumenti =
      typeof ArchivioCorso !== "undefined"
        ? MEDIA.archivioDidattico + ArchivioCorso + "/Documenti/"
        : MEDIA.documenti;

    link.href = baseDocumenti + documento.file;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = documento.titolo;

    /*
      Registra il clic sul documento in Google Analytics.
    */
    link.dataset.analyticsGestito = "true";

    link.addEventListener("click", function () {
      const formato = ricavaFormatoDownload(link);

      registraDownloadDocumento(
        documento.sezione,
        documento.file,
        documento.titolo,
        formato
      );
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
  Genera l'intestazione della tabella delle lezioni.

  Normalmente la tabella contiene due colonne per gli orari
  e due colonne per i download: AVI e PDF.

  Alcuni corsi storici non dispongono degli orari:
  in tal caso il file dati può impostare

    const MostraOrariLezioni = false;

  Alcuni corsi dispongono soltanto dei PDF:
  in tal caso il file dati può impostare

    const MostraVideoLezioni = false;

  Se le variabili non sono definite, il comportamento
  predefinito consiste nel mostrare sia gli orari sia i video.
*/
function generaIntestazioneLezioni(corpoTabella) {
  const rigaIntestazione = document.createElement("tr");

  const mostraOrari =
    typeof MostraOrariLezioni === "undefined"
      ? true
      : MostraOrariLezioni;

  const mostraVideo =
    typeof MostraVideoLezioni === "undefined"
      ? true
      : MostraVideoLezioni;

  /*
    Le intestazioni vengono costruite progressivamente,
    in modo da adattarsi alle colonne effettivamente visibili.
  */
  const intestazioni = [
    { testo: "N." },
    { testo: "Data" }
  ];

  if (mostraOrari) {
    intestazioni.push({
      testo: "Ora",
      colspan: 2
    });
  }

  intestazioni.push({
    testo: "Argomento sommario"
  });

  /*
    Se vengono mostrati sia AVI sia PDF, Download occupa
    due colonne. Se i video sono nascosti, occupa soltanto
    la colonna del PDF.
  */
  intestazioni.push({
    testo: "Download",
    colspan: mostraVideo ? 2 : 1
  });

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

  Ogni elemento dell'array ha sempre la forma

    [numero, data, oraInizio, oraFine, argomento, statoAvi, statoPdf]

  Quando gli orari non devono essere mostrati, oraInizio e oraFine
  restano presenti nei dati, eventualmente come stringhe vuote,
  ma le relative colonne non vengono generate.

  La struttura dell'array resta invariata anche quando la colonna
  dei video non viene mostrata.
*/
function generaRigheLezioni(corpoTabella) {
  const mostraOrari =
    typeof MostraOrariLezioni === "undefined"
      ? true
      : MostraOrariLezioni;

  const mostraVideo =
    typeof MostraVideoLezioni === "undefined"
      ? true
      : MostraVideoLezioni;

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
      Il numero di cifre usato nei nomi dei file può essere
      specificato nel file dati del corso.

      Se non viene specificato, si usano tre cifre:
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

    const usaArchivioCorso =
      typeof ArchivioCorso !== "undefined";

    const percorsoAvi = usaArchivioCorso
      ? MEDIA.archivioDidattico + ArchivioCorso + "/Avi/" + PrefissoFile
      : Percorso;

    const percorsoPdf = usaArchivioCorso
      ? MEDIA.archivioDidattico + ArchivioCorso + "/Pdf/" + PrefissoFile
      : Percorso;

    const indirizzoAvi = percorsoAvi + numeroFile + ".avi";
    const indirizzoPdf = percorsoPdf + numeroFile + ".pdf";

    const riga = document.createElement("tr");

    /*
      Numero e data occupano sempre le prime due posizioni.
    */
    aggiungiCellaTesto(riga, lezione[0]);
    aggiungiCellaTesto(riga, lezione[1]);

    /*
      Gli orari sono sempre presenti nella struttura dei dati,
      ma vengono mostrati soltanto quando il corso lo richiede.
    */
    if (mostraOrari) {
      aggiungiCellaTesto(riga, lezione[2]);
      aggiungiCellaTesto(riga, lezione[3]);
    }

    /*
      L'argomento e gli indicatori dei file mancanti occupano
      sempre le stesse posizioni.
    */
    aggiungiCellaTesto(riga, lezione[4]);

    const statoAvi = lezione[5];
    const statoPdf = lezione[6];

    /*
      Genera la cella relativa al video soltanto quando
      la colonna AVI è prevista per il corso.
    */
    if (mostraVideo) {
      if (statoAvi === "m") {
        aggiungiCellaMissing(riga);
      } else {
        aggiungiCellaDownload(
          riga,
          indirizzoAvi,
          "Avi",
          "avi",
          numeroFile
        );
      }
    }

    /*
      Genera sempre la cella relativa al PDF.
    */
    if (statoPdf === "m") {
      aggiungiCellaMissing(riga);
    } else {
      aggiungiCellaDownload(
        riga,
        indirizzoPdf,
        "Pdf",
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
  Aggiunge a una riga una cella che segnala
  la mancanza del file.
*/
function aggiungiCellaMissing(riga) {
  const cella = document.createElement("td");
  const link = document.createElement("a");

  link.href = "AD_Video.html#missing";
  link.textContent = "Missing!";

  cella.appendChild(link);
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
  link.dataset.analyticsGestito = "true";

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
      "Lo stampato integrale delle lezioni, eventualmente suddiviso " +
      "in più volumi, raccoglie in forma continua i PDF delle singole " +
      "lezioni ed è corredato da un indice.";
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
  attivaAnalyticsDownloadStatici();
});
