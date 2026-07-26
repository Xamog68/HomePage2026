# TODO — Restauro del sito didattico

Registro delle stranezze, anomalie e decisioni ancora da prendere emerse durante la migrazione.

Legenda:

- [ ] da fare
- [~] da verificare / decisione da prendere
- [x] risolto

---

## 1. Precorsi

- [ ] Controllare i breadcrumb di `AD_PCM_07.html`, `AD_PCM_08.html`, `AD_PCM_09.html`, `AD_PCM_25.html`.
  - Il collegamento corretto dovrebbe puntare a `precorso-matematica.html`.
  - In alcune versioni era rimasto il vecchio link `AD_Precorsi.html`.

- [ ] Verificare definitivamente il Book 2008.
  - File previsto: `PCM_08_Book.pdf`.
  - Deve comparire nella pagina `AD_PCM_08.html`.
  - Non deve comparire tra i materiali generali della pagina introduttiva.

- [ ] Rivedere la pagina `precorso-matematica.html`.
  - Testo introduttivo.
  - Organizzazione delle edizioni 2007, 2008, 2009, 2025.
  - Materiali generali: Schede, Esercizi, Test.
  - Eventuale sezione “Come usare i materiali”.

- [ ] Rivedere l’inserimento del Precorso in `archivio-didattico.html`.
  - Posizione della scheda.
  - Spaziature e larghezze.
  - Coerenza con le altre schede.

---

## 2. Analisi Matematica 2

### Caso patologico: 2006/07

- [ ] Migrare `AD_C07.html`.

- [~] Decidere come rappresentare i PDF condivisi da più lezioni.
  - Esempio: lezioni 1–3 collegate allo stesso file `C07_L01-03.pdf`.
  - Soluzione probabilmente preferibile: ripetere lo stesso link PDF nelle tre righe.

- [ ] Verificare e correggere le date sospette:
  - `15/10/06` nella sequenza di novembre.
  - ripetizione di `22/11/06`.
  - eventuali altre incongruenze cronologiche.

- [ ] Gestire la lezione 41, priva sia di AVI sia di PDF.

### Corsi regolari

- [ ] Controllare nel browser tutte le pagine migrate.
  - Link AVI.
  - Link PDF.
  - Book.
  - Documenti burocratici.
  - Console JavaScript senza errori.
  - Visualizzazione su schermo stretto.

---

## 3. Corsi Sant’Anna

### Caso patologico: SA12

- [ ] Migrare `AD_SA12.html`.

- [~] Gestire la lezione `20 bis`.
  - Nome logico non numerico.
  - File:
    - `SA12_20bis.avi`
    - `SA12_20bis.pdf`

- [ ] Gestire i video mancanti:
  - lezione 20;
  - lezione 26.

- [ ] Conservare la sezione “Esercizi”:
  - `SA12_Esercizi.pdf`;
  - `SA12_Esercizi-Hint.pdf`.

- [~] Verificare il campo “Anno”.
  - Il target è “Studenti secondo anno SSSUP”.
  - La scheda riporta “Primo”.

- [ ] Ripulire mentalmente l’HTML originario duplicato/malformato, senza perdere contenuti.

### Altri corsi Sant’Anna

- [ ] Controllare `SA11`, lezione 20: AVI mancante.

- [ ] Controllare `SA13`, lezione 22: AVI mancante.

- [ ] Verificare che `SA15` conservi la sezione “Ricevimento”:
  - testo del compitino;
  - correzione AVI;
  - correzione PDF.

- [ ] Creare o confermare la pagina introduttiva `complementi-santanna.html`.

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

- [ ] Verificare Freiberg 2017.
  - Numerazione file senza zero iniziale.
  - `CifreNumeroLezione = 1`.
  - Book nella cartella delle lezioni, non in `HP_AD`.

- [ ] Creare o confermare le pagine introduttive e i breadcrumb provvisori dei gruppi:
  - Calcolo delle variazioni;
  - Istituzioni di Analisi Matematica;
  - corsi speciali / Freiberg.

---

## 5. Pagine e navigazione generale

- [ ] Controllare tutti i breadcrumb dopo la migrazione.
  - Nessun collegamento deve tornare per errore alle vecchie pagine.

- [ ] Rivedere `AD_Index.html`.
  - Attualmente risultava modificato ma non incluso nel commit dei Precorsi.
  - Capire se la modifica è utile, accidentale o ormai superata.

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

## 7. Git

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

## 8. Metodo di lavoro

Quando emerge una stranezza:

1. annotarla in questo file;
2. indicare pagina, lezione e dato sospetto;
3. non correggerla durante una migrazione meccanica;
4. verificare la fonte originaria o i file sul server;
5. correggerla con un commit separato;
6. cambiare `[ ]` o `[~]` in `[x]` quando risolta.
