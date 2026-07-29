var NomeCorso = "Analisi Matematica I - 2011/2012";
var Percorso = MEDIA.lezioni + "AM12/AM12_L";
var CifreNumeroLezione = 3;

var SchedaCorso = {
  nome: "Analisi Matematica I",
  annoAccademico: "2011/2012",
  crediti: "12",
  target: "Corso di Laurea in Ingegneria Biomedica",
  anno: "Primo anno",
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "AM12_Burocrazia.pdf",
    titolo: "Informazioni burocratiche"
  },
  {
    sezione: "book",
    file: "AM12_Book1.pdf",
    titolo: "Stampato integrale delle lezioni",
    nota: "Volume 1 — Lezioni 1–56"
  },
  {
    sezione: "book",
    file: "AM12_Book2.pdf",
    titolo: "Stampato integrale delle lezioni",
    nota: "Volume 2 — Lezioni 57–111"
  }
];

var Lezioni = new Array();
Lezioni[1] = [ "1","28/09/2011","14:30", "15:30", "Insiemi - Notazioni, unione, intersezione, differenza, cardinalità, insieme delle parti, prodotto cartesiano"];
Lezioni[2] = [ "2","28/09/2011","15:30", "16:30", "Funzioni tra insiemi. Iniettività, surgettività, funzione inversa, immagine e controimmagine di un insieme"];
Lezioni[3] = [ "3","29/09/2011","08:30", "09:30", "Principio di induzione. Applicazione alla somma dei termini di progressioni aritmetiche e geometriche"];
Lezioni[4] = [ "4","29/09/2011","09:30", "10:30", "Esempi di disuguaglianze dimostrate per induzione. Disuguaglianza di Bernoulli."];
Lezioni[5] = [ "5","30/09/2011","09:30", "10:30", "Numeri reali: proprietà algebriche, ordinamento, assioma di continuità. Maggioranti, minoranti, massimo, minimo."];
Lezioni[6] = [ "6","30/09/2011","10:30", "11:30", "Estremo inferiore e superiore: definizioni, caratterizzazioni, esempi"];
Lezioni[7] = [ "7","30/09/2011","11:30", "12:30", "Interpretazione di iniettività e surgettività in termini di grafico. Operazioni sui grafici di funzioni reali."];
Lezioni[8] = [ "8","01/10/2011","08:30", "09:30", "Funzioni pari, dispari, periodiche, monotone. Iniettività ed equazioni. Monotonia e disequazioni."];
Lezioni[9] = [ "9","01/10/2011","09:30", "10:30", "Funzioni elementari: potenze, radici, esponenziali, logaritmi, seno, coseno, tangente"];
Lezioni[10] = [ "10","01/10/2011","10:30", "11:30", "Funzioni trigonometriche inverse. Interpretazione di immagine e controimmagine in termini di grafico ed esercizi relativi."];
Lezioni[11] = [ "11","05/10/2011","14:30", "15:30", "Proprietà vere definitivamente e frequentemente. Definizione di successione e sue visualizzazioni. Definizioni di limite per successioni."];
Lezioni[12] = [ "12","05/10/2011","15:30", "16:30", "Esempi di limiti di successioni calcolati usando la definizione. Teoremi di permanenza del segno ed unicità del limite. Teorema del confronto e dei carabinieri. Retta reale estesa."];
Lezioni[13] = [ "13","06/10/2011","08:30", "09:30", "Fattoriali, binomiali e loro significato combinatorio. Anagrammi di una parola. Proprietà dei binomiali. Binomio di Newton."];
Lezioni[14] = [ "14","06/10/2011","09:30", "10:30", "Teoremi algebrici per i limiti di successioni. Esempi di limiti calcolati usando teoremi algebrici e di confronto."];
Lezioni[15] = [ "15","07/10/2011","09:30", "10:30", "Criteri della radice, del rapporto e rapporto -> radice. Dimostrazione del criterio della radice. Limite della radice n-esima di costanti, polinomi e di n!"];
Lezioni[16] = [ "16","07/10/2011","10:30", "11:30", "Esempi di applicazione dei criteri del rapporto e della radice. Confronti tra ordini di infinito di potenze, esponenziali, fattoriali"];
Lezioni[17] = [ "17","07/10/2011","11:30", "12:30", "Esercizi misti sui limiti di successioni utilizzando i criteri visti finora. Esercizi su proprietà di simmetria delle funzioni."];
Lezioni[18] = [ "18","08/10/2011","08:30", "09:30", "Limiti di funzioni: definizioni"];
Lezioni[19] = [ "19","08/10/2011","09:30", "10:30", "Funzioni continue. Elenco dei limiti di notevoli. Cambio di variabili nei limiti. Esempi di limiti calcolati utilizzando limiti notevoli."];
Lezioni[20] = [ "20","08/10/2011","10:30", "11:30", "Criterio funzioni -> successioni. Trucco di passaggio all'esponenziale. Esempi di limiti di funzioni e successioni calcolati mediante limiti notevoli."];
Lezioni[21] = [ "21","12/10/2011","16:30", "17:30", "Discussione delle disuguaglianze sin x <= x <= tan x. Dimostrazione dei principali limiti notevoli. Cambio di variabili per spostare i limiti a 0 oppure + infinito."];
Lezioni[22] = [ "22","12/10/2011","17:30", "18:30", "Sottosuccessioni e loro utilizzo per dimostrare la non esistenza di limiti di successioni e funzioni"];
Lezioni[23] = [ "23","13/10/2011","08:30", "09:30", "Successioni monotone e relativo teorema di esistenza del limite. Il numero e (la successione che lo definisce è monotona e compresa tra 2 e 3)."];
Lezioni[24] = [ "24","13/10/2011","09:30", "10:30", "Esercizi misti sui limiti che sfruttano le tecniche viste fino a questo momento"];
Lezioni[25] = [ "25","14/10/2011","09:30", "10:30", "Definizione di o piccolo e sue proprietà"];
Lezioni[26] = [ "26","14/10/2011","10:30", "11:30", "Sviluppini e loro utilizzo per il calcolo di limiti"];
Lezioni[27] = [ "27","14/10/2011","11:30", "12:30", "Equivalenza asintotica. Esempi di limiti calcolati usando le tecniche viste finora."];
Lezioni[28] = [ "28","15/10/2011","08:30", "09:30", "Definizione di rapporto incrementale e di derivata. Significato geometrico. Retta tangente. Relazioni tra derivabilità e continuità."];
Lezioni[29] = [ "29","15/10/2011","09:30", "10:30", "Derivate di alcune funzioni elementari dimostrate mediante la definizione. Regole di derivazione."];
Lezioni[30] = [ "30","15/10/2011","10:30", "11:30", "Derivata della funzione inversa. Derivata della composizione. Esempi di calcolo di derivate."];
Lezioni[31] = [ "31","19/10/2011","16:30", "17:30", "Teorema di De L'Hopital. Esempi in cui si può e non si può applicare. Pericoli dei \"limiti metà per volta\" e dell'equivalenza asintotica."];
Lezioni[32] = [ "32","19/10/2011","17:30", "18:30", "Funzioni iperboliche"];
Lezioni[33] = [ "33","20/10/2011","08:30", "09:30", "Formula di Taylor con resto di Peano: enunciato, idea della dimostrazione, esempi di applicazione"];
Lezioni[34] = [ "34","20/10/2011","09:30", "10:30", "Sviluppi di Taylor delle funzioni elementari. Sviluppi di Taylor di somma, differenza, prodotto."];
Lezioni[35] = [ "35","21/10/2011","09:30", "10:30", "Sviluppi di Taylor di funzioni composte"];
Lezioni[36] = [ "36","21/10/2011","10:30", "11:30", "Cautele nel calcolo di polinomi di Taylor di funzioni composte. Esempi di limiti calcolati utilizzando i polinomi di Taylor."];
Lezioni[37] = [ "37","21/10/2011","11:30", "12:30", "Formula di Taylor con centro in un punto diverso dall'origine. Esercizi riassuntivi sui limiti."];
Lezioni[38] = [ "38","22/10/2011","08:30", "09:30", "Definizione di serie come limite delle somme parziali. Condizione necessaria e proprietà algebriche. Serie geometriche."];
Lezioni[39] = [ "39","22/10/2011","09:30", "10:30", "Serie telescopiche. Comportamento delle serie a termini di segno costante. Enunciato dei criteri della radice, del rapporto, del confronto, del confronto asintotico (caso standard). Serie armoniche generalizzate.)"];
Lezioni[40] = [ "40","22/10/2011","10:30", "11:30", "Esercizi sulla convergenza di serie a termini positivi (non negativi)"];
Lezioni[41] = [ "41","26/10/2011","16:30", "17:30", "Dimostrazione dei criteri per serie a termini positivi. Casi limite di confronto asintotico ed esempi di applicazione."];
Lezioni[42] = [ "42","26/10/2011","17:30", "18:30", "Serie a termini di segno qualunque: enunciato del criterio di Leibnitz e dell'assoluta convergenza ed esempi di applicazione"];
Lezioni[43] = [ "43","27/10/2011","08:30", "09:30", "Dimostrazione dei criteri di Leibnitz e dell'assoluta convergenza. Serie di potenze: notazioni, raggio di convergenza e formula per calcolarlo."];
Lezioni[44] = [ "44","27/10/2011","09:30", "10:30", "Serie di potenze: dimostrazione della formula per il calcolo del raggio di convergenza. Serie di Taylor e loro utilizzo per il calcolo della somma di speciali serie numeriche."];
Lezioni[45] = [ "45","28/10/2011","10:30", "11:30", "Teorema di esistenza degli zeri e dei valori intermedi. Esempi di applicazione."];
Lezioni[46] = [ "46","28/10/2011","11:30", "12:30", "Studio locale di funzioni e criterio delle derivate successive per lo studio dell'andamento di una funzione nell'intorno di un punto stazionario", "m"];
Lezioni[47] = [ "47","29/10/2011","08:30", "09:30", "Teorema di Weierstrass e sue varianti. Ricerca operativa dei punti di max e di min."];
Lezioni[48] = [ "48","29/10/2011","09:30", "10:30", "Teoremi di Rolle, Cauchy, Lagrange"];
Lezioni[49] = [ "49","29/10/2011","10:30", "11:30", "Dimostrazione del caso 0/0 del teorema di De L'Hopital. Legami tra segno della derivata in un intervallo e monotonia di una funzione."];
Lezioni[50] = [ "50","02/11/2011","16:30", "17:30", "Esercizi misti su serie parametriche"];
Lezioni[51] = [ "51","02/11/2011","17:30", "18:30", "Esercizi misti su successioni, serie, polinomi di Taylor, studio locale di funzioni"];
Lezioni[52] = [ "52","03/11/2011","08:30", "09:30", "Primo esempio di studio globale di funzioni. Asintoti e loro equazioni."];
Lezioni[53] = [ "53","03/11/2011","09:30", "10:30", "Esempi di studio di funzioni"];
Lezioni[54] = [ "54","04/11/2011","09:30", "10:30", "Formula di Taylor con resto di Lagrange e applicazioni (calcolo approssimato di funzioni, dimostrazione di disuguaglianze)"];
Lezioni[55] = [ "55","04/11/2011","10:30", "11:30", "Convessità e legami con il segno della derivata seconda. Disuguaglianze classiche."];
Lezioni[56] = [ "56","04/11/2011","11:30", "12:30", "Lipschitzianità e legami con la derivata prima"];
Lezioni[57] = [ "57","05/11/2011","08:30", "09:30", "Introduzione alle successioni per ricorrenza: nomenclatura e primo esempio di piano con la monotonia"];
Lezioni[58] = [ "58","05/11/2011","09:30", "10:30", "Ulteriori esempi di successioni per ricorrenza studiati mediante piani con la monotonia."];
Lezioni[59] = [ "59","05/11/2011","10:30", "11:30", "Interpretazione grafica delle successioni per ricorrenza. Esempi studiati mediante la distanza dal presunto limite."];
Lezioni[60] = [ "60","09/11/2011","16:30", "17:30", "Esercizi misti sullo studio di funzioni"];
Lezioni[61] = [ "61","09/11/2011","17:30", "18:30", "Esercizi misti sullo studio di funzioni"];
Lezioni[62] = [ "62","10/11/2011","08:30", "09:30", "Successioni per ricorrenza spiraleggianti: studio mediante la distanza dal presunto limite e mediante le sottosuccessioni dei pari e dei dispari"];
Lezioni[63] = [ "63","10/11/2011","09:30", "10:30", "Ulteriori esempi di studio di successioni per ricorrenza autonome"];
Lezioni[64] = [ "64","11/11/2011","09:30", "10:30", "Successioni per ricorrenza non autonome: piani con la monotonia, con il rapporto, con limitatezza + carabinieri"];
Lezioni[65] = [ "65","11/11/2011","10:30", "11:30", "Ulteriori esempi di successioni per ricorrenza non autonome"];
Lezioni[66] = [ "66","11/11/2011","11:30", "12:30", "Ulteriori esempi di successioni per ricorrenza non autonome"];
Lezioni[67] = [ "67","12/11/2011","08:30", "09:30", "Introduzione agli integrali: notazioni, significato geometrico, definizione mediante somme di Riemann superiori e inferiori"];
Lezioni[68] = [ "68","12/11/2011","09:30", "10:30", "Esempi di utilizzo delle somme di Riemann, integrabilità delle funzioni monotone, proprietà degli integrali, esempi di integrali calcolati mediante considerazioni geometriche"];
Lezioni[69] = [ "69","12/11/2011","10:30", "11:30", "Teoria generale per il calcolo operativo di integrali: primitive, funzione integrale, teorema della media integrale, teorema fondamentale del calcolo integrale"];
Lezioni[70] = [ "70","16/11/2011","16:30", "17:30", "Due esercizi di ricapitolazione su studio di funzioni e successioni per ricorrenza"];
Lezioni[71] = [ "71","16/11/2011","17:30", "18:30", "Discorso sul +c negli integrali indefiniti. Primi esempi di primitive elementari."];
Lezioni[72] = [ "72","17/11/2011","08:30", "09:30", "Integrazione per parti e primi esempi di applicazione. \"Grande ritorno\"."];
Lezioni[73] = [ "73","17/11/2011","09:30", "10:30", "Trucco dell'\"1 nascosto\" e ulteriori esempi di applicazione dell'integrazione per parti"];
Lezioni[74] = [ "74","18/11/2011","09:30", "10:30", "Integrazione per sostituzione e primi esempi di applicazione"];
Lezioni[75] = [ "75","18/11/2011","10:30", "11:30", "Ulteriori esempi di integrazione per sostituzione"];
Lezioni[76] = [ "76","18/11/2011","11:30", "12:30", "Esempi di integrali (anche con valori assoluti) calcolati utilizzando le tecniche viste finora"];
Lezioni[77] = [ "77","19/11/2011","08:30", "09:30", "Integrazione delle funzioni razionali - Parte prima"];
Lezioni[78] = [ "78","19/11/2011","09:30", "10:30", "Integrazione delle funzioni razionali - Parte seconda"];
Lezioni[79] = [ "79","19/11/2011","10:30", "11:30", "Primi esempi di sostituzioni razionalizzanti: esponenziali, seni e coseni, radici di espressioni di primo grado"];
Lezioni[80] = [ "80","23/11/2011","16:30", "17:30", "Sostituzioni razionalizzanti per primitive di radici di polinomi di secondo grado"];
Lezioni[81] = [ "81","23/11/2011","17:30", "18:30", "Sostituzioni razionali per sin x e cos x mediante formule parametriche. Esempi di ricapitolazione sul calcolo di integrali."];
Lezioni[82] = [ "82","24/11/2011","08:30", "09:30", "Integrali impropri: definizioni nei casi monoproblema e spezzamento di un integrale generale in integrali monoproblema."];
Lezioni[83] = [ "83","24/11/2011","09:30", "10:30", "Studio degli integrali impropri di 1/x^a con problemi a 0 e +infinito al variare del parametro a. Discussione sulla \"non compensazione\" tra integrali impropri divergenti."];
Lezioni[84] = [ "84","25/11/2011","09:30", "10:30", "Studio di integrali impropri con integrande di segno costante: criterio del confronto e del confronto asintotico"];
Lezioni[85] = [ "85","25/11/2011","10:30", "11:30", "Casi limite di confronto asintotico. Criterio dell'assoluta integrabilità per integrande a segno variabile. Integrali impropri con problemi in punti diversi dall'origine."];
Lezioni[86] = [ "86","25/11/2011","11:30", "12:30", "Esempi di studio della convergenza di integrali impropri utilizzando i vari criteri"];
Lezioni[87] = [ "87","26/11/2011","08:30", "09:30", "Trucco dell'integrazione per parti per integrali impropri oscillanti (tipo sin x/x, cos(x^2), sin(x^2) tra 0 e infinito). Primo esempio di \"metodo dei triangolini\""];
Lezioni[88] = [ "88","26/11/2011","09:30", "10:30", "Ulteriore esempio di \"metodo dei triangolini\". Confronto serie-integrali e dimostrazione della convergenza/divergenza delle serie armoniche generalizzate."];
Lezioni[89] = [ "89","26/11/2011","10:30", "11:30", "Teoremi di scambio serie-derivata per serie di potenze. Utilizzo del teorema di scambio per il calcolo della somma di serie di potenze."];
Lezioni[90] = [ "90","30/11/2011","16:30", "17:30", "Introduzione alle equazioni differenziali: nomenclatura"];
Lezioni[91] = [ "91","30/11/2011","17:30", "18:30", "Introduzione alle equazioni differenziali: il problema di Cauchy, enunciato dei teoremi di esistenza ed unicità"];
Lezioni[92] = [ "92","01/12/2011","08:30", "09:30", "Metodo risolutivo per equazioni differenziali a variabili separabili. Studio della soluzione: intervallo massimale di esistenza, tempo di vita, esistenza globale, blow-up, break-down"];
Lezioni[93] = [ "93","01/12/2011","09:30", "10:30", "Ulteriori esempi di studio di equazioni differenziali a variabili separabili"];
Lezioni[94] = [ "94","02/12/2011","09:30", "10:30", "Numeri complessi: forma cartesiana, parte reale e immaginaria, piano di Gauss, operazioni algebriche, coniugato, modulo"];
Lezioni[95] = [ "95","02/12/2011","10:30", "11:30", "Coordinate polari nel piano. Forma trigonometrica ed esponenziale di un numero complesso. Interpretazione di modulo, coniugato, prodotto, reciproco, quoziente in forma trigonometrica."];
Lezioni[96] = [ "96","02/12/2011","11:30", "12:30", "Potenze e radici n-esime di numeri complessi"];
Lezioni[97] = [ "97","03/12/2011","08:30", "09:30", "Teoria generale delle equazioni differenziali lineari, omogenee e non omogenee"];
Lezioni[98] = [ "98","03/12/2011","09:30", "10:30", "Equazioni differenziali lineari a coefficienti costanti: base dello spazio delle soluzioni nel caso omogeneo e ricerca per tentativi di una soluzione nel caso non omogeneo"];
Lezioni[99] = [ "99","03/12/2011","10:30", "11:30", "Equazioni differenziali lineari non omogenee: esempi di ricerca per tentativi di una soluzione"];
Lezioni[100] = [ "100","07/12/2011","16:30", "17:30", "Esercizi su potenze e radici n-esime di numeri complessi"];
Lezioni[101] = [ "101","07/12/2011","17:30", "18:30", "Esercizi su potenze e radici n-esime di numeri complessi. Fattorizzazione di polinomi sui complessi."];
Lezioni[102] = [ "102","14/12/2011","08:30", "09:30", "Teorema fondamentale dell'algebra. Fattorizzazione di polinomi a coefficienti reali \"accoppiando\" le radici complesse coniugate"];
Lezioni[103] = [ "103","14/12/2011","09:30", "10:30", "Funzioni trascendenti di numeri complessi: esponenziale, logaritmo, funzioni trigonometriche, funzioni iperboliche"];
Lezioni[104] = [ "104","15/12/2011","08:30", "09:30", "Metodo di variazione delle costanti per equazioni differenziali lineari non omogenee"];
Lezioni[105] = [ "105","15/12/2011","09:30", "10:30", "Equazioni differenziali lineari del prim'ordine: formula risolutiva."];
Lezioni[106] = [ "106","16/12/2011","09:30", "10:30", "Due esempi di studio di equazioni differenziali con parametri (valori soglia, oscillazioni smorzate)"];
Lezioni[107] = [ "107","16/12/2011","10:30", "11:30", "Esempi di studio di equazioni differenziali con parametri (oscillazioni smorzate). Esempio di studio qualitativo di un'equazione differenziale (senza risolverla esplicitamente)."];
Lezioni[108] = [ "108","16/12/2011","11:30", "12:30", "Esercizi misti sui numeri complessi"];
Lezioni[109] = [ "109","17/12/2011","08:30", "09:30", "O grande. Esempi di esercizi \"mondo reale\" che conducono a stimare la somma di serie."];
Lezioni[110] = [ "110","17/12/2011","09:30", "10:30", "Esercizi misti presi da test e scritti d'esame"];
Lezioni[111] = [ "111","17/12/2011","10:30", "11:30", "Esercizi misti basati su funzioni integrali"];
