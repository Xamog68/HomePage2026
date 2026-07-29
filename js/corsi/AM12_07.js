var NomeCorso = "Analisi Matematica 1 - 2006/2007";
var Percorso = MEDIA.lezioni + "T07/T07_L";
var CifreNumeroLezione = 2;

var SchedaCorso = {
  nome: "Analisi Matematica 1",
  annoAccademico: "2006/2007",
  crediti: "12",
  ore: "100",
  target: "Telecomunicazioni",
  anno: "Primo",
  periodo: "Ottobre/Dicembre",
  avviso: "Edizione storica del corso integrato Matematica I. I PDF originariamente accorpati per due o tre ore dovranno essere separati in file corrispondenti alle singole lezioni."
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "T07_Burocrazia.pdf",
    titolo: "Informazioni burocratiche"
  }
];

var Lezioni = new Array();
Lezioni[1] = [ "1", "03/10/06", "14:30", "15:30", "Insiemi" ];
Lezioni[2] = [ "2", "03/10/06", "15:30", "16:30", "Insiemi numerici, numeri reali" ];
Lezioni[3] = [ "3", "03/10/06", "16:30", "17:30", "Funzioni" ];
Lezioni[4] = [ "4", "04/10/06", "11:30", "12:30", "Principio d'induzione" ];
Lezioni[5] = [ "5", "04/10/06", "12:30", "13:30", "Funzioni e funzioni inverse elementari" ];
Lezioni[6] = [ "6", "05/10/06", "13:30", "14:30", "Inf, sup, max, min" ];
Lezioni[7] = [ "7", "05/10/06", "14:30", "15:30", "Operazioni sui grafici" ];
Lezioni[8] = [ "8", "07/10/06", "11:30", "12:30", "Funzioni monotone" ];
Lezioni[9] = [ "9", "07/10/06", "12:30", "13:30", "Limiti di successioni: definizioni" ];
Lezioni[10] = [ "10", "10/10/06", "16:30", "17:30", "Limiti di successioni: confronto e carabinieri" ];
Lezioni[11] = [ "11", "10/10/06", "17:30", "18:30", "Limiti di successioni: teoremi algebrici" ];
Lezioni[12] = [ "12", "11/10/06", "10:30", "11:30", "Limiti di successioni: rapporto, radice, rapporto->radice" ];
Lezioni[13] = [ "13", "11/10/06", "11:30", "12:30", "Limiti di successioni: sottosuccessioni" ];
Lezioni[14] = [ "14", "11/10/06", "12:30", "13:30", "Limiti di successioni: esempi" ];
Lezioni[15] = [ "15", "12/10/06", "13:30", "14:30", "Successioni monotone" ];
Lezioni[16] = [ "16", "12/10/06", "14:30", "15:30", "Limiti di funzioni: definizioni" ];
Lezioni[17] = [ "17", "14/10/06", "11:30", "12:30", "Limiti notevoli di funzioni" ];
Lezioni[18] = [ "18", "14/10/06", "12:30", "13:30", "Limiti notevoli di funzioni" ];
Lezioni[19] = [ "19", "17/10/06", "16:30", "17:30", "o piccolo" ];
Lezioni[20] = [ "20", "17/10/06", "17:30", "18:30", "Limiti di successioni e funzioni: esempi" ];
Lezioni[21] = [ "21", "18/10/06", "10:30", "11:30", "Derivata e differenziale in una variabile" ];
Lezioni[22] = [ "22", "18/10/06", "11:30", "12:30", "Derivate delle funzioni elementari" ];
Lezioni[23] = [ "23", "18/10/06", "12:30", "13:30", "Limiti di funzioni e successioni: esempi" ];
Lezioni[24] = [ "24", "19/10/06", "13:30", "14:30", "Derivata della funzione inversa" ];
Lezioni[25] = [ "25", "19/10/06", "14:30", "15:30", "Teorema di De L'Hôpital" ];
Lezioni[26] = [ "26", "21/10/06", "11:30", "12:30", "Formula di Taylor con resto di Peano" ];
Lezioni[27] = [ "27", "21/10/06", "12:30", "13:30", "Calcolo di polinomi di Taylor" ];
Lezioni[28] = [ "28", "24/10/06", "16:30", "17:30", "Polinomi di Taylor della composizione" ];
Lezioni[29] = [ "29", "24/10/06", "17:30", "18:30", "Polinomi di Taylor con centro diverso da 0" ];
Lezioni[30] = [ "30", "25/10/06", "10:30", "11:30", "Serie: definizioni" ];
Lezioni[31] = [ "31", "25/10/06", "11:30", "12:30", "Serie a termini positivi" ];
Lezioni[32] = [ "32", "25/10/06", "12:30", "13:30", "Funzioni iperboliche" ];
Lezioni[33] = [ "33", "26/10/06", "13:30", "14:30", "Serie: criterio del confronto asintotico" ];
Lezioni[34] = [ "34", "26/10/06", "14:30", "15:30", "Serie: casi limite nel confronto asintotico" ];
Lezioni[35] = [ "35", "28/10/06", "11:30", "12:30", "Serie: criterio di Leibnitz e assoluta convergenza" ];
Lezioni[36] = [ "36", "28/10/06", "12:30", "13:30", "Serie: esercizi" ];
Lezioni[37] = [ "37", "02/11/06", "13:30", "14:30", "Serie di potenze" ];
Lezioni[38] = [ "38", "02/11/06", "14:30", "15:30", "Serie diTaylor" ];
Lezioni[39] = [ "39", "04/11/06", "11:30", "12:30", "Teorema di esistenza degli zeri e generalizzazioni" ];
Lezioni[40] = [ "40", "04/11/06", "12:30", "13:30", "Teorema di Weierstrass e generalizzazioni" ];
Lezioni[41] = [ "41", "07/11/06", "16:30", "17:30", "Massimi e minimi per funzioni di una variabile" ];
Lezioni[42] = [ "42", "07/11/06", "17:30", "18:30", "Studio locale di funzioni" ];
Lezioni[43] = [ "43", "08/11/06", "10:30", "11:30", "Teoremi di Rolle, Cauchy, Lagrange" ];
Lezioni[44] = [ "44", "08/11/06", "11:30", "12:30", "Segno della derivata e monotonia" ];
Lezioni[45] = [ "45", "08/11/06", "12:30", "13:30", "Introduzione allo studio globale di funzioni" ];
Lezioni[46] = [ "46", "09/11/06", "13:30", "14:30", "Funzioni convesse e concave" ];
Lezioni[47] = [ "47", "09/11/06", "14:30", "15:30", "Lipschitzianità" ];
Lezioni[48] = [ "48", "11/11/06", "11:30", "12:30", "Studio globale di funzioni: esempi" ];
Lezioni[49] = [ "49", "11/11/06", "12:30", "13:30", "Formula di Taylor con resto di Lagrange" ];
Lezioni[50] = [ "50", "14/11/06", "16:30", "17:30", "Successioni per ricorrenza: introduzione" ];
Lezioni[51] = [ "51", "14/11/06", "17:30", "18:30", "Successioni per ricorrenza: caso autonomo monotono" ];
Lezioni[52] = [ "52", "15/11/06", "10:30", "11:30", "Successioni per ricorrenza: caso autonomo spiraleggiante" ];
Lezioni[53] = [ "53", "15/11/06", "11:30", "12:30", "Successioni per ricorrenza: caso non autonomo" ];
Lezioni[54] = [ "54", "15/11/06", "12:30", "13:30", "Successioni per ricorrenza: esempi vari" ];
Lezioni[55] = [ "55", "16/11/06", "10:30", "11:30", "Linguaggio vettoriale" ];
Lezioni[56] = [ "56", "16/11/06", "11:30", "12:30", "Funzioni di più variabili: grafici, linee di livello, restrizioni" ];
Lezioni[57] = [ "57", "16/11/06", "12:30", "13:30", "Funzioni di più variabili: limiti e continuità" ];
Lezioni[58] = [ "58", "18/11/06", "11:30", "12:30", "Funzioni di più variabili: derivate parziali e direzionali" ];
Lezioni[59] = [ "59", "18/11/06", "12:30", "13:30", "Funzioni di più variabili: gradiente e differenziale" ];
Lezioni[60] = [ "60", "21/11/06", "16:30", "17:30", "Massimi e minimi in più variabili: metodo delle linee di livello", "m", "m" ];
Lezioni[61] = [ "61", "21/11/06", "17:30", "18:30", "Massimi e minimi in più variabili: parametrizzazione del bordo", "m", "m" ];
Lezioni[62] = [ "62", "22/11/06", "10:30", "11:30", "Moltiplicatori di Lagrange" ];
Lezioni[63] = [ "63", "22/11/06", "11:30", "12:30", "Massimi e minimi in più variabili su insiemi chiusi e limitati" ];
Lezioni[64] = [ "64", "22/11/06", "12:30", "13:30", "Massimi e minimi in più variabili su insiemi non limitati" ];
Lezioni[65] = [ "65", "23/11/06", "13:30", "14:30", "Integrali in una variabile: notazioni, significato geometrico, definizione" ];
Lezioni[66] = [ "66", "23/11/06", "14:30", "15:30", "Teorema fondamentale del calcolo integrale" ];
Lezioni[67] = [ "67", "25/11/06", "11:30", "12:30", "Integrazione per parti" ];
Lezioni[68] = [ "68", "25/11/06", "12:30", "13:30", "Integrazione per sostituzione" ];
Lezioni[69] = [ "69", "28/11/06", "16:30", "17:30", "Integrazione delle funzioni razionali" ];
Lezioni[70] = [ "70", "28/11/06", "17:30", "18:30", "Integrazione delle funzioni razionali" ];
Lezioni[71] = [ "71", "29/11/06", "10:30", "11:30", "Sostituzioni razionalizzanti" ];
Lezioni[72] = [ "72", "29/11/06", "11:30", "12:30", "Sostituzioni razionalizzanti" ];
Lezioni[73] = [ "73", "29/11/06", "12:30", "13:30", "Calcolo della somma di serie di potenze mediante derivate ed integrali" ];
Lezioni[74] = [ "74", "30/11/06", "13:30", "14:30", "Integrali impropri: definizioni" ];
Lezioni[75] = [ "75", "30/11/06", "14:30", "15:30", "Integrali impropri: primi esempi" ];
Lezioni[76] = [ "76", "05/12/06", "16:30", "17:30", "Integrali impropri: criterio del confronto asintotico" ];
Lezioni[77] = [ "77", "05/12/06", "17:30", "18:30", "Integrali impropri: criterio dell'assoluta integrabilità" ];
Lezioni[78] = [ "78", "06/12/06", "10:30", "11:30", "Integrali doppi: notazioni, significato geometrico, definizione" ];
Lezioni[79] = [ "79", "06/12/06", "11:30", "12:30", "Integrali doppi su insiemi normali rispetto all'asse x" ];
Lezioni[80] = [ "80", "06/12/06", "12:30", "13:30", "Integrali doppi su insiemi normali rispetto all'asse y" ];
Lezioni[81] = [ "81", "07/12/06", "13:30", "14:30", "Integrali doppi: coordinate polari" ];
Lezioni[82] = [ "82", "07/12/06", "14:30", "15:30", "Cambi di variabile negli integrali doppi" ];
Lezioni[83] = [ "83", "09/12/06", "09:00", "10:00", "Integrali tripli: introduzione formula di riduzione per colonne" ];
Lezioni[84] = [ "84", "09/12/06", "10:00", "11:00", "Integrali tripli: formula di riduzione per sezioni" ];
Lezioni[85] = [ "85", "09/12/06", "11:00", "12:00", "Integrali tripli: coordinate cilindriche e sferiche" ];
Lezioni[86] = [ "86", "12/12/06", "16:30", "17:30", "Integrali impropri oscillanti: trucco dell'integrazione per parti" ];
Lezioni[87] = [ "87", "12/12/06", "17:30", "18:30", "Confronti serie-integrali" ];
Lezioni[88] = [ "88", "13/12/06", "10:30", "11:30", "Equazioni differenziali: terminologia" ];
Lezioni[89] = [ "89", "13/12/06", "11:30", "12:30", "Problema di Cauchy per equazioni del primo ordine a variabili separabili" ];
Lezioni[90] = [ "90", "13/12/06", "12:30", "13:30", "Studio delle soluzioni di Problemi di Cauchy" ];
Lezioni[91] = [ "91", "14/12/06", "13:30", "14:30", "Equazioni differenziali lineari a coefficienti costanti omogenee" ];
Lezioni[92] = [ "92", "14/12/06", "14:30", "15:30", "Equazioni differenziali lineari a coefficienti costanti non omogenee" ];
Lezioni[93] = [ "93", "14/12/06", "15:30", "16:30", "Equazioni differenziali lineari a coefficienti costanti non omogenee" ];
Lezioni[94] = [ "94", "16/12/06", "09:00", "10:30", "Equazioni differenziali lineari del primo ordine" ];
Lezioni[95] = [ "95", "16/12/06", "10:30", "12:00", "Studio di equazioni differenziali dipendenti da parametri" ];
Lezioni[96] = [ "96", "19/12/06", "16:30", "17:30", "Baricentro di figure piane e solidi" ];
Lezioni[97] = [ "97", "19/12/06", "17:30", "18:30", "Solidi di rotazione" ];
Lezioni[98] = [ "98", "20/12/06", "10:30", "11:30", "Lunghezza di una curva e integrale curvilineo" ];
Lezioni[99] = [ "99", "20/12/06", "11:30", "12:30", "Teorema di Guldino per l'area di una superficie di rotazione" ];
Lezioni[100] = [ "100", "20/12/06", "12:30", "13:30", "Esercizi misti" ];
