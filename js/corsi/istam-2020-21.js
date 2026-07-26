var NomeCorso = "Istituzioni di Analisi Matematica - 2020/2021";
var Percorso = MEDIA.lezioni + "IstAM_21/IstAM_21_L";
var CifreNumeroLezione = 2;

var SchedaCorso = {
  nome: "Istituzioni di Analisi Matematica",
  annoAccademico: "2020/2021",
  crediti: "9",
  ore: "63 (ufficialmente, 70 realisticamente)",
  target: "Studenti di Matematica (ma ognuno è benvenuto, ovviamente)",
  anno: "Primo anno della specialistica",
  periodo: "Fine Settembre / Dicembre",
  avviso: "Questo è un corso costituito principalmente da esempi ed esercizi, pensato per affiancare e completare il corso classico. Non ha senso seguirlo prima del corrispondente corso classico."
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "IstAM_21_Burocrazia.pdf",
    titolo: "Informazioni generali"
  },
  {
    sezione: "burocrazia",
    file: "IstAM_21_Esame.pdf",
    titolo: "Regole d'esame (versione in presenza)"
  },
  {
    sezione: "burocrazia",
    file: "IstAM_21_EsamiTelematici.pdf",
    titolo: "Regole d'esame (versione telematica)"
  },
  {
    sezione: "burocrazia",
    file: "IstAM_21_Programma.pdf",
    titolo: "Programma"
  },
  {
    sezione: "book",
    file: "IstAM_21_Book1.pdf",
    titolo: "Stampato integrale lezioni (Volume 1 -- Lezioni 1/32)"
  },
  {
    sezione: "book",
    file: "IstAM_21_Book2.pdf",
    titolo: "Stampato integrale lezioni (Volume 2 -- Lezioni 33/58)"
  },
  {
    sezione: "book",
    file: "IstAM_21_Book3.pdf",
    titolo: "Stampato integrale lezioni (Volume 3 -- Lezioni 59/70)"
  }
];

var Lezioni = new Array();
Lezioni[1] = [ "1", "28/09/2020", "09:00", "10:00", "Legami tra coercività di funzionali e compattezza dei sottolivelli. Esempi di caratterizzazione degli insiemi compatti e delle funzioni semicontinue rispetto a nozioni di convergenza strane."];
Lezioni[2] = [ "2", "28/09/2020", "10:00", "11:00", "Introduzione ai funzionali integrali. Approssimazione di funzioni continue mediante funzioni C-infinito (per via elementare). Esempi di funzionali che non ammettono minimo."];
Lezioni[3] = [ "3", "29/09/2020", "14:00", "15:00", "Lemma fondamentale del calcolo delle variazioni (FLCV), FLCV a media nulla, lemma di Du Bois Reymond: discussione con diverse classi di funzioni test."];
Lezioni[4] = [ "4", "29/09/2020", "15:00", "16:00", "Varianti del FLCV e del lemma DBR con ipotesi di segno o derivate di ordine superiore."];
Lezioni[5] = [ "5", "01/10/2020", "09:00", "10:00", "Esempi di applicazione del metodo indiretto: problemi di minimo per l'integrale di Dirichlet con diverse condizioni al bordo."];
Lezioni[6] = [ "6", "01/10/2020", "10:00", "11:00", "Esempi di applicazione del metodo indiretto: problemi di minimo per una Lagrangiana del primo ordine con diverse condizioni al bordo."];
Lezioni[7] = [ "7", "05/10/2020", "09:00", "10:00", "Esempi di applicazione del metodo indiretto: problemi di minimo per una Lagrangiana del secondo ordine con diverse condizioni al bordo."];
Lezioni[8] = [ "8", "05/10/2020", "10:00", "11:00", "Metodo indiretto applicato ad una equazione non lineare, con discussione della regolarità della soluzione. Studio di un problema di minimo con dato assegnato in un punto diverso dagli estremi dell'intervallo."];
Lezioni[9] = [ "9", "06/10/2020", "14:00", "15:00", "Spazi di Hilbert: disuguaglianze à la Bessel, esistenza di una base Hilbertiana senza ipotesi di separabilità, completamento di uno spazio pre-Hilbertiano."];
Lezioni[10] = [ "10", "06/10/2020", "15:00", "16:00", "Esercizi sugli spazi di Hilbert: dimostrazione della non convergenza debole di alcune successioni, compattezza/chiusura forte/debole di sottoinsiemi, la palla è la chiusura debole della sfera."];
Lezioni[11] = [ "11", "08/10/2020", "09:00", "10:00", "Completezza degli spazi Lp rispetto alla misura che conta i punti su ogni insieme di indici. Esempio di spazio di Hilbert non separabile con base Hilbertiana non numerabile."];
Lezioni[12] = [ "12", "08/10/2020", "10:00", "11:00", "Esercizio sugli spazi di Hilbert: la somma diretta di sottospazi chiusi è necessariamente chiusa? Primi esempi di convergenza debole in spazi L2 concreti."];
Lezioni[13] = [ "13", "12/10/2020", "09:00", "10:00", "Esempi ed esercizi sulla convergenza debole di successioni di funzioni in spazi Lp."];
Lezioni[14] = [ "14", "12/10/2020", "10:00", "11:00", "Esempi ed esercizi sulla convergenza debole di successioni di funzioni in spazi Lp."];
Lezioni[15] = [ "15", "13/10/2020", "14:00", "15:00", "Derivate deboli in dimensione uno: scarsa possibilità di variare lo spazio delle funzioni test, formula di integrazione per parti, derivata del prodotto, rincollamento di derivate, esempi ed esercizi."];
Lezioni[16] = [ "16", "13/10/2020", "15:00", "16:00", "Primo esempio di applicazione del metodo diretto: discussione della possibilità di formulare debolmente il problema in vari spazi."];
Lezioni[17] = [ "17", "15/10/2020", "09:00", "10:00", "Approccio variazionale ai Boundary Value Problems: primi esempi. Unicità via equazione e via unicità del punto di minimo del funzionale."];
Lezioni[18] = [ "18", "15/10/2020", "10:00", "11:00", "Approccio variazionale ai Boundary Value Problems: esempi con dati di Neumann omogenei e periodici. Come recuperare la compattezza in assenza di condizioni di Dirichlet."];
Lezioni[19] = [ "19", "19/10/2020", "09:00", "10:00", "Approccio variazionale ai Boundary Value Problems: tre strategie per ottenere condizioni di Neumann non omogenee (Lagrangiana modificata, cambio di variabili, aggiunta dei valori agli estremi nel funzionale)."];
Lezioni[20] = [ "20", "19/10/2020", "10:00", "11:00", "Discussione generale dei risultati di compattezza: come ottenerli via stime di crescita e condizioni di Dirichlet, oppure via teorema della media integrale. Esempi basati sul bilancio tra la crescita rispetto alla funzione e rispetto alla derivata."];
Lezioni[21] = [ "21", "20/10/2020", "14:00", "15:00", "Argomenti di troncamento: interpretazione variazionale ed in termini di equazione di Eulero (principio del massimo e principio del massimo forte)."];
Lezioni[22] = [ "22", "20/10/2020", "15:00", "16:00", "Esempi di formulazioni variazionali con Lagrangiane che non sono definite ovunque. Utilizzo di opportuni argomenti di troncamento per ricavare l'equazione di Eulero-Lagrange."];
Lezioni[23] = [ "23", "22/10/2020", "09:00", "10:00", "Il prodotto di una successione convergente uniformemente e di una convergente debolmente è ancora debolmente convergente. Esempio di utilizzo dell'identità di Beltrami."];
Lezioni[24] = [ "24", "22/10/2020", "10:00", "11:00", "Esempio di problema variazionale con perdita di ellitticità in un punto."];
Lezioni[25] = [ "25", "26/10/2020", "09:00", "10:00", "Regolarità Holderiana ottimale per il minimo di un problema variazionale con perdita di ellitticità. Principio del massimo stretto sotto ipotesi di ellitticità."];
Lezioni[26] = [ "26", "26/10/2020", "10:00", "11:00", "Perdita di ellitticità vs perdita di unicità per il problema di Cauchy associato all'equazione di Eulero vs mancanza di principi del massimo stretti. Approccio variazionale all'esistenza di soluzioni periodiche per equazioni differenziali."];
Lezioni[27] = [ "27", "27/10/2020", "14:00", "15:00", "Una disuguaglianza del parallelogrammo implica l'identità. Dimostrazione alternativa che l'identità del parallelogrammo implica che la norma deriva da un prodotto scalare. Norme p-esime che derivano da un prodotto scalare."];
Lezioni[28] = [ "28", "27/10/2020", "15:00", "16:00", "Discussione sull'esistenza del punto di minima distanza da un chiuso in uno spazio metrico. Stretta convessità della norma ed unicità della proiezione su un convesso chiuso in uno spazio normato. Esempi di non unicità. Norme p-esime strettamente convesse."];
Lezioni[29] = [ "29", "29/10/2020", "09:00", "10:00", "Proiezione sulla palla unitaria in spazi normati: minimizzazione della distanza e costante di Lipschitz. Calcolo della proiezione su un iperpiano affine in uno spazio di Hilbert."];
Lezioni[30] = [ "30", "29/10/2020", "10:00", "11:00", "Coni convessi in spazi di Hilbert e relative proiezioni. Esempi di convessi chiusi in spazi L2 e calcolo delle relative proiezioni."];
Lezioni[31] = [ "31", "02/11/2020", "09:00", "10:00", "Ruolo della convessità della Lagrangiana rispetto alla derivata per l'esistenza e non esistenza di punti di minimo. Costruzione di successioni minimizzanti con oscillazioni su una doppia scala."];
Lezioni[32] = [ "32", "02/11/2020", "10:00", "11:00", "Esistenza e non esistenza di minimi a seconda della crescita della Lagrangiana rispetto alle sue variabili. Esempio di utilizzo dei moltiplicatori di Lagrange."];
Lezioni[33] = [ "33", "03/11/2020", "14:00", "15:00", "Disuguaglianza di Gagliardo: due dimostrazioni del caso a 3 variabili, caratterizzazione dei casi di uguaglianza in 2 e 3 variabili."];
Lezioni[34] = [ "34", "03/11/2020", "15:00", "16:00", "Disuguaglianze alla Brascamp-Lieb: come utilizzare argomenti di riscalamento orizzontale per determinare gli esponenti per cui valgono."];
Lezioni[35] = [ "35", "05/11/2020", "09:00", "10:00", "Commenti generali sulla definizione di spazi di Sobolev: stabilità per passaggio al limite, classi di funzioni test per cui vale l'integrazione per parti della definizione W, importanza della classe di funzioni test nella definizione di convergenza debole, completamento astratto vs approssimazione."];
Lezioni[36] = [ "36", "05/11/2020", "10:00", "11:00", "Spazi di Sobolev per p = infinito: H diverso da W."];
Lezioni[37] = [ "37", "09/11/2020", "09:00", "10:00", "Rincollamento di funzioni di Sobolev definite su un ricoprimento di un aperto. Se le derivate parziali deboli sono continue, allora la funzione è di classe C1."];
Lezioni[38] = [ "38", "09/11/2020", "10:00", "11:00", "Se il gradiente debole è nullo, allora la funzione è debolmente costante. Utilizzo di cutoff e convoluzioni per ottenere approssimazioni deluxe."];
Lezioni[39] = [ "39", "10/11/2020", "14:00", "15:00", "Argomento di riscalamento orizzontale che permette di individuare gli esponenti coinvolti nelle immersioni di Sobolev pure. Funzioni di Sobolev radiali."];
Lezioni[40] = [ "40", "10/11/2020", "15:00", "16:00", "Dimostrazione della caratterizzazione delle funzioni di Sobolev radiali. Ottimalità delle immersioni di Sobolev per esponenti minori della dimensione."];
Lezioni[41] = [ "41", "12/11/2020", "09:00", "10:00", "Ottimalità delle immersioni di Sobolev per esponenti uguali e maggiori della dimensione. Utilità dei logaritmi nella costruzione di tali esempi."];
Lezioni[42] = [ "42", "12/11/2020", "10:00", "11:00", "Esempi di aperti patologici in cui non valgono i teoremi di immersione e di immersione compatta, o per lo meno non valgono con tutti gli esponenti che ci si aspetterebbe."];
Lezioni[43] = [ "43", "16/11/2020", "09:00", "10:00", "Dimostrazione del teorema di immersione compatta (Rellich-Kondrachov) e controesempio nel caso con esponente critico. [Versione con audio della corrispondente lezione dell'anno precedente]"];
Lezioni[44] = [ "44", "16/11/2020", "10:00", "11:00", "Introduzione al problema della traccia. Costruzione della traccia nel caso modello del semispazio. [Versione con audio della corrispondente lezione dell'anno precedente]"];
Lezioni[45] = [ "45", "17/11/2020", "14:00", "15:00", "Costruzione di un 2-extender da una semiretta a tutta la retta."];
Lezioni[46] = [ "46", "17/11/2020", "15:00", "16:00", "Costruzione di m-extender in vari aperti della retta."];
Lezioni[47] = [ "47", "19/11/2020", "09:00", "10:00", "Esempio esplicito di un 1-extender da un sopra-grafico a tutto il piano. Formula di Gauss-Green per funzioni nulle al bordo."];
Lezioni[48] = [ "48", "19/11/2020", "10:00", "11:00", "Esempi di 1-extender e 2-extender su sopra-grafici nel piano."];
Lezioni[49] = [ "49", "23/11/2020", "09:00", "10:00", "Esempi di costruzione di 1-extender per sottoinsiemi del piano, e di dimostrazione della loro non esistenza."];
Lezioni[50] = [ "50", "23/11/2020", "10:00", "11:00", "Primo esempio di problema variazionale in più variabili, con discussione della compattezza, della semicontinuità e della regolarità della soluzione."];
Lezioni[51] = [ "51", "24/11/2020", "14:00", "15:00", "Discussione del seguente problema: se una funzione sta in uno spazio di Sobolev, possiamo concludere che il suo quadrato sta nello stesso spazio?"];
Lezioni[52] = [ "52", "24/11/2020", "15:00", "16:00", "Ulteriori esempi di problemi variazionali in due variabili."];
Lezioni[53] = [ "53", "26/11/2020", "09:00", "10:00", "Primi esempi ed esercizi sugli operatori lineari. Operatori di moltiplicazione in spazi di Hilbert separabili."];
Lezioni[54] = [ "54", "26/11/2020", "10:00", "11:00", "Un operatore di moltiplicazione è compatto se e solo se la successione degli autovalori tende a zero. Mancanza di correlazione tra iniettività e surgettività per operatori lineari in dimensione infinita."];
Lezioni[55] = [ "55", "30/11/2020", "09:00", "10:00", "Studio di un operatore di moltiplicazione in uno spazio L2."];
Lezioni[56] = [ "56", "30/11/2020", "10:00", "11:00", "Esempio classico di operatore lineare, simmetrico e compatto: inverter della derivata seconda con condizioni al bordo di Dirichlet omogenee (tre approcci: elementare, variazionale, via Lax-Milgram). Inizio della discussione con condizioni al bordo di Neumann omogenee."];
Lezioni[57] = [ "57", "01/12/2020", "14:00", "15:00", "Inverter della derivata seconda con condizioni al bordo di Neumann omogenee: discussione dettagliata dell'approccio via Lax-Milgram (quadro funzionale, deduzione dell'equazione e delle condizioni al bordo). Serie di Fourier di soli seni, soli coseni, oppure seni e coseni."];
Lezioni[58] = [ "58", "01/12/2020", "15:00", "16:00", "Costante di Poincaré/Wirtinger e primo autovalore della derivata seconda con opportune condizioni al bordo. Discussione di un operatore definito come solver di una equazione non lineare, con diverse scelte degli spazi funzionali."];
Lezioni[59] = [ "59", "03/12/2020", "09:00", "10:00", "Duali e funzionali allineati: esempi in dimensione finita. Unicità vs stretta convessità del duale vs unicità dell'iperpiano tangente alla sfera unitaria. Funzionale allineato come corrispondenza tra le sfere unitarie di uno spazio e del suo duale."];
Lezioni[60] = [ "60", "03/12/2020", "10:00", "11:00", "Duali in spazi di successioni pesati: descrizione del duale attraverso due scelte diverse del duality pairing. Apparente paradosso delle terne Hilbertiane, e sua interpretazione in termini di scelta del duality pairing."];
Lezioni[61] = [ "61", "07/12/2020", "09:00", "10:00", "Esempi classici di spazi di Baire. I razionali non sono uno spazio di Baire, ma gli irrazionali sì. Esempio di sottoinsieme chiuso di uno spazio di Baire che non è uno spazio di Baire. Esempio di sottoinsieme chiuso di uno spazio topologico separabile che non è separabile."];
Lezioni[62] = [ "62", "07/12/2020", "10:00", "11:00", "Dimostrazioni mediante il lemma di Baire vs dimostrazioni costruttive: Banach-Steinhaus, limitatezza delle successioni debolmente convergenti (sia in spazi di Hilbert, sia in spazi normati)."];
Lezioni[63] = [ "63", "10/12/2020", "09:00", "10:00", "Gli spazi normati con base algebrica numerabile non possono essere completi (dimostrazione costruttiva). Combinazioni lineari infinite non banali di vettori linearmente indipendenti possono annullarsi. Esistono funzioni continue e non derivabili in alcun punto (dimostrazione via lemma di Baire)."];
Lezioni[64] = [ "64", "10/12/2020", "10:00", "11:00", "Costruzione esplicita di una funzione continua e non derivabile in alcun punto. Esistono funzioni Holderiane in un intervallo che non sono Sobolev (nemmeno con esponente 1) in alcun sotto-intervallo (dimostrazione via lemma di Baire)."];
Lezioni[65] = [ "65", "14/12/2020", "09:00", "10:00", "Accenno al calcolo differenziale ed integrale per funzioni tra spazi normati. Dimostrazioni classiche per dualità: la norma dell'integrale è minore o uguale dell'integrale della norma, disuguaglianza alla Lagrange direzionale per funzioni vettoriali."];
Lezioni[66] = [ "66", "14/12/2020", "10:00", "11:00", "Precisazioni sul duale di c0 e c. Estensioni a tutto lo spazio delle successioni limitate dell'operatore lineare che nello spazio c calcola il limite."];
Lezioni[67] = [ "67", "15/12/2020", "14:00", "15:00", "Studio dell'operatore che a f(x) associa sin(f(x)) con diverse scelte degli spazi funzionali coinvolti: continuità, Lipschitzianità/Holderianità, compattezza."];
Lezioni[68] = [ "68", "15/12/2020", "15:00", "16:00", "Studio dell'esistenza di un autovalore per un problema non lineare in dimensione uno: impostazione variazionale e moltiplicatori di Lagrange. Saturazione del vincolo per un problema vincolato. Studio del problema analogo in dimensione arbitraria."];
Lezioni[69] = [ "69", "17/12/2020", "09:00", "10:00", "Neumann Laplacian in un intervallo come operatore non limitato: calcolo del dominio di alcune sue potenze. Studio di alcuni casi di immersione dello spazio frazionario Hs in Lp e nelle funzioni Holderiane."];
Lezioni[70] = [ "70", "17/12/2020", "10:00", "11:00", "Studio della funzione integrale come operatore tra diversi spazi funzionali: calcolo della norma, compattezza. Studio di un problema variazionale legato alle immersioni di Sobolev in dimensione arbitraria."];
