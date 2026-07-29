var NomeCorso = "Analisi Matematica 2 - 2019/2020";
var Percorso = MEDIA.lezioni + "AM2_20/AM2_20_L";
var CifreNumeroLezione = 2;

var SchedaCorso = {
  nome: "Analisi Matematica 2",
  annoAccademico: "2019/2020",
  crediti: "6",
  target: "Corsi di Laurea in Ingegneria Elettronica e in Ingegneria delle Telecomunicazioni",
  anno: "Primo anno",
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "AM2_20_Burocrazia.pdf",
    titolo: "Informazioni generali"
  },
  {
    sezione: "burocrazia",
    file: "AM2_20_Esame.pdf",
    titolo: "Regole d’esame (in presenza)"
  },
  {
    sezione: "burocrazia",
    file: "AM2_20_EsamiTelematici.pdf",
    titolo: "Regole d’esame (per via telematica)"
  },
  {
    sezione: "burocrazia",
    file: "AM2_20_Programma.pdf",
    titolo: "Programma"
  },
  {
    sezione: "book",
    file: "AM2_20_Book.pdf",
    titolo: "Stampato integrale lezioni"
  }
];

var Lezioni = new Array();
Lezioni[1] = [ "1","05/03/2020","14:30", "15:30", "Esercizi su insiemi del piano descritti mediante disequazioni."];
Lezioni[2] = [ "2","05/03/2020","15:30", "16:30", "Esercizi su insiemi del piano descritti mediante disequazioni."];
Lezioni[3] = [ "3","05/03/2020","16:30", "17:30", "Visualizzazione di grafici di funzioni di due variabili: linee di livello e restrizioni a curve."];
Lezioni[4] = [ "4","06/03/2020","14:30", "15:30", "Primi esempi sul calcolo di limiti nell'origine per funzioni di due variabili."];
Lezioni[5] = [ "5","06/03/2020","15:30", "16:30", "Ulteriori esempi sul calcolo di limiti nell'origine per funzioni di due variabili."];
Lezioni[6] = [ "6","06/03/2020","16:30", "17:30", "Esercizi su derivate parziali, derivate direzionali, gradiente e differenziale per funzioni di più variabili. Relazione geometrica tra gradiente e linee di livello."];
Lezioni[7] = [ "7","12/03/2020","14:30", "15:30", "Primi esempi di problemi di max/min in più variabili risolti mediante disuguaglianze elementari e/o guardando le linee di livello."];
Lezioni[8] = [ "8","12/03/2020","15:30", "16:30", "Esempi di problemi di min/max risolti mediante parametrizzazione del bordo."];
Lezioni[9] = [ "9","12/03/2020","16:30", "17:30", "Descrizione del metodo dei moltiplicatori di Lagrange: caso di un solo moltiplicatore. Esempi di problemi di min/max risolti mediante questo metodo."];
Lezioni[10] = [ "10","13/03/2020","14:30", "15:30", "Ulteriori esempi di problemi di min/max risolti mediante un moltiplicatore di Lagrange. Esempio di utilizzo misto di moltiplicatori e parametrizzazioni. Punti di taglio (bordi dei bordi)."];
Lezioni[11] = [ "11","13/03/2020","15:30", "16:30", "Esempi di studio di problemi di min/max con valori assoluti."];
Lezioni[12] = [ "12","13/03/2020","16:30", "17:30", "Problemi di min/max in sottoinsiemi compatti dello spazio. Risoluzione mediante un moltiplicatore di Lagrange e studio a parte dei punti di taglio."];
Lezioni[13] = [ "13","19/03/2020","14:30", "15:30", "Problemi di min/max risolti con due moltiplicatori di Lagrange."];
Lezioni[14] = [ "14","19/03/2020","15:30", "16:30", "Primi esempi di limiti all'infinito per funzioni di due variabili."];
Lezioni[15] = [ "15","19/03/2020","16:30", "17:30", "Ulteriori esempi di limiti all'infinito per funzioni di due variabili."];
Lezioni[16] = [ "16","20/03/2020","14:30", "15:30", "Primo esempi di problemi di min/max su sottoinsiemi non limitati del piano."];
Lezioni[17] = [ "17","20/03/2020","15:30", "16:30", "Ulteriori esempi di problemi di min/max su sottoinsiemi non limitati del piano."];
Lezioni[18] = [ "18","20/03/2020","16:30", "17:30", "Esempi di problemi di min/max su sottoinsiemi non limitati del piano e dello spazio."];
Lezioni[19] = [ "19","26/03/2020","14:30", "15:30", "Polinomi di Taylor per funzioni di più variabili."];
Lezioni[20] = [ "20","26/03/2020","15:30", "16:30", "Studio locale per funzioni di più variabili."];
Lezioni[21] = [ "21","26/03/2020","16:30", "17:30", "Matrice Hessiana e classificazione di punti stazionari per funzioni di più variabili."];
Lezioni[22] = [ "22","27/03/2020","14:30", "15:30", "Esempi di studio di funzioni di più variabili."];
Lezioni[23] = [ "23","27/03/2020","15:30", "16:30", "Esempi finali relativi al calcolo differenziale per funzioni di più variabili."];
Lezioni[24] = [ "24","27/03/2020","16:30", "17:30", "Primi esempi di integrali doppi su rettangoli. Utilizzo di simmetrie nel calcolo di integrali doppi."];
Lezioni[25] = [ "25","02/04/2020","14:30", "15:30", "Ulteriori esempi di integrali doppi su rettangoli e di utilizzo delle simmetrie."];
Lezioni[26] = [ "26","02/04/2020","15:30", "16:30", "Esempi di scrittura di sottoinsiemi del piano come insiemi come normali rispetto all'asse x e/o rispetto all'asse y."];
Lezioni[27] = [ "27","02/04/2020","16:30", "17:30", "Calcolo di integrali doppi su insiemi normali. Utilizzo delle simmetrie in questo contesto."];
Lezioni[28] = [ "28","03/04/2020","14:30", "15:30", "Calcolo di integrali doppi con valori assoluti: spezzamento del dominio, scrittura come somma o differenza."];
Lezioni[29] = [ "29","03/04/2020","15:30", "16:30", "Utilizzo delle coordinate polari per il calcolo di integrali doppi."];
Lezioni[30] = [ "30","03/04/2020","16:30", "17:30", "Utilizzo di cambi di variabili per il calcolo di integrali doppi. Calcolo del determinate jacobiano."];
Lezioni[31] = [ "31","16/04/2020","14:30", "15:30", "Primi esempi di calcolo di integrali tripli: formula di riduzione sui rettangoli, per colonne e per sezioni."];
Lezioni[32] = [ "32","16/04/2020","15:30", "16:30", "Ulteriori esempi di calcolo di integrali tripli per sezioni e per colonne."];
Lezioni[33] = [ "33","16/04/2020","16:30", "17:30", "Utilizzo delle coordinate sferiche e delle simmetrie nel calcolo di integrali tripli."];
Lezioni[34] = [ "34","17/04/2020","14:30", "15:30", "Integrali tripli calcolati mediante cambi di variabile."];
Lezioni[35] = [ "35","17/04/2020","15:30", "16:30", "Esercizi di ricapitolazione sugli integrali tripli."];
Lezioni[36] = [ "36","17/04/2020","16:30", "17:30", "Utilizzo non standard delle coordinate polari nel calcolo di integrali doppi. Integrali tripli su tetraedri."];
Lezioni[37] = [ "37","23/04/2020","14:30", "15:30", "Esercizi delicati sul calcolo di integrali tripli."];
Lezioni[38] = [ "38","23/04/2020","15:30", "16:30", "Calcolo di volumi, baricentri e momenti d'inerzia mediante integrali doppi e tripli."];
Lezioni[39] = [ "39","23/04/2020","16:30", "17:30", "Curve nel piano: chiusura, semplicità, retta tangente in un punto, disegno del supporto."];
Lezioni[40] = [ "40","24/04/2020","14:30", "15:30", "Esercizi sulle curve nel piano: semplicità e disegno del supporto."];
Lezioni[41] = [ "41","24/04/2020","15:30", "16:30", "Forme differenziali: esattezza, chiusura, primitiva."];
Lezioni[42] = [ "42","24/04/2020","16:30", "17:30", "Quattro strategie per il calcolo dell'integrale di una forma differenziale lungo una curva."];
Lezioni[43] = [ "43","30/04/2020","14:30", "15:30", "Esercizi sull'integrale di forme differenziali lungo curve. Esempio di forma differenziale chiusa ma non esatta."];
Lezioni[44] = [ "44","30/04/2020","15:30", "16:30", "Lunghezza di una curva, integrale curvilineo, baricentro di una curva. Lunghezza di una curva data come grafico, in coordinate polari e coordinate sferiche."];
Lezioni[45] = [ "45","30/04/2020","16:30", "17:30", "Area di una superficie e integrali superficiali."];
Lezioni[46] = [ "46","07/05/2020","14:30", "15:30", "Solidi di rotazione: volume ed area della superficie."];
Lezioni[47] = [ "47","07/05/2020","15:30", "16:30", "Esercizi sui solidi di rotazione, con calcolo di baricentri. Rotazioni incomplete."];
Lezioni[48] = [ "48","07/05/2020","16:30", "17:30", "Gradiente, divergenza, rotore, Laplaciano. Esempio di inversione del rotore."];
Lezioni[49] = [ "49","08/05/2020","14:30", "15:30", "Calcolo dell'area di domini due dimensionali descritti mediante il loro bordo."];
Lezioni[50] = [ "50","08/05/2020","15:30", "16:30", "Calcolo del flusso di un vettore uscente da un insieme, in due e tre dimensioni."];
Lezioni[51] = [ "51","08/05/2020","16:30", "17:30", "Utilizzo del teorema della divergenza per calcolare l'integrale di funzioni su insiemi del piano descritti mediante il loro bordo."];
Lezioni[52] = [ "52","14/05/2020","14:30", "15:30", "Utilizzo del teorema della divergenza per calcolare l'integrale di funzioni su insiemi dello spazio descritti mediante il loro bordo.."];
Lezioni[53] = [ "53","14/05/2020","15:30", "16:30", "Quattro strategie per il calcolo del flusso di un vettore attraverso una superficie."];
Lezioni[54] = [ "54","14/05/2020","16:30", "17:30", "Esercizi sul calcolo del flusso di un vettore attraverso una superficie."];
Lezioni[55] = [ "55","15/05/2020","14:30", "15:30", "Ulteriori esercizi sul calcolo del flusso di un vettore attraverso una superficie."];
Lezioni[56] = [ "56","15/05/2020","15:30", "16:30", "Primi esempi di studio di integrali impropri in due dimensioni."];
Lezioni[57] = [ "57","15/05/2020","16:30", "17:30", "Integrale Gaussiano. Ulteriori esempi di studio della convergenza di integrali impropri su sottoinsiemi del piano."];
Lezioni[58] = [ "58","21/05/2020","14:30", "15:30", "Utilizzo di cambi di variabile per lo studio di integrali impropri."];
Lezioni[59] = [ "59","21/05/2020","15:30", "16:30", "Integrali impropri con parametri, nel piano e nello spazio."];
Lezioni[60] = [ "60","21/05/2020","16:30", "17:30", "Esempi finali di studio della convergenza di integrali impropri."];
