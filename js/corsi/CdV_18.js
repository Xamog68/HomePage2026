var NomeCorso = "Elementi di Calcolo delle Variazioni - 2017/2018";
var Percorso = MEDIA.lezioni + "CdV_18/CdV_18_L";
var CifreNumeroLezione = 2;

var SchedaCorso = {
  nome: "Elementi di Calcolo delle Variazioni",
  annoAccademico: "2017/2018",
  crediti: "6",
  target: "Corso di Laurea in Matematica",
  anno: "Third year or later",
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "CdV_18_Burocrazia.pdf",
    titolo: "Informazioni generali"
  },
  {
    sezione: "burocrazia",
    file: "CdV_18_Esame.pdf",
    titolo: "Regole d’esame"
  },
  {
    sezione: "burocrazia",
    file: "CdV_18_Programma.pdf",
    titolo: "Programma dettagliato"
  },
  {
    sezione: "book",
    file: "CdV_18_Book.pdf",
    titolo: "Stampato integrale lezioni"
  }
];

var Lezioni = new Array();
Lezioni[1] = [ "1", "26/09/2017", "14:00", "15:00", "Presentazione degli argomenti del corso mediante semplici esempi. Funzionali integrali, con esempi. Esempi di problemi che non verranno trattati."];
Lezioni[2] = [ "2", "26/09/2017", "15:00", "16:00", "Introduzione al metodo indiretto nel calcolo delle variazioni. Variazione prima di un funzionale lungo una curva e in una direzione. Forme integrali e differenziali della variazione prima. Studio esplicito di tre casi modello di funzionali integrali dipendenti da potenze della derivata."];
Lezioni[3] = [ "3", "29/09/2017", "16:00", "17:00", "Lemma fondamentale del calcolo delle variazioni e lemma di Du Bois Reymond: enunciato, possibili dimostrazioni, discussione di possibili varianti. Esempio di un problema di minimo con vincolo integrale."];
Lezioni[4] = [ "4", "29/09/2017", "17:00", "18:00", "Nascita delle condizioni al bordo per le equazioni di Eulero-Lagrange. Esempi che portano a condizioni di Dirichlet, di Neumann, e periodiche. Esempi di problemi in cui il minimo non esiste."];
Lezioni[5] = [ "5", "03/10/2017", "14:00", "15:00", "Equazione di Eulero-Lagrange per una Lagrangiana generale: forme integrali, forma differenziale classica, alla Du Bois Reymond, alla Erdmann per il caso autonomo. Condizioni di Neumann per Lagrangiane generali. Discussione delle ipotesi di regolarità necessarie per le varie forme."];
Lezioni[6] = [ "6", "03/10/2017", "15:00", "16:00", "Come dimostrare che un punto stazionario è un punto di minimo: utilizzo della convessità o di un opportuno funzionale ausiliario. Esempi di esistenza e non esistenza del minimo per una Lagrangiana non convessa dipendente dalla sola derivata."];
Lezioni[7] = [ "7", "10/10/2017", "14:00", "15:00", "Problemi point-to-curve. Condizioni di transversality."];
Lezioni[8] = [ "8", "10/10/2017", "15:00", "16:00", "Discussione sullo spazio in cui ambientare i problemi di minimo. Esempi finali di metodo indiretto (con argomenti di troncamento e perdita di regolarità)."];
Lezioni[9] = [ "9", "12/10/2017", "14:00", "15:00", "Introduzione al metodo diretto. Spazi con una nozione di convergenza e teorema di Weierstrass per funzioni semicontinue inferiormente e coercive. Spazi di Hilbert separabili: sistemi ortonormali (basi Hilbertiane) e componenti."];
Lezioni[10] = [ "10", "12/10/2017", "15:00", "16:00", "Convergenza forte: continuità della norma e non compattezza delle palle in dimensione infinita. Convergenza debole: definizione, prime proprietà, semicontinuità della norma, compattezza delle palle."];
Lezioni[11] = [ "11", "17/10/2017", "14:00", "15:00", "Passaggio al limite nei prodotti scalari. La convergenza debole di successioni limitate può essere testata limitandosi ad un sottoinsieme con span denso. Le successioni debolmente convergenti sono limitate."];
Lezioni[12] = [ "12", "17/10/2017", "15:00", "16:00", "Ricapitolazione di fatti noti di analisi funzionale: teoremi di passaggio al limite per integrali, spazi di Lebesgue, disuguaglianze alla Holder. Lemma fondamentale del calcolo delle variazioni negli spazi di Lebesgue. Esempio di successione di funzioni debolmente convergente."];
Lezioni[13] = [ "13", "20/10/2017", "14:00", "15:00", "Spazi di Sobolev in dimensione uno: definizione W (mediante integrazione per parti) vs definizione H (mediante approssimazione o completamento astratto). Principali proprietà ed esempi. Dimostrazione che H è contenuto in W."];
Lezioni[14] = [ "14", "20/10/2017", "15:00", "16:00", "Le funzioni di Sobolev sono le primitive delle loro derivate deboli. Dimostrazione che W è contenuto in H. Le funzioni di Sobolev sono Holderiane. Derivate deboli e rapporti incrementali."];
Lezioni[15] = [ "15", "23/10/2017", "16:00", "17:00", "Road map del metodo diretto: formulazione debole negli spazi di Sobolev, compattezza dei sottolivelli rispetto ad un'opportuna nozione di convergenza, semicontinuità, recupero della regolarità (passo iniziale e bootstrap). Primo esempio di applicazione."];
Lezioni[16] = [ "16", "23/10/2017", "17:00", "18:00", "Discussione generale di come ottenere compattezza in spazi funzionali, sotto ipotesi di crescita per la Lagrangiana. Passaggio al limite nei funzionali integrali (caso di uniforme convergenza e Lagrangiana continua, caso di convergenza debole e Lagrangiana convessa)."];
Lezioni[17] = [ "17", "24/10/2017", "14:00", "15:00", "Approccio variazionale ai problemi al bordo per equazioni differenziali di ordine due: esistenza, regolarità, unicità sotto ipotesi di monotonia. Discussione di diverse condizioni al bordo di Dirichlet/Neumann."];
Lezioni[18] = [ "18", "24/10/2017", "15:00", "16:00", "Esempio di non unicità per un problema di Dirichlet. Approccio variazionale all'esistenza di soluzioni periodiche. Regolarità e stretta positività della derivata seconda della Lagrangiana rispetto alla velocità."];
Lezioni[19] = [ "19", "28/10/2017", "16:00", "17:00", "Definizione di inviluppo semicontinuo e rilassamento in spazi metrici. Principali proprietà del rilassamento: lemma fondamentale, semicontinuità inferiore, l'inf nella definizione è un minimo, coincide con l'inviluppo semicontinuo. Recovery sequences."];
Lezioni[20] = [ "20", "28/10/2017", "17:00", "18:00", "Inf/min di una funzione vs inf/min del rilassato (in generale e sotto ipotesi di coercività). Successioni minimizzanti per una funzione vs recovery sequences dei punti di minimo del rilassato. Prima strategia per il calcolo di un rilassato. Stabilità del rilassato rispetto a perturbazioni continue."];
Lezioni[21] = [ "21", "30/10/2017", "16:00", "17:00", "Sottoinsiemi densi in energia e relativo lemma. Seconda strategia per il calcolo di un rilassato. Estensione per rilassamento (ed ulteriore caratterizzazione degli spazi di Sobolev). Esempio di calcolo del rilassato di un funzionale integrale."];
Lezioni[22] = [ "22", "30/10/2017", "17:00", "18:00", "Definizione di Gamma-convergenza in spazi metrici. Recovery sequences. Gamma-convergenza e rilassamento. Rapporti (quasi inesistenti) con la convergenza puntuale ed uniforme. Esempi sulla retta reale. Stabilità rispetto a perturbazioni continue. Definizione di Gamma-liminf e Gamma-limsup."];
Lezioni[23] = [ "23", "31/10/2017", "14:00", "15:00", "Proprietà del Gamma-liminf: lemma fondamentale, l'inf nella definizione è un minimo, semicontinuità inferiore, convergenza dei minimi (caso degli aperti e dei compatti). Definizione di successione equicoerciva."];
Lezioni[24] = [ "24", "31/10/2017", "15:00", "16:00", "Teorema di convergenza dei minimi e dei punti di minimo (sotto ipotesi di Gamma-convergenza ed equicoercività). Proprietà del Gamma-limsup: lemma fondamentale, l'inf nella definizione è un minimo. Primo esempio di studio asintotico di un problema di minimo dipendente da un parametro."];
Lezioni[25] = [ "25", "03/11/2017", "16:00", "17:00", "Diverse tipologie di punto di minimo: globale (GM), locale forte (SLM), locale debole (WLM), direzionale (DLM). Esempio di WLM che non è SLM. Variazione seconda di un funzionale lungo una direzione e sua espressione in termini della Lagrangiana."];
Lezioni[26] = [ "26", "03/11/2017", "17:00", "18:00", "Funzionali quadratici. Condizioni di Legendre. Equazione di Jacobi e definizione di punto coniugato. Condizioni di Jacobi. Condizioni necessarie affinché un funzionale quadratico sia non negativo."];
Lezioni[27] = [ "27", "07/11/2017", "14:00", "15:00", "Condizioni sufficienti affinché un funzionale quadratico sia non negativo. Legami tra equazioni di Riccati e soluzioni positive di equazioni lineari di ordine due. Dimostrazione del lemma di oscillazione."];
Lezioni[28] = [ "28", "07/11/2017", "15:00", "16:00", "Funzionali quadratici strettamente positivi. Stime dall'alto e dal basso per funzionali quadratici. Condizioni necessarie per essere DLM. Condizioni sufficienti per essere WLM."];
Lezioni[29] = [ "29", "14/11/2017", "14:00", "15:00", "Calibrazioni: esempi motivazionali. Null Lagrangians e verification functions. Interpretazione dei risultati di minimalità per funzionali quadratici e funzionali convessi in termini di calibrazioni mediante null Lagrangians. Insiemi di livello delle verifications functions e calibrazione di problemi curve-to-curve."];
Lezioni[30] = [ "30", "14/11/2017", "15:00", "16:00", "Value function. Una value function regolare è una verification function. Eccesso di Weierstrass e condizioni di Weierstrass per essere SLM. Definizione di campo di Weierstrass."];
Lezioni[31] = [ "31", "17/11/2017", "16:00", "17:00", "Slope function di un campo di Weierstrass. L'esistenza di un campo di Weierstrass implica la formula di rappresentazione di Weierstrass: dimostrazione alla Hilbert (via null Lagrangian) e dimostrazione alla Weierstrass (per campi con un punto base)."];
Lezioni[32] = [ "32", "17/11/2017", "17:00", "18:00", "Dimostrazione della condizione necessaria di Weierstrass per uno SLM. Dimostrazione della condizione sufficiente a partire dalla formula di rappresentazione. Idea della dimostrazione dell'embedding theorem (dall'equazione di Jacobi all'esistenza di campi di Weierstrass)."];
Lezioni[33] = [ "33", "21/11/2017", "14:00", "15:00", "Metodo dei moltiplicatori di Lagrange nel calcolo delle variazioni: dimostrazione via teorema della funzione implicita e via teorema della funzione inversa. Condizione sufficiente per essere punto di minimo in un problema vincolato. Esempio di applicazione del metodo."];
Lezioni[34] = [ "34", "21/11/2017", "15:00", "16:00", "Variazione prima di funzionali con integrali multipli: integrale di Dirichlet e Laplaciano, equazione di Eulero-Lagrange in forma di divergenza, derivata normale al bordo e condizioni al bordo di Neumann."];
Lezioni[35] = [ "35", "24/11/2017", "14:00", "15:00", "Definizione di convergenza debole in Lp. Semicontinuità rispetto alla convergenza debole sotto ipotesi di convessità. Per le successioni limitate è possibile limitarsi a testare la convergenza debole su un denso."];
Lezioni[36] = [ "36", "24/11/2017", "15:00", "16:00", "Compattezza debole sotto ipotesi di crescita superlineare. Questioni di regolarità: mancanza di coercività vs regolarità Holderiana della derivata dei minimi. Esempio di metodo diretto per una Lagrangiana con dipendenza accoppiata da funzione/derivata"];
Lezioni[37] = [ "37", "27/11/2017", "14:00", "15:00", "Estensione per rilassamento di funzionali convessi da ambienti regolari ad ambienti meno regolari. Densità in energia delle funzioni affini a tratti. Patologie dovute alla mancanza di crescita superlineare."];
Lezioni[38] = [ "38", "27/11/2017", "15:00", "16:00", "Inviluppo convesso di una funzione. Rilassamento di funzionali integrali con Lagrangiana non convessa (ma con ipotesi di crescita). Esempi di applicazione della teoria."];
Lezioni[39] = [ "39", "28/11/2017", "14:00", "15:00", "Esempi classici: geodetiche in spazi euclidei, sul cilindo e sulla sfera (estremali, minimi locali/globali, calibrazioni). Le curve che minimizzano l'integrale di Dirichlet sono geodetiche."];
Lezioni[40] = [ "40", "28/11/2017", "15:00", "16:00", "Esempi classici: problemi con ostacolo. Metodo diretto, sia con ostacolo sulla funzione, sia con ostacolo sulla derivata. Equazione di Eulero-Lagrange in forma di disuguaglianza. Condizioni di contatto e regolarità ottimale in un punto di contatto."];
Lezioni[41] = [ "41", "04/12/2017", "16:00", "17:00", "Esempi di Gamma-convergenza: problemi con parametri piccoli (nel funzionale o nelle condizioni al bordo) che inducono effetti di linearizzazione."];
Lezioni[42] = [ "42", "04/12/2017", "17:00", "18:00", "Esempi di Gamma-convergenza: problemi con passaggio dal discreto al continuo, dai rapporti incrementali alle derivate. Integrazione per parti discreta. Equazione di Eulero nel contesto discreto."];
Lezioni[43] = [ "43", "05/12/2017", "14:00", "15:00", "Problema classico: la brachistocrona. Modello fisico, equazione di Eulero, famiglie di cicloidi, esistenza ed unicità della cicloide che rispetta le condizioni al bordo, effettiva minimalità globale (via campi di Weierstrass e via trucco di convessità)."];
Lezioni[44] = [ "44", "05/12/2017", "15:00", "16:00", "Problema classico: problema di Didone in versione cartesiana. Equazione di Eulero con moltiplicatore di Lagrange, esistenza di soluzioni al variare del parametro, minimalità globale (via campi di Weierstrass e via vera convessità). Discussione del caso in cui una soluzione classica non esiste."];
Lezioni[45] = [ "45", "12/12/2017", "14:00", "15:00", "Problema classico: superfici di rotazione di area minima. Equazione di Eulero, discussione di esistenza/unicità a seconda dei parametri, famiglie di catenarie, discussione delle soluzioni nel caso simmetrico."];
Lezioni[46] = [ "46", "12/12/2017", "15:00", "16:00", "Problema classico: heavy chain. Formulazione cartesiana, equazione di Eulero con moltiplicatori di Lagrange, esistenza/unicità a seconda dei parametri. Discussione generale di problemi di minimo con vincoli integrali/puntuali sulle derivate: rilassamento (da uguaglianza a disuguaglianza) e saturazione del vincolo."];
Lezioni[47] = [ "47", "15/12/2017", "16:00", "17:00", "Esempi di Gamma-convergenza: problemi di omogenizzazione con coefficienti oscillanti, sia davanti alla funzione, sia davanti alla derivata. Problema di cella."];
Lezioni[48] = [ "48", "15/12/2017", "17:00", "18:00", "Esempi di Gamma-convergenza: funzionale di Modica-Mortola in dimensione uno (studio asintotico del valore del minimo e del profilo di transizione ottimale)."];
