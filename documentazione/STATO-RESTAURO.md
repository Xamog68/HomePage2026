# Stato del restauro — HomePage2026

## Stato generale

La versione **2.0.0** è stata completata, committata, pubblicata e taggata.

Il lavoro prosegue sul branch:

    nuovo-sito

La versione 2.0.0 ha:

- uniformato gli indici e le schede dei corsi;
- corretto numerosi dati storici;
- consolidato la generazione delle tabelle delle lezioni;
- introdotto gli audit `audit_orari.py` e `audit_media.py`;
- completato il restauro sostanziale dell'Archivio Didattico.

Le pagine approvate nella 2.0 sono considerate consolidate e non vanno riesaminate nelle fasi successive, salvo richiesta esplicita o necessità di correggere un errore.

---

# Obiettivo della versione 3.0

La 3.0 non è una nuova migrazione dei contenuti. I filoni principali sono:

1. rifiniture grafiche e di usabilità del nuovo sito GitHub;
2. riorganizzazione fisica del magazzino dei media sul server UniPi;
3. verifica automatica dei collegamenti dopo la riorganizzazione;
4. avvio di **Precorsina**, GPT didattico basato sul materiale del Precorso.

Il sito pubblico precedente non è più il riferimento progettuale e sarà sostituito, quando tutto sarà pronto, dalla versione GitHub.

---

# Convenzioni consolidate

## Pagine dei corsi

Formato:

    AD_VideoLez_<SIGLA>_<ANNO>.html

Esempio:

    AD_VideoLez_AM1_26.html

## File JavaScript

Formato:

    js/corsi/<SIGLA>_<ANNO>.js

Esempi:

    AM1_26.js
    IstAM_22.js
    SAnna_12.js

Il nome del file JavaScript coincide con il suffisso del corrispondente file HTML.

---

# Componenti grafici

Componenti consolidati:

- lavagna comune;
- breadcrumb uniformati;
- `introduzione-archivio`;
- `classificazioni-secondarie`;
- `blocco-contenuto` / `sezione-corso`;
- card di navigazione interamente cliccabili quando rappresentano una sola destinazione.

Principio generale:

> Una card con una sola destinazione è essa stessa il link.  
> Una card con più destinazioni resta un contenitore con link distinti.

Le card cliccabili non devono contenere un secondo link interno.

## Layout introdotti nella 3.0

- `accessi-principali`: griglia generale delle card di accesso;
- `accessi-tre`: tre card sulla stessa riga negli schermi larghi;
- `accessi-singoli`: una card larga e centrata;
- `card-link`: comportamento generale delle card cliccabili non basate su `.accesso`.

Queste soluzioni funzionano, ma andranno eventualmente rifattorizzate in un vocabolario più generale di componenti, layout e varianti, evitando stratificazioni ad hoc.

## Responsive

Le regole dentro `@media` controllano la resa su schermi medi e piccoli. Quando si modifica una classe grafica occorre controllarne tutte le occorrenze:

- fuori dai blocchi `@media`;
- dentro i blocchi `@media`;
- in eventuali selettori più specifici.

## Sfondo a lavagna

Lo sfondo è ora definito in modo comune per `body.archivio-didattico` e `body.pagina-corso`. È stata eliminata la differenza di scala prodotta da `background-size: cover`.

La scala corrente usa:

    background-size: 100% auto;

La scelta potrà essere rivalutata dopo un periodo di navigazione reale, ma la lavagna deve restare coerente passando da una pagina all'altra.

---

# Home dell'Archivio Didattico

Disposizione consolidata:

1. `Videolezioni`, card principale larga e centrata;
2. `Corsi in corso` ed `Eserciziari`, affiancate;
3. `Il progetto`, card più piccola e centrata.

Titoli e testi sono centrati. Le quattro card sono interamente cliccabili.

Colori, ombre, padding e spaziature restano rifiniture da discutere in una fase successiva.

---

# Pagine aggiornate nella prima fase della 3.0

- `AD_Index.html`
- `AD_Index_Videolezioni.html`
- `AD_Corsi.html`
- `AD_Intro.html`
- `AD_Storia.html`
- `AD_Tecnica.html`
- `AD_Video.html`
- `nuova-home.html`
- `css/stile.css`

Sono state inoltre corrette in `AD_Storia.html` la classe mancante del breadcrumb e una duplicazione accidentale dell'elemento `<main>`.

---

# Riorganizzazione futura del magazzino

I media restano sul server UniPi. Non si tratta di trasferirli altrove, ma di riorganizzarli fisicamente.

Struttura prevista:

    Magazzino/
      CodiceCorso/
        pdf/
        avi/
        documenti/

I materiali specifici di un corso devono stare nella cartella del corso. I materiali trasversali restano in cartelle condivise.

Finché il vecchio sito rimane attivo, non spostare i file pubblicati senza una strategia di compatibilità, per evitare di rompere i collegamenti storici.

---

# Precorsina

I file `js/corsi/*.js` sono una possibile base di metadati per indicizzare le lezioni. La prima fase dovrà verificarne l'affidabilità rispetto a numero, data, argomento, disponibilità di video e PDF e collegamenti ai materiali.

---

# Metodo di lavoro

- Procedere una cosa per volta.
- Preferire comandi brevi e verificabili.
- Evitare script complessi quando bastano `sed`, `grep`, `awk` o un intervento manuale.
- Prima di modifiche ampie controllare `git status` e `git diff`.
- Committare frequentemente e separare modifiche grafiche, navigazione, dati storici, media e audit.
- In CSS, prima di modificare una classe, cercarne tutte le occorrenze e controllare specificità, ordine e regole responsive.
- Usare Zed come editor di riferimento; indicare sempre il blocco o l'occorrenza precisa da modificare.

---

# Principi editoriali

- Conservare il tono originale.
- Raccontare la storia senza riscriverla.
- Privilegiare la leggibilità rispetto all'estetica.
- Evitare duplicazioni di CSS e componenti.
- Ogni nuova pagina deve sembrare appartenere naturalmente al sito.
- Le pagine approvate si modificano solo per correggere errori o introdurre miglioramenti realmente significativi.

---

# Diario di cantiere

## 29 luglio 2026

- Uniformati i breadcrumb.
- Uniformati i nomi dei file JavaScript dei corsi.
- Corretti i riferimenti ai nuovi nomi.
- Sistemati i problemi di leggibilità introdotti dallo sfondo a lavagna.
- Riscritta la pagina **Storia del progetto**.
- Riorganizzata l'**Intervista del 2008**.
- Completato il restauro della sezione **Il progetto**.

## 30 luglio 2026

- Avviata la versione 3.0.
- Trasformate in link interamente cliccabili le card con destinazione unica.
- Riorganizzata la home dell'Archivio in disposizione `1 + 2 + 1`.
- Applicata la stessa filosofia all'indice generale delle videolezioni, alla sezione **Il progetto**, ai corsi in corso e alla nuova home.
- Introdotti layout a tre card e a card singola.
- Corretto il breadcrumb e l'HTML malformato di `AD_Storia.html`.
- Uniformata la scala dello sfondo a lavagna tra le diverse pagine.
- Rinviata a una fase successiva la discussione sistematica di colori, spaziature e rifattorizzazione del CSS.
