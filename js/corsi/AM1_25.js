var NomeCorso = "Analisi Matematica 1 - 2024/2025";

var Percorso = MEDIA.lezioni + "AM1_25/AM1_25_L";

var SchedaCorso = {
  nome: "Analisi Matematica 1",
  annoAccademico: "2024/2025",
  crediti: "12",
  target: "Corso di Laurea in Ingegneria Meccanica",
  anno: "Primo anno",
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "AM1_25_Burocrazia.pdf",
    titolo: "Informazioni generali"
  },
  {
    sezione: "burocrazia",
    file: "AM1_25_Esame.pdf",
    titolo: "Regole d’esame"
  },
  {
    sezione: "burocrazia",
    file: "AM1_25_Programma.pdf",
    titolo: "Programma dettagliato"
  },
  {
    sezione: "book",
    file: "AM1_25_Book1.pdf",
    titolo: "Stampato integrale delle lezioni",
    nota: "Volume 1 — Lezioni 1–65"
  },
  {
    sezione: "book",
    file: "AM1_25_Book2.pdf",
    titolo: "Stampato integrale delle lezioni",
    nota: "Volume 2 — Lezioni 66–120"
  }
];

var Lezioni = new Array();
Lezioni[1] = ["1", "27/09/2024", "14:30", "15:30", "Logica elementare (a livello intuitivo): proposizioni, predicati, quantificatori. Negazione di una proposizione. Implicazione tra proposizioni."];
Lezioni[2] = ["2", "27/09/2024", "15:30", "16:30", "Insiemi e notazioni insiemistiche. Unione, intersezione, differenza di insiemi. Uso di and, aut, vel come connettori logici. Insieme delle parti. Prodotto cartesiano di due insiemi.", "m", "m"];
Lezioni[3] = ["3", "27/09/2024", "16:30", "17:30", "Funzioni tra insiemi: definizione operativa e grafico. Iniettività, surgettività, funzione inversa. Immagine e controimmagine.", "m", "m"];
Lezioni[4] = ["4", "28/09/2024", "10:30", "11:30", "Principio di induzione: definizione e spiegazione intuitiva del funzionamento. Primi esempi di uguaglianze dimostrate per induzione: somma dei primi n naturali e dei loro quadrati, somma delle prime n potenze di un reale."];
Lezioni[5] = ["5", "28/09/2024", "11:30", "12:30", "Primi esempi di disuguaglianze dimostrate per induzione. Disuguaglianza di Bernoulli. L'implicazione del passo induttivo può essere vera anche per valori di n per cui l'enunciato è falso."];
Lezioni[6] = ["6", "28/09/2024", "12:30", "13:30", "Ulteriori esempi di applicazione del principio di induzione. Esempio classico di un enunciato che si dimostra per induzione solo ricorrendo ad una tesi più forte."];
Lezioni[7] = ["7", "03/10/2024", "08:30", "09:30", "Fattoriali e binomiali: definizione algebrica ed interpretazione combinatoria. Triangolo di Tartaglia e binomio di Newton."];
Lezioni[8] = ["8", "03/10/2024", "09:30", "10:30", "Insiemi numerici. Definizione assiomatica dei numeri reali (assiomi algebrici, di ordinamento, di continuità). Commenti ed esempi sull'assioma di continuità."];
Lezioni[9] = ["9", "03/10/2024", "10:30", "11:30", "Maggioranti, minoranti, massimo, minimo, estremo inferiore e superiore. Dimostrazione dell'esistenza di inf e sup. Caratterizzazione di inf e sup. Esempi."];
Lezioni[10] = ["10", "05/10/2024", "10:30", "11:30", "Funzioni reali: proprietà di simmetria (funzioni pari, dispari, periodiche) e di monotonia (funzioni debolmente/strettamente crescenti/decrescenti). Relazioni tra monotonia e iniettività. Interpretazione di iniettività e surgettività in termini di grafico."];
Lezioni[11] = ["11", "05/10/2024", "11:30", "12:30", "Potenze e radici con indici pari e dispari. Funzioni esponenziali e logaritmi. Seno e coseno e corrispondenti funzioni inverse."];
Lezioni[12] = ["12", "05/10/2024", "12:30", "13:30", "Tangente e arcotangente. Interpretazione geometrica delle funzioni trigonometriche inverse. Operazioni sui grafici. Calcolo di immagini e controimmagini usando i grafici."];
Lezioni[13] = ["13", "10/10/2024", "08:30", "09:30", "Esercizio sul principio di induzione. Somma dei numeri di una riga del triangolo di Tartaglia: dimostrazione algebrica e interpretazione combinatoria. Anagrammi di una parola con lettere ripetute. Interpretazione combinatoria della regola che genera il triangolo di Tartaglia."];
Lezioni[14] = ["14", "10/10/2024", "09:30", "10:30", "Formule notevoli relative alle funzioni trigonometriche inverse. Esercizi sulla composizione di una funzione con la sua inversa. Esercizi su inettività e surgettività di funzioni reali."];
Lezioni[15] = ["15", "10/10/2024", "10:30", "11:30", "Esercizi misti sulle funzioni reali: funzioni pari/dispari/periodiche, grafico, immagine e controimmagine."];
Lezioni[16] = ["16", "17/10/2024", "08:30", "09:30", "Significato dei termini 'definitivamente' e 'frequentemente'. Definizione di successione e sue rappresentazioni. Definizioni di limite per successioni. Limiti da destra e da sinistra."];
Lezioni[17] = ["17", "17/10/2024", "09:30", "10:30", "Esempi di limiti semplici calcolati usando la definizione. Teorema di confronto a 2 e teorema di confronto a 3 (teorema dei carabinieri). Limiti di esponenziali. Retta reale estesa ed enunciato del teorema algebrico sui limiti."];
Lezioni[18] = ["18", "17/10/2024", "10:30", "11:30", "Primi esempi di studio di forme indeterminate. Calcolo di limiti mediante i teoremi algebrici e di confronto. Limiti di radici n-esime."];
Lezioni[19] = ["19", "19/10/2024", "10:30", "11:30", "Teorema delle successioni monotone. Il numero e (monotonia e limitatezza della successione che lo definisce)."];
Lezioni[20] = ["20", "19/10/2024", "11:30", "12:30", "Criteri per lo studio del limite di successioni: criterio della radice, criterio del rapporto, criterio rapporto -> radice. Confronto tra ordini di infinito: potenze, esponenziali, fattoriali."];
Lezioni[21] = ["21", "19/10/2024", "12:30", "13:30", "Esercizi sui limiti di successioni che sfruttano gli strumenti visti finora."];
Lezioni[22] = ["22", "24/10/2024", "08:30", "09:30", "Limiti di funzioni: definizioni."];
Lezioni[23] = ["23", "24/10/2024", "09:30", "10:30", "Definizione di funzione continua in un punto. Enunciato della continuità delle funzioni ottenute a partire da quelle elementari. Primi esempi di cambi di variabile nei limiti."];
Lezioni[24] = ["24", "24/10/2024", "10:30", "11:30", "Limiti notevoli classici: enunciato e deduzione a partire dai due fondamentali. Primi esempi di utilizzo."];
Lezioni[25] = ["25", "26/10/2024", "10:30", "11:30", "Dimostrazione del limite fondamentale con la funzione seno. Criterio funzioni -> successioni. Trucco del valore assoluto. Le potenze battono i logaritmi all'infinito."];
Lezioni[26] = ["26", "26/10/2024", "11:30", "12:30", "Sottosuccessioni e loro limiti. Utilizzo di successioni e sottosuccessioni per mostrare la non esistenza di limiti di funzioni e successioni."];
Lezioni[27] = ["27", "26/10/2024", "12:30", "13:30", "Razionalizzazione della differenza di radici. Esercizi misti sui limiti che utilizzano le tecniche viste finora."];
Lezioni[28] = ["28", "07/11/2024", "08:30", "09:30", "Definizione di o piccolo. Principali proprietà di o piccolo. Primi esempi."];
Lezioni[29] = ["29", "07/11/2024", "09:30", "10:30", "Sviluppini delle funzioni elementari. Utilizzo degli sviluppini per il calcolo di limiti."];
Lezioni[30] = ["30", "07/11/2024", "10:30", "11:30", "Definizione di equivalenza asintotica. Sviluppini come equivalenze asintotiche. Ulteriori esempi di proprietà di o piccolo e suo utilizzo nel calcolo dei limiti."];
Lezioni[31] = ["31", "09/11/2024", "10:30", "11:30", "Derivata e differenziale. Retta tangente ad un grafico. Equivalenza tra le definizioni e interpretazione geometrica. La derivabilità implica la continuità."];
Lezioni[32] = ["32", "09/11/2024", "11:30", "12:30", "Regole di derivazione: derivata della somma/differenza, del prodotto per una costante, del prodotto di due funzioni, del reciproco/quoziente, della composizione."];
Lezioni[33] = ["33", "09/11/2024", "12:30", "13:30", "Derivate delle funzioni elementari (dimostrazioni via rapporto incrementale e via differenziale). Limiti notevoli vs sviluppini vs derivate delle funzioni elementari. Derivata della funzione inversa. Esempi di calcolo di derivate."];
Lezioni[34] = ["34", "14/11/2024", "08:30", "09:30", "Enunciato del teorema di De L'Hôpital. Esempi in cui si può e non si può applicare. Pericoli del \"fare i limiti metà per volta\" o mediante equivalenza asintotica."];
Lezioni[35] = ["35", "14/11/2024", "09:30", "10:30", "Enunciato della formula di Taylor con resto di Peano e centro in 0. Enunciato degli sviluppi di Taylor delle funzioni elementari. Primi esempi di applicazione."];
Lezioni[36] = ["36", "14/11/2024", "10:30", "11:30", "Dimostrazione degli sviluppi di Taylor di alcune funzioni elementari (esponenziale, seno, coseno, logaritmo). Polinomio di Taylor di somma, differenza, prodotto per una costante, prodotto di due funzioni. Esempi di calcolo del polinomio di Taylor di un prodotto."];
Lezioni[37] = ["37", "16/11/2024", "10:30", "11:30", "Polinomio di Taylor della composizione. Formula di Taylor con resto di Peano e centro in un punto qualunque. Esempi di calcolo di polinomi di Taylor di funzioni composte."];
Lezioni[38] = ["38", "16/11/2024", "11:30", "12:30", "Funzioni iperboliche."];
Lezioni[39] = ["39", "16/11/2024", "12:30", "13:30", "Esercizi misti su sviluppi di Taylor e calcolo di parti principali."];
Lezioni[40] = ["40", "21/11/2024", "08:30", "09:30", "Serie numeriche: definizione come limite delle somme parziali. Serie telescopiche e geometriche. Proprietà algebriche."];
Lezioni[41] = ["41", "21/11/2024", "09:30", "10:30", "Condizione necessaria per la convergenza di una serie numerica. Serie a termini di segno costante. Criteri di convergenza: confronto, radice, rapporto. Primi esempi di studio della convergenza."];
Lezioni[42] = ["42", "21/11/2024", "10:30", "11:30", "Criterio del confronto asintotico per serie numeriche: casi standard. Serie armonica generalizzata: enunciato e dimostrazione di alcuni casi mediante confronto asintotico con serie telescopiche. Esempi di studio della convergenza di serie mediante confronto asintotico."];
Lezioni[43] = ["43", "23/11/2024", "10:30", "11:30", "Criterio del confronto asintotico per serie numeriche: casi limite. Esempi di serie studiate mediante confronto asintotico."];
Lezioni[44] = ["44", "23/11/2024", "11:30", "12:30", "Criterio di Leibnitz per le serie a segno alterno: enunciato e dimostrazione. Assoluta convergenza: enunciato e dimostrazione mediante il teorema dei carabinieri per le serie. Esempi di serie convergenti ma non assolutamente convergenti."];
Lezioni[45] = ["45", "23/11/2024", "12:30", "13:30", "Esercizi riassuntivi sullo studio di serie numeriche, anche parametriche."];
Lezioni[46] = ["46", "28/11/2024", "08:30", "09:30", "Serie di potenze: definizione, raggio di convergenza, formula per il calcolo del raggio di convergenza, possibilità di derivare per serie. Serie di Taylor e funzioni analitiche."];
Lezioni[47] = ["47", "28/11/2024", "09:30", "10:30", "Esempi di studio di serie di potenze (calcolo del raggio di convergenza e della somma). Esempi di calcolo esplicito di serie numeriche passando per opportune serie di potenze."];
Lezioni[48] = ["48", "28/11/2024", "10:30", "11:30", "Esercizi misti su polinomi di Taylor, ordini di infinitesimo, studio di serie parametriche."];
Lezioni[49] = ["49", "30/11/2024", "10:30", "11:30", "Teorema di esistenza degli zeri e teorema dei valori intermedi: enunciato, dimostrazione, esempi di applicazione."];
Lezioni[50] = ["50", "30/11/2024", "11:30", "12:30", "Teoremi che legano la monotonia di una funzione al segno della sua derivata prima: enunciato, dimostrazione, esempi di applicazione."];
Lezioni[51] = ["51", "30/11/2024", "12:30", "13:30", "Studio locale di una funzione nell'intorno di un punto stazionario: criterio delle derivate successive e sua interpretazione in termini di polinomi di Taylor. Esempi di applicazione."];
Lezioni[52] = ["52", "05/12/2024", "08:30", "09:30", "Schema classico per lo studio globale di funzioni: simmetrie, continuità, limiti agli estremi, zeri e segno, monotonia, punti di massimo/minimo locale/globale."];
Lezioni[53] = ["53", "05/12/2024", "09:30", "10:30", "Asintoti verticali, orizzontali, obliqui. Formula per il calcolo dei coefficienti degli asintoti obliqui."];
Lezioni[54] = ["54", "05/12/2024", "10:30", "11:30", "Funzioni concave e convesse: definizione geometrica e accenno alla definizione algebrica. Enunciato dei legami tra convessità e segno della derivata seconda. Punti di flesso."];
Lezioni[55] = ["55", "07/12/2024", "10:30", "11:30", "Enunciato del teorema di Weierstrass in un intervallo. Ricerca dei punti di max/min: punti stazionari interni, singolari interni, bordo."];
Lezioni[56] = ["56", "07/12/2024", "11:30", "12:30", "Nei punti interni di max/min la derivata, se esiste, si annulla. Teoremi di Rolle, Cauchy, Lagrange."];
Lezioni[57] = ["57", "07/12/2024", "12:30", "13:30", "Varianti del teorema di Weierstrass: funzioni periodiche, funzioni definite su tutta la retta con condizioni all'infinito."];
Lezioni[58] = ["58", "12/12/2024", "08:30", "09:30", "Esempi di equazioni (anche parametriche) e disequazioni risolte mediante studi di funzione."];
Lezioni[59] = ["59", "12/12/2024", "09:30", "10:30", "Due esempi delicati sullo studio di funzioni. Rischi legati al confronto di due grafici."];
Lezioni[60] = ["60", "12/12/2024", "10:30", "11:30", "Funzioni Lipschitziane: definizione, interpretazione geometrica, caratterizzazione in termini di limitatezza della derivata prima, esempi. Disuguaglianze di Lipschitzianità classiche."];
Lezioni[61] = ["61", "14/12/2024", "10:30", "11:30", "Enunciato della formula di Taylor con resto di Lagrange. Applicazioni classiche: approssimazione di funzioni, dimostrazione di disuguaglianze. Esempio di utilizzo del teorema di Lagrange nel calcolo di un limite."];
Lezioni[62] = ["62", "14/12/2024", "11:30", "12:30", "Esercizi legati allo studio di funzioni: determinare il massimo di una successione, stabilire l'esistenza di una costante per cui vale una certa disuguaglianza."];
Lezioni[63] = ["63", "14/12/2024", "12:30", "13:30", "Ulteriori esempi più sofisticati di esercizi che coinvolgono gli studi di funzione."];
Lezioni[64] = ["64", "16/12/2024", "11:30", "12:30", "Dimostrazione del caso 0/0 del teorema di De L'Hôpital. Caratterizzazione del polinomio di Taylor in termini delle sue derivate in 0. Dimostrazione della formula di Taylor con resto di Peano e con resto di Lagrange."];
Lezioni[65] = ["65", "16/12/2024", "12:30", "13:30", "Unicità del polinomio di Taylor. Convergenza di serie di Taylor dimostrata mediante Taylor-Lagrange. Esercizi finali."];
Lezioni[66] = ["66", "28/02/2025", "14:30", "15:30", "Introduzione agli integrali: notazioni, significato geometrico, funzioni a gradino, definizione di integrale inferiore e superiore. Funzione di Dirichlet. Criterio di integrabilità."];
Lezioni[67] = ["67", "28/02/2025", "15:30", "16:30", "Enunciato dell'integrabilità delle funzioni continue. Dimostrazione dell'integrabilità delle funzioni monotone. Prime proprietà dell'integrale: linearità, monotonia, additività rispetto alla zona di integrazione, disuguaglianza con il valore assoluto."];
Lezioni[68] = ["68", "28/02/2025", "16:30", "17:30", "Definizione di primitiva e di funzione integrale. Due primitive in un intervallo differiscono per una costante. Teorema della media integrale. Teorema fondamentale del calcolo integrale. Utilizzo della primitiva per il calcolo operativo di integrali."];
Lezioni[69] = ["69", "01/03/2025", "08:30", "09:30", "Introduzione alle tecniche di integrazione. Integrali che si calcolano mediante considerazioni geometriche. Primitive elementari (tabella di derivate letta al contrario). Primi esempi di calcolo esplicito di integrali, anche con valori assoluti."];
Lezioni[70] = ["70", "01/03/2025", "09:30", "10:30", "Formula di integrazione per parti. Esempi classici di applicazione (polinomi per esponenziali o funzioni trigonometriche). Tecnica del grande ritorno e dell'1 nascosto. Esempio paradossale utilizzando la formula senza estremi."];
Lezioni[71] = ["71", "01/03/2025", "10:30", "11:30", "Formula di integrazione per sostituzione e sua interpretazione brutale. Esempi classici di applicazione. Primitive di potenze di seno e coseno."];
Lezioni[72] = ["72", "07/03/2025", "14:30", "15:30", "Integrazione delle funzioni razionali: descrizione dell'algoritmo, riduzione al caso in cui il numeratore ha grado inferiore, fattorizzazione del denominatore, decomposizione in fratti semplici quandi i fattori hanno tutti molteplicità 1. Metodo rapido per il calcolo dei coefficienti della decomposizione."];
Lezioni[73] = ["73", "07/03/2025", "15:30", "16:30", "Integrazione delle funzioni razionali: decompozione in fratti semplici e decomposizione di Hermite nel caso generale. Integrazione dei termini generati dalla decomposizione di Hermite."];
Lezioni[74] = ["74", "07/03/2025", "16:30", "17:30", "Integrazione delle funzioni razionali: integrazione dei fratti semplici con molteplicità al denominatore. Esempi vari di applicazione dell'algoritmo."];
Lezioni[75] = ["75", "08/03/2025", "08:30", "09:30", "Sostituzioni razionalizzanti: funzioni razionali di esponenziali, funzioni razionali di radici di espressioni razionali di primo grado, primo esempio di sostituzione trigonometrica per radici di polinomi di secondo grado."];
Lezioni[76] = ["76", "08/03/2025", "09:30", "10:30", "Sostituzioni razionalizzanti: discussione generale dei tre metodi per le radici di polinomi di secondo grado."];
Lezioni[77] = ["77", "08/03/2025", "10:30", "11:30", "Sostituzioni razionalizzanti: formule parametriche per funzioni razionali di seno e coseno. Interpretazione geometrica delle varie sostituzioni razionalizzanti. Esempi conclusivi. Uso della simmetria per il calcolo degli integrali del quadrato di seno e coseno tra estremi opportuni."];
Lezioni[78] = ["78", "21/03/2025", "14:30", "15:30", "Introduzione agli integrali impropri: definizione nel caso monoproblema e spezzamento nel caso con più problemi. Esempi di integrali impropri che si calcolano esplicitamente."];
Lezioni[79] = ["79", "21/03/2025", "15:30", "16:30", "Comportamento degli integrali impropri con potenze negative della x, sia a 0 sia all'infinito. Criteri di convergenza per integrali impropri: confronto, confronto asintotico (casi standard e casi limite), assoluta integrabilità. Primi esempi di applicazione."];
Lezioni[80] = ["80", "21/03/2025", "16:30", "17:30", "Esempi di studio della convergenza di integrali impropri applicando i criteri. Esempi di integrali impropri con problemi in punti diversi dall'origine o dall'infinito."];
Lezioni[81] = ["81", "22/03/2025", "08:30", "09:30", "Integrali oscillanti (trucco dell'integrazione per parti): esempi classici (integrali di Dirichlet e di Fresnel) e formalizzazione con il criterio di Dirichlet."];
Lezioni[82] = ["82", "22/03/2025", "09:30", "10:30", "Metodo dei triangolini (o dei rettangolini). Esempi classici (integrali di Dirichlet e di Fresnel con valore assoluto) ed ulteriori esempi."];
Lezioni[83] = ["83", "22/03/2025", "10:30", "11:30", "Confronto serie-integrali e applicazioni (convergenza di serie, stima di sommatorie, stima delle code di serie)."];
Lezioni[84] = ["84", "28/03/2025", "14:30", "15:30", "Introduzione alle equazioni differenziali: nomenclatura (ordine di un'equazione, forma normale, equazioni autonome). Tre classi speciali di equazioni: a variabili separabili, lineari del primo ordine, lineari di ogni ordine a coefficienti costanti, omogenee e non omogenee."];
Lezioni[85] = ["85", "28/03/2025", "15:30", "16:30", "Introduzione alle equazioni differenziali: primi esempi di famiglie di soluzioni dipendenti da parametri, problema di Cauchy, enunciato dei teoremi esistenza ed unicità, esempio di non unicità (pennello di Peano)."];
Lezioni[86] = ["86", "28/03/2025", "16:30", "17:30", "Equazioni differenziali a variabili separabili: descrizione della procedura per determinare una soluzione ed esempi di applicazione. Studio della soluzione: intervallo massimale di esistenza, tempo di vita, eventuali blow up e break down."];
Lezioni[87] = ["87", "29/03/2025", "08:30", "09:30", "Equazioni differenziali lineari a coefficienti costanti omogenee: come determinare una base dello spazio delle soluzioni passando per le radici del polinomio caratteristico."];
Lezioni[88] = ["88", "29/03/2025", "09:30", "10:30", "Equazioni differenziali lineari a coefficienti costanti non omogenee: ricerca per tentativi di una soluzione speciale in casi semplici (ad esempio con termini forzanti esponenziali, polinomiali, trigonometrici)."];
Lezioni[89] = ["89", "29/03/2025", "10:30", "11:30", "Equazioni differenziali lineari a coefficienti costanti non omogenee: metodo di variazione delle costanti per la ricerca di una soluzione speciale. Ulteriori esempi di ricerca per tentativi di una soluzione."];
Lezioni[90] = ["90", "04/04/2025", "08:30", "09:30", "Equazioni differenziali lineari del primo ordine a coefficienti qualunque: formula risolutiva, sua giustificazione (mediante fattore integrante o variazione delle costanti), esempi di applicazione."];
Lezioni[91] = ["91", "04/04/2025", "09:30", "10:30", "Esercizi sulla risoluzione di equazioni differenziali con i vari metodi. Studio del tempo di vita per le soluzioni di un'equazione differenziale al variare del dato iniziale."];
Lezioni[92] = ["92", "04/04/2025", "10:30", "11:30", "Esempi classici di studio di equazioni differenziali con parametri: equazione a variabili separabili con effetto soglia sul dato iniziale, equazione del secondo ordine con un coefficiente variabile, oscillatore armonico con risonanza."];
Lezioni[93] = ["93", "04/04/2025", "14:30", "15:30", "Introduzione alle successioni per ricorrenza non lineari autonome del primo ordine: primi esempi di studio mediante un piano basato sulla monotonia. Strategie per la dimostrazione dei vari punti del piano."];
Lezioni[94] = ["94", "04/04/2025", "15:30", "16:30", "Successioni per ricorrenza non lineari autonome del primo ordine: esempi di studio mediante un piano basato sulla monotonia e mediante un piano basato sulla distanza dal presunto limite."];
Lezioni[95] = ["95", "04/04/2025", "16:30", "17:30", "Successioni per ricorrenza non lineari autonome del primo ordine: interpretazione grafica e suo utilizzo per formulare diversi tipi di piano."];
Lezioni[96] = ["96", "05/04/2025", "08:30", "09:30", "Successioni per ricorrenza autonome spiraleggianti: studio mediante il piano basato sulla distanza dal presunto limite ed il piano basato sulle due sottosuccessioni."];
Lezioni[97] = ["97", "05/04/2025", "09:30", "10:30", "Primi esempi di studio di successioni per ricorrenza non autonome: piani con la monotonia, con il rapporto, con limitatezza e carabinieri."];
Lezioni[98] = ["98", "05/04/2025", "10:30", "11:30", "Ulteriori esempi di successioni per ricorrenza, autonome e non autonome."];
Lezioni[99] = ["99", "30/04/2025", "08:30", "09:30", "Primi esempi di studio di funzioni integrali e di limiti che coinvolgono funzioni integrali. Comportamento di o piccolo rispetto alla primitiva ed alla derivata."];
Lezioni[100] = ["100", "30/04/2025", "09:30", "10:30", "Formula generale per la derivata di un integrale i cui estremi dipendono da un parametro. Esempi di studio di una disequazione e di calcolo di un limite che coinvolgono funzioni integrali."];
Lezioni[101] = ["101", "02/05/2025", "14:30", "15:30", "Successioni per ricorrenza lineari del primo ordine, omogenee e non omogenee. Ricerca euristica della formula risolutiva nel caso non omogeneo (analoga alle equazioni differenziali)."];
Lezioni[102] = ["102", "02/05/2025", "15:30", "16:30", "Successioni per ricorrenza lineari di ordine superiore. Formula generale per il caso omogeneo sulla base delle radici del polinomio caratteristico. Successione di Fibonacci e sue varianti non omogenee."];
Lezioni[103] = ["103", "02/05/2025", "16:30", "17:30", "Sistemi di successioni per ricorrenza lineari: riduzione artigianale ad una sola ricorrenza di ordine superiore. Interpretazione in termini di potenze della matrice dei coefficienti. Esempio di successione non lineare con spiraleggiamento uscente."];
Lezioni[104] = ["104", "03/05/2025", "08:30", "09:30", "Equazioni differenziali alla Bernoulli o che comunque si risolvono mediante cambi di variabile. Sistemi di equazioni differenziali lineari omogenee: legami con autovalori ed autovettori della matrice dei coefficienti. Accenno al legame con l'esponenziale della matrice."];
Lezioni[105] = ["105", "03/05/2025", "09:30", "10:30", "Esercizi misti sugli integrali impropri con problemi in punti diversi dall'origine. Esempio in cui il problema è in un punto che non si sa calcolare esplicitamente."];
Lezioni[106] = ["106", "03/05/2025", "10:30", "11:30", "Esercizi misti sulle successioni per ricorrenza, con studio di limiti e serie collegate."];
Lezioni[107] = ["107", "09/05/2025", "14:30", "15:30", "Liminf e limsup di successioni: definizione, rapporto con il limite, caratterizzazione analoga alla definizione di limite. Primi esempi. Esempi di enunciati di teoremi sulle successioni in versione liminf/limsup (confronto, carabinieri, sottosuccessioni)."];
Lezioni[108] = ["108", "09/05/2025", "15:30", "16:30", "Liminf e limsup della somma. Definizione di maxlim e minlim ed enunciato della loro relazione con limsup e liminf. Strategia per il calcolo operativo di limsup e liminf. Esercizi sul calcolo di limsup e liminf per successioni."];
Lezioni[109] = ["109", "09/05/2025", "16:30", "17:30", "Liminf e limsup di funzioni: definizioni in alcuni casi e rapporto con gli analoghi di maxlim e minlim. Esercizi sul calcolo di liminf e limsup di funzioni."];
Lezioni[110] = ["110", "10/05/2025", "08:30", "09:30", "Primo esempio di studio qualitativo della soluzione di un'equazione differenziale. Studio della monotonia, della convessità e del comportamento asintotico della soluzione."];
Lezioni[111] = ["111", "10/05/2025", "09:30", "10:30", "Teorema dell'asintoto: enunciato e dimostrazione, anche in versione liminf/limsup. Esempi di applicazione del teorema dell'asintoto allo studio del comportamento asintotico di soluzioni di equazioni differenziali."];
Lezioni[112] = ["112", "10/05/2025", "10:30", "11:30", "Enunciato del teorema del confronto per equazioni differenziali. Applicazione allo studio del blow-up. Esempi di studio qualitativo per equazioni differenziali non autonome."];
Lezioni[113] = ["113", "16/05/2025", "14:30", "15:30", "Enunciato della formula di Stirling e del prodotto di Wallis. Prima parte della dimostrazione della formula di Stirling: monotonia e convergenza del rapporto, intepretazione della monotonia in termini di integrali del logaritmo. Convergenza del prodotto di Wallis."];
Lezioni[114] = ["114", "16/05/2025", "15:30", "16:30", "Deduzione della formula di Stirling dal prodotto di Wallis. Calcolo del prodotto di Wallis sfruttando la sua relazione con l'integrale delle potenze del seno. L'integrale delle potenze del seno tende a 0 quando l'esponente tende all'infinito."];
Lezioni[115] = ["115", "16/05/2025", "16:30", "17:30", "Ordine di infinitesimo e parte principale dell'integrale delle potenze del seno. Calcolo dell'integrale Gaussiano. Deduzione abusiva degli integrali di Fresnel. Funzione Gamma di Eulero e suoi legami con il fattoriale e l'integrale Gaussiano."];
Lezioni[116] = ["116", "17/05/2025", "08:30", "09:30", "Funzioni semicontinue inferiormente/superiormente e corrispondente teorema di Weierstrass. Esercizi sul calcolo della somma di serie di potenze i cui coefficienti sono funzioni razionali di n."];
Lezioni[117] = ["117", "17/05/2025", "09:30", "10:30", "Esercizi sullo studio di successioni per ricorrenza, anche definite mediante funzioni integrali. Le code di un integrale improprio convergente tendono a zero."];
Lezioni[118] = ["118", "17/05/2025", "10:30", "11:30", "Esercizi sullo studio qualitativo di equazioni differenziali. Crescita all'infinito di una funzione vs crescita della sua primitiva."];
Lezioni[119] = ["119", "23/05/2025", "14:30", "15:30", "Svolgimento commentato di esercizi riassuntivi presi da test d'esame."];
Lezioni[120] = ["120", "23/05/2025", "15:30", "16:30", "Svolgimento commentato di esercizi riassuntivi presi da test d'esame."];
