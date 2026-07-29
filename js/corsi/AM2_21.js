var NomeCorso = "Analisi Matematica 2 - 2020/2021";
var Percorso = MEDIA.lezioni + "AM2_21/AM2_21_L";
var CifreNumeroLezione = 2;
const MostraVideoLezioni = false;

var SchedaCorso = {
  nome: "Analisi Matematica 2",
  annoAccademico: "2020/2021",
  crediti: "6",
  ore: "60 (corso svolto in modalità telematica)",
  target: "Ingegneria Elettronica/Telecomunicazioni",
  anno: "Primo",
  periodo: "Marzo/Maggio",
  avviso: "La modalità di \"erogazione\" scelta dai partecipanti (diretta streaming su Teams, canale 591AA 20/21 di UniPI) non mi consente di effettuare in contemporanea la registrazione con i soliti strumenti e la solita qualità, a meno di non rischiare fastidiosi rallentamenti. In ogni caso il corso sarà una ripetizione sostanzialmente integrale del corso 2013/14, quindi nulla di nuovo.\n\nPer i corsi di servizio di Analisi 2 consiglio quindi di seguire il corso 2013/14 (per chi vuole una versione basic/soft) o il primo semestre del corso 2017/18 (per chi vuole una versione advanced/hard), integrando il tutto con le esercitazioni del corso 2019/20."
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "AM2_21_Burocrazia.pdf",
    titolo: "Informazioni generali"
  },
  {
    sezione: "burocrazia",
    file: "AM2_21_Esame_gen.pdf",
    titolo: "Regole d'esame (comuni ai due moduli)"
  },
  {
    sezione: "burocrazia",
    file: "AM2_21_Esame.pdf",
    titolo: "Regole d'esame (specifiche per questo modulo)"
  },
  {
    sezione: "burocrazia",
    file: "AM2_21_Programma.pdf",
    titolo: "Programma"
  },
  {
    sezione: "book",
    file: "AM2_21_Book.pdf",
    titolo: "Stampato integrale lezioni"
  }
];

var Lezioni = new Array();
Lezioni[1] = [ "1","04/03/2021","14:30", "15:30", "Introduzione al corso. Struttura euclidea in n dimensioni (prodotto scalare, norma, distanza, intorni). Funzioni di più variabili e loro grafico. Linee di livello."];
Lezioni[2] = [ "2","04/03/2021","15:30", "16:30", "Restrizioni di funzioni a curve. Definizioni di limite per funzioni di più variabili (nello spazio di partenza)."];
Lezioni[3] = [ "3","04/03/2021","16:30", "17:30", "Esercizi sul calcolo di limiti per funzioni di più variabili."];
Lezioni[4] = [ "4","05/03/2021","14:30", "15:30", "Calcolo differenziale per funzioni di due variabili: definizione di derivate parziali, derivate direzionali, gradiente, differenziale. Interpretazione geometrica delle derivate parziali e direzionali."];
Lezioni[5] = [ "5","05/03/2021","15:30", "16:30", "Relazioni tra differenziale, esistenza di derivate parziali/direzionali, continuità. Significato geometrico del gradiente e piano tangente ad un grafico."];
Lezioni[6] = [ "6","05/03/2021","16:30", "17:30", "Enunciato del teorema del differenziale totale. Esempi di calcolo di derivate parziali. Le linee di livello sono perpendicolari al gradiente."];
Lezioni[7] = [ "7","11/03/2021","14:30", "15:30", "Massimi e minimi per funzioni di più variabili. Insiemi compatti, teorema di Weierstrass, ricerca euristica dei candidati ad essere punti di massimo/minimo (punti stazionari interni, singolari interni e bordo)."];
Lezioni[8] = [ "8","11/03/2021","15:30", "16:30", "Metodi per lo studio di problemi di massimo/minimo: utilizzo di disuguaglianze elementari, metodo delle linee di livello, parametrizzazioni del bordo."];
Lezioni[9] = [ "9","11/03/2021","16:30", "17:30", "Metodo dei moltiplicatori di Lagrange (caso di un solo moltiplicatore). Interpretazione geometrica della condizione di parallelismo dei gradienti."];
Lezioni[10] = [ "10","12/03/2021","14:30", "15:30", "Esempi di problemi di massimo/minimo risolti con varie tecniche, dalle parametrizzazioni del bordo ai moltiplicatori di Lagrange. Utilizzo misto delle due tecniche."];
Lezioni[11] = [ "11","12/03/2021","15:30", "16:30", "Metodo dei moltiplicatori di Lagrange (caso di più moltiplicatori). Esempi di applicazione."];
Lezioni[12] = [ "12","12/03/2021","16:30", "17:30", "Ulteriori esempi di problemi di massimo/minimo su insiemi compatti. Massimi/minimi di funzioni con valori assoluti."];
Lezioni[13] = [ "13","18/03/2021","14:30", "15:30", "Limiti all'infinito per funzioni di più variabili. Importanza dell'ottenere stime uniformi in theta quando si utilizzano le coordinate polari."];
Lezioni[14] = [ "14","18/03/2021","15:30", "16:30", "Limiti all'infinito per funzioni di più variabili ristette ad opportuni insiemi."];
Lezioni[15] = [ "15","18/03/2021","16:30", "17:30", "Teorema di Weierstrass generalizzato. Problemi di massimo/minimo su insiemi non limitati."];
Lezioni[16] = [ "16","19/03/2021","14:30", "15:30", "Coordinate cilindriche e sferiche nello spazio. Utilizzo di tali coordinate per il calcolo di limiti."];
Lezioni[17] = [ "17","19/03/2021","15:30", "16:30", "Ulteriori esempi di calcolo di limiti e di problemi di massimo/minimo su insiemi non limitati."];
Lezioni[18] = [ "18","19/03/2021","16:30", "17:30", "Ulteriori esempi di problemi di massimo/minimo su insiemi non limitati. Teorema di esistenza degli zeri in più variabili."];
Lezioni[19] = [ "19","25/03/2021","14:30", "15:30", "Forme quadratiche, matrice associata, segnatura. Metodi per determinare la segnatura di una forma quadratica: segno degli autovalori, completamento dei quadrati."];
Lezioni[20] = [ "20","25/03/2021","15:30", "16:30", "Metodi per determinare la segnatura di una forma quadratica: Sylvester in varie forme. Una forma quadratica è definita positiva se e solo se è coerciva: dimostrazione sia via teorema di Weierstrass, sia via teorema spettrale."];
Lezioni[21] = [ "21","25/03/2021","16:30", "17:30", "Derivate successive, teorema di inversione dell'ordine di derivazione, matrice Hessiana, segnatura della matrice Hessiana vs comportamento di una funzione nell'intorno di un punto stazionario."];
Lezioni[22] = [ "22","26/03/2021","14:30", "15:30", "Polinomi di Taylor per funzioni di più variabili. Esempi di calcolo di polinomi di Taylor in più variabili a partire da quelli in una variabile."];
Lezioni[23] = [ "23","26/03/2021","15:30", "16:30", "Dimostrazione di alcuni legami tra la segnatura della matrice Hessiana ed il comportamento locale di una funzione. Matrice Jacobiana per funzioni vettoriali. Chain rule."];
Lezioni[24] = [ "24","26/03/2021","16:30", "17:30", "Esempi di studio locale di funzioni."];
Lezioni[25] = [ "25","08/04/2021","14:30", "15:30", "Introduzione agli integrali doppi: notazioni, interpretazione geometrica, idea della definizione via step functions, proprietà base (linearità, monotonia, additività rispetto alla zona di integrazione)."];
Lezioni[26] = [ "26","08/04/2021","15:30", "16:30", "Calcolo di integrali doppi: formule di riduzione sui rettangoli e su insiemi normali. Esempi di calcolo di integrali."];
Lezioni[27] = [ "27","08/04/2021","16:30", "17:30", "Calcolo di integrali doppi utilizzando le coordinate polari."];
Lezioni[28] = [ "28","09/04/2021","14:30", "15:30", "Introduzione agli integrali tripli: notazioni, idea della definizione, interpretazione fisica. Formule di riduzione sui parallelepipedi. Interpretazione dell'integrale della funzione costante 1 in una, due, tre variabili."];
Lezioni[29] = [ "29","09/04/2021","15:30", "16:30", "Calcolo di integrali tripli: formule di spezzamento per colonne e per sezioni."];
Lezioni[30] = [ "30","09/04/2021","16:30", "17:30", "Uso delle simmetrie per semplificare il calcolo di integrali multipli."];
Lezioni[31] = [ "31","15/04/2021","14:30", "15:30", "Calcolo di integrali tripli utilizzando coordinate cilindriche e sferiche."];
Lezioni[32] = [ "32","15/04/2021","15:30", "16:30", "Cambi di variabili in generale per integrali doppi e tripli. Calcolo del determinante Jacobiano."];
Lezioni[33] = [ "33","15/04/2021","16:30", "17:30", "Calcolo del determinante Jacobiano passando per la trasformazione inversa. Esempi di integrali multipli per funzioni con valori assoluti."];
Lezioni[34] = [ "34","16/04/2021","14:30", "15:30", "Calcolo di baricentri e momenti d'inerzia utilizzando integrali multipli."];
Lezioni[35] = [ "35","16/04/2021","15:30", "16:30", "Solidi di rotazione: equazione, formula per il calcolo del volume, teorema di Guldino per i volumi."];
Lezioni[36] = [ "36","16/04/2021","16:30", "17:30", "Esempi delicati di calcolo di integrali doppi e tripli."];
Lezioni[37] = [ "37","22/04/2021","14:30", "15:30", "Introduzione alle curve: sostegno, speed e velocity, versore e retta tangente, curve chiuse e semplici."];
Lezioni[38] = [ "38","22/04/2021","15:30", "16:30", "Esempi di disegno di curve. Lunghezza di una curva: definizione e formula per il calcolo nel caso regolare."];
Lezioni[39] = [ "39","22/04/2021","16:30", "17:30", "Integrali curvilinei: notazioni, interpretazione geometrica, idea della definizione, formula per il calcolo. Baricentro di una curva. Formula per il calcolo della lunghezza di una curva in coordinate polari."];
Lezioni[40] = [ "40","23/04/2021","14:30", "15:30", "Forme differenziali e campi di vettori. Integrale di una forma differenziale lungo una curva: notazione, definizione, significato fisico, formula per il calcolo."];
Lezioni[41] = [ "41","23/04/2021","15:30", "16:30", "Forme differenziali chiuse ed esatte. Rapporti tra chiusura ed esattezza. L'integrale di una forma differenziale esatta è la differenza tra i valori assunti da una primitiva agli estremi della curva. Caratterizzazione dell'esattezza."];
Lezioni[42] = [ "42","23/04/2021","16:30", "17:30", "Insiemi convessi, stellati, semplicemente connessi, connessi. Le forme chiuse su insiemi semplicemente connessi sono esatte. Tre strategie per il calcolo dell'integrale di una forma differenziale lungo una curva."];
Lezioni[43] = [ "43","29/04/2021","14:30", "15:30", "Esempio classico di forma differenziale chiusa ma non esatta. Utilizzo di esattezza e chiusura per il calcolo dell'integrale di forme differenziali lungo curve."];
Lezioni[44] = [ "44","29/04/2021","15:30", "16:30", "Esercizi finali su curve e forme differenrziali."];
Lezioni[45] = [ "45","29/04/2021","16:30", "17:30", "Gradiente, Laplaciano, divergenza, rotore. Formule classiche: divergenza del gradiente, rotore del gradiente, divergenza del rotore. Significato di gradiente/rotore/divergenza nulli/uguali."];
Lezioni[46] = [ "46","30/04/2021","14:30", "15:30", "Superfici nello spazio: presentazione cartesiana, implicita, parametrica. Esempi di parametrizzazione di superfici. Versore normale e piano tangente."];
Lezioni[47] = [ "47","30/04/2021","15:30", "16:30", "Area di una superficie: come non si definisce (lanterna di Schwarz), idea della definizione, formula per il calcolo, interpretazione geometrica. Caso delle superfici cartesiane."];
Lezioni[48] = [ "48","30/04/2021","16:30", "17:30", "Area di una superficie di rotazione. Teorema di Guldino per l'area delle superfici. Integrali superficiali. Baricentro di una superficie."];
Lezioni[49] = [ "49","06/05/2021","14:30", "15:30", "Integrali di flusso in due e tre variabili: interpretazione fisica e formule per il calcolo. Enunciato del teorema della divergenza in due e tre variabili. Integrali di flusso in due variabili vs integrali di forme differenziali."];
Lezioni[50] = [ "50","06/05/2021","15:30", "16:30", "Teorema di Gauss-Green (formula di integrazione per parti) in due e tre variabili. Equivalenza tra teorema di Gauss-Green e teorema della divergenza. Calcolo di integrali doppi su insiemi del piano descritti mediante il loro bordo."];
Lezioni[51] = [ "51","06/05/2021","16:30", "17:30", "Formule per l'area di un sottoinsieme del piano descritto mediante il suo bordo. Volume di un sottoinsieme dello spazio descritto mediante il suo bordo. Tecnica di sostituzione della superficie nel calcolo di un integrale di flusso."];
Lezioni[52] = [ "52","07/05/2021","14:30", "15:30", "Orientazione del bordo di una superficie. Teorema del rotore (teorema di Stokes)."];
Lezioni[53] = [ "53","07/05/2021","15:30", "16:30", "Inversione del rotore (determinare un campo di vettori noto il suo rotore). Esempi di calcolo del flusso di un rotore attraverso una superficie."];
Lezioni[54] = [ "54","07/05/2021","16:30", "17:30", "Quattro strategie per il calcolo di un integrale di flusso attraverso una superficie."];
Lezioni[55] = [ "55","13/05/2021","14:30", "15:30", "Integrali impropri in più variabili: definizioni e primi esempi."];
Lezioni[56] = [ "56","13/05/2021","15:30", "16:30", "Calcolo dell'integrale Gaussiano. Utilizzo delle coordinate polari per lo studio della convergenza di integrali impropri in due variabili."];
Lezioni[57] = [ "57","13/05/2021","16:30", "17:30", "Ulteriori esempi di studio della convergenza di integrali impropri in due variabili."];
Lezioni[58] = [ "58","14/05/2021","14:30", "15:30", "Studio della convergenza di integrali impropri in tre variabili (anche parametrici)."];
Lezioni[59] = [ "59","14/05/2021","15:30", "16:30", "Esempi finali di studio di integrali impropri."];
Lezioni[60] = [ "60","14/05/2021","16:30", "17:30", "Esempi di curve continue di lunghezza infinita. Dimostrazione del teorema della divergenza in un rettangolo."];
