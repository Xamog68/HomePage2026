var NomeCorso = "Istituzioni di Analisi Matematica - 2018/2019";
var ArchivioCorso = "IstAM/IstAM_19";
var PrefissoFile = "IstAM_19_L";
var Percorso = MEDIA.lezioni + "IstAM_19/IstAM_19_L";
var CifreNumeroLezione = 2;

var SchedaCorso = {
  nome: "Istituzioni di Analisi Matematica",
  annoAccademico: "2018/2019",
  crediti: "9",
  target: "Corso di Laurea Magistrale in Matematica",
  anno: "Primo anno della Laurea Magistrale",
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "IstAM_19_Burocrazia.pdf",
    titolo: "Informazioni generali"
  },
  {
    sezione: "burocrazia",
    file: "IstAM_19_Esame.pdf",
    titolo: "Regole d’esame"
  },
  {
    sezione: "burocrazia",
    file: "IstAM_19_Programma.pdf",
    titolo: "Programma"
  },
  {
    sezione: "book",
    file: "IstAM_19_Book1.pdf",
    titolo: "Stampato integrale lezioni (Volume 1 -- Lezioni 1/24)"
  },
  {
    sezione: "book",
    file: "IstAM_19_Book2.pdf",
    titolo: "Stampato integrale lezioni (Volume 2 -- Lezioni 25/46)"
  },
  {
    sezione: "book",
    file: "IstAM_19_Book3.pdf",
    titolo: "Stampato integrale lezioni (Volume 3 -- Lezioni 47/70)"
  }
];

var Lezioni = new Array();
Lezioni[1] = [ "1", "24/09/2018", "11:00", "12:00", "Presentazione degli obiettivi del corso. Metodo indiretto nel calcolo delle variazioni: variazione di un funzionale lungo una curva, derivata secondo Gateaux. Metodo diretto nel calcolo delle variazioni: compattezza, semi-continuità, coercività, teorema di Weierstrass rispetto ad una nozione di convergenza."];
Lezioni[2] = [ "2", "24/09/2018", "12:00", "13:00", "Introduzione al metodo indiretto nel calcolo delle variazioni. Forme integrali e differenziali della variazione prima. Equazione di Eulero-Lagrange. Studio esplicito di tre casi modello di funzionali integrali dipendenti da potenze della derivata. Caso di una Lagrangiana (strettamente) convessa dipendente dalla sola derivata."];
Lezioni[3] = [ "3", "27/09/2018", "09:00", "10:00", "Lemma fondamentale del calcolo delle variazioni e lemma di Du Bois Reymond (setting classico e setting Lebesgue): enunciato, possibili dimostrazioni, discussione di possibili varianti."];
Lezioni[4] = [ "4", "27/09/2018", "10:00", "11:00", "Nascita delle condizioni al bordo per le equazioni di Eulero-Lagrange. Esempi che portano a condizioni di Dirichlet, di Neumann, e periodiche. Esempio con derivate di ordine superiore al primo."];
Lezioni[5] = [ "5", "28/09/2018", "09:00", "10:00", "Equazione di Eulero-Lagrange per una Lagrangiana generale: forme integrali, forma differenziale classica, alla Du Bois Reymond, alla Erdmann per il caso autonomo. Discussione delle ipotesi di regolarità necessarie per le varie forme. Minimalità via convessità."];
Lezioni[6] = [ "6", "28/09/2018", "10:00", "11:00", "Variazione prima di funzionali con integrali multipli: integrale di Dirichlet e Laplaciano, equazione di Eulero-Lagrange in forma di divergenza, derivata normale al bordo e nascita di condizioni al bordo di Neumann."];
Lezioni[7] = [ "7", "01/10/2018", "11:00", "12:00", "Come dimostrare che un punto stazionario è un punto di minimo globale: utilizzo della convessità o di un opportuno funzionale ausiliario. Esempi di esistenza e non esistenza del minimo per una Lagrangiana non convessa dipendente dalla sola derivata. Discussione sullo spazio in cui ambientare i problemi di minimo."];
Lezioni[8] = [ "8", "01/10/2018", "12:00", "13:00", "Variazione interna (orizzontale) di un funzionale integrale. Argomento di troncamento. Esempi finali di metodo indiretto."];
Lezioni[9] = [ "9", "04/10/2018", "09:00", "10:00", "Introduzione agli spazi di Hilbert. Definizione di base Hilbertiana (sistema ortonormale completo). Ogni spazio di Hilbert separabile ammette una base Hilbertiana. Componenti di una vettore rispetto ad una base Hilbertiana. Rappresentazione di norma e prodotto scalare in termini di componenti: enunciato e lemmi utili per la dimostrazione."];
Lezioni[10] = [ "10", "04/10/2018", "10:00", "11:00", "Dimostrazione della rappresentazione di norma e prodotto scalare in termini di componenti. Convergenza debole in spazi di Hilbert: definizione, prime proprietà, passaggio al limite nei prodotti scalari con una convergenza forte e una debole. Convergenza debole come convergenza delle componenti rispetto ad una base Hilbertiana."];
Lezioni[11] = [ "11", "05/10/2018", "09:00", "10:00", "Semi-continuità della norma rispetto alla convergenza debole in uno spazio di Hilbert. Compattezza debole delle palle negli spazi di Hilbert separabili. Osservazione che non è lecito scambiare limiti e serie. Assoluta convergenza di serie in spazi di Banach. Accenno alle basi Hilbertiane in spazi non separabili."];
Lezioni[12] = [ "12", "05/10/2018", "10:00", "11:00", "L2 come spazio di Hilbert. Dimostrazione elementare della completezza dello spazio l2. Esempio di spazio di Hilbert non separabile. Esempio di successione di funzioni che converge debolmente ma non fortemente in L2."];
Lezioni[13] = [ "13", "08/10/2018", "11:00", "12:00", "Derivata debole: definizione W (mediante integrazione per parti) vs definizione H (mediante approssimazione). Principali proprietà ed esempi. Dimostrazione che le derivate H-deboli sono derivate W-deboli. Definizione W di spazi di Sobolev in dimensione uno (su un intervallo)."];
Lezioni[14] = [ "14", "08/10/2018", "12:00", "13:00", "Definizione H (mediante approssimazione e mediante completamento astratto) di spazi di Sobolev in dimensione uno. Le funzioni di Sobolev sono le primitive delle loro derivate deboli. Dimostrazione che W è contenuto in H. Le funzioni di Sobolev sono Holderiane. Nella definizione H la convergenza delle funzioni è anche uniforme."];
Lezioni[15] = [ "15", "11/10/2018", "09:00", "10:00", "Road map del metodo diretto: formulazione debole negli spazi di Sobolev, compattezza dei sottolivelli rispetto ad un'opportuna nozione di convergenza, semicontinuità, recupero della regolarità (passo iniziale e bootstrap). Primo esempio di applicazione."];
Lezioni[16] = [ "16", "11/10/2018", "10:00", "11:00", "Discussione generale dei teoremi di semicontinuità per funzionali integrali (caso di uniforme convergenza e Lagrangiana continua, caso di convergenza debole e Lagrangiana convessa). Discussione generale delle strategie per mostrare la compattezza dei sottolivelli (come ottenere stime integrali sulle derivate e uniformi sulle funzioni)."];
Lezioni[17] = [ "17", "15/10/2018", "11:00", "12:00", "Approccio variazionale ai problemi al bordo per equazioni differenziali di ordine due: esistenza, regolarità, unicità sotto ipotesi di monotonia/convessità (dimostrata sia via unicità del punto di minimo, sia guardando direttamente l'equazione)."];
Lezioni[18] = [ "18", "15/10/2018", "12:00", "13:00", "Adattamento dell'approccio variazionale ad equazioni con diverse condizioni al bordo di tipo Dirichlet/Neumann. Regolarità della soluzione e stretta positività della derivata seconda della Lagrangiana rispetto alla velocità."];
Lezioni[19] = [ "19", "18/10/2018", "09:00", "10:00", "Esempio motivazionale di funzionale con crescita non quadratica nella derivata. Definizione di convergenza debole in Lp. In spazi di misura finita la convergenza debole L1 è la più debole di tutte. Per le successioni limitate è sufficiente testare la convergenza debole su un insieme con Span denso."];
Lezioni[20] = [ "20", "18/10/2018", "10:00", "11:00", "Lemma di approssimazione monotona per funzioni convesse. Semicontinuità rispetto alla convergenza debole sotto ipotesi di convessità. Enunciato dei risultati di compattezza debole delle palle in Lp (con dimostrazione sotto ipotesi aggiuntive), ed in L1 sotto ipotesi di crescita superlineare. Mancanza di coercività vs regolarità Holderiana della derivata dei minimi."];
Lezioni[21] = [ "21", "19/10/2018", "09:00", "10:00", "Regolarità Holderiana ottimale per un problema senza stretta coercività. Esempio di non unicità per un problema di Dirichlet. Esempi di funzionali con competizione tra crescita rispetto alla derivata e rispetto alla funzione."];
Lezioni[22] = [ "22", "19/10/2018", "10:00", "11:00", "Enunciato del metodo dei moltiplicatori di Lagrange in termini di variazione prima. Applicazione: disuguaglianza di Poincaré su un intervallo. Esempi basati su disuguaglianze di tipo Poincaré."];
Lezioni[23] = [ "23", "22/10/2018", "11:00", "12:00", "Identità del parallelogrammo. Caratterizzazione delle norme derivanti da un prodotto scalare (Jordan-Fréchet-von Neumann). Proiezione su un convesso chiuso: esistenza, unicità, 1-Lipschitzianità, caratterizzazione."];
Lezioni[24] = [ "24", "22/10/2018", "12:00", "13:00", "Separazione stretta (mediante iperpiani) di un punto da un convesso e di un convesso compatto da un convesso. Chiusura forte + convessità implica chiusura debole. Semicontinuità forte + convessità implica semicontinuità debole. Proiezione su sottospazi chiusi: linearità e caratterizzazione. Ortogonale di un sottospazio. Somme dirette ortogonali."];
Lezioni[25] = [ "25", "25/10/2018", "09:00", "10:00", "Derivate W-deboli e H-deboli: definizione, prime proprietà, H implica W. Esempio di funzione con le derivate seconde deboli miste ma senza derivate prime deboli. Spazi di Sobolev in piena generalità (ogni ordine e dimensione, aperto qualunque): definizione W e H. Osservazione che H è contenuto in W."];
Lezioni[26] = [ "26", "25/10/2018", "10:00", "11:00", "Enunciato dei quattro teoremi di approssimazione. Richiami su mollificatori e regolarizzazione per convoluzione. Le convoluzioni commutano con le derivate W-deboli. Dimostrazione del teorema di approssimazione low-cost. Inizio della dimostrazione che le derivate W-deboli sono anche H-deboli."];
Lezioni[27] = [ "27", "26/10/2018", "09:00", "10:00", "Fine della dimostrazione che le derivate W-deboli sono anche H-deboli. Partizioni dell'unità associate al ricoprimento di un aperto. Dimostrazione del teorema H=W (Meyers-Serrin 1964)."];
Lezioni[28] = [ "28", "26/10/2018", "10:00", "11:00", "Derivata debole del prodotto (caso Sobolev per smooth e caso Sobolev per Sobolev), della composizione e del valore assoluto. Discussione di varie strategie dimostrative a seconda del teorema di approssimazione che si vuole utilizzare."];
Lezioni[29] = [ "29", "29/10/2018", "11:00", "12:00", "Enunciato dei tre casi del teorema di immersione (su tutto lo spazio), sia per derivate prime, sia per derivate di ordine qualunque. Problema dell'estensione, e sue implicazioni in termini di approssimazione e di immersione. Semplici esempi patologici in dimensione uno."];
Lezioni[30] = [ "30", "29/10/2018", "12:00", "13:00", "Disuguaglianza di Gagliardo (caso speciale di Brascamp-Lieb): enunciato e dimostrazione. Esempio di funzione di Sobolev che ricade nel caso critico del teorema di immersione."];
Lezioni[31] = [ "31", "05/11/2018", "11:00", "12:00", "Dimostrazione delle immersioni di Sobolev nel caso di esponente minore o uguale della dimensione. Esempio di funzione che sta esattamente negli spazi coinvolti in tali immersioni."];
Lezioni[32] = [ "32", "05/11/2018", "12:00", "13:00", "Dimostrazione delle immersioni di Sobolev negli spazi di funzioni Holderiane (Morrey). Annullamento all'infinito delle funzioni di Sobolev con esponente maggiore della dimensione. Argomento di riscalamento che conduce ad individuare gli esponenti esatti nelle immersioni di Sobolev."];
Lezioni[33] = [ "33", "08/11/2018", "09:00", "10:00", "Introduzione ai teoremi di estensione. Estensione per riflessione nei cilindri. Strategie per la costruzione di m-estensioni nei cilindri."];
Lezioni[34] = [ "34", "08/11/2018", "10:00", "11:00", "Aperti con bordo regolare. Isomorfismo tra gli spazi di Sobolev di aperti diffeomorfi. Partizioni dell'unità per aperti con bordo compatto. Dimostrazione dell'esistenza di una 1-estensione per aperti con bordo regolare."];
Lezioni[35] = [ "35", "09/11/2018", "09:00", "10:00", "Enunciato del teorema di immersione compatta (Rellich-Kondrakov). Caratterizzazione dei sottoinsiemi relativamente compatti in spazi metrici. Criterio di relativa compattezza in spazi Lp (versione Lp di Ascoli-Arzelà)."];
Lezioni[36] = [ "36", "09/11/2018", "10:00", "11:00", "Dimostrazione del teorema di immersione compatta. Enunciato della disuguaglianza di interpolazione in spazi Lp. Controesempio all'immersione compatta nel caso critico."];
Lezioni[37] = [ "37", "12/11/2018", "11:00", "12:00", "Tracce di funzioni di Sobolev nel caso modello: disuguaglianza fondamentale nel caso smooth, ulteriore regolarità Lp, definizione per approssimazione, proprietà di base (linearità, integrazione per parti). Road map per estendere la definizione ad aperti regolari."];
Lezioni[38] = [ "38", "12/11/2018", "12:00", "13:00", "Holderianità della traccia, dipendenza continua della traccia sotto ipotesi di limitatezza dei gradienti, controesempio nel caso p=1."];
Lezioni[39] = [ "39", "15/11/2018", "09:00", "10:00", "Funzioni di Sobolev che si approssimano mediante funzioni C-infinito a supporto compatto: caso di tutto lo spazio e di tutto lo spazio meno un punto."];
Lezioni[40] = [ "40", "15/11/2018", "10:00", "11:00", "Funzioni di Sobolev che si approssimano mediante funzioni C-infinito a supporto compatto: teoremi di immersione e di compattezza. Caratterizzazione negli aperti regolari mediante traccia nulla o estensione a zero. Disuguaglianza di Poincaré."];
Lezioni[41] = [ "41", "19/11/2018", "11:00", "12:00", "Applicazioni dei teoremi di immersione e compattezza: disuguaglianze alla Poincaré (stima della q-norma di una funzione nulla al bordo in termini della p-norma del gradiente) e alla Wirtinger (stima della q-norma della differenza tra una funzione e la sua media in termini della p-norma del gradiente)."];
Lezioni[42] = [ "42", "19/11/2018", "12:00", "13:00", "Esempio di approccio variazionale ad una equazione ellittica: esistenza via metodo diretto. Road map verso la regolarità delle soluzioni via stime in spazi di Sobolev di ordine alto."];
Lezioni[43] = [ "43", "22/11/2018", "09:00", "10:00", "Introduzione alle equazioni ellittiche: condizione di ellitticità, equazioni lineari, semi-lineari, quasi-lineari, fully nonlinear. Quadro generale dei risultati di regolarità per equazioni lineari ed applicazioni al caso semi-lineare. Enunciato del teorema di regolarità interna L2."];
Lezioni[44] = [ "44", "22/11/2018", "10:00", "11:00", "Enunciato del teorema di regolarità L2 fino al bordo. Stime a priori per la regolarità interna, in tutto lo spazio ed in un aperto generico. Stime a priori per la regolarità fino al bordo in un semispazio."];
Lezioni[45] = [ "45", "23/11/2018", "09:00", "10:00", "Derivate discrete: definizione e principali proprietà. Caratterizzazione degli spazi di Sobolev in termini di derivate discrete. Giustificazione delle disuguaglianze alla base della regolarità (interna e al bordo) mediante le derivate discrete."];
Lezioni[46] = [ "46", "23/11/2018", "10:00", "11:00", "Regolarità fino al bordo per soluzioni del problema di Dirichlet in aperti regolari. Accenno alle tracce di funzioni di Sobolev in codimensione maggiore di uno."];
Lezioni[47] = [ "47", "26/11/2018", "11:00", "12:00", "Operatori compatti ed operatori simmetrici. Esempio di operatore lineare simmetrico senza autovalori. Continuità degli operatori compatti sotto ipotesi di linearità/simmetria. Quoziente di Rayleigh: definizione ed esistenza del massimo del suo valore assoluto."];
Lezioni[48] = [ "48", "26/11/2018", "12:00", "13:00", "Caratterizzazione variazionale di autovalori/autovettori. Teorema spettrale per operatori compatti: enunciato e dimostrazione. Accenno alla compattezza dell'inverso del Laplaciano su un dominio limitato."];
Lezioni[49] = [ "49", "29/11/2018", "09:00", "10:00", "Limite uniforme di operatori compatti è compatto. Approssimazione di operatori compatti in spazi di Hilbert. Proiezione non-lineare e approssimazione non-lineare di operatori compatti in spazi normati."];
Lezioni[50] = [ "50", "29/11/2018", "10:00", "11:00", "Dal teorema di punto fisso di Brouwer al teorema di punto fisso di Schauder. Dimostrazione del teorema di sola esistenza per equazioni differenziali mediante il teorema di punto fisso di Schauder."];
Lezioni[51] = [ "51", "30/11/2018", "09:00", "10:00", "Caratterizzazioni della continuità per applicazioni lineari tra spazi normati. Pseudo-norme e teorema di Hahn-Banach. Funzionale allineato. Discussione dell'esistenza di applicazioni lineari continue e non continue tra spazi normati."];
Lezioni[52] = [ "52", "30/11/2018", "10:00", "11:00", "Esempio di non unicità del funzionale allineato. Spazio degli operatori lineari tra due spazi normati. Norma di un operatore. Duale topologico di uno spazio normato. Caratterizzazione duale della norma."];
Lezioni[53] = [ "53", "03/12/2018", "11:00", "12:00", "Definizione di convergenza debole (in uno spazio normato) e debole* (nel suo duale). Semicontinuità debole della norma. Debole* compattezza delle palle nei duali di spazi separabili. Separazione di insiemi mediante iperpiani: definizioni ed enunciati."];
Lezioni[54] = [ "54", "03/12/2018", "12:00", "13:00", "Chiusura forte + convessità implica chiusura debole. Semicontinuità forte + convessità implica semicontinuità debole. Pseudo-norma associata ad un convesso. Dimostrazione dei teoremi di separazione debole/stretta (forme geometriche di Hahn-Banach)."];
Lezioni[55] = [ "55", "06/12/2018", "09:00", "10:00", "Norme classiche nel piano. Corrispondenza tra punti della sfera unitaria in uno spazio e nel suo duale in dimensione finita. Descrizione dei comuni spazi di successioni e spazi di funzioni. Duale di l1."];
Lezioni[56] = [ "56", "06/12/2018", "10:00", "11:00", "Duale dei classici spazi di successioni: lp, successioni infinitesime, successioni con limite all'infinito, successioni definitivamente nulle. Commenti sul duale di l-infinito."];
Lezioni[57] = [ "57", "07/12/2018", "09:00", "10:00", "Duale degli spazi Lp su spazi di misura finiti via teorema di Radon-Nikodym."];
Lezioni[58] = [ "58", "07/12/2018", "10:00", "11:00", "Commenti sul duale di L-infinito. Altro esempio di funzionale lineare la cui norma è un sup ma non un max. Duale degli spazi di Hilbert (via base ortonormale e via proiezione su un convesso chiuso). Accenno al duale delle funzioni continue nulle all'infinito."];
Lezioni[59] = [ "59", "10/12/2018", "11:00", "12:00", "Dimostrazioni dirette della compattezza debole delle palle negli spazi Lp: ruolo dei teoremi di rappresentazione del duale. Caso speciale di L-infinito. Bi-duale e spazi riflessivi. Compattezza debole delle palle negli spazi riflessivi."];
Lezioni[60] = [ "60", "10/12/2018", "12:00", "13:00", "Separabilità di uno spazio vs separabilità del duale. Le palle di L1 non sono debolmente compatte (ma diventano debole* compatte pensandole in spazi di misure). Esistenza di soluzioni deboli per equazioni ellittiche lineari via teorema di rappresentazione di Riesz (alla Lax-Milgram)."];
Lezioni[61] = [ "61", "12/12/2018", "16:00", "17:00", "Spazi di Baire: definizioni equivalenti. Gli spazi metrici completi e gli spazi localmente compatti sono spazi di Baire. Gli aperti negli spazi di Baire sono spazi di Baire. Primo esempio di utilizzo degli spazi di Baire."];
Lezioni[62] = [ "62", "12/12/2018", "17:00", "18:00", "Insiemi F-sigma e G-delta. L'insieme dei punti di discontinuità di una funzione è un F-sigma. Gli irrazionali non sono un F-sigma. Le successioni debolmente convergenti negli spazi di Hilbert o normati sono limitate."];
Lezioni[63] = [ "63", "13/12/2018", "09:00", "10:00", "Non esistono spazi di Banach con base algebrica numerabile. I sottospazi di dimensione finita di uno spazio normato sono chiusi. Teorema di Banach-Steinhaus (doppia versione). Esistenza di funzioni continue non derivabili in nessun punto."];
Lezioni[64] = [ "64", "13/12/2018", "10:00", "11:00", "Esistenza di un G-delta denso di funzioni continue e periodiche la cui serie di Fourier non converge in un G-delta denso di punti."];
Lezioni[65] = [ "65", "14/12/2018", "09:00", "10:00", "Il limite puntuale di funzioni continue è continuo in un G-delta denso. La derivata di una funzione derivabile è continua in un G-delta denso. Caratterizzazione delle mappe aperte in termini di risolubilità quantitativa."];
Lezioni[66] = [ "66", "14/12/2018", "10:00", "11:00", "Ogni vettore è somma di una serie assolutamente convergente a valori in un denso. La risolubilità quantitativa su un denso implica la risolubilità quantitativa ovunque. Teorema della mappa aperta e corollari: continuità dell'inversa, equivalenza di norme, teorema del grafico chiuso."];
Lezioni[67] = [ "67", "17/12/2018", "11:00", "12:00", "Esistenza di un solver lineare quantitativo vs esistenza di un supplementare topologico. Operatori non limitati. Caso di un operatore diagonale rispetto ad una base ortonormale in uno spazio di Hilbert. Potenze di un operatore. Operatori non limitati con inverso compatto."];
Lezioni[68] = [ "68", "17/12/2018", "12:00", "13:00", "Esempi di operatore non limitato: derivata seconda con condizioni al bordo di Dirichlet e periodiche. Calcolo del dominio della potenza 1/2 della derivata seconda con condizioni di Dirichlet in un intervallo."];
Lezioni[69] = [ "69", "19/12/2018", "16:00", "17:00", "Esempio classico di terna Hilbertiana. Spazi di Sobolev Hs frazionari in un intervallo: continuità sopra 1/2 e illimitatezza sotto 1/2. Delta di Dirac come elemento del duale di H1."];
Lezioni[70] = [ "70", "19/12/2018", "17:00", "18:00", "Laplaciano (con condizioni di Dirichlet) in dimensione qualunque come operatore non limitato. Dominio della potenza 1/2 del Laplaciano. La traccia di una funzione H1 sta in H 1/2. Enunciato del teorema spettrale per operatori non limitati."];
