# Migrazione dell'Archivio Didattico

## Struttura adottata

Ogni corso migrato è conservato in:

ArchivioDidattico/
  Famiglia/
    Corso/
      Pdf/
      Avi/
      Documenti/

Eventuali materiali aggiuntivi possono avere cartelle dedicate, per esempio:

Ricevimento/
  Pdf/
  Avi/

I vecchi indirizzi continuano a funzionare mediante link simbolici.

Nel nuovo sito, i corsi migrati dichiarano:

var ArchivioCorso = "...";
var PrefissoFile = "...";

## Famiglie migrate

- Precorsi
- SAnna
- AM1, dalle annate 2008/09 a 2025/26

## Problemi aperti

### File mancanti

- AM12_Burocrazia.pdf
  - dichiarato in js/corsi/AM1_12.js;
  - non presente sul server;
  - disponibile sul computer locale e da trasferire in:
    ArchivioDidattico/AM1/AM12/Documenti/.

### Collegamenti ancora indiretti

- Il ricevimento di AM1_09.js usa ancora PercorsoRicevimento sotto Tablet/AM09.
  I file funzionano grazie ai link simbolici, ma il nuovo sito potrebbe puntare
  direttamente a ArchivioDidattico/AM1/AM09/Ricevimento/.

### Corsi non ancora presenti sul server

- AM1_27.js esiste nel nuovo sito, ma non esiste ancora la corrispondente
  directory di materiali sul server.

## Anomalie risolte

- Tablet/AM12/AM2_16_L064.pdf era un file AM2 del 2015 finito per errore
  nella directory AM12. È stato eliminato dalla posizione errata.
- Le directory storiche Limbo e ccount sono state conservate, ma non
  classificate come materiale didattico.

## Regola operativa

Per ogni nuova famiglia:

1. inventario delle directory in Tablet;
2. associazione con i file JavaScript del nuovo sito;
3. esecuzione di migra_corso.sh check;
4. registrazione delle anomalie;
5. esecuzione di migra_corso.sh run;
6. migrazione dei documenti aggiuntivi;
7. aggiornamento dei JavaScript;
8. controllo dei link simbolici e prova del sito.

## Aggiornamento: migrazione AM2

### Famiglia completata

È stata completata la migrazione della famiglia AM2 per i seguenti corsi:

- C07, corrispondente ad Analisi Matematica 2 2006/2007;
- AM2_14;
- AM2_16;
- AM2_18;
- AM2_20;
- AM2_21;
- AM2_23;
- AM2_24.

Per ciascun corso sono stati migrati:

- PDF delle lezioni;
- file AVI;
- documenti aggiuntivi dichiarati nel nuovo sito;
- link simbolici necessari a mantenere attivi i vecchi indirizzi.

I file JavaScript del nuovo sito sono stati aggiornati con ArchivioCorso e PrefissoFile.

### C07

C07 è stato classificato nella famiglia AM2 mantenendo il nome storico:

ArchivioDidattico/AM2/C07/

Il corso contiene anche due incontri di ricevimento:

- C07_R01;
- C07_R02.

Sono stati conservati nella sottostruttura:

ArchivioDidattico/AM2/C07/Ricevimento/
  Pdf/
  Avi/

La loro utilità potrà essere rivalutata in futuro.

### Documento condiviso tra AL_14 e AM2_14

Nell'anno accademico 2013/2014 il corso era articolato in due moduli:

- Algebra Lineare, oggi identificato come AL_14;
- Analisi Matematica 2, oggi identificato come AM2_14.

I due moduli condividevano la stessa documentazione burocratica:

ALAM2_14_Burocrazia.pdf

Il file è attualmente conservato in:

ArchivioDidattico/AM2/AM2_14/Documenti/

Quando verrà migrato AL_14, il relativo sito dovrà puntare allo stesso file,
direttamente oppure mediante link simbolico, senza crearne una copia distinta.

### Verifiche eseguite

- Tutti i documenti dichiarati nei file AM2_*.js sono stati trovati sul server.
- Nessun link simbolico rotto è stato rilevato in Home_Page/Files/HP_AD dopo la migrazione.
- Le directory storiche sotto Tablet continuano a funzionare mediante link simbolici.

## Stato al 1 agosto 2026

### Famiglie migrate

Sono state completate, sul server e nel nuovo sito, le migrazioni delle seguenti famiglie:

- Precorsi:
  - PCM07
  - PCM08
  - PCM09
  - PCM_25
- SAnna:
  - SA10
  - SA11
  - SA12
  - SA13
  - SA14
  - SA15
- Analisi Matematica 1:
  - AM09
  - AM10
  - AM11
  - AM12
  - AM13
  - AM1_15
  - AM1_17
  - AM1_25
  - AM1_26
- Analisi Matematica 2:
  - C07
  - AM2_14
  - AM2_16
  - AM2_18
  - AM2_20
  - AM2_21
  - AM2_23
  - AM2_24
- Elementi di Calcolo delle Variazioni:
  - CdV_16
  - CdV_17
  - CdV_18
- Istituzioni di Analisi Matematica:
  - IstAM_19
  - IstAM_20
  - IstAM_21
  - IstAM_22
- Algebra Lineare:
  - ALAM2_14, esposto nel sito come AL_14
  - AL_15
  - AL_19
  - AL_22
  - AL_23
  - AL_24
- Freiberg:
  - Freiberg_17
- Corsi storici di Analisi Matematica 1:
  - T07
  - T08

Per i corsi migrati:

- i file reali sono conservati in ArchivioDidattico;
- PDF e AVI sono separati nelle rispettive sottocartelle;
- i documenti aggiuntivi sono conservati in Documenti;
- i vecchi indirizzi sono mantenuti mediante link simbolici;
- il nuovo sito usa ArchivioCorso e PrefissoFile.

### Materiali aggiuntivi conservati

Sono stati conservati anche i materiali di ricevimento presenti in:

- AM09;
- C07;
- T07;
- T08.

Le directory storiche Limbo e ccount sono state mantenute senza essere
classificate come materiale didattico.

### Documento comune del corso 2013/2014

Il corso 2013/2014 comprendeva un modulo di Algebra Lineare e uno di
Analisi Matematica 2, oggi esposti rispettivamente come AL_14 e AM2_14.

Entrambi usano la documentazione burocratica:

ALAM2_14_Burocrazia.pdf

Il file reale è attualmente conservato in:

ArchivioDidattico/AM2/AM2_14/Documenti/

ed è raggiunto dalle pagine storiche tramite il collegamento presente in HP_AD.

### Problemi ancora aperti

- AM12_Burocrazia.pdf:
  il file non era presente sul server ed è disponibile sul computer locale;
  deve essere caricato in:
  ArchivioDidattico/AM1/AM12/Documenti/.

- AM1_27.js:
  la pagina esiste nel nuovo sito, ma il relativo materiale non è ancora
  presente sul server.

- I percorsi dei ricevimenti nei file JavaScript usano ancora, dove presenti,
  gli indirizzi storici sotto Tablet. Funzionano mediante link simbolici,
  ma potranno essere convertiti in futuro in riferimenti diretti
  ad ArchivioDidattico.

- Restano da valutare le directory tecniche o storiche:
  Tablet/PCM
  Tablet/Precorsi
  Tablet/Temporaneo

### Anomalie risolte

- Tablet/AM12/AM2_16_L064.pdf era un file estraneo finito per errore
  nella directory AM12 ed è stato eliminato dalla posizione sbagliata.
