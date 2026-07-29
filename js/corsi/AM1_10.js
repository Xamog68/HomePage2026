var NomeCorso = "Analisi Matematica I - 2009/2010";
var Percorso = MEDIA.lezioni + "AM10/AM10_L";
var CifreNumeroLezione = 3;

var SchedaCorso = {
  nome: "Analisi Matematica I",
  annoAccademico: "2009/2010",
  crediti: "12",
  ore: "120 previste; 111 lezioni registrate",
  target: "Ingegneria Elettronica e Ingegneria delle Telecomunicazioni",
  anno: "Primo",
  periodo: "ottobre / gennaio",
  avviso: ""
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "AM10_Burocrazia.pdf",
    titolo: "Informazioni burocratiche"
  }
];

var Lezioni = new Array();
Lezioni[1] = [ "1","29/09/2009","16:30", "17:30", "Insiemi - Notazioni, unione, intersezione, differenza, cardinalità, insieme delle parti"];
Lezioni[2] = [ "2","29/09/2009","17:30", "18:30", "Prodotto cartesiano di insiemi, funzioni tra insiemi, grafico di una funzione, iniettività e surgettività"];
Lezioni[3] = [ "3","30/09/2009","10:30", "11:30", "Iniettività, surgettività e composizioni, immagine e controimmagine"];
Lezioni[4] = [ "4","30/09/2009","11:30", "12:30", "Funzioni pari, dispari, periodiche, potenze ed esponenziali e relative inverse"];
Lezioni[5] = [ "5","30/09/2009","12:30", "13:30", "Funzioni trigonometriche e relative funzioni inverse"];
Lezioni[6] = [ "6","01/10/2009","08:30", "09:30", "Principio di induzione"];
Lezioni[7] = [ "7","01/10/2009","09:30", "10:30", "Fattoriali, binomiali, esempi di dimostrazioni per induzione, disuguaglianza di Bernoulli"];
Lezioni[8] = [ "8","03/10/2009","08:30", "09:30", "Insiemi numerici, definizione assiomatica dei numeri reali, assioma di continuità, massimo e minimo di sottoinsiemi"];
Lezioni[9] = [ "9","03/10/2009","09:30", "10:30", "Estremo superiore ed inferiore: definizione e caratterizzazione"];
Lezioni[10] = [ "10","03/10/2009","10:30", "11:30", "Esercizi su inf, sup, max, min"];
Lezioni[11] = [ "11","06/10/2009","16:30", "17:30", "Coefficienti binomiali, binomio di Newton e triangolo di Tartaglia. Interpretazione combinatoria di fattoriali e binomiali"];
Lezioni[12] = [ "12","06/10/2009","17:30", "18:30", "Funzioni monotone, uso di monotonia ed iniettività nella risoluzione di (dis)equazioni, interpretazione grafica di immagine e controimmagine"];
Lezioni[13] = [ "13","07/10/2009","10:30", "11:30", "Successioni e relativi limiti: definizioni"];
Lezioni[14] = [ "14","07/10/2009","11:30", "12:30", "Limiti di potenze di n calcolati usando la definizione, retta reale estesa, teoremi algebrici e di confronto"];
Lezioni[15] = [ "15","07/10/2009","12:30", "13:30", "Limiti di esponenziali e fattoriali, esempi di limiti calcolati usando i teoremi algebrici e di confronto"];
Lezioni[16] = [ "16","08/10/2009","08:30", "09:30", "Criteri del rapporto, della radice, del rapporto->radice, primi confronti tra ordini di infinito"];
Lezioni[17] = [ "17","08/10/2009","09:30", "10:30", "Esempi di applicazione dei criteri del rapporto, della radice, del rapporto->radice, ulteriori confronti tra ordini di infinito"];
Lezioni[18] = [ "18","10/10/2009","08:30", "09:30", "Successioni monotone e relativi teoremi. Qualche esercizio su inf e sup"];
Lezioni[19] = [ "19","10/10/2009","09:30", "10:30", "Il numero e (monotonia e limitatezza della successione che lo definisce). Esercizi sui limiti di successioni"];
Lezioni[20] = [ "20","10/10/2009","10:30", "11:30", "Limiti di funzioni: definizioni"];
Lezioni[21] = [ "21","13/10/2009","16:30", "17:30", "Funzioni continue, limiti notevoli, cambio di variabili nei limiti"];
Lezioni[22] = [ "22","13/10/2009","17:30", "18:30", "Dimostrazione dei principali limiti notevoli, trucco del passaggio all'esponenziale (e-alla)"];
Lezioni[23] = [ "23","14/10/2009","10:30", "11:30", "Ulteriori limiti notevoli di funzioni, con esempi ed esercizi. Criterio funzioni -> successioni"];
Lezioni[24] = [ "24","14/10/2009","11:30", "12:30", "Non esistenza di limiti dimostrata usando opportune sottosuccessioni"];
Lezioni[25] = [ "25","14/10/2009","12:30", "13:30", "Esercizi vari sui limiti di funzioni e successioni (metodi ante o piccolo)"];
Lezioni[26] = [ "26","15/10/2009","08:30", "09:30", "Definizione di o piccolo e sue proprietà algebriche"];
Lezioni[27] = [ "27","15/10/2009","09:30", "10:30", "Sviluppini e loro utilizzo per il calcolo di limiti"];
Lezioni[28] = [ "28","17/10/2009","08:30", "09:30", "Definizione di derivata (come limite del rapporto incrementale ed in termini di o piccolo). Derivata delle funzioni elemetari"];
Lezioni[29] = [ "29","17/10/2009","09:30", "10:30", "Derivata di somme, prodotti, quozienti, composizioni"];
Lezioni[30] = [ "30","17/10/2009","10:30", "11:30", "Derivata della funzione inversa. Esempi di calcolo di derivate."];
Lezioni[31] = [ "31","20/10/2009","16:30", "17:30", "Enunciato del teorema di De L'Hopital. Esempi di come applicarlo e come non applicarlo"];
Lezioni[32] = [ "32","20/10/2009","17:30", "18:30", "Funzioni iperboliche"];
Lezioni[33] = [ "33","21/10/2009","10:30", "11:30", "Formula di Taylor (con resto di Peano) con centro nell'origine"];
Lezioni[34] = [ "34","21/10/2009","11:30", "12:30", "Dimostrazione degli sviluppi di Taylor delle funzioni elementari. Sviluppi della somma e del prodotto."];
Lezioni[35] = [ "35","21/10/2009","12:30", "13:30", "Sviluppi di Taylor di composizioni. Esempi di utilizzo degli sviluppi di Taylor per il calcolo di limiti e valori di derivate."];
Lezioni[36] = [ "36","22/10/2009","08:30", "09:30", "Formula di Taylor con centro in un punto diverso dall'origine. Ulteriori esempi di sviluppo di una composizione"];
Lezioni[37] = [ "37","22/10/2009","09:30", "10:30", "Esempi di utilizzo dei polinomi di Taylor per il calcolo di limiti"];
Lezioni[38] = [ "38","24/10/2009","08:30", "09:30", "Serie: definizione mediante somme parziali. Serie geometriche e telescopiche"];
Lezioni[39] = [ "39","24/10/2009","09:30", "10:30", "Serie: proprietà algebriche, condizione necessaria, serie a termini di segno costante. Criteri della radice, del rapporto e del confronto"];
Lezioni[40] = [ "40","24/10/2009","10:30", "11:30", "Serie: dimostrazione criterio della radice, criterio del confronto asistotico (caso standard e casi limite). Esempi di applicazione dei criteri."];
Lezioni[41] = [ "41","27/10/2009","16:30", "17:30", "Criterio di Leibnitz (serie a segno alterno). Criterio dell'assoluta convergenza (serie a termini di segno qualunque)"];
Lezioni[42] = [ "42","27/10/2009","17:30", "18:30", "Esempi di studio della convergenza di serie (anche parametriche)"];
Lezioni[43] = [ "43","28/10/2009","10:30", "11:30", "Serie di potenze e raggio di convergenza. Serie di Taylor"];
Lezioni[44] = [ "44","28/10/2009","11:30", "12:30", "Esempi con serie di potenze e serie di Taylor (e loro utilizzo per il calcolo della somma di particolari serie numeriche)"];
Lezioni[45] = [ "45","28/10/2009","12:30", "13:30", "Esercizi di ricapitolazione sulle serie"];
Lezioni[46] = [ "46","29/10/2009","08:30", "09:30", "Teorema di esistenza degli zeri e sue applicazioni (esistenza dei valori intermedi, esistenza di soluzioni di equazioni, surgettività di funzioni)"];
Lezioni[47] = [ "47","29/10/2009","09:30", "10:30", "Studio locale di funzioni", "m"];
Lezioni[48] = [ "48","31/10/2009","08:30", "09:30", "Teorema di Weierstrass. Ricerca dei punti di massimo/minimo: punti stazionari interni, singolari interni, bordo"];
Lezioni[49] = [ "49","31/10/2009","09:30", "10:30", "Teoremi di Rolle, Cauchy, Lagrange"];
Lezioni[50] = [ "50","31/10/2009","10:30", "11:30", "Dimostrazione del caso 0/0 del teorema di De L'Hopital. Legami tra segno della derivata in un intervallo e monotonia nell'intervallo stesso"];
Lezioni[51] = [ "51","03/11/2009","16:30", "17:30", "Asintoti orizzontali, verticali, obliqui"];
Lezioni[52] = [ "52","03/11/2009","17:30", "18:30", "Esempi di disuguaglianze dimostrate mediante studi di funzione"];
Lezioni[53] = [ "53","04/11/2009","10:30", "11:30", "Concavità, convessità e segno della derivata seconda. Punti di flesso."];
Lezioni[54] = [ "54","04/11/2009","11:30", "12:30", "Esempi di equazioni risolte mediante studi di funzione"];
Lezioni[55] = [ "55","04/11/2009","12:30", "13:30", "Esercizi misti sulle funzioni"];
Lezioni[56] = [ "56","05/11/2009","08:30", "09:30", "Successioni per ricorrenza: introduzione e primo esempio studiato con la monotonia"];
Lezioni[57] = [ "57","05/11/2009","09:30", "10:30", "Successioni per ricorrenza: altro esempio di studio con la monotonia e interpretazione grafica"];
Lezioni[58] = [ "58","07/11/2009","08:30", "09:30", "Successioni per ricorrenza spiraleggianti: studio mediante la monotonia delle sottosuccessioni dei pari e dei dispari"];
Lezioni[59] = [ "59","07/11/2009","09:30", "10:30", "Successioni per ricorrenza spiraleggianti: studio mediante la distanza dal presunto limite"];
Lezioni[60] = [ "60","07/11/2009","10:30", "11:30", "Ulteriori esempi di studio di successioni per ricorrenza autonome"];
Lezioni[61] = [ "61","10/11/2009","16:30", "17:30", "Formula di Taylor con resto di Lagrange - Applicazioni al calcolo approssimato di funzioni ed alla dimostrazione di disuguaglianze"];
Lezioni[62] = [ "62","10/11/2009","17:30", "18:30", "Funzioni Lipschitziane - Legami tra Lipschitzianità e limitatezza della derivata prima"];
Lezioni[63] = [ "63","11/11/2009","10:30", "11:30", "Esercizi misti su studi di funzione e successioni per ricorrenza"];
Lezioni[64] = [ "64","11/11/2009","11:30", "12:30", "Esercizi misti su studi di funzione e successioni per ricorrenza"];
Lezioni[65] = [ "65","11/11/2009","12:30", "13:30", "Esercizi misti su studi di funzione e successioni per ricorrenza"];
Lezioni[66] = [ "66","12/11/2009","08:30", "09:30", "Successioni per ricorrenza non autonome: primi esempi"];
Lezioni[67] = [ "67","12/11/2009","09:30", "10:30", "Successioni per ricorrenza non autonome: ulteriori esempi"];
Lezioni[68] = [ "68","14/11/2009","08:30", "09:30", "Esercizi su studi di funzione e successioni per ricorrenza"];
Lezioni[69] = [ "69","14/11/2009","09:30", "10:30", "Esercizi su successioni per ricorrenza"];
Lezioni[70] = [ "70","14/11/2009","10:30", "11:30", "Esercizi su successioni per ricorrenza e serie parametriche"];
Lezioni[71] = [ "71","17/11/2009","16:30", "17:30", "Introduzione agli integrali: definizione, significato geometrico, definizione mediante le somme di Riemann"];
Lezioni[72] = [ "72","17/11/2009","17:30", "18:30", "Osservazioni sulle somme di Riemann. Integrabilità delle funzioni monotone. Funzione integrale."];
Lezioni[73] = [ "73","18/11/2009","10:30", "11:30", "Esempi di integrale calcolati mediante interpretazioni geometriche o come limite delle somme di Riemann. Primitive e funzione integrale"];
Lezioni[74] = [ "74","18/11/2009","11:30", "12:30", "Teorema della media integrale e teorema fondamentale del calcolo integrale. Primitive elementari"];
Lezioni[75] = [ "75","18/11/2009","12:30", "13:30", "Primi esempi di calcolo di integrali basati su primitive elementari ed interpretazioni geometriche"];
Lezioni[76] = [ "76","19/11/2009","08:30", "09:30", "Formula di integrazione per parti: enunciato, dimostrazione, primi esempi di applicazione"];
Lezioni[77] = [ "77","19/11/2009","09:30", "10:30", "Ulteriori esempi di applicazione della formuna di integrazione per parti"];
Lezioni[78] = [ "78","21/11/2009","08:30", "09:30", "Integrazione per sostituzione: enunciato, dimostrazione, esempi di applicazione"];
Lezioni[79] = [ "79","21/11/2009","09:30", "10:30", "Integrazione delle funzioni razionali: descrizione della procedura"];
Lezioni[80] = [ "80","21/11/2009","10:30", "11:30", "Integrazione delle funzioni razionali: esempi"];
Lezioni[81] = [ "81","24/11/2009","16:30", "17:30", "Sostituzioni razionalizzanti: primitive di funzioni razionali di esponenziali e di funzioni con radici di polinomi di primo grado"];
Lezioni[82] = [ "82","24/11/2009","17:30", "18:30", "Sostituzioni razionalizzanti: primitive di radici di polinomi di secondo grado e di funzioni razionali di sin x e cos x"];
Lezioni[83] = [ "83","25/11/2009","12:30", "13:30", "Integrali impropri: prime definizioni e spezzamento in integrali monoproblema"];
Lezioni[84] = [ "84","26/11/2009","08:30", "09:30", "Esempi di studio di integrali impropri classici dipendenti da parametro"];
Lezioni[85] = [ "85","26/11/2009","09:30", "10:30", "Esempi di integrali impropri studiati mediante confronto asintotico"];
Lezioni[86] = [ "86","26/11/2009","14:00", "15:00", "Criterio dell'assoluta intagrabilità. Integrali impropri con problemi in punti diversi dall'origine"];
Lezioni[87] = [ "87","28/11/2009","08:30", "09:30", "Integrali impropri: trucco dell'integrazione per parti, metodo dei triangolini"];
Lezioni[88] = [ "88","28/11/2009","09:30", "10:30", "Confronto tra serie ed integrali impropri. Esempi di studio di integrali impropri."];
Lezioni[89] = [ "89","28/11/2009","10:30", "11:30", "Metodi per calcolare la somma di serie di potenze"];
Lezioni[90] = [ "90","01/12/2009","16:30", "17:30", "Numeri complessi: forma cartesiana, operazioni algebriche, modulo, coniugato"];
Lezioni[91] = [ "91","01/12/2009","17:30", "18:30", "Numeri complessi: forma trigonometrica ed esponenziale, interpretazione di prodotto e quoziente in forma trigonometrica"];
Lezioni[92] = [ "92","02/12/2009","08:30", "09:30", "Numeri complessi: potenza n-esima. Esercizi vari"];
Lezioni[93] = [ "93","02/12/2009","09:30", "10:30", "Radici n-esime di un numero complesso"];
Lezioni[94] = [ "94","02/12/2009","10:30", "11:30", "Legami tra radici di un polinomio e sua fattorizzazione. Esercizi sulle radici n-esime di numeri complessi"];
Lezioni[95] = [ "95","03/12/2009","08:30", "09:30", "Equazioni differenziali: nomenclatura"];
Lezioni[96] = [ "96","03/12/2009","09:30", "10:30", "Equazioni differenziali: il problema di Cauchy"];
Lezioni[97] = [ "97","05/12/2009","08:30", "09:30", "Equazioni differenziali a variabili separabili. Intervallo massimale di esistenza, tempo di vita, blow-up, break-down"];
Lezioni[98] = [ "98","05/12/2009","09:30", "10:30", "Esempi di studio di equazioni differenziali a variabili separabili"];
Lezioni[99] = [ "99","05/12/2009","10:30", "11:30", "Equazioni differenziali lineari omogenee. Metodo per determinare una base dello spazio delle soluzioni."];
Lezioni[100] = [ "100","12/12/2009","08:30", "09:30", "Equazioni differenziali lineari non omogenee: teoria generale. Ricerca euristica di una soluzione con secondo membro esponenziale"];
Lezioni[101] = [ "101","12/12/2009","09:30", "10:30", "Equazioni differenziali lineari non omogenee: ricerca euristica di una soluzione con secondo membro trigonometrico o polinomiale"];
Lezioni[102] = [ "102","12/12/2009","10:30", "11:30", "Equazioni differenziali lineari non omogenee: metodo di variazione delle costanti. Esempio di studio di equazione differenziale parametrica "];
Lezioni[103] = [ "103","15/12/2009","16:30", "17:30", "Equazioni differenziali lineari del prim'ordine"];
Lezioni[104] = [ "104","15/12/2009","17:30", "18:30", "Esercizi su studio di equazioni differenziali dipendenti da parametri"];
Lezioni[105] = [ "105","16/12/2009","08:30", "09:30", "Polinomi a coefficienti complessi. Teorema fondamentale dell'algebra e sue conseguenze sulla fattorizzazione di polinomi a coefficienti complessi e reali"];
Lezioni[106] = [ "106","16/12/2009","09:30", "10:30", "Esercizi su numeri complessi e polinomi. Esponenziali e funzioni trigonometriche complesse"];
Lezioni[107] = [ "107","16/12/2009","10:30", "11:30", "Esercizi di ricapitolazione sui numeri complessi"];
Lezioni[108] = [ "108","17/12/2009","08:30", "09:30", "Esempio di sistema di due equazioni differenziali lineari. Esempio di studio qualitativo della soluzione di una equazione differenziale"];
Lezioni[109] = [ "109","17/12/2009","09:30", "10:30", "Esercizi misti basati su una funzione integrale"];
Lezioni[110] = [ "110","19/12/2009","09:30", "10:30", "Svolgimento di esercizi presi da test d'esame"];
Lezioni[111] = [ "111","19/12/2009","10:30", "11:30", "Svolgimento di esercizi presi da scritti d'esame"];
