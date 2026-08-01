var NomeCorso = "Complementi di Matematica I - SSSUP 2010/2011";
var ArchivioCorso = "SAnna/SA11";
var PrefissoFile = "SA11_";
var Percorso = MEDIA.lezioni + "SA11/SA11_";
var CifreNumeroLezione = 2;
var SchedaCorso = {
  nome: "Complementi di Matematica I",
  annoAccademico: "2010/2011",
  crediti: "3",
  ore: "25 (ufficialmente, ?? realisticamente)",
  target: "Studenti primo anno SSSUP",
  anno: "Primo",
  periodo: "Gennaio/Maggio",
  avviso: ""
};
var DocumentiCorso = [
  {
    sezione: "book",
    file: "SA11_Book.pdf",
    titolo: "Stampato integrale lezioni"
  }
];
var Lezioni = new Array();

Lezioni[1] = [ "1", "13/01/11", "18:00", "19:00", "Successioni per ricorrenza lineari con dipendenza dal termine precedente, omogenee e non omogenee" ];
Lezioni[2] = [ "2", "13/01/11", "19:00", "20:00", "Successioni per ricorrenza lineari con dipendenza da più termini precedenti, omogenee e non omogenee" ];
Lezioni[3] = [ "3", "17/01/11", "08:30", "09:30", "Successioni per ricorrenza autonome: studio mediante la monotonia" ];
Lezioni[4] = [ "4", "17/01/11", "09:30", "10:30", "Successioni per ricorrenza autonome: studio mediante la distanza dal presunto limite" ];
Lezioni[5] = [ "5", "03/02/11", "16:00", "17:00", "Successioni per ricorrenza spiraleggianti: studio mediante la distanza dal presunto limite e mediante le due sottosuccessioni" ];
Lezioni[6] = [ "6", "03/02/11", "17:00", "18:00", "Ulteriori esempi di studio di successioni per ricorrenza autonome" ];
Lezioni[7] = [ "7", "07/03/11", "08:30", "09:30", "Richiami di topologia sulla retta reale. Liminf e limsup di successioni. Maxlim e minlim" ];
Lezioni[8] = [ "8", "07/03/11", "09:30", "10:30", "Liminf e limsup di funzioni. Dimostrazione di alcuni risultati classici sui limiti (criteri del rapporto, radice, rapporto -> radice, Teorema di De L'Hopital) nella versione con liminf e limsup." ];
Lezioni[9] = [ "9", "14/03/11", "11:00", "12:00", "Studio della velocità di convergenza di successioni per ricorrenza. Utilizzo del \"teorema di De L'Hopital\" per successioni" ];
Lezioni[10] = [ "10", "14/03/11", "12:00", "13:00", "Successioni per ricorrenza non autonome. Primo esempio di \"valore soglia\"" ];
Lezioni[11] = [ "11", "06/04/11", "18:00", "19:00", "Teoremi stile De L'Hopital per successioni. Secondo esempio di studio di una successione per ricorrenza non autonoma con un \"valore soglia\"" ];
Lezioni[12] = [ "12", "06/04/11", "19:00", "20:00", "Esercizi misti su successioni per ricorrenza, liminf e limsup" ];
Lezioni[13] = [ "13", "08/04/11", "18:00", "19:00", "Uniforme continuità, moduli di continuità, Lipschitzianità, Hölderianità" ];
Lezioni[14] = [ "14", "08/04/11", "19:00", "20:00", "Proprietà di Darboux delle derivate. Esercizi su funzioni Lipschitziane e Holderiane. Integrabilità delle funzioni continue. Enunciato del teorema di estensione per funzioni uniformemente continue." ];
Lezioni[15] = [ "15", "15/04/11", "17:45", "18:45", "Introduzione alle equazioni differenziali. Teoremi di esistenza ed unicità. Esempi di non esistenza." ];
Lezioni[16] = [ "16", "15/04/11", "18:45", "19:45", "Primi esempi di studio qualitativo di equazioni differenziali. Teorema dell'asintoto e suo utilizzo." ];
Lezioni[17] = [ "17", "18/04/11", "11:00", "12:00", "Teoremi di confronto per equazioni differenziali. Soprasoluzioni e sottosoluzioni. Esistenza globale, blow up, break down." ];
Lezioni[18] = [ "18", "18/04/11", "12:00", "13:00", "Esempi di studio qualitativo di equazioni differenziali. Teoremi di esistenza globale." ];
Lezioni[19] = [ "19", "02/05/11", "14:00", "15:00", "Studio qualitativo di equazioni differenziali: casi non autonomi" ];
Lezioni[20] = [ "20", "02/05/11", "15:00", "16:00", "Studio qualitativo di equazioni differenziali non autonome: esempio con \"valori soglia\"", "m" ];
Lezioni[21] = [ "21", "10/05/11", "17:00", "18:00", "Studio qualitativo di equazioni differenziali del second'ordine: energie conservate, spazio delle fasi" ];
Lezioni[22] = [ "22", "10/05/11", "18:00", "19:00", "Studio qualitativo di equazioni differenziali del second'ordine: soluzioni periodiche, calcolo del periodo" ];
Lezioni[23] = [ "23", "31/05/11", "18:00", "19:00", "Sistemi di equazioni differenziali lineari a coefficienti costanti: legami tra lo spazio delle soluzioni ed autovalori ed autovetori della matrice associata" ];
Lezioni[24] = [ "24", "31/05/11", "19:00", "20:00", "Studio della stabilità dell'origine per sistemi 2*2 di equazioni differenziali lineari a coefficienti costanti" ];
Lezioni[25] = [ "25", "08/06/11", "17:00", "18:00", "Stabilità ed instabilità per sistemi di equazioni differenziali. Metodi energetici. Primi esempi non lineari" ];
Lezioni[26] = [ "26", "08/06/11", "18:00", "19:00", "Stabilità ed instabilità per sistemi di equazioni differenziali non lineari: teorema di linearizzazione. Esempi" ];
