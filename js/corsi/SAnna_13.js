var NomeCorso = "Complementi di Matematica I - SSSUP 2012/2013";
var Percorso = MEDIA.lezioni + "SA13/SA13_";
var CifreNumeroLezione = 2;
var SchedaCorso = {
  nome: "Complementi di Matematica I",
  annoAccademico: "2012/2013",
  crediti: "3",
  ore: "30 (ufficialmente, 30 realisticamente)",
  target: "Studenti primo anno SSSUP",
  anno: "Primo",
  periodo: "Gennaio/Maggio",
  avviso: ""
};
var DocumentiCorso = [
  {
    sezione: "book",
    file: "SA13_Book.pdf",
    titolo: "Stampato integrale lezioni"
  }
];
var Lezioni = new Array();

Lezioni[1] = [ "1", "28/01/13", "17:30", "18:30", "Liminf e limsup di successioni." ];
Lezioni[2] = [ "2", "28/01/13", "18:30", "19:30", "Liminf/limsup come minlim/maxlim. Criteri della radice, rapporto e rapporto->radice enunciati con liminf e limsup." ];
Lezioni[3] = [ "3", "29/01/13", "17:00", "18:00", "Richiami di topologia: definizione di parte interna, chiusura, frontiera, punti isolati, punti di accumulazione. Liminf e limsup di funzioni: definizioni." ];
Lezioni[4] = [ "4", "29/01/13", "18:00", "19:00", "Liminf e limsup di funzioni: interpretazione in termini di successioni. Teorema di De L'Hopital enunciato con liminf e limsup." ];
Lezioni[5] = [ "5", "05/02/13", "17:00", "18:00", "Equivalenza tra continuità e continuità per successioni. Compattezza. Teorema di Weiestrass e di Bolzano-Weierstrass." ];
Lezioni[6] = [ "6", "05/02/13", "18:00", "19:00", "Funzioni semicontinue. Teorema di Weierstrass per funzioni semicontinue. Varianti del teorema di Weierstrass." ];
Lezioni[7] = [ "7", "07/02/13", "17:00", "18:00", "Uniforme continuità e moduli di continuità. Teorema di Heine-Cantor. Applicazione alla integrabilità delle funzioni continue e approssimazione di un integrale mediante somme di Riemann." ];
Lezioni[8] = [ "8", "07/02/13", "18:00", "19:00", "Funzioni Lipschitziane ed Holderiane. Legami tra Lipschitzianità e derivata prima. Legami tra Lipschitzianità, Hölderianità, uniforme continuità, continuità." ];
Lezioni[9] = [ "9", "12/02/13", "17:00", "18:00", "Successioni di Cauchy. Completezza della retta reale. Criterio dell'assoluta convergenza per serie dimostrato usando l'ordinamento o la completezza. Dimostrazione di Bolzano-Weierstrass via completezza." ];
Lezioni[10] = [ "10", "12/02/13", "18:00", "19:00", "Teorema di estensione di una funzione uniformemente continua alla chiusura. Teoremi in stile \"De L'Hopital\" per successioni." ];
Lezioni[11] = [ "11", "19/02/13", "17:00", "18:00", "Successioni per ricorrenza lineari -- Prima parte" ];
Lezioni[12] = [ "12", "19/02/13", "18:00", "19:00", "Successioni per ricorrenza lineari -- Seconda parte" ];
Lezioni[13] = [ "13", "11/03/13", "17:00", "18:00", "Successioni per ricorenza autonome monotone" ];
Lezioni[14] = [ "14", "11/03/13", "18:00", "19:00", "Successioni per ricorrenza autonome spiraleggianti" ];
Lezioni[15] = [ "15", "18/03/13", "18:00", "19:00", "Successioni per ricorrenza autonome: esempi di teoremi generali e studio della velocità di convergenza" ];
Lezioni[16] = [ "16", "18/03/13", "19:00", "20:00", "Esempi di studio di successioni per ricorrenza non autonome" ];
Lezioni[17] = [ "17", "25/03/13", "17:00", "18:00", "Successioni per ricorrenza non autonome con \"valori soglia\"" ];
Lezioni[18] = [ "18", "25/03/13", "18:00", "19:00", "Successioni per ricorrenza autonome che non hanno limite. Studio dell'equazione logistica al variare del parametro." ];
Lezioni[19] = [ "19", "08/04/13", "17:30", "18:30", "Funzioni convesse. Monotonia del rapporto incrementale. Derivata destra e sinistra e loro monotonia." ];
Lezioni[20] = [ "20", "08/04/13", "18:30", "19:30", "Relazioni tra convessità, derivata prima e derivata seconda. Massimi e minimi di funzioni convesse. Disuguaglianza di Jensen e applicazioni." ];
Lezioni[21] = [ "21", "22/04/13", "18:00", "19:00", "Introduzione alle equazioni differenziali. Enunciato dei teoremi di esistenza, esistenza ed unicità, alternativa. Esempio di non unicità (pennello di Peano). Esempi di blow-up e break-down." ];
Lezioni[22] = [ "22", "22/04/13", "19:00", "20:00", "Teorema dell'asintoto. Primi esempi di studio qualitativo per equazioni differenziali autonome.", "m" ];
Lezioni[23] = [ "23", "23/04/13", "17:00", "18:00", "Teoremi di confronto, soprasoluzioni e sottosoluzioni per equazioni differenziali. Confronti standard con secondo membro di tipo potenza. Teorema di esistenza globale con secondo membro sublineare." ];
Lezioni[24] = [ "24", "23/04/13", "18:00", "19:00", "Ulteriori esempi di studio qualitativo per equazioni differenziali autonome: esistenza globale vs blow-up" ];
Lezioni[25] = [ "25", "29/04/13", "17:30", "18:30", "Primi esempi di studio qualitativo per equazioni differenziali non autonome" ];
Lezioni[26] = [ "26", "29/04/13", "18:30", "19:30", "Valori soglia per equazioni differenziali non autonome" ];
Lezioni[27] = [ "27", "06/05/13", "17:30", "18:30", "Sistemi di equazioni differenziali lineari omogenee. Riduzione di (sistemi di) equazioni di ordine qualunque a sistemi di ordine 1. Risoluzione nel caso di matrice diagonalizzabile. Esponenziale di una matrice." ];
Lezioni[28] = [ "28", "06/05/13", "18:30", "19:30", "Rappresentazione delle traiettorie di un sistema nello spazio delle fasi. Problema della stabilità dell'origine. Studio della stabilità dell'origine per sistemi 2*2." ];
Lezioni[29] = [ "29", "13/05/13", "17:00", "18:00", "Metodi energetici per lo studio della stabilità di sistemi lineari e nonlineari. Teorema di linearizzazione." ];
Lezioni[30] = [ "30", "13/05/13", "18:00", "19:00", "Modelli preda-predatore. Metodi energetici per equazioni di ordine 2. Calcolo del periodo delle soluzioni mediante integrali impropri." ];
