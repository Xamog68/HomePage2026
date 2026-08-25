var NomeCorso = "Analisi Matematica I - 2008/2009";
var ArchivioCorso = "AM1/AM09";
var PrefissoFile = "AM09_L";
var Percorso = MEDIA.lezioni + "AM09/AM09_L";
var CifreNumeroLezione = 3;

var SchedaCorso = {
  nome: "Analisi Matematica I",
  annoAccademico: "2008/2009",
  crediti: "12",
  target: "Corsi di Laurea in Ingegneria Elettronica e in Ingegneria delle Telecomunicazioni",
  anno: "Primo anno",
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "AM09_Burocrazia.pdf",
    titolo: "Informazioni burocratiche"
  },
  {
    sezione: "book",
    file: "AM09_Book1.pdf",
    titolo: "Stampato integrale delle lezioni",
    nota: "Volume 1 — Lezioni 1–59"
  },
  {
    sezione: "book",
    file: "AM09_Book2.pdf",
    titolo: "Stampato integrale delle lezioni",
    nota: "Volume 2 — Lezioni 60–109"
  }
];

var Lezioni = new Array();
Lezioni[1] = [ "1","30/09/2008","08:30", "09:30", "Insiemi - Notazioni, unione, intersezione, differenza"];
Lezioni[2] = [ "2","30/09/2008","09:30", "10:30", "Insieme delle parti e prodotto cartesiano, funzioni tra insiemi, grafico di una funzione"];
Lezioni[3] = [ "3","30/09/2008","10:30", "11:30", "Funzioni: iniettività, surgettività, invertibilità"];
Lezioni[4] = [ "4","01/10/2008","10:30", "11:30", "Immagine e controimmagine di una funzione. Insiemi numerici. Proprietà di simmetria per funzioni reali (pari, dispari, periodiche)"];
Lezioni[5] = [ "5","01/10/2008","11:30", "12:30", "Monotonia per funzioni reali. Relazioni tra monotonia e iniettività nello studio di equazioni e disequazioni. [Video molto incompleto; PDF completo]"];
Lezioni[6] = [ "6","01/10/2008","12:30", "13:30", "Funzioni reali: potenze, radici, esponenziali, logaritmi, seno, coseno, arcoseno, arcocoseno"];
Lezioni[7] = [ "7","02/10/2008","13:30", "14:30", "Principio di induzione - Esercizi"];
Lezioni[8] = [ "8","02/10/2008","14:30", "15:30", "Esercizi sull'induzione. Fattoriale, binomiale, binomio di Newton"];
Lezioni[9] = [ "9","30/09/2008","08:30", "09:30", "Esercizi su funzioni pari e dispari. Funzioni e funzioni inverse trigonometriche."];
Lezioni[10] = [ "10","07/10/2008","08:30", "09:30", "Definizione assiomatica dei numeri reali. Assioma di continuità. Insiemi limitati, maggioranti, minoranti. Massimo e minimo di un sottoinsieme dei reali."];
Lezioni[11] = [ "11","07/10/2008","09:30", "10:30", "Estremo inferiore e superiore. Caratterizzazione di inf e sup."];
Lezioni[12] = [ "12","07/10/2008","10:30", "11:30", "Proprietà dei binomiali e relative interpretazioni algebriche e combinatorie"];
Lezioni[13] = [ "13","09/10/2008","13:30", "14:30", "Operazioni sui grafici: passaggio dal grafico di f(x) a quello di f(x)+a, f(x+a), af(x), f(ax), -f(x), f(-x), |f(x)|, f(|x|). Interpretazione grafica di equazioni e disequazioni."];
Lezioni[14] = [ "14","09/10/2008","14:30", "15:30", "Interpretazione grafica di immagine e controimmagine. Esercizi su inf, sup, max, min."];
Lezioni[15] = [ "15","10/10/2008","08:30", "09:30", "Limiti di successioni - Prime definizioni"];
Lezioni[16] = [ "16","10/10/2008","09:30", "10:30", "Limiti di successioni - Teoremi algebrici e di confronto"];
Lezioni[17] = [ "17","14/10/2008","08:30", "09:30", "Esempi di limiti di successioni ottenuti mediante confronti e teoremi algebrici"];
Lezioni[18] = [ "18","14/10/2008","09:30", "10:30", "Criterio della radice, del rapporto, del rapporto -> radice"];
Lezioni[19] = [ "19","14/10/2008","10:30", "11:30", "Esempi di limiti calcolati mediante i criteri precedenti"];
Lezioni[20] = [ "20","16/10/2008","08:30", "09:30", "Limiti di funzioni - Definizioni"];
Lezioni[21] = [ "21","16/10/2008","09:30", "10:30", "Calcolo di limiti di funzioni mediante limiti notevoli e cambi di variabile"];
Lezioni[22] = [ "22","17/10/2008","08:30", "09:30", "Dimostrazione dei principali limiti notevoli di funzioni"];
Lezioni[23] = [ "23","17/10/2008","09:30", "10:30", "Criterio funzioni -> successioni - Esercizi sui limiti di funzioni e di successioni"];
Lezioni[24] = [ "24","21/10/2008","08:30", "09:30", "Linguaggio degli infinitesimi: o piccolo, O grande, equivalenza asintotica. Principali proprietà di o piccolo"];
Lezioni[25] = [ "25","21/10/2008","09:30", "10:30", "Sviluppini e loro utilizzo nel calcolo di limiti"];
Lezioni[26] = [ "26","21/10/2008","10:30", "11:30", "Sottosuccessioni e loro utilizzo per mostrare la non esistenza di determinati limiti"];
Lezioni[27] = [ "27","22/10/2008","10:30", "11:30", "Definizione di derivata - Calcolo della derivata di alcune funzioni elementari"];
Lezioni[28] = [ "28","22/10/2008","11:30", "12:30", "Teoremi algebrici sulle derivate"];
Lezioni[29] = [ "29","22/10/2008","12:30", "13:30", "Derivate delle funzioni trigonometriche inverse - Esempi di calcolo di derivate - Esempi di limiti di successioni"];
Lezioni[30] = [ "30","23/10/2008","13:30", "14:30", "Teorema di De L'Hôpital e suo utilizzo nel calcolo dei limiti"];
Lezioni[31] = [ "31","24/10/2008","08:30", "09:30", "Formula di Taylor. Calcolo dei polinomi di Taylor di alcune funzioni elementari"];
Lezioni[32] = [ "32","24/10/2008","09:30", "10:30", "Utilizzo operativo dei polinomi di Taylor. Calcolo del polinomio di Taylor del prodotto e della composizione."];
Lezioni[33] = [ "33","28/10/2008","08:30", "09:30", "Esempi di utilizzo della formula di Taylor. [Audio parzialmente incompleto]"];
Lezioni[34] = [ "34","28/10/2008","09:30", "10:30", "Funzioni iperboliche"];
Lezioni[35] = [ "35","28/10/2008","10:30", "11:30", "Formula di Taylor con centro diverso dall'origine. Esempi di calcolo di sviluppi di Taylor."];
Lezioni[36] = [ "36","29/10/2008","10:30", "11:30", "Teorema sulle successioni monotone. Il numero e."];
Lezioni[37] = [ "37","29/10/2008","11:30", "12:30", "Serie - Introduzione, somme parziali, serie geometriche e telescopiche, proprietà algebriche"];
Lezioni[38] = [ "38","29/10/2008","12:30", "13:30", "Serie - Condizione necessaria, criteri della radice, del rapporto, del confronto"];
Lezioni[39] = [ "39","30/10/2008","13:30", "14:30", "Serie - Criterio del confronto asintotico: casi standard"];
Lezioni[40] = [ "40","30/10/2008","14:30", "15:30", "Serie - Criterio del confronto asintotico: casi limite"];
Lezioni[41] = [ "41","31/10/2008","08:30", "09:30", "Serie a segno variabile: criterio di Leibnitz"];
Lezioni[42] = [ "42","31/10/2008","09:30", "10:30", "Serie a segno variabile: criterio dell'assoluta convergenza"];
Lezioni[43] = [ "43","04/11/2008","08:30", "09:30", "Dimostrazione del criterio della radice e del rapporto. Esempi di studio della convergenza di serie parametriche"];
Lezioni[44] = [ "44","04/11/2008","09:30", "10:30", "Serie di potenze e raggio di convergenza"];
Lezioni[45] = [ "45","04/11/2008","10:30", "11:30", "Serie di Taylor e loro utilizzo per il calcolo della somma di particolari serie numeriche"];
Lezioni[46] = [ "46","05/11/2008","10:30", "11:30", "Teorema di esistenza degli zeri e sue varianti"];
Lezioni[47] = [ "47","05/11/2008","11:30", "12:30", "Teorema di Weierstrass e sue varianti"];
Lezioni[48] = [ "48","05/11/2008","12:30", "13:30", "Ricerca dei punti di massimo e di minimo di una funzione su un insieme"];
Lezioni[49] = [ "49","06/11/2008","13:30", "14:30", "Studio locale di funzioni"];
Lezioni[50] = [ "50","06/11/2008","14:30", "15:30", "Ordini di infinitesimo, di infinito, e relative parti principali"];
Lezioni[51] = [ "51","07/11/2008","08:30", "09:30", "Teoremi di Rolle, Cauchy, Lagrange."];
Lezioni[52] = [ "52","07/11/2008","09:30", "10:30", "Dimostrazione di un caso del teorema di De L'Hôpital. Teoremi che legano la monotonia di una funzione ed il segno della sua derivata."];
Lezioni[53] = [ "53","11/11/2008","08:30", "09:30", "Primi esempi di studio di funzione"];
Lezioni[54] = [ "54","11/11/2008","09:30", "10:30", "Asintoti orizzontali e verticali. Esempi di studio di funzione."];
Lezioni[55] = [ "55","11/11/2008","10:30", "11:30", "Asintoti obliqui. Esempi di studio di funzione."];
Lezioni[56] = [ "56","12/11/2008","10:30", "11:30", "Funzioni Lipschitziane"];
Lezioni[57] = [ "57","12/11/2008","11:30", "12:30", "Convessità e segno della derivata seconda"];
Lezioni[58] = [ "58","12/11/2008","12:30", "13:30", "Esercizi sullo studio di funzione"];
Lezioni[59] = [ "59","13/11/2008","13:30", "14:30", "Formula di Taylor con resto di Lagrange (vedi anche inizio lezione successiva)"];
Lezioni[60] = [ "60","14/11/2008","08:30", "09:30", "Postilla alla lezione precedente. Introduzione e primi esempi di successione per ricorrenza"];
Lezioni[61] = [ "61","14/11/2008","09:30", "10:30", "Successioni per ricorrenza autonome monotone. Interpretazione grafica di una successione per ricorrenza autonoma."];
Lezioni[62] = [ "62","18/11/2008","08:30", "09:30", "Successioni per ricorrenza spiraleggianti: studio mediante la monotonia di due sottosuccessioni"];
Lezioni[63] = [ "63","18/11/2008","09:30", "10:30", "Successioni per ricorrenza spiraleggianti: studio mediante la distanza dal presunto limite"];
Lezioni[64] = [ "64","18/11/2008","10:30", "11:30", "Ulteriori esempi di successioni per ricorrenza autonome"];
Lezioni[65] = [ "65","19/11/2008","10:30", "11:30", "Successioni per ricorrenza non autonome - Primi esempi"];
Lezioni[66] = [ "66","19/11/2008","11:30", "12:30", "Successioni per ricorrenza non autonome - Studio mediante confronti"];
Lezioni[67] = [ "67","19/11/2008","12:30", "13:30", "Successioni per ricorrenza non autonome - Ulteriori esempi"];
Lezioni[68] = [ "68","20/11/2008","13:30", "14:30", "Esercizi su studio di funzioni e successioni per ricorrenza"];
Lezioni[69] = [ "69","20/11/2008","14:30", "15:30", "Esercizi su studio di funzioni e successioni per ricorrenza"];
Lezioni[70] = [ "70","21/11/2008","08:30", "09:30", "Integrali - Prime definizioni e somme di Riemann"];
Lezioni[71] = [ "71","21/11/2008","09:30", "10:30", "Integrabilità delle funzioni monotone. Primi esempi. Proprietà delle funzioni integrabili."];
Lezioni[72] = [ "72","25/11/2008","08:30", "09:30", "Primitive e funzione integrale"];
Lezioni[73] = [ "73","25/11/2008","09:30", "10:30", "Teorema della media integrale e teorema fondamentale del calcolo integrale"];
Lezioni[74] = [ "74","25/11/2008","10:30", "11:30", "Primi esempi di calcolo di integrali"];
Lezioni[75] = [ "75","26/11/2008","10:30", "11:30", "Formule di integrazione per parti e per sostituzione. Primi esempi di integrazione per parti."];
Lezioni[76] = [ "76","26/11/2008","11:30", "12:30", "Ulteriori esempi di integrazione per parti"];
Lezioni[77] = [ "77","26/11/2008","12:30", "13:30", "Esempi di integrazione per sostituzione"];
Lezioni[78] = [ "78","27/11/2008","13:30", "14:30", "Integrazione funzioni razionali (prima parte)"];
Lezioni[79] = [ "79","27/11/2008","14:30", "15:30", "Integrazione funzioni razionali (seconda parte)"];
Lezioni[80] = [ "80","28/11/2008","08:30", "09:30", "Integrazione mediante sostituzioni razionalizzanti (prima parte)"];
Lezioni[81] = [ "81","28/11/2008","09:30", "10:30", "Integrazione mediante sostituzioni razionalizzanti (seconda parte)"];
Lezioni[82] = [ "82","02/12/2008","08:30", "09:30", "Integrali impropri - Definizioni"];
Lezioni[83] = [ "83","02/12/2008","09:30", "10:30", "Integrali impropri - Criteri di convergenza"];
Lezioni[84] = [ "84","02/12/2008","10:30", "11:30", "Esempi di studio della convergenza di integrali impropri"];
Lezioni[85] = [ "85","03/12/2008","10:30", "11:30", "Integrali impropri studiati mediante integrazione per parti"];
Lezioni[86] = [ "86","03/12/2008","11:30", "12:30", "Confronti tra serie ed integrali impropri"];
Lezioni[87] = [ "87","03/12/2008","12:30", "13:30", "Integrali impropri con problemi in punti diversi da 0 o infinito"];
Lezioni[88] = [ "88","04/12/2008","13:30", "14:30", "Esercizi misti con integrali impropri e funzioni integrali"];
Lezioni[89] = [ "89","04/12/2008","14:30", "15:30", "Esercizi misti con studio di funzioni integrali"];
Lezioni[90] = [ "90","05/12/2008","08:30", "09:30", "Numeri complessi: prime definizioni e operazioni in forma cartesiana"];
Lezioni[91] = [ "91","05/12/2008","09:30", "10:30", "Numeri complessi: proprietà del coniugato e del modulo. Coordinate polari nel piano e forma trigonometrica."];
Lezioni[92] = [ "92","09/12/2008","08:30", "09:30", "Numeri complessi: operazioni in forma trigonometrica"];
Lezioni[93] = [ "93","09/12/2008","09:30", "10:30", "Numeri complessi: forma esponenziale, potenze e radici n-esime"];
Lezioni[94] = [ "94","09/12/2008","10:30", "11:30", "Esercizi sulle radici n-esime di numeri complessi. Rapporto tra serie di Taylor e forma esponenziale."];
Lezioni[95] = [ "95","10/12/2008","10:30", "11:30", "Polinomi a coefficienti complessi e relativa fattorizzazione. Teorema fondamentale dell'algebra."];
Lezioni[96] = [ "96","10/12/2008","11:30", "12:30", "Esercizi sulla fattorizzazione di polinomi. Esponenziale e logaritmo sui complessi."];
Lezioni[97] = [ "97","10/12/2008","12:30", "13:30", "Metodi per calcolare la somma di serie di potenze"];
Lezioni[98] = [ "98","11/12/2008","13:30", "14:30", "Equazioni differenziali: nomenclatura"];
Lezioni[99] = [ "99","11/12/2008","14:30", "15:30", "Problema di Cauchy. Metodo di risoluzione per equazioni differenziali a variabili separabili."];
Lezioni[100] = [ "100","16/12/2008","08:30", "09:30", "Teorema di esistenza ed unicità per il problema di Cauchy. Intervallo massimale di esistenza, tempo di vita, blow-up, break-down."];
Lezioni[101] = [ "101","16/12/2008","09:30", "10:30", "Esercizi sul problema di Cauchy per equazioni differenziali a variabili separabili"];
Lezioni[102] = [ "102","16/12/2008","10:30", "11:30", "Equazioni differenziali lineari omogenee"];
Lezioni[103] = [ "103","17/12/2008","10:30", "11:30", "Equazioni differenziali lineari non omogenee: teoria generale. Ricerca per tentativi di una soluzione (prima parte)"];
Lezioni[104] = [ "104","17/12/2008","11:30", "12:30", "Equazioni differenziali lineari non omogenee: ricerca per tentativi di una soluzione (seconda parte)"];
Lezioni[105] = [ "105","17/12/2008","12:30", "13:30", "Equazioni differenziali lineari non omogenee: metodo di variazione delle costanti"];
Lezioni[106] = [ "106","18/12/2008","13:30", "14:30", "Equazioni differenziali lineari del primo ordine"];
Lezioni[107] = [ "107","18/12/2008","14:30", "15:30", "Seno e coseno di numeri complessi"];
Lezioni[108] = [ "108","19/12/2008","08:30", "09:30", "Esercizi misti di ricapitolazione"];
Lezioni[109] = [ "109","19/12/2008","09:30", "10:30", "Esercizi misti di ricapitolazione"];

var PercorsoRicevimento = MEDIA.lezioni + "AM09/AM09_R";
var Ricevimento = new Array();
Ricevimento[1] = ["1","16/10/08","Esercizio \"burocratico\" sugli insiemi","m"];
Ricevimento[2] = ["2","23/10/08","Limiti"];
Ricevimento[3] = ["3","30/10/08","Limiti"];
Ricevimento[4] = ["4","06/11/08","Limiti e Serie"];
Ricevimento[5] = ["5","13/11/08","Limiti, Serie, max e min"];
Ricevimento[6] = ["6","20/11/08","Serie e successioni per ricorrenza"];
Ricevimento[7] = ["7","27/11/08","Funzioni e successioni per ricorrenza"];
Ricevimento[8] = ["8","04/12/08","Serie, limiti, sviluppi di Taylor, successioni per ricorrenza"];
Ricevimento[9] = ["9","11/12/08","Un po di tutto"];
Ricevimento[10] = ["10","18/12/08","Un po di tutto"];
