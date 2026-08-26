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

- [x] Verificata la presenza dei Book storici 2007 e 2009.
  - `PCM_07_Book.pdf`.
  - `PCM_09_Book.pdf`.
  - Entrambi sono registrati nell'inventario come dotati di indice cliccabile.

- [x] Riorganizzata la pagina `precorso-matematica.html`.
  - Edizione 2025 presentata come edizione di riferimento.
  - Edizioni storiche 2007, 2008, 2009 raccolte separatamente.
  - Conservati i materiali generali.
  - Possibili ulteriori ritocchi sono soltanto grafici.

- [x] Riorganizzato l'inserimento del Precorso in `archivio-didattico.html`.
  - La scheda è stata inserita e resa coerente con le altre famiglie di corsi.

- [x] Normalizzati i nomi canonici delle directory:
  - `Precorsi/PCM_07`;
  - `Precorsi/PCM_08`;
  - `Precorsi/PCM_09`;
  - `Precorsi/PCM_25`.

---

## 2. Analisi Matematica 2

### Caso patologico: 2006/07

- [x] Migrato `AD_C07.html`.

- [x] Normalizzato il codice canonico del corso:
  - da `AM2/C07` a `AM2/AM2_07`;
  - i file interni conservano il prefisso storico `C07_`.

- [x] Rappresentati i PDF condivisi da più lezioni ripetendo lo stesso collegamento nelle righe interessate.
  - Esempio: lezioni 1–3 collegate allo stesso file `C07_L01-03.pdf`.

- [x] Verificate e corrette le date sospette di `AM2_07.js`.
  - `15/10/06` corretto in `15/11/06`.
  - le lezioni 39 e 40 corrette da `22/11/06` a `29/11/06`.
  - `30/11/06` corretto in `30/10/06`.
  - `16/10/06` corretto in `27/10/06`.
  - ricontrollata la sequenza cronologica complessiva.

- [x] Gestita la lezione 41, priva sia di AVI sia di PDF.

- [x] Creato e collegato il Book storico `C07_Book.pdf`.

### Corsi regolari

- [~] Completare il controllo manuale nel browser delle pagine migrate.
  - I controlli automatici dei collegamenti sono positivi.
  - Restano utili controlli visuali di console, schermo stretto e resa grafica.

- [x] C07: uniformate a minuscolo le estensioni dei video (`.AVI` → `.avi`) e aggiornati i collegamenti della pagina storica.

- [x] Gestito `AM2_21` come corso PDF-only mediante:

      const MostraVideoLezioni = false;

  I due 404 AVI rilevati dal verificatore sintetico sono noti e non costituiscono regressioni.

---

## 3. Corsi Sant’Anna

### Caso patologico: SA12

- [x] Migrato `AD_SA12.html`.

- [x] Normalizzato il codice canonico in `SAnna/SA_12`.

- [x] Gestita la lezione `20 bis`.
  - Conservato il nome logico non numerico.
  - File:
    - `SA12_20bis.avi`;
    - `SA12_20bis.pdf`.

- [x] Conservato anche `SA12_20_originale.pdf`.

- [x] Gestiti i video mancanti indicati nei dati del corso.
  - La lezione 26 risulta priva di AVI.
  - La situazione della lezione 20 è stata assorbita nella migrazione della sequenza con `20 bis`.

- [x] Conservata la sezione “Esercizi”:
  - `SA12_Esercizi.pdf`;
  - `SA12_Esercizi-Hint.pdf`.

- [~] Verificare il campo “Anno”.
  - Il target è “Studenti secondo anno SSSUP”.
  - La scheda riporta “Primo”.

- [x] Ripulito l’HTML originario duplicato/malformato senza perdere i contenuti utili.

### Altri corsi Sant’Anna

- [x] Registrato `SA11`, lezione 20: AVI realmente mancante.

- [x] Registrato `SA13`, lezione 22: AVI realmente mancante.

- [ ] Verificare che `SA15` conservi la sezione “Ricevimento”:
  - testo del compitino;
  - correzione AVI;
  - correzione PDF.

- [x] Creata e collegata la pagina introduttiva `complementi-santanna.html`.

- [x] Normalizzati i codici canonici:
  - `SAnna/SA_10`;
  - `SAnna/SA_11`;
  - `SAnna/SA_12`;
  - `SAnna/SA_13`;
  - `SAnna/SA_14`;
  - `SAnna/SA_15`.

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
  - Il riferimento storico al Book è conservato.

- [x] Create o confermate le pagine introduttive e i breadcrumb dei gruppi:
  - Calcolo delle variazioni;
  - Istituzioni di Analisi Matematica;
  - corsi speciali / Freiberg.

---

## 5. Pagine e navigazione generale

- [~] Completare il controllo manuale dei breadcrumb dopo la migrazione.
  - Le principali correzioni sono già state effettuate.
  - I controlli automatici dei media non mostrano regressioni dovute alla normalizzazione dell'Archivio Didattico.

- [x] Riveduto `AD_Index.html`.
  - Il collegamento dei precorsi punta ora a `precorso-matematica.html`.
  - La modifica è stata committata separatamente.

- [ ] Decidere cosa fare di `AD_Video_vecchio.html`.
  - Attualmente è un backup locale non tracciato.
  - Possibili scelte:
    - lasciarlo fuori da Git;
    - spostarlo in una cartella di archivio;
    - eliminarlo quando non serve più.

- [~] Completare il controllo visuale delle pagine introduttive:
  - collegamenti alle edizioni;
  - ordine cronologico;
  - testi sintetici;
  - coerenza grafica.

---

## 6. Controlli tecnici comuni

- [x] Verificato e completato l'uso del nuovo Google Analytics nelle pagine attive.
  - Il vecchio UA è stato sottoposto ad audit.
  - Il nuovo tracciamento è operativo.
  - Sono tracciati anche i download statici dalle pagine dei corsi.

- [x] Creato il verificatore dei documenti:
  - `strumenti/verifica_documenti.py`.
  - Ultimo controllo dopo la normalizzazione dei percorsi: `151` validi, `0` errori, `0` percorsi sospetti.

- [x] Creato il verificatore delle lezioni:
  - `strumenti/verifica_lezioni.py`.
  - Ultimo controllo dopo la normalizzazione: `170/172` validi.
  - I soli due 404 sono gli AVI notoriamente assenti di `AM2_21`, corso PDF-only.

- [x] I file mancanti sono rappresentati separatamente per AVI e PDF nei dati dei corsi.
  - Il verificatore rileva 30 assenze dichiarate nei JavaScript.

- [~] Completare i controlli manuali non automatizzabili:
  - errori in console;
  - resa responsive;
  - tabelle molto lunghe;
  - footer e licenza.

---

## 7. Inventario e Book

- [x] Creato il generatore automatico:
  - `strumenti/genera-inventario.py`;
  - output in `documentazione/INVENTARIO-CORSI.md`.

- [x] Verificata automaticamente la presenza di indici cliccabili nei Book.
  - Inventario registrato in `documentazione/indici-book.csv`.

- [x] Resa sintetica la colonna **Indice cliccabile**:
  - `sì` se tutti i volumi sono cliccabili;
  - `no` se nessun volume lo è;
  - `parziale (n/totale)` negli eventuali casi misti.

- [x] Creati ex novo i Book storici mancanti ad alta priorità:
  - AM1 2006/2007: `T07_Book1.pdf`, `T07_Book2.pdf`;
  - AM1 2007/2008: `T08_Book1.pdf`, `T08_Book2.pdf`;
  - AM1 2008/2009: `AM09_Book1.pdf`, `AM09_Book2.pdf`;
  - AM1 2009/2010: `AM10_Book1.pdf`, `AM10_Book2.pdf`;
  - AM1 2010/2011: `AM11_Book1.pdf`, `AM11_Book2.pdf`;
  - AM2 2006/2007: `C07_Book.pdf`.

- [x] Inseriti i nuovi Book nel sito e verificati i collegamenti.

- [x] Registrati nell'inventario come cliccabili i nuovi Book e i Book PCM 2007/2009.

- [ ] Rigenerare con indice cliccabile i Book ancora effettivamente usati dal sito che ne sono privi o non soddisfano lo standard attuale.
  - Usare `documentazione/indici-book.csv` come fonte operativa aggiornata, evitando liste statiche destinate a diventare obsolete.

- [~] Verificare se `ALAM2_14_Bookbis.pdf` è soltanto un residuo storico.
  - Non è richiamato da alcun file dati del sito.
  - `ALAM2_14_Book.pdf`, che è quello effettivamente usato, ha l’indice cliccabile.

---

## 8. Git

- [x] Separati in commit tematici i principali blocchi di restauro e migrazione.

- [x] Normalizzati i percorsi dell'Archivio Didattico nei `js/corsi` e pubblicati sul branch `nuovo-sito`.
  - Commit: `6a9067e` — `Normalizza i percorsi dell'Archivio Didattico`.

- [ ] Prima di ogni futuro blocco di commit continuare a usare:
  - `git status --short`;
  - `git diff --check`;
  - `git diff --stat`;
  - `git diff --cached --check`;
  - `git diff --cached --stat`.

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

Per i file dichiarati mancanti o anomali, non dedurre la completezza da un semplice conteggio: quando serve, confrontare i nomi effettivi dei file.

---

## 10. Opzioni del generatore

- [x] Aggiunta l’opzione:

      const MostraVideoLezioni = false;

  per i corsi che dispongono soltanto dei PDF.

  Quando l’opzione è attiva, la tabella delle lezioni:
  - non mostra la colonna AVI;
  - non genera una sequenza di `Missing!`;
  - mantiene invariata la struttura dei dati;
  - continua a mostrare normalmente la colonna PDF.

  Se l’opzione non è definita, il comportamento predefinito resta quello usuale, con entrambe le colonne AVI e PDF.

- [ ] Correggere i caratteri di sostituzione Unicode (`�`, U+FFFD) introdotti durante la migrazione di alcune vecchie annate SSSUP.
  I file interessati sono:
  - `js/corsi/SAnna_10.js`;
  - `js/corsi/SAnna_11.js`;
  - `js/corsi/SAnna_13.js`.

---

## 11. Magazzino dei media e archivio locale

### Stato raggiunto

- [x] Fotografata e studiata l'organizzazione del server.

- [x] Creato `ArchivioDidattico` come archivio canonico pulito.

- [x] Migrati i corsi nelle sottocartelle:
  - `Avi/`;
  - `Pdf/`;
  - `Documenti/`;
  - `Ricevimento/` dove necessario.

- [x] Definiti e applicati i codici canonici delle cartelle dei corsi.

- [x] Normalizzati i nomi incoerenti sia nel Magazzino sia in OneDrive.

- [x] Aggiornati gli `ArchivioCorso` nella Home Page senza rinominare i file storici interni.

- [x] Verificati automaticamente documenti e lezioni dopo il renaming.

- [x] Recuperati in OneDrive tutti gli AVI e PDF canonici delle lezioni che risultavano mancanti o parziali.

- [x] Allineata la gerarchia `Famiglia/Corso` di OneDrive con quella del Magazzino.

### Prossimi passi

- [ ] Confrontare globalmente e in modo riproducibile Magazzino e OneDrive per i media pubblicati, ora che i percorsi canonici coincidono.

- [ ] Costruire una tabella maestra con una riga per ogni lezione e almeno:

      Corso | Lezione | PDF | AVI | JNT originale | Recording originale

- [ ] Individuare automaticamente nei corsi locali i sorgenti JNT originali.

- [ ] Individuare e classificare i recording originali, distinguendoli dagli AVI pubblicati.

- [ ] Decidere una convenzione stabile per le cartelle dei sorgenti originali senza alterare i nomi storici quando non necessario.

- [ ] Recuperare localmente i `Documenti/Book` presenti sul server ma non ancora conservati nell'archivio OneDrive, dove opportuno.

### Regola corrente

`ArchivioDidattico` sul server resta il riferimento canonico per il materiale pubblicato.

OneDrive deve diventare il master completo, comprendente:

- materiale pubblicato;
- JNT originali;
- recording originali;
- sorgenti TeX e altri materiali di produzione quando disponibili.

`Tablet` resta invece uno strato di compatibilità storico e non deve essere usato come fonte canonica per nuovi sviluppi.

---

## 12. Versione 3.0

### Rifiniture grafiche e navigazione

- [x] Rendere interamente cliccabili le card con una sola destinazione.
- [x] Riorganizzare `AD_Index.html` in disposizione `1 + 2 + 1`.
- [x] Applicare la stessa filosofia a `AD_Index_Videolezioni.html`, `AD_Intro.html`, `AD_Corsi.html` e `nuova-home.html`.
- [x] Correggere breadcrumb e struttura HTML di `AD_Storia.html`.
- [x] Uniformare la scala dello sfondo a lavagna tra le diverse pagine.
- [~] Rivedere con calma colori, ombre, padding, spaziature e larghezze relative delle card.
- [~] Rifattorizzare il CSS separando componente, layout, variante e responsive.
- [ ] Controllare tutte le pagine modificate a finestra larga e stretta.
- [ ] Verificare che i breadcrumb abbiano sempre `class="breadcrumb"` e che non vi siano `<main>` o `<header>` duplicati.

### Precorsina

- [ ] Verificare l'affidabilità dei metadati in `js/corsi/*.js`.
- [ ] Definire il sottoinsieme iniziale del materiale del Precorso.
- [ ] Preparare un indice delle lezioni con numero, data, argomento, video, PDF ed eventuali prerequisiti.
- [ ] Decidere come trattare lezioni con materiali mancanti o condivisi.

---

## 13. Ultimo checkpoint operativo — 26 agosto 2026

- [x] OneDrive e Magazzino usano la stessa nomenclatura canonica `Famiglia/Corso`.
- [x] Gli AVI e PDF mancanti identificati durante il recupero sono stati copiati sul Mac.
- [x] `ArchivioCorso` è stato aggiornato nei 18 file JavaScript interessati.
- [x] Nessun vecchio `ArchivioCorso` incoerente rimane in `js/corsi`.
- [x] Verifica documenti: `151` validi, `0` errori, `0` percorsi sospetti.
- [x] Verifica lezioni: `170/172` validi; i due errori sono esclusivamente gli AVI noti di `AM2_21`.
- [x] Commit e push della normalizzazione completati (`6a9067e`).
- [ ] Prossimo progetto operativo: inventario completo per lezione di `PDF / AVI / JNT / recording originale`.

