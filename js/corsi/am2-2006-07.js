var NomeCorso = "Analisi Matematica 2 - 2006/2007";
var Percorso = MEDIA.lezioni + "C07/C07_L";
var CifreNumeroLezione = 2;

var SchedaCorso = {
  nome: "Analisi Matematica 2",
  annoAccademico: "2006/2007",
  crediti: "6",
  ore: "50",
  target: "Ingegneria Civile e Nucleare",
  anno: "Secondo",
  periodo: "Ottobre/Dicembre",
  avviso: "Edizione storica del corso. I PDF originariamente accorpati per due o tre ore sono stati separati in file corrispondenti alle singole lezioni."
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "C07_Burocrazia.pdf",
    titolo: "Informazioni burocratiche"
  }
];

var Lezioni = new Array();
Lezioni[1] = [ "1", "03/10/06", "09:30", "10:30", "Vettori n-dimesionali" ];
Lezioni[2] = [ "2", "03/10/06", "10:30", "11:30", "Linee di livello e restrizioni a rette" ];
Lezioni[3] = [ "3", "03/10/06", "11:30", "12:30", "Limiti di funzioni di più variabili" ];
Lezioni[4] = [ "4", "04/10/06", "16:30", "17:30", "Funzioni di più variabili: esempi" ];
Lezioni[5] = [ "5", "04/10/06", "17:30", "18:30", "Derivate parziali e direzionali" ];
Lezioni[6] = [ "6", "10/10/06", "09:30", "10:30", "Funzioni di più variabili: differenziale" ];
Lezioni[7] = [ "7", "10/10/06", "10:30", "11:30", "Relazioni tra gradiente e derivate direzionali" ];
Lezioni[8] = [ "8", "10/10/06", "11:30", "12:30", "Funzioni di più variabili: esempi" ];
Lezioni[9] = [ "9", "11/10/06", "16:30", "17:30", "Teorema di Weierstrass in più variabili" ];
Lezioni[10] = [ "10", "11/10/06", "17:30", "18:30", "Massimi e minimi in più variabili mediante linee di livello" ];
Lezioni[11] = [ "11", "17/10/06", "09:30", "10:30", "Studio del bordo mediante parametrizzazioni" ];
Lezioni[12] = [ "12", "17/10/06", "10:30", "11:30", "Moltiplicatori di Lagrange" ];
Lezioni[13] = [ "13", "17/10/06", "11:30", "12:30", "Moltiplicatori di Lagrange: esempi" ];
Lezioni[14] = [ "14", "18/10/06", "16:30", "17:30", "Formula di Taylor in più variabili" ];
Lezioni[15] = [ "15", "18/10/06", "17:30", "18:30", "Forme quadratiche e matrici simmetriche" ];
Lezioni[16] = [ "16", "24/10/06", "09:30", "10:30", "Massimi e minimi su insiemi non limitati" ];
Lezioni[17] = [ "17", "24/10/06", "10:30", "11:30", "Limiti all'infinito per funzioni di 2 variabili" ];
Lezioni[18] = [ "18", "24/10/06", "11:30", "12:30", "Segnatura di forme quadratiche" ];
Lezioni[19] = [ "19", "25/10/06", "16:30", "17:30", "Massimi e minimi locali in più variabili" ];
Lezioni[20] = [ "20", "25/10/06", "17:30", "18:30", "Massimi e minimi in più variabili: esempi" ];
Lezioni[21] = [ "21", "07/11/06", "09:30", "10:30", "Funzioni convesse e concave in più variabili" ];
Lezioni[22] = [ "22", "07/11/06", "10:30", "11:30", "Esempi di studio locale/globale di funzioni di più variabili" ];
Lezioni[23] = [ "23", "07/11/06", "11:30", "12:30", "Esempi di studio locale/globale di funzioni di più variabili" ];
Lezioni[24] = [ "24", "08/11/06", "16:30", "17:30", "Ripasso tecniche di integrazione in una variabile" ];
Lezioni[25] = [ "25", "08/11/06", "17:30", "18:30", "Ripasso tecniche di integrazione in una variabile" ];
Lezioni[26] = [ "26", "14/11/06", "09:30", "10:30", "Integrali doppi: notazione, significato geometrico, definizione" ];
Lezioni[27] = [ "27", "14/11/06", "10:30", "11:30", "Integrali doppi: formule di riduzione 1" ];
Lezioni[28] = [ "28", "14/11/06", "11:30", "12:30", "Integrali doppi: formule di riduzione 2" ];
Lezioni[29] = [ "29", "15/10/06", "16:30", "17:30", "Calcolo di integrali doppi mediante coordinate polari e cambi di variabili" ];
Lezioni[30] = [ "30", "15/10/06", "17:30", "18:30", "Integrali doppi: esempi" ];
Lezioni[31] = [ "31", "21/11/06", "09:30", "10:30", "Integrali tripli: introduzione e formula di riduzione sui parallelepipedi" ];
Lezioni[32] = [ "32", "21/11/06", "10:30", "11:30", "Integrali tripli: formula di riduzione per colonne e per sezioni" ];
Lezioni[33] = [ "33", "21/11/06", "11:30", "12:30", "Coordinate cilindriche e sferiche nello spazio" ];
Lezioni[34] = [ "34", "22/11/06", "16:30", "17:00", "Integrali tripli: cambi di variabile ed esempi" ];
Lezioni[35] = [ "35", "22/11/06", "17:00", "17:30", "Baricentri di figure piane e solide. Volume di un solido di rotazione" ];
Lezioni[36] = [ "36", "28/11/06", "09:30", "10:30", "Integrali impropri: definizione nel caso monoproblema" ];
Lezioni[37] = [ "37", "28/11/06", "10:30", "11:30", "Integrali impropri: criterio del confronto e del confronto asintotico" ];
Lezioni[38] = [ "38", "28/11/06", "11:30", "12:30", "Integrali impropri: casi limite di confronto asintotico ed assoluta integrabilità" ];
Lezioni[39] = [ "39", "22/11/06", "17:30", "18:00", "Integrali impropri: studio mediante l'integrazione per parti" ];
Lezioni[40] = [ "40", "22/11/06", "18:00", "18:30", "Integrali impropri in 2 o 3 variabili" ];
Lezioni[41] = [ "41", "05/12/06", "09:30", "10:30", "Equazioni differenziali: nomenclatura", "m", "m" ];
Lezioni[42] = [ "42", "05/12/06", "10:30", "11:30", "Equazioni differenziali: problema di Cauchy" ];
Lezioni[43] = [ "43", "05/12/06", "11:30", "12:30", "Equazioni differenziali del primo ordine a variabili separabili" ];
Lezioni[44] = [ "44", "06/12/06", "16:30", "17:30", "Equazioni differenziali: esempi di studio del problema di Cauchy" ];
Lezioni[45] = [ "45", "06/12/06", "17:30", "18:30", "Equazioni differenziali del primo ordine lineari" ];
Lezioni[46] = [ "46", "12/12/06", "09:30", "10:30", "Equazioni differenziali lineari a coefficienti costanti omogenee" ];
Lezioni[47] = [ "47", "12/12/06", "10:30", "11:30", "Equazioni differenziali lineari non omogenee: ricerca per tentativi di una soluzione" ];
Lezioni[48] = [ "48", "12/12/06", "11:30", "12:30", "Equazioni differenziali lineari non omogenee: ricerca per tentativi di una soluzione" ];
Lezioni[49] = [ "49", "13/12/06", "16:30", "17:30", "Equazioni differenziali lineari non omogenee: metodo di variazione delle costanti", "m", "m" ];
Lezioni[50] = [ "50", "13/12/06", "17:30", "18:30", "Esercizi misti", "m", "m" ];
