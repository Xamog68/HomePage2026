var NomeCorso = "Complementi di Analisi Matematica - 2022/2023";
var ArchivioCorso = "AM2/AM2_23";
var PrefissoFile = "AM2_23_L";
var Percorso = MEDIA.lezioni + "AM2_23/AM2_23_L";
var CifreNumeroLezione = 2;

var SchedaCorso = {
  nome: "Complementi di Analisi Matematica",
  annoAccademico: "2022/2023",
  crediti: "6",
  target: "Corso di Laurea in Fisica",
  anno: "Secondo anno",
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "AM2_23_Burocrazia.pdf",
    titolo: "Informazioni generali"
  },
  {
    sezione: "burocrazia",
    file: "AM2_23_Esame.pdf",
    titolo: "Regole d’esame"
  },
  {
    sezione: "burocrazia",
    file: "AM2_23_Programma.pdf",
    titolo: "Programma"
  },
  {
    sezione: "book",
    file: "AM2_23_Book.pdf",
    titolo: "Stampato integrale lezioni"
  }
];

var Lezioni = new Array();
Lezioni[1] = [ "1","19/09/2022","10:30", "11:30", "Introduzione al corso. Struttura euclidea in n dimensioni (prodotto scalare, norma, distanza, intorni). Funzioni di più variabili e loro grafico. Linee di livello. Restrizioni di funzioni a curve."];
Lezioni[2] = [ "2","19/09/2022","11:30", "12:30", "Definizioni di limite in un punto per funzioni di più variabili. Primi esempi di calcolo di limiti per funzioni di più variabili."];
Lezioni[3] = [ "3","20/09/2022","12:30", "13:30", "Esercizi sul calcolo di limiti al finito per funzioni di più variabili."];
Lezioni[4] = [ "4","23/09/2022","16:30", "17:30", "Calcolo differenziale per funzioni di più variabili: definizione di derivate parziali, derivate direzionali, gradiente, differenziale. Relazioni tra differenziale, esistenza di derivate parziali/direzionali, continuità: enunciati e controesempi. Interpretazione geometrica delle derivate direzionali e del gradiente."];
Lezioni[5] = [ "5","23/09/2022","17:30", "18:30", "Esempi di calcolo di derivate parziali e direzionali. Dimostrazione della formula che lega il gradiente alle derivate direzionali. Teorema del differenziale totale: enunciato e dimostrazione nel caso non risparmioso. Teorema di Lagrange direzionale."];
Lezioni[6] = [ "6","27/09/2022","12:30", "13:30", "Insiemi limitati, chiusi, compatti. Massimi e minimi per funzioni di più variabili: teorema di Weierstrass. Ricerca euristica dei candidati ad essere punti di massimo/minimo (punti stazionari interni, singolari interni e bordo). Primi esempi di problemi di massimo/minimo: utilizzo di disuguaglianze elementari, metodo delle linee di livello, parametrizzazioni del bordo."];
Lezioni[7] = [ "7","30/09/2022","16:30", "17:30", "Insiemi descritti come luogo di zeri. Metodo dei moltiplicatori di Lagrange (caso di un solo moltiplicatore): enunciato ed interpretazione geometrica della condizione di parallelismo dei gradienti. Primo esempio di applicazione."];
Lezioni[8] = [ "8","30/09/2022","17:30", "18:30", "Esempi di problemi di massimo/minimo su insiemi compatti. Utilizzo misto di parametrizzazioni e moltiplicatori. Bordi dei bordi (punti di taglio). Massimi/minimi di funzioni con valori assoluti. "];
Lezioni[9] = [ "9","03/10/2022","10:30", "11:30", "Matrice Jacobiana e chain rule per funzioni di più variabili. Esempi di applicazione della chain rule. Norma del gradiente in coordinate polari. Derivate parziali successive. Enunciato del teorema di inversione dell'ordine di derivazione."];
Lezioni[10] = [ "10","03/10/2022","11:30", "12:30", "Teorema delle funzioni implicite: enunciato, dimostrazione dell'esistenza, e calcolo della derivata (supponendo che esista) nel piano. Dimostrazione del metodo dei moltiplicatori di Lagrange nel piano."];
Lezioni[11] = [ "11","04/10/2022","12:30", "13:30", "Metodo dei moltiplicatori di Lagrange (caso di più moltiplicatori): enunciato ed esempi di applicazione."];
Lezioni[12] = [ "12","10/10/2022","10:30", "11:30", "Limiti all'infinito per funzioni di più variabili: definizioni e primi esempi. Importanza dell'ottenere stime uniformi in theta quando si utilizzano le coordinate polari. Teorema di Weierstrass generalizzato."];
Lezioni[13] = [ "13","10/10/2022","11:30", "12:30", "Varianti del teorema di esistenza degli zeri in più variabili. Primi esempi di problemi di massimo/minimo su insiemi non limitati."];
Lezioni[14] = [ "14","11/10/2022","12:30", "13:30", "Esempi di limiti all'infinito per funzioni di due variabili. Utilizzo delle coordinate polari e di opportune stime. Tecnica di pareggiamento degli esponenti."];
Lezioni[15] = [ "15","14/10/2022","16:30", "17:30", "Ripasso sulle forme quadratiche: rappresentazione mediante matrici simmetriche, forme (semi)definite positive/negative, segnatura e metodi per calcolarla. Un forma quadratica definita positiva è coerciva: dimostrazione mediante il teorema di Weierstrass e mediante il teorema spettrale. Accenno alla caratterizzazione variazionale di autovalori/autovettori."];
Lezioni[16] = [ "16","14/10/2022","17:30", "18:30", "Matrice Hessiana. Legami tra la segnatura dell'Hessiana ed il comportamento locale di una funzione vicino ad un punto stazionario. Esercizi sul calcolo e la classificazione di punti stazionari."];
Lezioni[17] = [ "17","17/10/2022","10:30", "11:30", "Formula di Taylor in più variabili: linguaggio dei multi-indici, resto di Peano e di Lagrange. Scrittura per esteso in due variabili. Primi esempi di calcolo."];
Lezioni[18] = [ "18","17/10/2022","11:30", "12:30", "Dimostrazione di alcuni legami tra la segnatura della matrice Hessiana ed il comportamento locale di una funzione (utilizzando i polinomi di Taylor di ordine 2). Idea della dimostrazione della formula di Taylor in dimensione 2. Ulteriori esempi legati ai polinomi di Taylor."];
Lezioni[19] = [ "19","18/10/2022","12:30", "13:30", "Esercizi misti su studio locale e globale di funzioni e forme quadratiche."];
Lezioni[20] = [ "20","21/10/2022","16:30", "17:30", "Introduzione agli integrali doppi: notazioni, interpretazione geometrica, idea della definizione (alla Darboux, via integrale inferiore e superiore), proprietà base (linearità, monotonia, additività rispetto alla zona di integrazione)."];
Lezioni[21] = [ "21","21/10/2022","17:30", "18:30", "Calcolo di integrali doppi: formule di riduzione sui rettangoli e su insiemi normali. Analogia con il double counting in combinatoria. Esempi di calcolo di integrali doppi con queste tecniche."];
Lezioni[22] = [ "22","24/10/2022","10:30", "11:30", "Calcolo di integrali doppi utilizzando le coordinate polari."];
Lezioni[23] = [ "23","24/10/2022","11:30", "12:30", "Formula generale per il cambio di variabili negli integrali doppi. Esempi classici: affinità, isometrie, traslazioni. Primi esempi di utilizzo di simmetrie per semplificare il calcolo di integrali."];
Lezioni[24] = [ "24","25/10/2022","12:30", "13:30", "Introduzione agli integrali tripli: notazioni, idea della definizione, interpretazione fisica. Tecniche di calcolo: formule di riduzione sui parallelepipedi, integrazione per colonne (insiemi normali rispetto ad un piano) e per sezioni."];
Lezioni[25] = [ "25","28/10/2022","16:30", "17:30", "Esempi di integrali tripli calcolati con varie tecniche. Volume del segmento sferico."];
Lezioni[26] = [ "26","28/10/2022","17:30", "18:30", "Coordinate cilindriche e sferiche nello spazio, con relativi determinanti Jacobiani. Ulteriori esempi di integrali tripli."];
Lezioni[27] = [ "27","31/10/2022","10:30", "11:30", "Calcolo di aree, volumi, baricentri, momenti di inerzia di figure piane e solide mediante integrali doppi e tripli. Distanza media di un punto di un quadrato da un vertice."];
Lezioni[28] = [ "28","31/10/2022","11:30", "12:30", "Solidi di rotazione: equazione in coordinate cartesiane e cilindriche, rotazioni complete e non complete, formula per il volume. Teorema di Guldino per i volumi."];
Lezioni[29] = [ "29","04/11/2022","16:30", "17:30", "Integrali dipendenti da parametro: definizione, continuità (passaggio al limite sotto il segno di integrale), derivabilità (derivata sotto il segno di integrale). Derivata di un integrale in dimensione uno con integranda ed estremi dipendenti da parametro."];
Lezioni[30] = [ "30","04/11/2022","17:30", "18:30", "Controesempio il cui l'integrale del limite è diverso dal limite dell'integrale. Esercizi classici sugli integrali multipli: integrande con valore assoluto, cambi di variabile, volume dell'intersezione di due cilindri con asse perpendicolare."];
Lezioni[31] = [ "31","07/11/2022","10:30", "11:30", "Introduzione alle curve: sostegno, speed e velocity, vettore e retta tangente, curve chiuse e semplici. Esempi di curve diverse con lo stesso sostegno. Quattro possibili strategie per dimostrare la semplicità di una curva."];
Lezioni[32] = [ "32","07/11/2022","11:30", "12:30", "Definizione di lunghezza di una curva. Curve rettificabili. Esempi di curve di lunghezza infinita. Formula per il calcolo della lunghezza nel caso regolare. Caso speciale di curve cartesiane e curve descritte in coordinate polari. La lunghezza è invariante per riparametrizzazione regolare."];
Lezioni[33] = [ "33","08/11/2022","12:30", "13:30", "Stime dall'alto e dal basso per la norma di un integrale vettoriale. Dimostrazione della formula per la lunghezza di una curva nel caso regolare (come integrale della speed)."];
Lezioni[34] = [ "34","11/11/2022","16:30", "17:30", "Integrali curvilinei: notazioni, interpretazione geometrica, idea della definizione, formula per il calcolo. Baricentro di una curva. Esempio di disegno del sostegno di una curva."];
Lezioni[35] = [ "35","11/11/2022","17:30", "18:30", "Forme differenziali e campi di vettori. Integrale di una forma differenziale lungo una curva: notazione, definizione, significato fisico, formula per il calcolo. Discussione di come variano l'integrale di una funzione e di una forma differenziale quando si riparametrizza una curva."];
Lezioni[36] = [ "36","14/11/2022","10:30", "11:30", "Forme differenziali chiuse ed esatte. Primitiva e potenziale. Chiusura implica esattezza. L'integrale di una forma differenziale esatta è la differenza tra i valori assunti da una primitiva agli estremi della curva. Caratterizzazione dell'esattezza in termini di integrali lungo curve."];
Lezioni[37] = [ "37","14/11/2022","11:30", "12:30", "Insiemi convessi, stellati, semplicemente connessi, connessi per archi, connessi. Definizione di omotopia tra curve. Dimostrazione che le forme chiuse su insiemi stellati sono esatte. L'integrale di una forma chiusa su due curve omotope con gli stessi estremi coincide (enunciato). Le forme chiuse su insiemi semplicemente connessi sono esatte."];
Lezioni[38] = [ "38","15/11/2022","12:30", "13:30", "Esempio classico di forma differenziale chiusa ma non esatta. Esattezza della stessa forma su insiemi particolari. Tre strategie per il calcolo dell'integrale di una forma differenziale lungo una curva."];
Lezioni[39] = [ "39","18/11/2022","16:30", "17:30", "Superfici nello spazio: presentazione cartesiana, implicita, parametrica. Equazione del piano tangente nelle varie presentazioni. Area di una superficie: controesempio della lanterna di Schwarz, idea della definizione, formula per il calcolo nel caso regolare."];
Lezioni[40] = [ "40","18/11/2022","17:30", "18:30", "Area di superfici cartesiane. Superfici di rotazione e formula per la loro area. Teorema di Guldino per l'area delle superfici di rotazione. Integrali superficiali: notazioni e formula per il calcolo."];
Lezioni[41] = [ "41","21/11/2022","10:30", "11:30", "Gradiente, Laplaciano, divergenza, rotore. Formule classiche: divergenza del gradiente, rotore del gradiente, divergenza del rotore. Significato di gradiente/rotore/divergenza nulli/uguali."];
Lezioni[42] = [ "42","21/11/2022","11:30", "12:30", "Integrali di flusso in due e tre variabili: interpretazione fisica e formule per il calcolo. Integrali di flusso in due variabili vs integrali di forme differenziali. Enunciato del teorema della divergenza in due e tre variabili. Enunciato del teorema di Gauss-Green e integrazione per parti in più variabili."];
Lezioni[43] = [ "43","22/11/2022","12:30", "13:30", "Dimostrazione dell'equivalenza tra formula di integrazione per parti e teorema della divergenza. Dimostrazione del teorema della divergenza in insiemi normali del piano."];
Lezioni[44] = [ "44","25/11/2022","16:30", "17:30", "Formule per l'area di un dominio il cui bordo è costituito da una o più curve assegnate. Calcolo di integrali su domini descritti mediante il loro bordo."];
Lezioni[45] = [ "45","25/11/2022","17:30", "18:30", "Esercizi basati su applicazioni del teorema della divergenza."];
Lezioni[46] = [ "46","28/11/2022","10:30", "11:30", "Orientazione del bordo di una superficie: definizione intuitiva ed esempi. Enunciato della formula di Stokes (teorema del rotore)."];
Lezioni[47] = [ "47","28/11/2022","11:30", "12:30", "Il flusso di un rotore attraverso una superficie senza bordo è nullo. Problema dell'inversione del rotore (trovare un campo con un rotore assegnato). Esempio di campo vettoriale con divergenza nulla che non è un rotore."];
Lezioni[48] = [ "48","29/11/2022","12:30", "13:30", "Quattro strategie per il calcolo di un integrale di flusso attraverso una superficie."];
Lezioni[49] = [ "49","02/12/2022","16:30", "17:30", "Esercizi riassuntivi su superfici, flussi, applicazioni del teorema della divergenza e del rotore, parametrizzazioni di bordi."];
Lezioni[50] = [ "50","02/12/2022","17:30", "18:30", "Ulteriori esercizi di parametrizzazione di bordi di solidi e superfici. Approssimazione regolare di un campo radiale singolare nell'origine."];
Lezioni[51] = [ "51","05/12/2022","10:30", "11:30", "Integrali impropri in più variabili: definizioni e primi esempi."];
Lezioni[52] = [ "52","05/12/2022","11:30", "12:30", "Calcolo dell'integrale Gaussiano. Utilizzo delle coordinate polari per lo studio della convergenza di integrali impropri in due variabili."];
Lezioni[53] = [ "53","06/12/2022","12:30", "13:30", "Esempi di studio della convergenza di integrali impropri in dimensione due: pareggiamento degli esponenti, utilizzo di stime, restrizione a opportune zone."];
Lezioni[54] = [ "54","09/12/2022","16:30", "17:30", "Esempi di studio di integrali impropri in dimensione 3, anche con parametri."];
Lezioni[55] = [ "55","09/12/2022","17:30", "18:30", "Esempi finali sullo studio della convergenza di integrali impropri."];
Lezioni[56] = [ "56","12/12/2022","10:30", "11:30", "Discussione di esercizi presi da test d'esame."];
Lezioni[57] = [ "57","12/12/2022","11:30", "12:30", "Discussione di esercizi misti presi da scritti d'esame."];
Lezioni[58] = [ "58","13/12/2022","12:30", "13:30", "Discussione di esercizi misti su max/min, flussi, domini racchiusi da curve."];
