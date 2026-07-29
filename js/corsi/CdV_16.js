var NomeCorso = "Elementi di Calcolo delle Variazioni - 2015/2016";
var Percorso = MEDIA.lezioni + "CdV_16/CdV_16_L";
var CifreNumeroLezione = 2;

var SchedaCorso = {
  nome: "Elementi di Calcolo delle Variazioni",
  annoAccademico: "2015/2016",
  crediti: "6",
  target: "Corso di Laurea in Matematica",
  anno: "Dal terzo anno in poi",
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "CdV_16_Burocrazia.pdf",
    titolo: "Informazioni burocratiche"
  },
  {
    sezione: "burocrazia",
    file: "CdV_16_Esame.pdf",
    titolo: "Regole d’esame"
  },
  {
    sezione: "burocrazia",
    file: "CdV_16_Programma.pdf",
    titolo: "Programma \"definitivo\""
  },
  {
    sezione: "book",
    file: "CdV_16_Book.pdf",
    titolo: "Stampato integrale lezioni"
  }
];

var Lezioni = new Array();
Lezioni[1] = [ "1", "24/09/2015", "16:00", "17:00", "Illustrazione mediante esempi banali del programma del corso. Funzionali integrali. Funzionali di cui non si parlerà nel corso."];
Lezioni[2] = [ "2", "24/09/2015", "17:00", "18:00", "Metodo indiretto nel calcolo delle variazioni: derivate di funzionali lungo curve. Primo esempio di applicazione del metodo indiretto. Esempio di non esistenza del minimo."];
Lezioni[3] = [ "3", "29/09/2015", "14:00", "15:00", "Lemma fondamentale del calcolo delle variazioni: dimostrazione e discussione di possibili varianti. Caso delle funzioni test a media nulla (Lemma di Du Bois Reymond). Esempio di problema di minimo con vincolo integrale."];
Lezioni[4] = [ "4", "29/09/2015", "15:00", "16:00", "Nascita delle condizioni al bordo per le equazioni di Eulero: condizioni di Dirichlet, di Neumann e periodiche."];
Lezioni[5] = [ "5", "01/10/2015", "16:00", "17:00", "Minimizzazione di un funzionale con integranda dipendente dalla sola derivata: esistenza/unicità nei casi convesso e strettamente convesso."];
Lezioni[6] = [ "6", "01/10/2015", "17:00", "18:00", "Minimizzazione di un funzionale con integranda dipendente dalla sola derivata: caso del doppio pozzo. Lemma trivial (condizione sufficiente per la minimalità mediante funzionale ausiliario). Derivazione dell'equazione di Eulero con integranda generale."];
Lezioni[7] = [ "7", "07/10/2015", "14:00", "15:00", "Equazione di Eulero in forma classica, in forma DBR (integrata), in forma Erdmann (per il caso autonomo). Generalizzazione a funzionali dipendenti da più funzioni o da derivate successive. Condizione sufficiente per essere un minimo via convessità."];
Lezioni[8] = [ "8", "07/10/2015", "15:00", "16:00", "Esempi di studio di funzionali mediante metodo indiretto."];
Lezioni[9] = [ "9", "09/10/2015", "10:00", "11:00", "Introduzione al metodo diretto: teorema di Weierstrass e generalizzazione in uno spazio con una nozione di convergenza. Road map del metodo diretto: formulazione debole, semicontinuità, compattezza, regolarità. Continuità forte della norma in uno spazio di Hilbert."];
Lezioni[10] = [ "10", "09/10/2015", "11:00", "12:00", "Basi Hilbertiane e relative componenti. Non compattezza forte delle palle negli spazi di Hilbert di dimensione infinita. Definizione di convergenza debole e prime proprietà. Accenno alla limitatezza delle successioni debolmente convergenti."];
Lezioni[11] = [ "11", "14/10/2015", "14:00", "15:00", "Convergenza debole vs convergenza delle componenti rispetto ad una base Hilbertiana. Compattezza debole delle palle negli spazi di Hilbert separabili. Semicontinuità debole della norma."];
Lezioni[12] = [ "12", "14/10/2015", "15:00", "16:00", "Ripasso di fatti noti sulla misura di Lebesgue e gli spazi di Lebesgue. Derivata debole (definizione W). Lemma fondamentale del calcolo delle variazioni in versione Lebesgue e unicità della derivata debole."];
Lezioni[13] = [ "13", "16/10/2015", "14:00", "15:00", "Derivate deboli e spazi di Sobolev in dimensione uno (definizione W vs definizione H). Dimostrazione che H è contenuto in W. Le funzioni negli spazi di Sobolev sono l'integrale della propria derivata."];
Lezioni[14] = [ "14", "16/10/2015", "15:00", "16:00", "Holderianità delle funzioni negli spazi di Sobolev. Definizione H e convergenza uniforme. Idea della dimostrazione che W è contenuto in H. Derivate deboli e rapporti incrementali."];
Lezioni[15] = [ "15", "21/10/2015", "14:00", "15:00", "Esempio classico di applicazione del metodo diretto nel calcolo delle variazioni: formulazione debole, compattezza, semicontinuità, regolarità (passo iniziale e bootstrap)."];
Lezioni[16] = [ "16", "21/10/2015", "15:00", "16:00", "Casi semplici di teoremi di compattezza in spazi di funzioni (con limitazione integrale sulla derivata e puntuale sulla funzione). Teoremi di semicontinuità per funzionali integrali (rispetto alla convergenza uniforme in ipotesi di (semi)continuità o alla convergenza debole in ipotesi di convessità)."];
Lezioni[17] = [ "17", "23/10/2015", "14:00", "15:00", "Esempio di studio di un'equazione differenziale del secondo ordine con condizioni di Dirichlet passando per il problema variazionale associato: esistenza, unicità, regolarità."];
Lezioni[18] = [ "18", "23/10/2015", "15:00", "16:00", "Esempio di non unicità per il problema di Dirichlet per un'equazione del secondo ordine. Ruolo delle ipotesi di crescita nel dedurre limitazioni sulla derivata da limitazioni su un funzionale."];
Lezioni[19] = [ "19", "28/10/2015", "14:00", "15:00", "Definizione di funzionale rilassato e prime proprietà: l'inf nella definizione è un minimo, il rilassato è semicontinuo e coincide con l'inviluppo semicontinuo. Definizione di recovery sequence."];
Lezioni[20] = [ "20", "28/10/2015", "15:00", "16:00", "Inf/min di un funzionale (e relative successioni minimizzanti) vs inf/min del rilassato. Stabilità del rilassato per perturbazioni continue. Lemma del sottoinsieme denso in energia e suo ruolo nel calcolo di un rilassato."];
Lezioni[21] = [ "21", "30/10/2015", "14:00", "15:00", "Lemma del denso in energia e disuguaglianze tra funzionali. Dimostrazione alternativa della semicontinuità del rilassato. Estensione per rilassamento di un funzionale ad un ambiente più generale: definizione ed esempi classici."];
Lezioni[22] = [ "22", "30/10/2015", "15:00", "16:00", "Definizione di Gamma-convergenza in spazi metrici. Semplici esempi sulla retta reale. Collegamenti con la convergenza puntuale ed il rilassamento. Gamma-liminf e Gamma-limsup. Primo enunciato di convergenza di minimi."];
Lezioni[23] = [ "23", "04/11/2015", "14:00", "15:00", "Gli inf nella definizione di Gamma-liminf e Gamma-limsup sono min (enunciato). Gamma-liminf e Gamma-limsup sono semicontinui inferiormente (enunciato). Convergenza di minimi e punti di minimo per successioni equicoercive. Lemma delle successioni a due indici."];
Lezioni[24] = [ "24", "04/11/2015", "15:00", "16:00", "Dimostrazione del metodo dei moltiplicatori di Lagrange mediante penalizzazione del vincolo e sua interpretazione in termini di Gamma-convergenza. Esempio di studio asintotico di una famiglia parametrica di problemi di minimo."];
Lezioni[25] = [ "25", "06/11/2015", "14:00", "15:00", "Definizioni di punto di minimo: locale direzionale (DML), locale debole (WLM), locale forte (SLM), globale (GM). Esempio di WLM che non è SLM. Eccesso di Weierstrass e condizione necessaria di Weierstrass per un SLM."];
Lezioni[26] = [ "26", "06/11/2015", "15:00", "16:00", "Calcolo della variazione seconda di un funzionale integrale. Condizioni necessarie affinché un funzionale quadratico sia semidefinito positivo: Legendre e Jacobi. Punti coniugati."];
Lezioni[27] = [ "27", "11/11/2015", "14:00", "15:00", "Condizioni sufficienti affinché un funzionale quadratico sia semidefinito positivo: condizioni di Legendre e Jacobi rinforzate."];
Lezioni[28] = [ "28", "11/11/2015", "15:00", "16:00", "Le condizioni sufficienti implicano la stretta positività di un funzionale quadratico. Funzionali integrali generali: condizioni necessarie per essere (DLM) e sufficienti per essere (WLM)."];
Lezioni[29] = [ "29", "13/11/2015", "14:00", "15:00", "Minimalità via calibrazioni (verification functions): esempi motivazionali e teorema generale. Calibrazione mediante la value function."];
Lezioni[30] = [ "30", "13/11/2015", "15:00", "16:00", "Interpretazione in termini di calibrazione della minimalità via convessità e del caso dei funzionali quadratici. Enunciato della condizione di Weierstrass rinforzata. Campi di estremali e dimostrazione alla Hilbert (via calibrazione) della formula di Weierstrass."];
Lezioni[31] = [ "31", "18/11/2015", "14:00", "15:00", "La formula di Weierstrass implica la minimalità se vale la condizione di Weierstrass rinforzata. Dimostrazione alla Weierstrass della formula di Weierstrass."];
Lezioni[32] = [ "32", "18/11/2015", "15:00", "16:00", "Idea della dimostrazione dell'imbedding theorem (esistenza di un campo di estremali). Gli estremali sono minimi su intervalli sufficientemente piccoli (se l'integranda è convessa nella derivata). Riassunto delle condizioni necessarie/sufficienti."];
Lezioni[33] = [ "33", "19/11/2015", "14:00", "15:00", "Moltiplicatori di Lagrange nel calcolo delle variazioni: dimostrazione via teorema del Dini in dimensione due. Esempi semplici di applicazione."];
Lezioni[34] = [ "34", "19/11/2015", "15:00", "16:00", "Calcolo delle variazioni in più variabili: integrale di Dirichlet e Laplaciano, equazione di Eulero in forma di divergenza, derivata normale e condizioni di Neumann, esempi di equazioni ellittiche semilineari viste come equazioni di Eulero."];
Lezioni[35] = [ "35", "25/11/2015", "14:00", "15:00", "Esempio motivazionale di studio di un funzionale con crescita non quadratica nella derivata. Convergenza debole in spazi Lp."];
Lezioni[36] = [ "36", "25/11/2015", "15:00", "16:00", "Esempi di teoremi di semicontinuità e compattezza sotto ipotesi di crescita e/o convessità rispetto alla derivata."];
Lezioni[37] = [ "37", "27/11/2015", "14:00", "15:00", "Estensione per rilassamento di funzionali convessi ad ambienti meno regolari. Lemma di densità in energia delle funzioni affini a tratti. Patologie generate dal rilassamento di funzionali senza ipotesi di crescita superlineare."];
Lezioni[38] = [ "38", "27/11/2015", "15:00", "16:00", "Convessificata di una funzione reale e suo ruolo nel calcolo del rilassato di un funzionale dipendente dalla sola derivata in ipotesi di crescita superlineare."];
Lezioni[39] = [ "39", "02/12/2015", "14:00", "15:00", "Esempi classici: geodetiche nel piano, sul cilindro e sulla sfera, con relative calibrazioni. Accenno al fatto che le curve che minimizzano l'integrale di Dirichlet sono geodetiche."];
Lezioni[40] = [ "40", "02/12/2015", "15:00", "16:00", "Esempi classici: problemi con ostacolo sulla funzione o sulla derivata. Condizioni al bordo per problemi point-to-curve (transversality). Continuità della derivata nei punti di contatto con l'ostacolo (sotto ipotesi di convessità)."];
Lezioni[41] = [ "41", "04/12/2015", "14:00", "15:00", "Esempi di Gamma-convergenza: problemi con parametri piccoli che inducono effetti di linearizzazione."];
Lezioni[42] = [ "42", "04/12/2015", "15:00", "16:00", "Esempi di Gamma-convergenza: passaggio dal discreto al continuo (dal rapporto incrementale alla derivata)."];
Lezioni[43] = [ "43", "09/12/2015", "14:00", "15:00", "Problema classico: la brachistocrona (modello, equazione di Eulero, cicloidi, esistenza/unicità della cicloide che parte da un punto dato e passa per un altro punto assegnato)."];
Lezioni[44] = [ "44", "09/12/2015", "15:00", "16:00", "Continuazione sulla brachistocrona (minimalità via campi di estremali e via convessità). Minimalità per problemi vincolati. Problema classico: grafico di lunghezza minima che sottende un'area assegnata."];
Lezioni[45] = [ "45", "11/12/2015", "14:00", "15:00", "Problema classico: superficie di rotazione di area minima (equazione di Eulero, discussione di esistenza/unicità delle soluzioni, studio più fine in un caso speciale simmetrico, accenno a cosa accade quando mancano le soluzioni classiche)."];
Lezioni[46] = [ "46", "11/12/2015", "15:00", "16:00", "Problema classico: heavy chain (formulazione parametrica e non parametrica, equazione di Eulero, soluzione dell'equazione in un caso speciale simmetrico, esistenza per il problema parametrico via rilassamento e saturazione del vincolo, approssimazione per Gamma-convergenza)."];
Lezioni[47] = [ "47", "16/12/2015", "14:00", "15:00", "Esempi di Gamma-convergenza: problemi di omogenizzazione, sia sulla funzione (via convergenza uniforme), sia sulla derivata (via problema di cella)."];
Lezioni[48] = [ "48", "16/12/2015", "15:00", "16:00", "Esempi di Gamma-convergenza: funzionale di Modica-Mortola in dimensione uno: studio asintotico del valore del minimo e del profilo ottimale di transizione."];
