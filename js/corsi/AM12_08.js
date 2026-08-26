var NomeCorso = "Analisi Matematica 1 - 2007/2008";
var ArchivioCorso = "AM12/AM12_08";
var PrefissoFile = "T08_L";
var Percorso = MEDIA.lezioni + "T08/T08_L";
var CifreNumeroLezione = 3;

var SchedaCorso = {
  nome: "Analisi Matematica 1",
  annoAccademico: "2007/2008",
  crediti: "12",
  target: "Corso di Laurea in Ingegneria Elettronica e delle Telecomunicazioni",
  anno: "Primo anno",
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "T08_Burocrazia.pdf",
    titolo: "Informazioni burocratiche"
  },
  {
    sezione: "book",
    file: "T08_Book1.pdf",
    titolo: "Stampato integrale delle lezioni",
    nota: "Volume 1 — Lezioni 1–54"
  },
  {
    sezione: "book",
    file: "T08_Book2.pdf",
    titolo: "Stampato integrale delle lezioni",
    nota: "Volume 2 — Lezioni 55–100"
  }
];

var Lezioni = new Array();
Lezioni[1] = [ "1", "02/10/07", "08:30", "09:30", "Insiemi" ];
Lezioni[2] = [ "2", "02/10/07", "09:30", "10:30", "Funzioni tra insiemi, iniettività, surgettività, immagine e controimmagine" ];
Lezioni[3] = [ "3", "03/10/07", "10:30", "11:30", "Principio di induzione" ];
Lezioni[4] = [ "4", "03/10/07", "11:30", "12:30", "Funzioni reali: simmetrie, monotonia, iniettività, surgettività" ];
Lezioni[5] = [ "5", "03/10/07", "12:30", "13:30", "Presentazione funzioni elementari" ];
Lezioni[6] = [ "6", "04/10/07", "13:30", "14:30", "Fine presentazione funzioni elementari, assioma di continuità" ];
Lezioni[7] = [ "7", "04/10/07", "14:30", "15:30", "Estremo inferiore e superiore" ];
Lezioni[8] = [ "8", "04/10/07", "08:30", "09:30", "Limiti di successioni: definizioni" ];
Lezioni[9] = [ "9", "04/10/07", "09:30", "10:30", "Operazioni sui grafici. Interpretazione grafica di equazioni, disequazioni, immagine e controimmagine." ];
Lezioni[10] = [ "10", "09/10/07", "08:30", "09:30", "Limiti di successioni: teoremi algebrici e di confronto" ];
Lezioni[11] = [ "11", "09/10/07", "09:30", "10:30", "Successioni monotone. Esempi di calcolo di limiti di successioni." ];
Lezioni[12] = [ "12", "09/10/07", "14:30", "15:30", "Limiti di successioni: rapporto, radice, rapporto -> radice" ];
Lezioni[13] = [ "13", "09/10/07", "15:30", "16:30", "Confronto tra ordini di infinito per successioni" ];
Lezioni[14] = [ "14", "10/10/07", "10:30", "11:30", "Limiti di funzioni: definizioni" ];
Lezioni[15] = [ "15", "10/10/07", "11:30", "12:30", "Continuità, primi esempi di calcolo di limiti" ];
Lezioni[16] = [ "16", "10/10/07", "12:30", "13:30", "Cambio di variabili nei limiti: esempi" ];
Lezioni[17] = [ "17", "11/10/07", "13:30", "14:30", "Dimostrazione dei principali limiti notevoli" ];
Lezioni[18] = [ "18", "11/10/07", "14:30", "15:30", "Criterio funzioni -> successioni. Esempi di calcolo di limiti." ];
Lezioni[19] = [ "19", "12/10/07", "08:30", "09:30", "Sottosuccessioni e non esistenza di limiti" ];
Lezioni[20] = [ "20", "12/10/07", "09:30", "10:30", "Esercizi sui limiti" ];
Lezioni[21] = [ "21", "16/10/07", "14:30", "15:30", "Linguaggio degli infinitesimi: o piccolo" ];
Lezioni[22] = [ "22", "16/10/07", "15:30", "16:30", "\"Sviluppini\" e loro utilizzo nel calcolo dei limiti" ];
Lezioni[23] = [ "23", "17/10/07", "10:30", "11:30", "Derivata e differenziale in una variabile" ];
Lezioni[24] = [ "24", "17/10/07", "11:30", "12:30", "Operazioni algebriche sulle derivate" ];
Lezioni[25] = [ "25", "17/10/07", "12:30", "13:30", "Derivate di funzioni inverse; esempi di calcolo di derivate" ];
Lezioni[26] = [ "26", "18/10/07", "13:30", "14:30", "Teorema di De L'Hopital e formula di Taylor" ];
Lezioni[27] = [ "27", "18/10/07", "14:30", "15:30", "Sviluppi di Taylor di funzioni elementari e loro utilizzo nel calcolo di limiti" ];
Lezioni[28] = [ "28", "19/10/07", "08:30", "09:30", "Funzioni iperboliche" ];
Lezioni[29] = [ "29", "19/10/07", "09:30", "10:30", "Polinomi di Taylor di composizioni di funzioni" ];
Lezioni[30] = [ "30", "23/10/07", "14:30", "15:30", "Polinomi di Taylor con centro in un punto diverso dall'origine" ];
Lezioni[31] = [ "31", "23/10/07", "15:30", "16:30", "Serie: definizione, condizione necessaria, serie telescopiche" ];
Lezioni[32] = [ "32", "24/10/07", "10:30", "11:30", "Criteri per serie a termini positivi: radice, rapporto, confronto, confronto asintotico (casi standard)" ];
Lezioni[33] = [ "33", "24/10/07", "11:30", "12:30", "Serie: dimostrazione criteri e casi limite del confronto asintotico" ];
Lezioni[34] = [ "34", "24/10/07", "12:30", "13:30", "Esercizi sulle serie" ];
Lezioni[35] = [ "35", "25/10/07", "13:30", "14:30", "Serie a termini di segno qualunque: criterio di Leibniz e assoluta convergenza" ];
Lezioni[36] = [ "36", "25/10/07", "14:30", "15:30", "Esercizi sulle serie (anche con parametri)" ];
Lezioni[37] = [ "37", "26/10/07", "08:30", "09:30", "Serie di potenze" ];
Lezioni[38] = [ "38", "26/10/07", "09:30", "10:30", "Esercizi sulle serie di Taylor" ];
Lezioni[39] = [ "39", "30/10/07", "14:30", "15:30", "Teorema di esistenza degli zeri e conseguenze" ];
Lezioni[40] = [ "40", "30/10/07", "15:30", "16:30", "Studio locale di funzioni" ];
Lezioni[41] = [ "41", "31/10/07", "10:30", "11:30", "Massimi, minimi e teorema di Weierstrass" ];
Lezioni[42] = [ "42", "31/10/07", "11:30", "12:30", "Ricerca dei punti di max/min, teoremi di Rolle, Cauchy, Lagrange" ];
Lezioni[43] = [ "43", "31/10/07", "12:30", "13:30", "Monotonia e segno della derivata" ];
Lezioni[44] = [ "44", "06/11/07", "14:30", "15:30", "Teorema \"Monotonia 3\", asintoti orizzontali e verticali" ];
Lezioni[45] = [ "45", "06/11/07", "15:30", "16:30", "Asintoti obliqui, convessità e concavità" ];
Lezioni[46] = [ "46", "07/11/07", "10:30", "11:30", "Successioni per ricorrenza: introduzione e primi esempi" ];
Lezioni[47] = [ "47", "07/11/07", "11:30", "12:30", "Formula di Taylor con resto di Lagrange e applicazioni" ];
Lezioni[48] = [ "48", "07/11/07", "12:30", "13:30", "Esercizi su studio di funzioni, inf, sup, max, min" ];
Lezioni[49] = [ "49", "08/11/07", "13:30", "14:30", "Funzioni Lipschitziane" ];
Lezioni[50] = [ "50", "08/11/07", "14:30", "15:30", "Esercizi su studio di funzioni, inf, sup, max, min" ];
Lezioni[51] = [ "51", "09/11/07", "08:30", "09:30", "Successioni per ricorrenza autonome monotone" ];
Lezioni[52] = [ "52", "09/11/07", "09:30", "10:30", "Successioni per ricorrenza autonome spiraleggianti" ];
Lezioni[53] = [ "53", "13/11/07", "08:30", "09:30", "Successioni per ricorrenza non autonome" ];
Lezioni[54] = [ "54", "13/11/07", "09:30", "10:30", "Successioni per ricorrenza: ulteriori esercizi" ];
Lezioni[55] = [ "55", "14/11/07", "10:30", "11:30", "Spazio n-dimensionale, vettori, norma, prodotto scalare" ];
Lezioni[56] = [ "56", "14/11/07", "11:30", "12:30", "Funzioni di 2 variabili e loro linee di livello" ];
Lezioni[57] = [ "57", "14/11/07", "12:30", "13:30", "Limiti e continuità in 2 variabili" ];
Lezioni[58] = [ "58", "15/11/07", "13:30", "14:30", "Derivate parziali e direzionali" ];
Lezioni[59] = [ "59", "15/11/07", "14:30", "15:30", "Differenziale e gradiente" ];
Lezioni[60] = [ "60", "16/11/07", "08:30", "09:30", "Massimi e minimi in 2 variabili: teorema di Weiestrass e metodo delle linee di livello" ];
Lezioni[61] = [ "61", "16/11/07", "09:30", "10:30", "Massimi e minimi in 2 variabili: parametrizzazione del bordo" ];
Lezioni[62] = [ "62", "20/11/07", "08:30", "09:30", "Moltiplicatori di Lagrange" ];
Lezioni[63] = [ "63", "20/11/07", "09:30", "10:30", "Massimi e minimi su insiemi limitati" ];
Lezioni[64] = [ "64", "21/11/07", "10:30", "11:30", "Derivate parziali successive, massimi e minimi su insiemi non limitati" ];
Lezioni[65] = [ "65", "21/11/07", "11:30", "12:30", "Integrali in una variabile: notazioni, significato geometrico, definizioni" ];
Lezioni[66] = [ "66", "21/11/07", "12:30", "13:30", "Funzione integrale, primitive, teorema della media integrale, teorema fondamentale del calcolo integrale" ];
Lezioni[67] = [ "67", "22/11/07", "13:30", "14:30", "Integrazione per parti" ];
Lezioni[68] = [ "68", "22/11/07", "14:30", "15:30", "Integrazione per sostituzione" ];
Lezioni[69] = [ "69", "23/11/07", "08:30", "09:30", "Integrazione funzioni razionali - prima parte" ];
Lezioni[70] = [ "70", "23/11/07", "09:30", "10:30", "Integrazione funzioni razionali - seconda parte" ];
Lezioni[71] = [ "71", "27/11/07", "08:30", "09:30", "Sostituzioni razionalizzanti - prima parte" ];
Lezioni[72] = [ "72", "27/11/07", "09:30", "10:30", "Sostituzioni razionalizzanti - seconda parte" ];
Lezioni[73] = [ "73", "28/11/07", "10:30", "11:30", "Integrali doppi: notazioni, definizioni, formula di riduzione sui rettangoli" ];
Lezioni[74] = [ "74", "28/11/07", "11:30", "12:30", "Integrali doppi: formula di riduzione su insiemi normali rispetto all'asse x" ];
Lezioni[75] = [ "75", "28/11/07", "12:30", "13:30", "Integrali doppi: formula di riduzione su insiemi normali rispetto all'asse y" ];
Lezioni[76] = [ "76", "29/11/07", "13:30", "14:30", "Integrali impropri: definizioni e spezzamento in integrali monoproblema" ];
Lezioni[77] = [ "77", "29/11/07", "14:30", "15:30", "Integrali impropri: criteri di convergenza" ];
Lezioni[78] = [ "78", "30/11/07", "08:30", "09:30", "Coordinate polari e loro utilizzo per il calcolo di integrali doppi" ];
Lezioni[79] = [ "79", "30/11/07", "09:30", "10:30", "Cambi di variabile negli integrali doppi" ];
Lezioni[80] = [ "80", "04/12/07", "08:30", "09:30", "Integrali tripli: notazioni, definizioni, formula di riduzione per colonne" ];
Lezioni[81] = [ "81", "04/12/07", "09:30", "10:30", "Integrali tripli: formula di riduzione per sezioni" ];
Lezioni[82] = [ "82", "05/12/07", "10:30", "11:30", "Coordinate cilindriche e sferiche e loro utilizzo per il calcolo di integrali tripli" ];
Lezioni[83] = [ "83", "05/12/07", "11:30", "12:30", "Calcolo di baricentri di figure piane e solide mediante integrali doppi e tripli" ];
Lezioni[84] = [ "84", "05/12/07", "12:30", "13:30", "Cambi di variabile negli integrali tripli - Volume dei solidi di rotazione" ];
Lezioni[85] = [ "85", "06/12/07", "13:30", "14:30", "Studio della convergenza di integrali impropri mediante l'integrazione per parti" ];
Lezioni[86] = [ "86", "06/12/07", "14:30", "15:30", "Confronti serie integrali - Metodo \"dei triangolini\" per lo studio di integrali impropri" ];
Lezioni[87] = [ "87", "07/12/07", "08:30", "09:30", "Curve: definizioni, lunghezza, integrali curvilinei" ];
Lezioni[88] = [ "88", "07/12/07", "09:30", "10:30", "Baricentro di una curva - Area di una superficie di rotazione" ];
Lezioni[89] = [ "89", "11/12/07", "09:30", "10:30", "Equazioni differenziali e problema di Cauchy - Notazioni e definizioni" ];
Lezioni[90] = [ "90", "12/12/07", "10:30", "11:30", "Equazioni differenziali a variabili separabili - Tempo di vita, blow-up, break-down" ];
Lezioni[91] = [ "91", "12/12/07", "11:30", "12:30", "Esempi di studio di equazioni differenziali a variabili separabili" ];
Lezioni[92] = [ "92", "12/12/07", "12:30", "13:30", "Esempi di studio di equazioni differenziali a variabili separabili in funzione del dato iniziale" ];
Lezioni[93] = [ "93", "13/12/07", "13:30", "14:30", "Equazioni differenziali lineari omogenee" ];
Lezioni[94] = [ "94", "13/12/07", "14:30", "15:30", "Equazioni differenziali lineari non omogenee - Ricerca per tentavi di una soluzione" ];
Lezioni[95] = [ "95", "14/12/07", "08:30", "09:30", "Equazioni differenziali lineari non omogenee - Ulteriori esempi di ricerca per tentavi di una soluzione" ];
Lezioni[96] = [ "96", "14/12/07", "09:30", "10:30", "Equazioni differenziali lineari del primo ordine" ];
Lezioni[97] = [ "97", "18/12/07", "08:30", "09:30", "Equazioni differenziali lineari non omogenee - Metodo di variazione delle costanti" ];
Lezioni[98] = [ "98", "18/12/07", "09:30", "10:30", "Tecniche per calcolare la somma di una serie di potenze" ];
Lezioni[99] = [ "99", "19/12/07", "10:30", "11:30", "Sistemi di equazioni differenziali lineari omogenee - Studio di equazioni differenziali con parametri" ];
Lezioni[100] = [ "100", "19/12/07", "11:30", "12:30", "Calcolo di 2 integrali impegnativi" ];
