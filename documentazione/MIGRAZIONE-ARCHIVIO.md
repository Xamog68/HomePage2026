# Migrazione dell'Archivio Didattico

## Stato attuale — 26 agosto 2026

La migrazione dell'Archivio Didattico è sostanzialmente completata.

Il server pubblico usa come archivio canonico:

```text
ArchivioDidattico/
  Famiglia/
    Corso/
      Avi/
      Pdf/
      Documenti/
      Ricevimento/      # dove necessario
        Avi/
        Pdf/
```

L'archivio locale in OneDrive (`Corsi_Universitari`) è stato riorganizzato con la stessa gerarchia `Famiglia/Corso` per tutti i corsi presenti nel Magazzino.

Per i materiali delle lezioni, il recupero dal server al Mac è stato completato e verificato per `Avi` e `Pdf`, comprese le annate storiche che in precedenza mancavano o erano incomplete.

Il vecchio sito continua a funzionare tramite lo strato di compatibilità sotto `Tablet` e i link simbolici storici. Il nuovo sito usa invece direttamente `ArchivioDidattico` mediante la variabile JavaScript:

```js
var ArchivioCorso = "...";
```

I nomi storici dei singoli file (`T07_L...`, `C07_L...`, `ALAM2_14_L...`, ecc.) sono stati deliberatamente conservati. La normalizzazione riguarda il nome canonico della cartella del corso, non i nomi interni dei media.

---

## Nomenclatura canonica

La regola adottata per le cartelle dei corsi è, quando possibile:

```text
Famiglia/SiglaCorso_YY
```

con anno a due cifre.

Esempi:

```text
AM1/AM1_09
AM12/AM12_07
AM2/AM2_07
AL/AL_14
Precorsi/PCM_07
SAnna/SA_10
```

Il 26 agosto 2026 sono stati eliminati gli ultimi nomi storici incoerenti nelle cartelle canoniche. In particolare:

```text
AM1/AM09          -> AM1/AM1_09
AM1/AM10          -> AM1/AM1_10
AM1/AM11          -> AM1/AM1_11
AM1/AM12          -> AM1/AM1_12
AM1/AM13          -> AM1/AM1_13

AM12/T07          -> AM12/AM12_07
AM12/T08          -> AM12/AM12_08

AM2/C07           -> AM2/AM2_07

AL/ALAM2_14       -> AL/AL_14

Precorsi/PCM07    -> Precorsi/PCM_07
Precorsi/PCM08    -> Precorsi/PCM_08
Precorsi/PCM09    -> Precorsi/PCM_09

SAnna/SA10        -> SAnna/SA_10
SAnna/SA11        -> SAnna/SA_11
SAnna/SA12        -> SAnna/SA_12
SAnna/SA13        -> SAnna/SA_13
SAnna/SA14        -> SAnna/SA_14
SAnna/SA15        -> SAnna/SA_15
```

Gli stessi rinomini sono stati applicati sia al Magazzino sul server sia all'archivio locale OneDrive.

---

## Corsi presenti nell'Archivio Didattico

### Algebra Lineare

```text
AL/AL_14
AL/AL_15
AL/AL_19
AL/AL_22
AL/AL_23
AL/AL_24
```

### Analisi Matematica 1 e 2 storica

```text
AM12/AM12_07
AM12/AM12_08
```

Le due directory corrispondono ai corsi storicamente indicati come `T07` e `T08`. I nomi dei file interni restano `T07_*` e `T08_*`.

### Analisi Matematica 1

```text
AM1/AM1_09
AM1/AM1_10
AM1/AM1_11
AM1/AM1_12
AM1/AM1_13
AM1/AM1_15
AM1/AM1_17
AM1/AM1_25
AM1/AM1_26
```

### Analisi Matematica 2

```text
AM2/AM2_07
AM2/AM2_14
AM2/AM2_16
AM2/AM2_18
AM2/AM2_20
AM2/AM2_21
AM2/AM2_23
AM2/AM2_24
```

`AM2_07` è il corso storicamente indicato come `C07`; i file interni conservano il prefisso `C07_`.

### Elementi di Calcolo delle Variazioni

```text
CdV/CdV_16
CdV/CdV_17
CdV/CdV_18
```

### Freiberg

```text
Freiberg/Freiberg_17
```

### Istituzioni di Analisi Matematica

```text
IstAM/IstAM_19
IstAM/IstAM_20
IstAM/IstAM_21
IstAM/IstAM_22
```

### Precorsi

```text
Precorsi/PCM_07
Precorsi/PCM_08
Precorsi/PCM_09
Precorsi/PCM_25
```

### Sant'Anna

```text
SAnna/SA_10
SAnna/SA_11
SAnna/SA_12
SAnna/SA_13
SAnna/SA_14
SAnna/SA_15
```

---

## Materiali aggiuntivi e casi storici

### Ricevimento

Sono conservati materiali di ricevimento almeno per:

- `AM1_09`;
- `AM2_07` (`C07`);
- `AM12_07` (`T07`);
- `AM12_08` (`T08`).

Dove presenti, sono organizzati in:

```text
Ricevimento/
  Avi/
  Pdf/
```

Alcuni JavaScript del sito possono ancora usare percorsi storici sotto `Tablet` per il ricevimento. Questi collegamenti continuano a funzionare tramite lo strato di compatibilità e potranno essere normalizzati separatamente.

### Documento condiviso AL_14 / AM2_14

Nell'anno accademico 2013/2014 Algebra Lineare e Analisi Matematica 2 condividevano la documentazione burocratica:

```text
ALAM2_14_Burocrazia.pdf
```

Il nome storico del file è stato conservato. La normalizzazione della cartella `AL/ALAM2_14` in `AL/AL_14` non comporta la rinomina dei file interni.

### Sant'Anna

Sono conservate le anomalie storiche reali, fra cui:

- `SA11_20.pdf` senza corrispondente AVI;
- `SA12_20bis.avi` e `SA12_20bis.pdf`;
- `SA12_20_originale.pdf`;
- `SA13_22.pdf` senza corrispondente AVI.

Queste differenze non devono essere corrette artificialmente: descrivono il materiale realmente disponibile.

### AM2_21

`AM2_21` è un corso PDF-only. Il sito lo gestisce mediante l'opzione:

```js
const MostraVideoLezioni = false;
```

I due 404 sugli AVI prodotti dal verificatore sintetico delle lezioni sono quindi noti e non rappresentano regressioni.

---

## Book storici

Nel luglio-agosto 2026 è stato completato il recupero/ricostruzione dei Book storici mancanti per:

- AM1 2006/07 (`AM12_07`, già `T07`): `T07_Book1.pdf`, `T07_Book2.pdf`;
- AM1 2007/08 (`AM12_08`, già `T08`): `T08_Book1.pdf`, `T08_Book2.pdf`;
- AM1 2008/09: `AM09_Book1.pdf`, `AM09_Book2.pdf`;
- AM1 2009/10: `AM10_Book1.pdf`, `AM10_Book2.pdf`;
- AM1 2010/11: `AM11_Book1.pdf`, `AM11_Book2.pdf`;
- AM2 2006/07 (`AM2_07`, già `C07`): `C07_Book.pdf`.

I nuovi Book sono stati controllati manualmente e inseriti nel sito. Sono stati inoltre registrati come dotati di indice cliccabile nell'inventario dei Book.

Sono presenti anche i Book storici dei Precorsi 2007, 2008 e 2009 e quelli Sant'Anna già conservati sul server.

---

## Allineamento OneDrive ↔ Magazzino

L'archivio locale OneDrive è destinato a diventare il master completo, contenente non soltanto i materiali pubblicati ma anche i sorgenti originali quando disponibili.

Al 26 agosto 2026:

- la gerarchia `Famiglia/Corso` è stata normalizzata secondo gli stessi nomi del Magazzino;
- i PDF e gli AVI delle lezioni mancanti sul Mac sono stati recuperati dal server;
- i corsi parziali sono stati completati anche nei casi in cui OneDrive causava timeout durante il confronto delle directory;
- nei casi problematici il recupero è stato effettuato copiando chirurgicamente i singoli file mancanti;
- i conteggi finali dei corsi problematici coincidono con il materiale canonico del server.

In particolare sono stati recuperati integralmente o completati i materiali di:

- AM09, AM10, AM11;
- AM12_07 (`T07`) e AM12_08 (`T08`);
- AM1_12;
- AM1_17;
- AM2_07 (`C07`);
- AM2_14;
- AM2_16;
- CdV_16;
- PCM_07, PCM_08, PCM_09, PCM_25;
- SA_10, SA_11, SA_12, SA_13, SA_14.

Il prossimo passo dell'inventario locale sarà costruire una tabella maestra con una riga per ogni lezione e almeno le colonne:

```text
Corso | Lezione | PDF | AVI | JNT originale | Recording originale
```

Questa tabella dovrà distinguere il materiale pubblicato dal materiale sorgente realmente posseduto.

---

## Integrazione con HomePage2026

I file `js/corsi/*.js` usano `ArchivioCorso` per costruire i collegamenti verso il Magazzino.

Dopo la normalizzazione del 26 agosto 2026 sono stati aggiornati gli `ArchivioCorso` dei corsi interessati senza modificare:

- `PrefissoFile`;
- i percorsi storici usati dallo strato `Tablet`;
- i nomi dei singoli file;
- i prefissi storici come `T07`, `C07`, `ALAM2_14`, `AM09`, ecc.

La modifica è stata committata e pubblicata sul branch `nuovo-sito` con commit:

```text
6a9067e  Normalizza i percorsi dell'Archivio Didattico
```

---

## Verifiche automatiche dopo la normalizzazione

Dopo il renaming del Magazzino e l'aggiornamento della Home Page sono stati eseguiti entrambi i verificatori.

### Documenti

```text
Collegamenti da controllare: 151
Validi:            151
Errori:            0
Percorsi sospetti: 0
```

Script:

```text
strumenti/verifica_documenti.py
```

### Lezioni

```text
Controlli: 172
Validi:    170
Errori:      2
```

I due errori sono esclusivamente gli AVI di `AM2_21`, corso dichiaratamente PDF-only e già noto.

Il verificatore segnala inoltre 30 materiali mancanti dichiarati esplicitamente nei JavaScript: si tratta di assenze note e rappresentate nei dati del corso, non di errori introdotti dalla migrazione.

Script:

```text
strumenti/verifica_lezioni.py
```

I report generati in `strumenti/report/` non sono documentazione canonica e non vanno corretti a mano: devono essere rigenerati dai verificatori.

---

## Strato storico e fossili

Le directory e le pagine storiche non vengono normalizzate automaticamente.

In particolare:

- `Tablet` resta uno strato di compatibilità per i vecchi URL;
- `fossili/` nel repository conserva pagine storiche che possono contenere intenzionalmente i vecchi percorsi;
- riferimenti storici nella documentazione possono essere mantenuti quando descrivono una situazione passata;
- `Limbo`, `ccount` e altri residui tecnici sono stati separati dal materiale didattico canonico.

Non effettuare sostituzioni globali dei vecchi codici nei fossili o nei nomi dei file: la normalizzazione riguarda i percorsi canonici correnti.

---

## Recupero dal vecchio HD250-1

Il 26 agosto 2026 è stato ritrovato il backup storico:

```text
/Volumes/HD250-1/Tablettature/Lezioni
```

Il disco contiene sorgenti JNT, CAMREC e CAMPROJ del periodo 2005–2012 non presenti negli archivi canonici correnti. Prima della copia è stato eseguito un censimento in sola lettura.

### Corso sperimentale AM12_06

La directory storica `AM_T06` contiene le prime prove sperimentali di registrazione, di particolare valore storico personale.

Sopravvivono le lezioni:

```text
88, 89, 94, 95, 96
```

Per ciascuna sono presenti AVI, JNT e CAMREC. I CAMREC risalgono al dicembre 2005. Il materiale è stato conservato come corso canonico `AM12/AM12_06`, mantenendo i numeri originari delle lezioni.

### Eccezione di numerazione in AM12_08

Il file storico `T08_L00.jnt` corrisponde alla lezione 100, non a una lezione zero. Il timestamp, 19 dicembre 2007 alle 12:23, coincide con la centesima e ultima lezione.

La normalizzazione corretta è quindi:

```text
T08_L00.jnt -> AM12_08_L100.jnt
T08_L99+1.camrec -> AM12_08_L100.camrec
```

Anche PDF e AVI della centesima lezione portano storicamente il suffisso `L99+1`, confermando questa interpretazione. Gli altri file `T08_L01`–`T08_L99` mantengono invece la corrispondenza ordinaria con le lezioni 1–99.

### Missing storici smentiti dal backup

I seguenti casi erano marcati `NO` perché storicamente dichiarati missing nel JavaScript, ma il vecchio HD contiene materiale sorgente. Devono essere controllati manualmente prima di modificare definitivamente le dichiarazioni storiche.

- `AM1_10`, lezione 47: un JNT;
- `AM1_12`, lezione 46: un JNT;
- `PCM_08`, lezione 5: un JNT; AVI e CAMREC restano assenti;
- `PCM_09`, lezione 3: un JNT e un CAMREC; l'AVI resta assente;
- `SA_11`, lezione 20: un JNT.

Il ritrovamento mostra che la dicitura storica `Missing` può indicare l'assenza del materiale pubblicato, senza implicare necessariamente che JNT o registrazioni originali non siano mai esistiti.

### Missing ancora confermati

Sul vecchio HD non è stato trovato materiale per:

- `AM12_07`, lezioni 60 e 61;
- `AM2_07`, lezioni 41, 49 e 50.

### Convenzioni dei Precorsi 2007–2009

Un controllo incrociato fra date delle lezioni, timestamp dei sorgenti e materiali pubblicati ha chiarito la numerazione storica dei Precorsi.

In `PCM_07` il numero indica direttamente la lezione. I suffissi `bis`, `ter`, `a` e `b` indicano parti successive della stessa registrazione. Sono presenti JNT e CAMREC per tutte le dieci lezioni.

In `PCM_08` il primo numero indica il giorno e i suffissi `-1` e `-2` indicano le due lezioni della giornata. La corrispondenza è:

```text
01-1 -> L01    01-2 -> L02
02-1 -> L03    02-2 -> L04
...
10-1 -> L19    10-2 -> L20
```

Sono presenti i JNT di tutte le venti lezioni. I CAMREC coprono diciannove lezioni: manca `PCM3-1.camrec`, corrispondente a `PCM_08 L05`. Alcune lezioni hanno CAMREC suddivisi in più parti.

In `PCM_09` vale la stessa convenzione giorno/ora: cinque giorni con due lezioni ciascuno. Sono presenti JNT e CAMREC per tutte le dieci lezioni. I file `DisequazioniK.jnt` e `DisequazioniKK.jnt` sono duplicati byte per byte di `PCM09_2-2.jnt`, cioè del JNT della lezione 4. Dopo un'ulteriore verifica SHA-256, le due copie ridondanti sono state rimosse dall'archivio canonico; gli originali sul vecchio HD sono rimasti intatti e lo script di recupero li ignora esplicitamente.

### Bilancio definitivo del recupero

Sono stati copiati negli archivi canonici 1.591 file, per circa 100,27 GiB:

- 732 JNT;
- 827 CAMREC;
- 27 CAMPROJ;
- 5 AVI, relativi ad `AM12_06`.

Ogni copia è stata verificata confrontando dimensione e SHA-256 con il file sorgente. Non si sono verificate collisioni. Dopo la copia, 74 file dei Precorsi sono stati rinominati in due fasi per applicare la numerazione logica corretta senza sovrascritture; anche le destinazioni finali sono state nuovamente verificate tramite SHA-256.

Il conteggio di 1.591 descrive l'operazione di copia. Dopo la rimozione dei due duplicati esatti di `PCM_09 L04`, l'archivio canonico conserva 1.589 di questi file fisici: 730 JNT, 827 CAMREC, 27 CAMPROJ e 5 AVI.

Nell'inventario delle 2.900 lezioni il recupero e la correzione del riconoscimento dei CAMREC spezzati hanno prodotto le transizioni:

- 771 stati `JNT ? -> SI`;
- 5 stati `JNT NO -> SI`, da controllare manualmente;
- 768 stati `CAMREC ? -> SI`;
- 1 stato `CAMREC NO -> SI`, da controllare manualmente;
- 21 stati `CAMPROJ -- -> SI`.

Il censimento finale è:

```text
PDF      SI=2893  NO=7
AVI      SI=2821  NO=79
JNT      SI=2830  NO=67  ?=3
CAMREC   SI=2094  NO=79  ?=727
CAMPROJ  SI=34    NO=83  --=2783
```

I soli JNT ancora incerti sono `AL_14 L21`, `AM12_07 L68` e `AM2_14 L41`. Nei corsi coperti dal vecchio HD restano incerti soltanto i cinque CAMREC di `AM12_07 L17`, `L18`, `L26`, `L27` e `L29`; gli altri 722 CAMREC incerti appartengono a corsi non coperti dal backup.

I conteggi si riferiscono a lezioni logiche, non al numero fisico dei file: alcuni JNT coprono intervalli di lezioni e alcune registrazioni sono suddivise in più parti.

I cinque AVI, cinque JNT e cinque CAMREC di `AM12_06` sono stati recuperati, ma restano aggiuntivi rispetto a questi conteggi perché il corso non è ancora compreso nell'inventario basato sui JavaScript del sito.

---

## Regola operativa futura

Per ogni nuovo corso o per ogni intervento strutturale:

1. scegliere subito il codice canonico `Famiglia/Sigla_YY`;
2. conservare AVI, PDF e documenti nelle sottocartelle canoniche;
3. mantenere separati eventuali sorgenti originali nell'archivio locale;
4. dichiarare correttamente `ArchivioCorso` e `PrefissoFile` nel JavaScript;
5. non rinominare automaticamente i file storici se ciò non è necessario;
6. mantenere eventuali vecchi URL mediante link simbolici o altro strato di compatibilità;
7. eseguire `strumenti/verifica_documenti.py`;
8. eseguire `strumenti/verifica_lezioni.py`;
9. aggiornare l'inventario e questa documentazione quando cambia la struttura canonica.
