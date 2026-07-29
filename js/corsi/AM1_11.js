var NomeCorso = "Analisi Matematica I - 2010/2011";
var Percorso = MEDIA.lezioni + "AM11/AM11_L";
var CifreNumeroLezione = 3;

var SchedaCorso = {
  nome: "Analisi Matematica I",
  annoAccademico: "2010/2011",
  crediti: "12",
  target: "Corsi di Laurea in Ingegneria Biomedica e in Ingegneria Elettronica",
  anno: "Primo anno",
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "AM11_Burocrazia.pdf",
    titolo: "Informazioni burocratiche"
  }
];

var Lezioni = new Array();
Lezioni[1] = [ "1","26/10/2010","08:30", "09:30", "Insiemi - Notazioni, unione, intersezione, differenza, cardinalità, insieme delle parti"];
Lezioni[2] = [ "2","26/10/2010","09:30", "10:30", "Prodotto cartesiano di insiemi, funzioni tra insiemi, grafico di una funzione, iniettività e surgettività"];
Lezioni[3] = [ "3","26/10/2010","10:30", "11:30", "Interpretazione di iniettività e surgettività in termini di grafici ed equazioni, immagine e controimmagine"];
Lezioni[4] = [ "4","27/10/2010","16:30", "17:30", "Funzioni pari, dispari, periodiche. Funzioni monotone. Monotonia e disequazioni. Legami tra monotonia ed iniettività "];
Lezioni[5] = [ "5","27/10/2010","17:30", "18:30", "Funzioni elementari: potenze ed esponenziali e relative inverse. Prime operazioni sui grafici"];
Lezioni[6] = [ "6","28/10/2010","08:30", "09:30", "Principio di induzione"];
Lezioni[7] = [ "7","28/10/2010","09:30", "10:30", "Esempi di dimostrazioni per induzione, definizione di fattoriale, disuguaglianza di Bernoulli"];
Lezioni[8] = [ "8","30/10/2010","08:30", "09:30", "Definizione assiomatica dei numeri reali, assioma di continuità. Maggioranti, minoranti, massimo, minimo di sottoinsiemi"];
Lezioni[9] = [ "9","30/10/2010","09:30", "10:30", "Estremo superiore ed inferiore: definizione, caratterizzazione, esempi"];
Lezioni[10] = [ "10","30/10/2010","10:30", "11:30", "Funzioni trigonometriche e relative funzioni inverse"];
Lezioni[11] = [ "11","02/11/2010","08:30", "09:30", "Successioni e relativi limiti: definizioni"];
Lezioni[12] = [ "12","02/11/2010","09:30", "10:30", "Primi teoremi sulle successioni (unicità del limite e permanenza del segno). Limiti di potenze di n. Teoremi di confronto ed algebrici"];
Lezioni[13] = [ "13","02/11/2010","10:30", "11:30", "Esempi di limiti di successioni calcolati usando i primi strumenti"];
Lezioni[14] = [ "14","03/11/2010","16:30", "17:30", "Coefficienti binomiali e loro significato combinatorio. Binomio di Newton e triangolo di Tartaglia"];
Lezioni[15] = [ "15","03/11/2010","17:30", "18:30", "Esercizi vari su funzioni, loro grafico e proprietà di simmetria"];
Lezioni[16] = [ "16","04/11/2010","08:30", "09:30", "Criteri del rapporto, della radice, del rapporto->radice. Esempi di limiti di radici n-esime"];
Lezioni[17] = [ "17","04/11/2010","09:30", "10:30", "Esempi di applicazione dei criteri del rapporto, della radice, del rapporto->radice. Confronti tra ordini di infinito"];
Lezioni[18] = [ "18","06/11/2010","08:30", "09:30", "Limiti di funzioni: definizioni"];
Lezioni[19] = [ "19","06/11/2010","09:30", "10:30", "Cambio di variabili nei limiti. Criterio funzioni successioni. Limiti notevoli."];
Lezioni[20] = [ "20","06/11/2010","10:30", "11:30", "Esempi di calcolo di limiti di funzioni e successioni usando i limiti notevoli"];
Lezioni[21] = [ "21","09/11/2010","08:30", "09:30", "Dimostrazione dei principali limiti notevoli, uso di cambi di variabile per spostare limiti a 0 o a +infinito"];
Lezioni[22] = [ "22","09/11/2010","09:30", "10:30", "Sottosuccessioni. Non esistenza di limiti usando opportune successioni e sottosuccessioni"];
Lezioni[23] = [ "23","09/11/2010","10:30", "11:30", "Esempi di limiti calcolati utilizzando le tecniche viste finora"];
Lezioni[24] = [ "24","10/11/2010","16:30", "17:30", "Teorema delle successioni monotone. Il numero e (monotonia e limitatezza della successione che lo definisce)"];
Lezioni[25] = [ "25","10/11/2010","17:30", "18:30", "Esercizi vari sui limiti di funzioni e successioni (metodi ante o piccolo)"];
Lezioni[26] = [ "26","11/11/2010","08:30", "09:30", "Definizione di o piccolo e sue proprietà algebriche. Sviluppini"];
Lezioni[27] = [ "27","11/11/2010","09:30", "10:30", "Esempi di utilizzo di sviluppini e o piccolo per il calcolo di limiti"];
Lezioni[28] = [ "28","13/11/2010","08:30", "09:30", "Definizione di derivata (come limite del rapporto incrementale ed in termini di o piccolo). Derivata di alcune funzioni elementari"];
Lezioni[29] = [ "29","13/11/2010","09:30", "10:30", "Derivata di somme, prodotti, quozienti, composizioni. Derivate delle restanti funzioni elementari"];
Lezioni[30] = [ "30","13/11/2010","10:30", "11:30", "Derivata della funzione inversa. Esempi di calcolo di derivate."];
Lezioni[31] = [ "31","16/11/2010","08:30", "09:30", "Enunciato del teorema di De L'Hopital. Esempi di come applicarlo e come non applicarlo"];
Lezioni[32] = [ "32","16/11/2010","09:30", "10:30", "Formula di Taylor (con resto di Peano) con centro nell'origine. Dimostrazione degli sviluppi di Taylor delle funzioni elementari."];
Lezioni[33] = [ "33","16/11/2010","10:30", "11:30", "Sviluppi della somma, del prodotto, della composizione. Primi esempi di limiti calcolati con la formula di Taylor"];
Lezioni[34] = [ "34","17/11/2010","16:30", "17:30", "Funzioni iperboliche"];
Lezioni[35] = [ "35","17/11/2010","17:30", "18:30", "Sviluppi di Taylor di composizioni. Esempi di utilizzo degli sviluppi di Taylor per il calcolo di limiti."];
Lezioni[36] = [ "36","18/11/2010","08:30", "09:30", "Formula di Taylor con centro in un punto diverso dall'origine. Idea della dimostrazione della formula di Taylor"];
Lezioni[37] = [ "37","18/11/2010","09:30", "10:30", "Esempi di utilizzo dei polinomi di Taylor per il calcolo di limiti e di valori di derivate"];
Lezioni[38] = [ "38","20/11/2010","08:30", "09:30", "Serie: definizione mediante somme parziali. Proprietà algebriche. Condizione necessaria. Serie telescopiche"];
Lezioni[39] = [ "39","20/11/2010","09:30", "10:30", "Serie geometriche. Serie a termini di segno costante. Criteri della radice, del rapporto e del confronto. Dimostrazione del criterio del confronto"];
Lezioni[40] = [ "40","20/11/2010","10:30", "11:30", "Serie: criterio del confronto asintotico (caso standard). Serie armoniche generalizzate. Esempi di applicazione dei criteri."];
Lezioni[41] = [ "41","23/11/2010","08:30", "09:30", "Serie: dimostrazione del criterio della radice e del confronto asintotico. Casi limite nel confronto asintotico. Esempi"];
Lezioni[42] = [ "42","23/11/2010","09:30", "10:30", "Criterio di Leibnitz (serie a segno alterno). Criterio dell'assoluta convergenza (serie a termini di segno qualunque). Esempi di studio della convergenza di serie a segno variabile"];
Lezioni[43] = [ "43","01/12/2010","16:30", "17:30", "Esercizi di ricapitolazione sulle serie (anche parametriche)"];
Lezioni[44] = [ "44","01/12/2010","17:30", "18:30", "Esercizi di ricapitolazione sulle serie (anche parametriche)"];
Lezioni[45] = [ "45","02/12/2010","08:30", "09:30", "Teorema di esistenza degli zeri e sue applicazioni (esistenza dei valori intermedi, esistenza di soluzioni di equazioni, surgettività di funzioni)"];
Lezioni[46] = [ "46","02/12/2010","09:30", "10:30", "Teorema di Weierstrass. Ricerca dei punti di massimo/minimo: punti stazionari interni, singolari interni, bordo"];
Lezioni[47] = [ "47","02/12/2010","16:30", "17:30", "Teoremi di Rolle, Cauchy, Lagrange"];
Lezioni[48] = [ "48","02/12/2010","17:30", "18:30", "Dimostrazione del caso 0/0 del teorema di De L'Hopital. Legami tra segno della derivata in un intervallo e monotonia nell'intervallo stesso"];
Lezioni[49] = [ "49","04/12/2010","08:30", "09:30", "Studio locale di funzioni. Criterio delle derivate successive"];
Lezioni[50] = [ "50","04/12/2010","09:30", "10:30", "Studio globale di funzioni: primi esempi. Asintoti orizzontali e verticali"];
Lezioni[51] = [ "51","04/12/2010","10:30", "11:30", "Esempi di utilizzo dello studio globale di funzioni per la risoluzione di (dis)equazioni"];
Lezioni[52] = [ "52","04/12/2010","11:30", "12:30", "Disuguaglianze classiche. Concavità, convessità e segno della derivata seconda"];
Lezioni[53] = [ "53","07/12/2010","08:30", "09:30", "Introduzione alle successioni per ricorrenza. Primo esempio di studio mediante un piano"];
Lezioni[54] = [ "54","07/12/2010","09:30", "10:30", "Successioni per ricorrenza autonome: piano classico con la monotonia"];
Lezioni[55] = [ "55","07/12/2010","10:30", "11:30", "Funzioni Lipschitziane. Successioni per ricorrenza autonome: piano con la distanza dal presunto limite"];
Lezioni[56] = [ "56","09/12/2010","08:30", "09:30", "Esempi di successioni per ricorrenza studiate con la monotonia e la distanza dal presunto limite"];
Lezioni[57] = [ "57","09/12/2010","09:30", "10:30", "Successioni per ricorrenza spiraleggianti: studio mediante la distanza dal presunto limite e mediante la monotonia delle sottosuccessioni dei pari e dei dispari"];
Lezioni[58] = [ "58","11/12/2010","08:30", "09:30", "Successioni per ricorrenza non autonome: piani con la monotonia, il rapporto, la limitatezza ed i carabinieri"];
Lezioni[59] = [ "59","11/12/2010","09:30", "10:30", "Successioni per ricorrenza non autonome: ulteriori esempi"];
Lezioni[60] = [ "60","11/12/2010","10:30", "11:30", "Successioni per ricorrenza non autonome: ulteriori esempi"];
Lezioni[61] = [ "61","11/12/2010","11:30", "12:30", "Formula di Taylor con resto di Lagrange - Applicazioni al calcolo approssimato di funzioni ed alla dimostrazione di disuguaglianze"];
Lezioni[62] = [ "62","14/12/2010","08:30", "09:30", "Introduzione agli integrali: definizione, significato geometrico, definizione mediante le somme di Riemann"];
Lezioni[63] = [ "63","14/12/2010","09:30", "10:30", "Integrabilità delle funzioni monotone. Proprietà delle funzioni integrabili. Primi esempi di calcolo di integrali con considerazioni geometriche"];
Lezioni[64] = [ "64","14/12/2010","10:30", "11:30", "Primitive e funzione integrale. Teorema della media integrale. Teorema fondamentale del calcolo integrale"];
Lezioni[65] = [ "65","15/12/2010","16:30", "17:30", "Tecniche di integrazione: primitive elementari"];
Lezioni[66] = [ "66","15/12/2010","17:30", "18:30", "Ulteriori esempi di primitive elementari. Integrali con valori assoluti. Discorso del \"+c\""];
Lezioni[67] = [ "67","16/12/2010","08:30", "09:30", "Formula di integrazione per parti e primi esempi di applicazione"];
Lezioni[68] = [ "68","16/12/2010","09:30", "10:30", "Ulteriori esempi di applicazione dell'integrazione per parti"];
Lezioni[69] = [ "69","16/12/2010","16:30", "17:30", "Formula di integrazione per sostituzione e primi esempi di applicazione"];
Lezioni[70] = [ "70","16/12/2010","17:30", "18:30", "Ulteriori esempi di applicazione della formula di integrazione per sostituzione"];
Lezioni[71] = [ "71","18/12/2010","08:30", "09:30", "Integrazione delle funzioni razionali (prima parte)"];
Lezioni[72] = [ "72","18/12/2010","09:30", "10:30", "Integrazione delle funzioni razionali (seconda parte) - Esempi"];
Lezioni[73] = [ "73","18/12/2010","10:30", "11:30", "Sostituzioni razionalizzanti: funzioni razionali di esponenziali e radici, potenze negative dispari di sin x e cos x"];
Lezioni[74] = [ "74","18/12/2010","11:30", "12:30", "Sostituzioni razionalizzanti: radici di polinomi di secondo grado, sostituzioni trigonometriche, formule parametriche"];
Lezioni[75] = [ "75","21/12/2010","08:30", "09:30", "Integrali impropri: spezzamento in integrali monoproblema, definizioni nel caso monoproblema"];
Lezioni[76] = [ "76","21/12/2010","09:30", "10:30", "Integrali impropri: esempi classici con problemi a 0 e +infinito"];
Lezioni[77] = [ "77","21/12/2010","10:30", "11:30", "Integrali impropri: criterio del confronto e del confronto asintotico per integrande positive. Esempi di applicazione dei criteri"];
Lezioni[78] = [ "78","22/12/2010","16:30", "17:30", "Integrali impropri: assoluta integrabilità, integrali con problemi in punti diversi dall'origine"];
Lezioni[79] = [ "79","22/12/2010","17:30", "18:30", "Integrali impropri: trucco dell'integrazione per parti, primo esempio di \"metodo dei triangolini\""];
Lezioni[80] = [ "80","11/01/2011","08:30", "09:30", "Numeri complessi: forma cartesiana. Operazioni algebriche, coniugato, modulo"];
Lezioni[81] = [ "81","11/01/2011","09:30", "10:30", "Numeri complessi: formula trigonometrica. Prodotto, reciproco, coniugato in forma trigonometrica"];
Lezioni[82] = [ "82","11/01/2011","10:30", "11:30", "Numeri complessi: formula esponenziale. Potenze n-esime di un numero complesso. Esempi ed esercizi"];
Lezioni[83] = [ "83","12/01/2011","16:30", "17:30", "Numeri complessi: radici n-esime"];
Lezioni[84] = [ "84","12/01/2011","17:30", "18:30", "Esercizi misti sul programma finora svolto"];
Lezioni[85] = [ "85","13/01/2011","08:30", "09:30", "Teorema fondamentale dell'algebra e fattorizzazioni di polinomi sui complessi"];
Lezioni[86] = [ "86","13/01/2011","09:30", "10:30", "Fattorizzazione sui reali di polinomi a coefficienti reali"];
Lezioni[87] = [ "87","15/01/2011","08:30", "09:30", "Numeri complessi: esponenziale e logaritmo complesso. Funzioni iperboliche di numeri complessi"];
Lezioni[88] = [ "88","15/01/2011","09:30", "10:30", "Seno e coseno di un numero complesso"];
Lezioni[89] = [ "89","15/01/2011","10:30", "11:30", "Esercizi di ricapitolazione sui numeri complessi"];
Lezioni[90] = [ "90","18/01/2011","08:30", "09:30", "Equazioni differenziali: nomenclatura"];
Lezioni[91] = [ "91","18/01/2011","09:30", "10:30", "Equazioni differenziali: problema di Cauchy, teoremi di esistenza e di unicità, esempio di non esistenza"];
Lezioni[92] = [ "92","18/01/2011","10:30", "11:30", "Equazioni differenziali: intervallo massimale di esistenza, tempo di vita, blow-up, break-down"];
Lezioni[93] = [ "93","19/01/2011","16:30", "17:30", "Equazioni differenziali a variabili separabili: metodo di risoluzione"];
Lezioni[94] = [ "94","19/01/2011","17:30", "18:30", "Esempi di risoluzione e studio di equazioni differenziali a variabili separabili"];
Lezioni[95] = [ "95","20/01/2011","08:30", "09:30", "Equazioni differenziali lineari omogenee: struttura dell'insieme delle soluzioni. Metodo per determinare una base nel caso di equazioni di ordine 2"];
Lezioni[96] = [ "96","20/01/2011","09:30", "10:30", "Equazioni differenziali lineari omogenee di ordine k a coefficienti costanti. Equazioni non omogenee con secondo membro esponenziale"];
Lezioni[97] = [ "97","22/01/2011","08:30", "09:30", "Equazioni differenziali lineari non omogenee con secondo membro polinomiale o trigonometrico"];
Lezioni[98] = [ "98","22/01/2011","09:30", "10:30", "Equazioni differenziali lineari non omogenee: metodo di variazione delle costanti"];
Lezioni[99] = [ "99","22/01/2011","10:30", "11:30", "Equazioni differenziali lineari del prim'ordine (anche a coefficienti non costanti)"];
Lezioni[100] = [ "100","25/01/2011","08:30", "09:30", "Confronti serie-integrali"];
Lezioni[101] = [ "101","25/01/2011","09:30", "10:30", "Serie di potenze: raggio di convergenza e formula per calcolarlo, serie di Taylor"];
Lezioni[102] = [ "102","25/01/2011","10:30", "11:30", "Calcolo della somma di serie di potenze riconducendole ad opportune serie di Taylor. Teorema di scambio serie-integrali"];
Lezioni[103] = [ "103","26/01/2011","16:30", "17:30", "Varianti del teorema di Weierstrass"];
Lezioni[104] = [ "104","26/01/2011","17:30", "18:30", "Esercizi misti sullo studio di funzioni"];
Lezioni[105] = [ "105","27/01/2011","08:30", "09:30", "Esercizi misti sugli integrali impropri"];
Lezioni[106] = [ "106","27/01/2011","09:30", "10:30", "Esercizi misti (più impegnativi) sugli integrali impropri"];
Lezioni[107] = [ "107","29/01/2011","08:30", "09:30", "Studio di un'equazione differenziale senza una formula esplicita per la soluzione. Esempio di studio qualitativo della soluzione di una equazione differenziale"];
Lezioni[108] = [ "108","29/01/2011","09:30", "10:30", "Esercizi misti (anche impegnativi) sulle successioni per ricorrenza"];
Lezioni[109] = [ "109","29/01/2011","10:30", "11:30", "O grande ed equivalenza asintotica. Ordine di infinitesimo e parte principale. Esercizi misti conclusivi"];
