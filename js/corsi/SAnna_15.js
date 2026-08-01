var NomeCorso = "Complementi di Analisi Matematica II - SSSUP 2014/2015";
var ArchivioCorso = "SAnna/SA15";
var PrefissoFile = "SA15_L";
var Percorso = MEDIA.lezioni + "SA15/SA15_L";
var CifreNumeroLezione = 2;
var SchedaCorso = {
  nome: "Complementi di Analisi Matematica II",
  annoAccademico: "2014/2015",
  crediti: "3",
  ore: "30 (ufficialmente, 30 realisticamente)",
  target: "Studenti secondo anno SSSUP",
  anno: "Secondo",
  periodo: "Gennaio/Maggio",
  avviso: ""
};
var DocumentiCorso = [
  {
    sezione: "book",
    file: "SA15_Book.pdf",
    titolo: "Stampato integrale lezioni"
  }
];
var Lezioni = new Array();

Lezioni[1] = [ "1", "31/01/2015", "10:00", "11:00", "Limsup/liminf di successioni: definizione e caratterizzazione. Enunciato di alcuni risultati classici sui limiti in versione limsup/liminf.  Equivalenza con maxlim/minlim." ];
Lezioni[2] = [ "2", "31/01/2015", "11:00", "12:00", "Limsup/liminf di funzioni: definizione e caratterizzazione con le successioni. Funzioni semicontinue. Teorema di Bolzano-Weiertrass e di Weierstrass." ];
Lezioni[3] = [ "3", "31/01/2015", "12:00", "13:00", "Funzioni uniformemente continue. Teorema di Heine-Cantor. Moduli di continuità. Funzioni Lipschitziane e Holderiane." ];
Lezioni[4] = [ "4", "07/02/2015", "10:00", "11:00", "Successioni di funzioni. Definizione di convergenza puntuale ed uniforme. Esempi e controesempi classici. Teorema di scambio dell'integrale. Teorema di scambio della derivata (versione semplificata)." ];
Lezioni[5] = [ "5", "07/02/2015", "11:00", "12:00", "Successioni di Cauchy a valori reali. Completezza dei numeri reali. Dimostrazione via completezza che l'assoluta convergenza implica la convergenza per le serie numeriche. Teorema di scambio del limite per successioni di funzioni." ];
Lezioni[6] = [ "6", "07/02/2015", "12:00", "13:00", "Continuità del limite uniforme di funzioni continue. Teorema di scambio della derivata (versione integrale). Serie di funzioni. Convergenza totale implica convergenza uniforme. Esempi." ];
Lezioni[7] = [ "7", "11/02/2015", "15:00", "16:00", "Introduzione al calcolo delle variazioni: metodo indiretto vs metodo diretto. Condizioni necessarie per essere un punto di minimo (derivata lungo curve). Primo esempio di equazione di Eulero per un funzionale integrale." ];
Lezioni[8] = [ "8", "11/02/2015", "16:00", "17:00", "Lemma di Du Bois-Reymond. Secondo esempio di equazione di Eulero per funzionali integrali, con nascita di una condizione di Neumann. Condizioni al bordo di Dirichlet/Neumann. Esempi in cui il minimo non esiste." ];
Lezioni[9] = [ "9", "14/02/2015", "14:30", "15:30", "Equazione di Eulero per funzionali integrali generali (con dipendenza fino alla derivata prima). Ruolo della convessità dell'integranda nella dimostrazione dell'esistenza del minimo." ];
Lezioni[10] = [ "10", "14/02/2015", "15:30", "16:30", "Due esempi di studio di minimi di funzionali (ispirati dalla ricostruzione di segnali e dalla posizione di equilibrio di una trave)." ];
Lezioni[11] = [ "11", "28/02/2015", "14:30", "15:30", "Definizione di spazio metrico. Completezza. Completezza dello spazio delle funzioni limitate e dello spazio delle funzioni continue su un intervallo chiuso. Teorema delle contrazioni in uno spazio metrico." ];
Lezioni[12] = [ "12", "28/02/2015", "15:30", "16:30", "Teorema di esistenza ed unicità per il problema di Cauchy dimostrato mediante la formulazione integrale ed il teorema delle contrazioni. Discussione dell'unicità." ];
Lezioni[13] = [ "13", "28/02/2015", "16:30", "17:30", "Teorema di sola esistenza per equazioni differenziali dimostrato passando al limite in opportuni problemi approssimanti." ];
Lezioni[14] = [ "14", "07/03/2015", "09:00", "10:00", "Road map del metodo diretto del calcolo delle variazioni. Introduzione agli spazi di Hilbert. Convergenza assoluta di serie in uno spazio di Hilbert. Definizione di base algebrica e base Hilbertiana." ];
Lezioni[15] = [ "15", "07/03/2015", "10:00", "11:00", "Prime proprietà delle basi Hilbertiane. Mancata convergenza (forte) delle palle e delle sfere in dimensione infinita. Definizione di convergenza debole e prime proprietà. Convergenza debole e componenti rispetto ad una base Hilbertiana." ];
Lezioni[16] = [ "16", "21/03/2015", "09:30", "10:30", "Esistenza di una base Hilbertiana in uno spazio di Hilbert separabile. Convergenza debole e convergenza delle componenti rispetto ad una base Hilbertiana. Compattezza debole delle palle. Semicontinuità inferiore della norma." ];
Lezioni[17] = [ "17", "21/03/2015", "10:30", "11:30", "Spazio delle funzioni a quadrato sommabile. Spazi di Sobolev: definizione W (integrazione per parti) e definizione H (approssimazione). Derivate deboli e loro stabilità per passaggio al limite." ];
Lezioni[18] = [ "18", "21/03/2015", "11:30", "12:30", "Esempio di semicontinuità e compattezza per un funzionale integrale. Convergenza uniforme e continuità di integrali. Convergenza debole e semicontinuità di integrali." ];
Lezioni[19] = [ "19", "28/03/2015", "14:30", "15:30", "Come dimostrare la compattezza delle successioni minimizzanti. Holderianità delle funzioni negli spazi di Sobolev. Enunciato del teorema di Ascoli-Arzelà." ];
Lezioni[20] = [ "20", "28/03/2015", "15:30", "16:30", "Esempio di applicazione del metodo diretto del calcolo delle variazioni: formulazione debole, compattezza delle successioni minimizzanti, semicontinuità, equazione di Eulero in forma debole, regolarità via bootstrap. Esempio di esistenza/unicità per un'equazione differenziale dimostrata mediante il problema di minimo associato." ];
Lezioni[21] = [ "21", "28/03/2015", "16:30", "17:30", "Applicazioni lineari simmetriche e compatte in spazi di Hilbert. Enunciato del teorema spettrale. \"Doppia primitiva\" come esempio di operatore lineare, simmetrico e compatto. Calcolo degli autovalori ed autovettori con condizioni di Dirichlet al bordo." ];
Lezioni[22] = [ "22", "11/04/2015", "10:00", "11:00", "Calcolo degli autovalori e autovettori della \"doppia primitiva\" con diverse condizioni al bordo. Corrispondenti sviluppi in serie di Fourier." ];
Lezioni[23] = [ "23", "11/04/2015", "11:00", "12:00", "Enunciato dei teoremi di convergenza puntuale e uniforme per serie di Fourier con condizioni periodiche. Uso delle simmetrie per ottenere le serie di Fourier con diverse condizioni al bordo (ed i relativi risultati di convergenza) a partire da quella periodica." ];
Lezioni[24] = [ "24", "11/04/2015", "12:00", "13:00", " Utilizzo delle serie di Fourier per il calcolo di una serie numerica. Serie di Fourier della derivata. Serie di Fourier e spazi di Sobolev." ];
Lezioni[25] = [ "25", "18/04/2015", "09:30", "10:30", "Introduzione alle equazioni alle derivate parziali di evoluzione. Equazione del calore su un intervallo risolta mediante serie di Fourier." ];
Lezioni[26] = [ "26", "18/04/2015", "10:30", "11:30", "Equazione del calore: regolarità delle soluzioni e comportamento asintotico via convergenza uniforme della serie di Fourier, interpretazione delle condizioni al bordo, stime energetiche, interpretazione statistica." ];
Lezioni[27] = [ "27", "18/04/2015", "11:30", "12:30", "Equazione delle onde su un intervallo risolta mediante serie di Fourier. Regolarità dei dati vs regolarità della soluzione. Identità dell'energia." ];
Lezioni[28] = [ "28", "21/04/2015", "17:00", "18:00", "Equazione delle onde su tutta la retta: formula generale come somma di due traveling waves. Dominio di dipendenza, in una o più dimensioni. Estensione al caso di una semiretta." ];
Lezioni[29] = [ "29", "21/04/2015", "18:00", "19:00", "Equazione di Eulero per un funzionale integrale in più variabili: dal gradiente al laplaciano con derivata normale nulla. Serie di Fourier su un rettangolo." ];
Lezioni[30] = [ "30", "21/04/2015", "19:00", "20:00", "Analogo discreto della derivata seconda e del laplaciano. Accenno al loro utilizzo all'interno dell'algoritmo jpeg." ];
