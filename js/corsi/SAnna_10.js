var NomeCorso = "Complementi di Matematica I - SSSUP 2009/2010";
var ArchivioCorso = "SAnna/SA_10";
var PrefissoFile = "SA10_";
var Percorso = MEDIA.lezioni + "SA10/SA10_";
var CifreNumeroLezione = 2;
var SchedaCorso = {
  nome: "Complementi di Matematica I",
  annoAccademico: "2009/2010",
  crediti: "3",
  target: "Allievi del primo anno della Scuola Superiore Sant’Anna",
  anno: "Primo anno",
};
var DocumentiCorso = [
  {
    sezione: "book",
    file: "SA10_Book.pdf",
    titolo: "Stampato integrale delle lezioni"
  }
];
var Lezioni = new Array();

Lezioni[1] = [ "1", "26/01/10", "17:00", "18:00", "Richiami di topologia sulla retta reale. Liminf e limsup per successioni" ];
Lezioni[2] = [ "2", "26/01/10", "18:00", "19:00", "Teoremi su liminf e limsup di successioni: limsup = maxlim, liminf = minlim, criteri della radice, del rapporto, del rapporto -> radice" ];
Lezioni[3] = [ "3", "02/02/10", "17:00", "18:00", "Liminf e limsup di funzioni. Esistenza di successioni che li realizzano. Teorema di De L'Hopital in versione liminf e limsup" ];
Lezioni[4] = [ "4", "02/02/10", "18:00", "19:00", "Compattezza (per successioni). Teorema di Bolzano-Weierstrass e di Weierstrass. Funzioni semicontinue e relativo teorema di Weierstrass. Successioni di Cauchy e loro convergenza" ];
Lezioni[5] = [ "5", "03/02/10", "16:00", "17:00", "Uniforme continuità, moduli di continuità, funzioni Holderiane e Lipschitziane. Rapporto tra Lipschitzianità e derivata prima. Esempi" ];
Lezioni[6] = [ "6", "03/02/10", "17:00", "18:00", "Esempi di risultati che coinvolgono l'uniforme continuità" ];
Lezioni[7] = [ "7", "10/02/10", "17:00", "18:00", "Successioni per ricorrenza: prime definizioni e formule esplicite per dipendenze lineari dal termine precedente" ];
Lezioni[8] = [ "8", "10/02/10", "18:00", "19:00", "Successioni per ricorrenza lineari con dipendenza da più termini precedenti" ];
Lezioni[9] = [ "9", "17/02/10", "17:00", "18:00", "Successioni per ricorrenza: studio basato sulla monotonia" ];
Lezioni[10] = [ "10", "17/02/10", "18:00", "19:00", "Successioni per ricorrenza: studio della distanza dal presunto limite e della velocità di convergenza" ];
Lezioni[11] = [ "11", "01/03/10", "17:00", "18:00", "Successioni per ricorrenza spiraleggianti: studio mediante le due sottosuccessioni o con la distanza" ];
Lezioni[12] = [ "12", "01/03/10", "18:00", "19:00", "Ulteriori esempi di studio di successioni per ricorrenza autonome. Stima euristica dell'andamento asintotico nei casi limite. Enunciato del teorema dell'Hopital per successioni." ];
Lezioni[13] = [ "13", "11/03/10", "16:30", "17:30", "Teoremi di tipo De L'Hopital per successioni. Primi esempi di successioni per ricorrenza non autonome" ];
Lezioni[14] = [ "14", "11/03/10", "17:30", "18:30", "Ulteriori esempi di studio di successioni per ricorrenza non autonome. Esempi in cui il comportamento varia per determinati valori \"soglia\"." ];
Lezioni[15] = [ "15", "15/03/10", "18:00", "19:00", "Studio di successioni per ricorrenza non autonome con valori \"soglia\"" ];
Lezioni[16] = [ "16", "15/03/10", "19:00", "20:00", "Introduzione alle equazioni differenziali. Enunciato dei teoremi di esistenza ed unicità. Esempi di non unicità" ];
Lezioni[17] = [ "17", "22/03/10", "18:00", "19:00", "Idea della dimostrazione del teorema di esistenza per equazioni differenziali mediante approssimanti a \"tempo discreto\"" ];
Lezioni[18] = [ "18", "22/03/10", "19:00", "20:00", "Idea (incompleta) della dimostrazione del teorema di Ascoli-Arzelà e suo utilizzo per passare al limite sotto il segno di integrale" ];
Lezioni[19] = [ "19", "15/04/10", "17:00", "18:00", "Studio qualitativo di equazioni differenziali: primi esempi autonomi" ];
Lezioni[20] = [ "20", "15/04/10", "18:00", "19:00", "Studio qualitativo di equazioni differenziali autonome: teorema dell'asintoto e suo utilizzo" ];
Lezioni[21] = [ "21", "22/04/10", "17:00", "18:00", "Studio qualitativo di equazioni differenziali: primi esempi non autonomi" ];
Lezioni[22] = [ "22", "22/04/10", "18:00", "19:00", "Studio qualitativo di equazioni differenziali: utilizzo di soprasoluzioni e sottosoluzioni" ];
Lezioni[23] = [ "23", "28/04/10", "18:00", "19:00", "Studio qualitativo di equazioni differenziali: esempi di valori \"soglia\"" ];
Lezioni[24] = [ "24", "28/04/10", "19:00", "20:00", "Studio qualitativo di equazioni differenziali: ulteriori esempi di valori \"soglia\"" ];
Lezioni[25] = [ "25", "29/04/10", "17:00", "18:00", "Utilizzo dell'integrazione per parti per lo studio della convergenza di integrali impropri. Sua versione discreta con applicazioni alle serie. Calcolo dell'integrale improprio di (sin x)/x" ];
Lezioni[26] = [ "26", "29/04/10", "18:00", "19:00", "Esercizi misti su equazioni differenziali ed integrali (impropri). Teoremi di passaggio al limite e derivazione sotto il segno di integrale (enunciati e controesempi)" ];
