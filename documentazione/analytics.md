# Google Analytics 4

Questa nota documenta l'implementazione di Google Analytics nel sito e, soprattutto, i controlli utili quando in futuro sembrerà che gli eventi non funzionino.

## Implementazione

Tutte le pagine HTML attive caricano una sola volta:

```html
<script src="js/analytics.js"></script>
```

La logica comune è quindi centralizzata in:

```text
js/analytics.js
```

Il sito invia sia gli eventi raccolti automaticamente da GA4, per esempio `page_view`, `click` e `file_download`, sia due eventi personalizzati:

```text
download_lezione
download_documento
```

I link generati dinamicamente vengono marcati con:

```js
link.dataset.analyticsGestito = "true";
```

Un listener delegato intercetta invece i click sui link statici e riconosce automaticamente i download da tracciare. Il marcatore evita che lo stesso click sia contato due volte.

## Evento `download_lezione`

Viene inviato quando l'utente apre o scarica il file di una lezione.

Parametri:

```text
corso
lezione
formato
```

## Evento `download_documento`

Viene inviato quando l'utente apre o scarica un documento diverso da una lezione.

Parametri:

```text
corso
sezione
file
titolo
formato
```

## Definizioni personalizzate in GA4

Per usare i parametri nelle Esplorazioni, essi devono essere registrati in GA4 come dimensioni personalizzate con ambito **Evento**.

Percorso indicativo:

```text
Amministrazione
→ Visualizzazione dei dati
→ Definizioni personalizzate
```

Le dimensioni da registrare sono:

| Nome | Parametro evento |
|---|---|
| Corso | `corso` |
| Lezione | `lezione` |
| Formato | `formato` |
| Sezione | `sezione` |
| File | `file` |
| Titolo | `titolo` |

I nomi dei parametri devono coincidere esattamente, comprese minuscole e underscore.

## Esplorazione `download_lezione`

È stata predisposta un'Esplorazione con:

- righe: Corso, Lezione, Formato;
- valori: Utenti attivi e conteggi degli eventi;
- filtro: nome evento uguale a `download_lezione`.

I dati delle Esplorazioni non sono immediati. Gli eventi possono apparire subito in DebugView o nel rapporto in tempo reale, ma richiedere molte ore prima di comparire nelle Esplorazioni e nelle dimensioni personalizzate. L'intervallo “Oggi” significa quindi “gli eventi di oggi già elaborati”, non “ciò che sta accadendo ora”.

## Come verificare il funzionamento

Usare tre livelli distinti di controllo:

1. **DebugView**: verifica quasi immediata degli eventi inviati in modalità debug.
2. **Tempo reale**: eventi ricevuti negli ultimi 30 minuti.
3. **Esplorazioni**: dati elaborati e aggregati; possono arrivare con ritardo.

Una verifica completa consiste nel:

1. aprire una pagina del sito;
2. scaricare una lezione;
3. aprire un documento;
4. visitare un'altra pagina di corso;
5. controllare la presenza di `page_view`, `download_lezione`, `download_documento` e `file_download`.

## Browser di prova

Il browser personale usa **Disconnect**. L'estensione può bloccare il caricamento di `googletagmanager.com/gtag/js` e quindi impedire l'invio degli eventi a Google Analytics. Questo comportamento è intenzionale e non indica un errore del sito.

Per i collaudi è stato creato un profilo Firefox separato, pulito e senza estensioni. Il profilo appare come un'applicazione distinta nel Dock ed è quello da usare per verificare Analytics e, più in generale, il comportamento del sito senza interferenze.

Regola pratica:

> Se gli eventi non arrivano ma il codice sembra corretto, provare prima con il profilo Firefox pulito e solo dopo modificare il codice.

La Troubleshoot Mode di Firefox disattiva temporaneamente le estensioni ed è utile per la diagnosi, ma il profilo separato è preferibile per i test ordinari.

## Diagnosi del problema risolto nel luglio 2026

Durante i primi test sembrava che gli eventi automatici funzionassero mentre quelli personalizzati non arrivassero. La confusione nasceva dal fatto che eventi diversi erano generati in momenti diversi:

- `page_view` nasce dal caricamento della pagina di destinazione;
- `download_lezione` e `download_documento` nascono dal click sul link nella pagina di partenza.

Le chiamate a `gtag("event", ...)` venivano eseguite e gli eventi comparivano nel `dataLayer`, ma Disconnect impediva il normale funzionamento di `gtag.js`. Avviando Firefox in Troubleshoot Mode, e successivamente usando il profilo pulito, gli eventi personalizzati sono comparsi correttamente in DebugView.

La stessa verifica è stata ripetuta da Firefox su iPad: sia il pulsante della pagina di prova sia il download di una lezione hanno generato correttamente gli eventi.

Conclusione: l'implementazione del sito è corretta; l'assenza degli eventi nel Firefox personale era dovuta al blocco lato browser.

## File e strumenti temporanei

La pagina temporanea `test-analytics.html`, usata per isolare il problema, è stata eliminata dopo la verifica.

Anche `debug_mode: true` è stato rimosso dalla configurazione ordinaria. Non va riattivato stabilmente: si usa soltanto per test mirati.

È disponibile inoltre:

```text
strumenti/audit-analytics.sh
```

per individuare eventuali residui della vecchia implementazione Universal Analytics (`UA-...`, `analytics.js`) nelle pagine del sito.

## Stato al 31 luglio 2026

- tutte le pagine HTML attive caricano `js/analytics.js` una sola volta;
- gli eventi automatici GA4 arrivano;
- `download_lezione` arriva correttamente;
- `download_documento` arriva correttamente;
- i parametri personalizzati vengono inviati;
- il funzionamento è stato verificato in DebugView con un browser pulito e su iPad;
- resta soltanto da attendere l'elaborazione dei dati nelle Esplorazioni e controllare che le righe Corso / Lezione / Formato si popolino correttamente.
