# TODO — Restauro del sito didattico

Registro delle stranezze, anomalie e decisioni ancora da prendere emerse durante la migrazione.

Legenda:

- [ ] da fare
- [~] da verificare / decisione da prendere
- [x] risolto

---

## 1. Precorsi

- [x] Controllati e corretti i breadcrumb di `AD_PCM_07.html`, `AD_PCM_08.html`, `AD_PCM_09.html`, `AD_PCM_25.html`.
  - Il collegamento punta a `precorso-matematica.html`.

- [x] Verificato definitivamente il Book 2008.
  - File: `PCM_08_Book.pdf`.
  - Compare nella pagina `AD_PCM_08.html`.
  - Non compare tra i materiali generali della pagina introduttiva.

- [x] Riorganizzata la pagina `precorso-matematica.html`.
  - Edizione 2025 presentata come edizione di riferimento.
  - Edizioni storiche 2007, 2008, 2009 raccolte separatamente.
  - Conservati i materiali generali.
  - Possibili ulteriori ritocchi sono soltanto grafici.

- [x] Riorganizzato l’inserimento del Precorso in `archivio-didattico.html`.
  - La scheda è stata inserita e resa coerente con le altre famiglie di corsi.

---

## 2. Analisi Matematica 2

### Caso patologico: 2006/07

- [x] Migrato `AD_C07.html`.

- [x] Rappresentati i PDF condivisi da più lezioni ripetendo lo stesso collegamento nelle righe interessate.
  - Esempio: lezioni 1–3 collegate allo stesso file `C07_L01-03.pdf`.

- [ ] Verificare e correggere le date sospette:
  - `15/10/06` nella sequenza di novembre.
  - ripetizione di `22/11/06`.
  - eventuali altre incongruenze cronologiche.

- [x] Gestita la lezione 41, priva sia di AVI sia di PDF.

### Corsi regolari

- [ ] Controllare nel browser tutte le pagine migrate.
  - Link AVI.
  - Link PDF.
  - Book.
  - Documenti burocratici.
  - Console JavaScript senza errori.
  - Visualizzazione su schermo stretto.

- [x] C07: uniformate a minuscolo le estensioni dei video
      (`.AVI` → `.avi`) e aggiornati i collegamenti della pagina storica.

---

## 3. Corsi Sant’Anna

### Caso patologico: SA12

- [x] Migrato `AD_SA12.html`.

- [x] Gestita la lezione `20 bis`.
  - Conservato il nome logico non numerico.
  - File:
    - `SA12_20bis.avi`
    - `SA12_20bis.pdf`

- [x] Gestiti i video mancanti indicati nei dati del corso.
  - La lezione 26 risulta marcata come video mancante nell’inventario.
  - La situazione della lezione 20 è stata assorbita nella migrazione della sequenza con `20 bis`.

- [x] Conservata la sezione “Esercizi”:
  - `SA12_Esercizi.pdf`;
  - `SA12_Esercizi-Hint.pdf`.

- [~] Verificare il campo “Anno”.
  - Il target è “Studenti secondo anno SSSUP”.
  - La scheda riporta “Primo”.

- [x] Ripulito l’HTML originario duplicato/malformato senza perdere i contenuti utili.

### Altri corsi Sant’Anna

- [ ] Controllare `SA11`, lezione 20: AVI mancante.

- [ ] Controllare `SA13`, lezione 22: AVI mancante.

- [ ] Verificare che `SA15` conservi la sezione “Ricevimento”:
  - testo del compitino;
  - correzione AVI;
  - correzione PDF.

- [x] Creata e collegata la pagina introduttiva `complementi-santanna.html`.

---

## 4. Calcolo delle variazioni, Freiberg, Istituzioni

### Date sospette

- [~] `CdV_16`, lezione 48: data `26/12/2015`.
  - Probabile refuso o lezione natalizia eroica.

- [~] `CdV_17`, lezioni 37–38: data `27/11/2016`.
  - Compaiono dopo le lezioni 35–36 del `30/11/2016`.

- [~] `IstAM_19`, lezioni 29–30: data `29/11/2018`.
  - Sono collocate prima delle lezioni del 5 novembre.
  - Probabile mese errato.

### Audio problematici

- [~] `IstAM_20`, lezione 1: “audio mancante”.

- [~] `IstAM_20`, lezione 36: “audio inascoltabile”.

- [~] `IstAM_20`, lezione 37: “audio mancante”.

- [~] Decidere se:
  - lasciare il collegamento AVI con nota nel testo;
  - oppure marcare l’AVI come `Missing!`.

### Peculiarità tecniche

- [x] Verificato Freiberg 2017.
  - Numerazione file senza zero iniziale.
  - `CifreNumeroLezione = 1`.
  - Il riferimento storico al book è conservato; una copia è presente anche in `HP_AD`.

- [x] Create o confermate le pagine introduttive e i breadcrumb dei gruppi:
  - Calcolo delle variazioni;
  - Istituzioni di Analisi Matematica;
  - corsi speciali / Freiberg.

---

## 5. Pagine e navigazione generale

- [ ] Controllare tutti i breadcrumb dopo la migrazione.
  - Nessun collegamento deve tornare per errore alle vecchie pagine.

- [x] Riveduto `AD_Index.html`.
  - Il collegamento dei precorsi punta ora a `precorso-matematica.html`.
  - La modifica è stata committata separatamente.

- [ ] Decidere cosa fare di `AD_Video_vecchio.html`.
  - Attualmente è un backup locale non tracciato.
  - Possibili scelte:
    - lasciarlo fuori da Git;
    - spostarlo in una cartella di archivio;
    - eliminarlo quando non serve più.

- [ ] Verificare tutte le pagine introduttive:
  - collegamenti alle edizioni;
  - ordine cronologico;
  - testi sintetici;
  - coerenza grafica.

---

## 6. Controlli tecnici comuni

- [ ] Verificare che ogni pagina includa:
  - `css/stile.css`;
  - `js/config-media.js`;
  - il file dati corretto;
  - `js/sito.js`;
  - `js/analytics.js`.

- [ ] Verificare che non sia rimasto il vecchio Google Analytics UA.

- [ ] Verificare che i file mancanti siano marcati separatamente per AVI e PDF.

- [ ] Verificare la larghezza della numerazione:
  - 1 cifra per Freiberg;
  - 2 cifre per la maggior parte dei corsi;
  - 3 cifre per i corsi con oltre 99 lezioni.

- [ ] Controllare:
  - validità dei link;
  - errori in console;
  - resa responsive;
  - tabelle molto lunghe;
  - footer e licenza.

---

## 7. Inventario e book

- [x] Creato il generatore automatico:
  - `strumenti/genera-inventario.py`;
  - output in `documentazione/INVENTARIO-CORSI.md`.

- [x] Verificata automaticamente la presenza di indici cliccabili nei book.
  - Analizzati 58 PDF sul server.
  - 43 book con link interni rilevati.
  - 15 file senza link interni rilevati.
  - Nessun errore e nessun caso dubbio.

- [x] Integrati i risultati nel file:
  - `documentazione/indici-book.csv`.

- [x] Resa sintetica la colonna **Indice cliccabile**:
  - `sì` se tutti i volumi sono cliccabili;
  - `no` se nessun volume lo è;
  - `parziale (n/totale)` negli eventuali casi misti.

- [ ] Creare ex novo i book mancanti, con priorità alta:
  - AM1 2006/2007;
  - AM1 2007/2008;
  - AM1 2008/2009;
  - AM1 2009/2010;
  - AM1 2010/2011;
  - AM2 2006/2007.

- [ ] Valutare, con priorità bassa, i book mancanti:
  - Precorso 2007;
  - Precorso 2009.

- [ ] Rigenerare con indice cliccabile i 14 book effettivamente usati dal sito:
  - `AM12_Book1.pdf`;
  - `AM12_Book2.pdf`;
  - `AM13_Book1.pdf`;
  - `AM13_Book2.pdf`;
  - `AM1_15_Book1.pdf`;
  - `AM1_15_Book2.pdf`;
  - `AM1_15_Book3.pdf`;
  - `PCM_08_Book.pdf`;
  - `SA10_Book.pdf`;
  - `SA11_Book.pdf`;
  - `SA12_Book.pdf`;
  - `SA13_Book.pdf`;
  - `SA14_Book.pdf`;
  - `SA15_Book.pdf`.

- [~] Verificare se `ALAM2_14_Bookbis.pdf` è soltanto un residuo storico.
  - Non è richiamato da alcun file dati del sito.
  - `ALAM2_14_Book.pdf`, che è quello effettivamente usato, ha l’indice cliccabile.


## 8. Git

- [ ] Prima di ogni blocco di commit:
  - `git status --short`
  - `git diff --cached --stat`

- [ ] Tenere separati:
  - migrazioni meccaniche;
  - correzioni di dati storici;
  - modifiche grafiche;
  - modifiche alla navigazione.

- [ ] Non correggere automaticamente i dati sospetti:
  - prima annotarli qui;
  - poi verificare la fonte;
  - infine fare un commit separato e descrittivo.

---

## 9. Metodo di lavoro

Quando emerge una stranezza:

1. annotarla in questo file;
2. indicare pagina, lezione e dato sospetto;
3. non correggerla durante una migrazione meccanica;
4. verificare la fonte originaria o i file sul server;
5. correggerla con un commit separato;
6. cambiare `[ ]` o `[~]` in `[x]` quando risolta.

## 10. Opzioni del generatore

- [x] Aggiunta l’opzione

      const MostraVideoLezioni = false;

      per i corsi che dispongono soltanto dei PDF.

      Quando l’opzione è attiva, la tabella delle lezioni:
      - non mostra la colonna AVI;
      - non genera una sequenza di `Missing!`;
      - mantiene invariata la struttura dei dati;
      - continua a mostrare normalmente la colonna PDF.

      Se l’opzione non è definita, il comportamento predefinito
      resta quello usuale, con entrambe le colonne AVI e PDF.

- [ ] Correggere i caratteri di sostituzione Unicode (`�`, U+FFFD)
      introdotti durante la migrazione di alcune vecchie annate SSSUP.
      I file interessati sono:
      - `js/corsi/SAnna_10.js`
      - `js/corsi/SAnna_11.js`
      - `js/corsi/SAnna_13.js`

## 11. Riorganizzazione futura del magazzino

Policy da applicare al momento della dismissione del vecchio sito.

Struttura prevista:

Magazzino/
  CodiceCorso/
    Pdf/
    Avi/
    Documenti/

Esempio:

Magazzino/
  CdV_17/
    Pdf/
    Avi/
    Documenti/

I materiali specifici di un corso devono stare nella cartella del corso.
I materiali trasversali, come gli eserciziari comuni a più edizioni,
restano in cartelle condivise.

Finché il vecchio sito rimane attivo, non spostare i file già pubblicati,
per evitare di rompere i collegamenti storici.
