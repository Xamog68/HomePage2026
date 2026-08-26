var NomeCorso = "Analisi Matematica I - 2012/2013";
var ArchivioCorso = "AM1/AM1_13";
var PrefissoFile = "AM1_13_L";
var Percorso = MEDIA.lezioni + "AM13/AM13_L";
var CifreNumeroLezione = 3;

var SchedaCorso = {
  nome: "Analisi Matematica I",
  annoAccademico: "2012/2013",
  crediti: "12",
  target: "Corso di Laurea in Ingegneria Biomedica",
  anno: "Primo anno",
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "AM13_Burocrazia.pdf",
    titolo: "Informazioni burocratiche"
  },
  {
    sezione: "book",
    file: "AM13_Book1.pdf",
    titolo: "Stampato integrale delle lezioni",
    nota: "Volume 1 — Lezioni 1–59"
  },
  {
    sezione: "book",
    file: "AM13_Book2.pdf",
    titolo: "Stampato integrale delle lezioni",
    nota: "Volume 2 — Lezioni 60–109"
  }
];

var Lezioni = new Array();
Lezioni[1] = [ "1","26/09/2012","16:30", "17:30", "Insiemi - Notazioni, unione, intersezione, differenza, cardinalità, insieme delle parti, prodotto cartesiano"];
Lezioni[2] = [ "2","26/09/2012","17:30", "18:30", "Funzioni tra insiemi. Iniettività, surgettività, funzione inversa, immagine e controimmagine di un insieme"];
Lezioni[3] = [ "3","27/09/2012","08:30", "09:30", "Principio di induzione. Applicazione alla somma dei termini di progressioni aritmetiche e geometriche"];
Lezioni[4] = [ "4","27/09/2012","09:30", "10:30", "Esempi di disuguaglianze dimostrate per induzione. Disuguaglianza di Bernoulli."];
Lezioni[5] = [ "5","28/09/2012","09:30", "10:30", "Funzioni pari, dispari, periodiche, monotone. Interpretazione grafica di iniettività e surgettività."];
Lezioni[6] = [ "6","28/09/2012","10:30", "11:30", "Funzioni elementari: potenze, radici, esponenziali, logaritmi, seno, arcoseno"];
Lezioni[7] = [ "7","28/09/2012","11:30", "12:30", "Funzioni elementari. Coseno, arcocoseno, tangente, arcotangente. Iniettività ed equazioni. Monotonia e disequazioni."];
Lezioni[8] = [ "8","29/09/2012","08:30", "09:30", "Numeri reali: proprietà algebriche, ordinamento, assioma di continuità."];
Lezioni[9] = [ "9","29/09/2012","09:30", "10:30", "Maggioranti, minoranti, massimo, minimo. Estremo inferiore e superiore: definizione, esistenza, caratterizzazioni."];
Lezioni[10] = [ "10","29/09/2012","10:30", "11:30", "Operazioni sui grafici di funzioni reali. Esempi di equazioni e disequazioni interpretate graficamente."];
Lezioni[11] = [ "11","03/10/2012","16:30", "17:30", "Fattoriali, binomiali e loro significato combinatorio. Binomio di Newton."];
Lezioni[12] = [ "12","03/10/2012","17:30", "18:30", "Esercizi misti: anagrammi, funzioni pari/dispari/periodiche, inf/sup di insiemi descritti mediante immagini e controimmagini."];
Lezioni[13] = [ "13","04/10/2012","08:30", "09:30", "Proprietà vere definitivamente e frequentemente. Definizione di successione e sue visualizzazioni. Definizioni di limite per successioni."];
Lezioni[14] = [ "14","04/10/2012","09:30", "10:30", "Teoremi algebrici per i limiti di successioni. Esempi di limiti calcolati usando teoremi algebrici e di confronto."];
Lezioni[15] = [ "15","05/10/2012","08:30", "09:30", "Limiti elementari di esponenziali, radici n-esime, fattoriali. Esempi di limiti calcolati con teoremi algebrici e di confronto."];
Lezioni[16] = [ "16","05/10/2012","09:30", "10:30", "Criteri del rapporto, della radice, del rapporto -> radice. Confronti tra ordini di infinito di potenze, esponenziali, fattoriali"];
Lezioni[17] = [ "17","05/10/2012","10:30", "11:30", "Ulteriori esempi di applicazione dei criteri della radice, del rapporto e rapporto -> radice. Limiti con radici n-esime."];
Lezioni[18] = [ "18","06/10/2012","08:30", "09:30", "Limiti di funzioni: definizioni"];
Lezioni[19] = [ "19","06/10/2012","09:30", "10:30", "Funzioni continue. Elenco dei limiti di notevoli. Cambio di variabili nei limiti. Giustificazione di alcuni limiti notevoli a partire da quelli fondamentali utilizzando cambi di variabili.."];
Lezioni[20] = [ "20","06/10/2012","10:30", "11:30", "Criterio funzioni -> successioni. Trucco di passaggio all'esponenziale. Esempi di limiti di funzioni e successioni calcolati mediante limiti notevoli e cambi di variabili."];
Lezioni[21] = [ "21","10/10/2012","16:30", "17:30", "Discussione delle disuguaglianze sin x <= x <= tan x. Limite notevole con il sin x. Esempi di limiti calcolati mediante limiti notevoli."];
Lezioni[22] = [ "22","10/10/2012","17:30", "18:30", "Sottosuccessioni e loro utilizzo per dimostrare la non esistenza di limiti di successioni e funzioni"];
Lezioni[23] = [ "23","11/10/2012","08:30", "09:30", "Successioni monotone e relativo teorema di esistenza del limite. Il numero e (la successione che lo definisce è monotona e compresa tra 2 e 3)."];
Lezioni[24] = [ "24","11/10/2012","09:30", "10:30", "Esercizi misti sui limiti che sfruttano le tecniche viste fino a questo momento"];
Lezioni[25] = [ "25","12/10/2012","08:30", "09:30", "Definizione di o piccolo e prime sue proprietà"];
Lezioni[26] = [ "26","12/10/2012","09:30", "10:30", "Sviluppini e loro utilizzo per il calcolo di limiti"];
Lezioni[27] = [ "27","12/10/2012","10:30", "11:30", "Equivalenza asintotica. Esempi di limiti calcolati usando le tecniche viste finora."];
Lezioni[28] = [ "28","13/10/2012","10:30", "11:30", "Definizione di rapporto incrementale e di derivata. Significato geometrico. Retta tangente. Definizione di differenziale ed equivalenza con la derivata. Relazioni tra derivabilità e continuità. "];
Lezioni[29] = [ "29","13/10/2012","11:30", "12:30", "Derivate di alcune funzioni elementari dimostrate mediante limite del rapporto incrementale e/o differenziale. Regole di derivazione."];
Lezioni[30] = [ "30","13/10/2012","12:30", "13:30", "Derivata del reciproco e del quoziente. Derivata della composizione. Derivata della funzione inversa (esempi classici: logaritmo, arcotangente, arcoseno). Esempi di calcolo di derivate."];
Lezioni[31] = [ "31","17/10/2012","16:30", "17:30", "Teorema di De L'Hopital. Esempi in cui si può e non si può applicare. Pericoli dei \"limiti metà per volta\" e dell'equivalenza asintotica."];
Lezioni[32] = [ "32","17/10/2012","17:30", "18:30", "Funzioni iperboliche"];
Lezioni[33] = [ "33","18/10/2012","08:30", "09:30", "Formula di Taylor con resto di Peano: enunciato e idea della dimostrazione. Sviluppi di Taylor delle funzioni elementari e primi esempi di applicazione"];
Lezioni[34] = [ "34","18/10/2012","09:30", "10:30", "Dimostrazione degli sviluppi di Taylor delle funzioni elementari. Esempi semplici di applicazione."];
Lezioni[35] = [ "35","19/10/2012","08:30", "09:30", "Sviluppi di Taylor di somme, differenze, prodotti, composizioni"];
Lezioni[36] = [ "36","19/10/2012","09:30", "10:30", "Formula di Taylor con centro in un punto diverso dall'origine. Ulteriori esempi di polinomi di Taylor di funzioni composte (e cautele necessarie nel loro calcolo)"];
Lezioni[37] = [ "37","19/10/2012","10:30", "11:30", "Esercizi riassuntivi sui limiti. [Video mancante]", "m"];
Lezioni[38] = [ "38","20/10/2012","10:30", "11:30", "Definizione di serie come limite delle somme parziali. Esempi semplici di serie studiate usando la definizione. Serie telescopiche. Serie geometriche."];
Lezioni[39] = [ "39","20/10/2012","11:30", "12:30", "Teoremi algebrici per le serie. Condizione necessaria. Serie armoniche generalizzate. Comportamento delle serie a termini di segno costante. Enunciato dei criteri della radice, del rapporto, del confronto."];
Lezioni[40] = [ "40","20/10/2012","12:30", "13:30", "Criterio del confronto asintotico (casi standard). Esercizi sulla convergenza di serie a termini positivi (non negativi)"];
Lezioni[41] = [ "41","24/10/2012","16:30", "17:30", "Serie a termini di segno qualunque: enunciato del criterio di Leibnitz e dell'assoluta convergenza ed esempi di applicazione"];
Lezioni[42] = [ "42","24/10/2012","17:30", "18:30", "Dimostrazione dei criteri per serie a termini positivi. Casi limite di confronto asintotico. Dimostrazione del criterio dell'assoluta convergenza."];
Lezioni[43] = [ "43","25/10/2012","08:30", "09:30", "Serie di potenze: notazioni, raggio di convergenza e formula per calcolarlo (con dimostrazione). Serie di Taylor e loro utilizzo per il calcolo della somma di speciali serie numeriche."];
Lezioni[44] = [ "44","25/10/2012","09:30", "10:30", "Esempi di serie di potenze. Esempi di studio di serie parametriche. "];
Lezioni[45] = [ "45","26/10/2012","08:30", "09:30", "Teorema di esistenza degli zeri e dei valori intermedi. Esempi di applicazione."];
Lezioni[46] = [ "46","26/10/2012","09:30", "10:30", "Teorema di monotonia 1 (segno della derivata in un punto). Studio locale di funzioni e criterio delle derivate successive per lo studio dell'andamento di una funzione nell'intorno di un punto stazionario"];
Lezioni[47] = [ "47","26/10/2012","10:30", "11:30", "Esempi di esercizi basati sul teorema dei valori intermedi e sullo studio locale di funzioni"];
Lezioni[48] = [ "48","27/10/2012","10:30", "11:30", "Definizione di massimo, minimo, punti di max, punti di min. Enunciato del teorema di Weierstrass. Ricerca operativa dei punti di max e di min."];
Lezioni[49] = [ "49","27/10/2012","11:30", "12:30", "Teoremi di Rolle, Cauchy, Lagrange e interpretazioni geometriche dove possibile."];
Lezioni[50] = [ "50","27/10/2012","12:30", "13:30", "Dimostrazione del caso 0/0 del teorema di De L'Hopital. Legami tra segno della derivata in un intervallo e monotonia di una funzione."];
Lezioni[51] = [ "51","31/10/2012","16:30", "17:30", "Primi rudimenti sullo studio globale di funzioni: simmetrie, limiti agli estremi della zona di definizione, zeri e segno, zeri e segno della derivata e zone di monotonia. Esempi di applicazione a problemi di inf/sup/max/min ed equazioni parametriche."];
Lezioni[52] = [ "52","31/10/2012","17:30", "18:30", "Esempi di equazioni e disequazioni risolte mediante studio globale di opportune funzioni."];
Lezioni[53] = [ "53","07/11/2012","16:30", "17:30", "Formula di Taylor con resto di Lagrange e applicazioni (calcolo approssimato di funzioni, dimostrazione di disuguaglianze, dimostrazione della convergenza di serie di Taylor)"];
Lezioni[54] = [ "54","07/11/2012","17:30", "18:30", "Funzioni convesse e concave: definizione geometrica e analitica, legami con il segno della derivata seconda. Punti di flesso."];
Lezioni[55] = [ "55","08/11/2012","08:30", "09:30", "Asintoti orizzontali e verticali. Asintoti obliqui e formule per calcolarne le equazioni."];
Lezioni[56] = [ "56","08/11/2012","09:30", "10:30", "Varianti e generalizzazioni del teorema di Weierstrass"];
Lezioni[57] = [ "57","09/11/2012","08:30", "09:30", "Disuguaglianze classiche dimostrate mediante studio di funzioni o Taylor-Lagrange"];
Lezioni[58] = [ "58","09/11/2012","09:30", "10:30", "Lipschitzianità e legami con la limitatezza della derivata prima"];
Lezioni[59] = [ "59","09/11/2012","10:30", "11:30", "Due esercizi classici impegnativi sullo studio di funzioni"];
Lezioni[60] = [ "60","10/11/2012","10:30", "11:30", "Introduzione alle successioni per ricorrenza: nomenclatura e primo esempio di piano con la monotonia"];
Lezioni[61] = [ "61","10/11/2012","11:30", "12:30", "Ulteriori esempi di successioni per ricorrenza studiati mediante piani con la monotonia."];
Lezioni[62] = [ "62","10/11/2012","12:30", "13:30", "Interpretazione grafica delle successioni per ricorrenza. Esempi studiati mediante la distanza dal presunto limite."];
Lezioni[63] = [ "63","14/11/2012","16:30", "17:30", "Successioni per ricorrenza spiraleggianti: studio mediante la distanza dal presunto limite"];
Lezioni[64] = [ "64","14/11/2012","17:30", "18:30", "Successioni per ricorrenza spiraleggianti: studio mediante le sottosuccessioni dei pari e dei dispari"];
Lezioni[65] = [ "65","15/11/2012","08:30", "09:30", "Ulteriori esempi di successioni per ricorrenza autonome"];
Lezioni[66] = [ "66","15/11/2012","09:30", "10:30", "Ulteriori esempi di successioni per ricorrenza autonome"];
Lezioni[67] = [ "67","16/11/2012","08:30", "09:30", "Successioni per ricorrenza non autonome: piani con la manotonia, con il rapporto, con limitatezza e carabinieri"];
Lezioni[68] = [ "68","16/11/2012","09:30", "10:30", "Ulteriori esempi di successioni per ricorrenza non autonome"];
Lezioni[69] = [ "69","16/11/2012","10:30", "11:30", "Ulteriori esempi di successioni per ricorrenza non autonome. Studio di una serie con un termine logaritmico (caso limite di confronto asintotico)."];
Lezioni[70] = [ "70","17/11/2012","10:30", "11:30", "Introduzione agli integrali: notazioni, significato geometrico, definizione mediante somme di Riemann superiori e inferiori"];
Lezioni[71] = [ "71","17/11/2012","11:30", "12:30", "Esempi di utilizzo delle somme di Riemann, integrabilità delle funzioni monotone, proprietà degli integrali, esempi di integrali calcolati mediante considerazioni geometriche"];
Lezioni[72] = [ "72","17/11/2012","12:30", "13:30", "Teoria generale per il calcolo operativo di integrali: primitive, funzione integrale, teorema della media integrale, teorema fondamentale del calcolo integrale."];
Lezioni[73] = [ "73","21/11/2012","16:30", "17:30", "Discorso sul +c negli integrali indefiniti. Primi esempi di primitive elementari."];
Lezioni[74] = [ "74","21/11/2012","17:30", "18:30", "Integrazione per sostituzione: dimostrazione, interpretazione brutale e primi esempi di applicazione"];
Lezioni[75] = [ "75","22/11/2012","08:30", "09:30", "Integrazione per parti e primi esempi di applicazione: integrali di polinomi per esponenziali, seni, coseni. \"Grande ritorno\": integrali di potenze di seni e coseni."];
Lezioni[76] = [ "76","22/11/2012","09:30", "10:30", "Altro modo di integrare le potenze di seni e coseni. Trucco dell'\"1 nascosto\" (integrali di logaritmi e arcotangenti) e ulteriori esempi di applicazione dell'integrazione per parti"];
Lezioni[77] = [ "77","23/11/2012","08:30", "09:30", "Integrazione delle funzioni razionali - Parte prima"];
Lezioni[78] = [ "78","23/11/2012","09:30", "10:30", "Integrazione delle funzioni razionali - Parte seconda"];
Lezioni[79] = [ "79","23/11/2012","10:30", "11:30", "Esempi di integrali calcolati utilizzando le tecniche viste finora"];
Lezioni[80] = [ "80","24/11/2012","10:30", "11:30", "Primi esempi di sostituzioni razionalizzanti: esponenziali, seni e coseni, radici di espressioni di primo grado"];
Lezioni[81] = [ "81","24/11/2012","11:30", "12:30", "Sostituzioni razionalizzanti per primitive di radici di polinomi di secondo grado"];
Lezioni[82] = [ "82","24/11/2012","12:30", "13:30", "Sostituzioni razionali per sin x e cos x mediante formule parametriche. Esempi di ricapitolazione sul calcolo di integrali."];
Lezioni[83] = [ "83","28/11/2012","16:30", "17:30", "Integrali impropri: definizioni nei casi monoproblema e spezzamento di un integrale generale in integrali monoproblema."];
Lezioni[84] = [ "84","28/11/2012","17:30", "18:30", "Studio degli integrali impropri di 1/x^a con problemi a 0 e +infinito al variare del parametro a. Discussione dell'utilizzo delle simmetrie nel calcolo degli integrali."];
Lezioni[85] = [ "85","29/11/2012","08:30", "09:30", "Studio di integrali impropri con integrande di segno costante: criterio del confronto e del confronto asintotico (caso standard e casi limite). Criterio dell'assoluta integrabilità per integrande a segno variabile. "];
Lezioni[86] = [ "86","29/11/2012","09:30", "10:30", "Esempi di studio della convergenza di integrali impropri utilizzando i vari criteri. Integrali impropri con problemi in punti diversi dall'origine."];
Lezioni[87] = [ "87","30/11/2012","08:30", "09:30", "Confronto serie-integrali e dimostrazione della convergenza/divergenza delle serie armoniche generalizzate. Stima della \"coda\" di una serie mediante un integrale improprio."];
Lezioni[88] = [ "88","30/11/2012","09:30", "10:30", "Trucco dell'integrazione per parti per integrali impropri oscillanti (tipo sin x/x, cos(x^2), sin(x^2) tra 0 e infinito)."];
Lezioni[89] = [ "89","30/11/2012","10:30", "11:30", "\"Metodo dei triangolini\" per dimostrare la divergenza di integrali impropri (tipo |sin x|/x, |cos(x^2)|, |sin(x^2)| tra 0 e infinito). Discussione sulla \"non compensazione\" tra integrali impropri divergenti."];
Lezioni[90] = [ "90","01/12/2012","10:30", "11:30", "Teoremi di scambio serie-derivata per serie di potenze. Esempi di calcolo della somma di serie di potenze."];
Lezioni[91] = [ "91","01/12/2012","11:30", "12:30", "Introduzione alle equazioni differenziali: nomenclatura"];
Lezioni[92] = [ "92","01/12/2012","12:30", "13:30", "Introduzione alle equazioni differenziali: il problema di Cauchy, enunciato dei teoremi di esistenza ed unicità. Esempio di non unicità."];
Lezioni[93] = [ "93","05/12/2012","16:30", "17:30", "Metodo risolutivo per equazioni differenziali a variabili separabili. Studio della soluzione: intervallo massimale di esistenza, tempo di vita, esistenza globale, blow-up, break-down "];
Lezioni[94] = [ "94","05/12/2012","17:30", "18:30", "Ulteriori esempi di studio di equazioni differenziali a variabili separabili. [Video mancante]","m"];
Lezioni[95] = [ "95","06/12/2012","08:30", "09:30", "Equazioni differenziali lineari omogenee: teoria generale e algoritmo per determinare una base dello spazio delle soluzioni nel caso di equazioni a coefficienti costanti (mediante le radici del polinomio caratteristico)."];
Lezioni[96] = [ "96","06/12/2012","09:30", "10:30", "Esempi di risoluzione di equazioni differenziali lineari omogenee. Struttura dell'insieme delle soluzioni di un'equazione non omogenea."];
Lezioni[97] = [ "97","07/12/2012","08:30", "09:30", "Equazioni differenziali lineari non omogenee: esempi di ricerca per tentativi di una soluzione nel caso di termine non omogeneo esponenziale o trigonometrico"];
Lezioni[98] = [ "98","07/12/2012","09:30", "10:30", "Equazioni differenziali lineari non omogenee: esempi di ricerca per tentativi di una soluzione nel caso di termine non omogeneo polinomiale. Esempio di metodo di variazione delle costanti."];
Lezioni[99] = [ "99","07/12/2012","10:30", "11:30", "Equazioni differenziali lineari del prim'ordine: formula risolutiva ottenuta con il fattore integrante e attraverso variazione delle costanti."];
Lezioni[100] = [ "100","12/12/2012","16:30", "17:30", "Numeri complessi: forma cartesiana, parte reale e immaginaria, piano di Gauss, operazioni algebriche, coniugato, modulo."];
Lezioni[101] = [ "101","12/12/2012","17:30", "18:30", "Forma trigonometrica ed esponenziale di un numero complesso. Interpretazione di modulo, coniugato, prodotto, reciproco, quoziente in forma trigonometrica. Potenza n-esima di un numero complesso."];
Lezioni[102] = [ "102","13/12/2012","08:30", "09:30", "Radici n-esime di numeri complessi."];
Lezioni[103] = [ "103","13/12/2012","09:30", "10:30", "Teorema fondamentale dell'algebra. Fattorizzazione di polinomi sui complessi. Fattorizzazione di polinomi a coefficienti reali \"accoppiando\" le radici complesse coniugate"];
Lezioni[104] = [ "104","14/12/2012","08:30", "09:30", "Esponenziale e logaritmo di numeri complessi"];
Lezioni[105] = [ "105","14/12/2012","09:30", "10:30", "Funzioni trascendenti di numeri complessi: seno e coseno, seno iperbolico e coseno iperbolico. Esempio di equazione con il seno in ambito complesso."];
Lezioni[106] = [ "106","14/12/2012","10:30", "11:30", "Esercizi misti sui numeri complessi"];
Lezioni[107] = [ "107","15/12/2012","10:30", "11:30", "Esempi di studio del comportamento di soluzioni di equazioni differenziali senza scrivere esplicitamente la soluzione."];
Lezioni[108] = [ "108","15/12/2012","11:30", "12:30", "Esempi \"mondo reale\" di equazioni differenziali: oscillatore armonico, oscillazioni forzate, oscillazioni smorzate."];
Lezioni[109] = [ "109","15/12/2012","12:30", "13:30", "Esempi di esercizi presi da test d'esame e scritti d'esame passati."];
