var NomeCorso = "Complementi di Analisi Matematica - 2023/2024";
var ArchivioCorso = "AM2/AM2_24";
var PrefissoFile = "AM2_24_L";
var Percorso = MEDIA.lezioni + "AM2_24/AM2_24_L";
var CifreNumeroLezione = 2;

var SchedaCorso = {
  nome: "Complementi di Analisi Matematica",
  annoAccademico: "2023/2024",
  crediti: "6",
  target: "Corso di Laurea in Fisica",
  anno: "Secondo anno",
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "AM2_24_Burocrazia.pdf",
    titolo: "Informazioni generali"
  },
  {
    sezione: "burocrazia",
    file: "AM2_24_Esame.pdf",
    titolo: "Regole d’esame"
  },
  {
    sezione: "burocrazia",
    file: "AM2_24_Programma.pdf",
    titolo: "Programma"
  },
  {
    sezione: "book",
    file: "AM2_24_Book.pdf",
    titolo: "Stampato integrale lezioni"
  }
];

var Lezioni = new Array();
Lezioni[1] = [ "1","22/09/2023","08:30", "09:30", "Introduzione al corso. Struttura euclidea in n dimensioni (prodotto scalare, norma, distanza, intorni). Funzioni di più variabili e loro grafico. Linee di livello. Restrizioni di funzioni a curve.", "m"];
Lezioni[2] = [ "2","22/09/2023","09:30", "10:30", "Definizioni di limite in un punto per funzioni di più variabili. Primi esempi di calcolo di limiti per funzioni di più variabili.", "m"];
Lezioni[3] = [ "3","25/09/2023","10:30", "11:30", "Esercizi sul calcolo di limiti al finito per funzioni di più variabili."];
Lezioni[4] = [ "4","25/09/2023","11:30", "12:30", "Calcolo differenziale per funzioni di più variabili: definizione di derivate parziali, derivate direzionali, gradiente, differenziale. Relazioni tra differenziale, esistenza di derivate parziali/direzionali, continuità: enunciati e controesempi. Interpretazione geometrica delle derivate direzionali e del gradiente."];
Lezioni[5] = [ "5","25/09/2023","12:30", "13:30", "Esempi di calcolo di derivate parziali e direzionali. Dimostrazione della formula che lega il gradiente alle derivate direzionali. Teorema del differenziale totale: enunciato e dimostrazione nel caso non risparmioso. Teorema di Lagrange direzionale."];
Lezioni[6] = [ "6","29/09/2023","08:30", "09:30", "Insiemi limitati, chiusi, compatti. Massimi e minimi per funzioni di più variabili: teorema di Weierstrass. Ricerca euristica dei candidati ad essere punti di massimo/minimo (punti stazionari interni, singolari interni e bordo). Primi esempi di problemi di massimo/minimo: utilizzo di disuguaglianze elementari, metodo delle linee di livello."];
Lezioni[7] = [ "7","29/09/2023","09:30", "10:30", "Esempio di problema di massimo/minimo con parametrizzazione del bordo. Insiemi descritti come luogo di zeri. Metodo dei moltiplicatori di Lagrange (caso di un solo moltiplicatore): enunciato e primo esempio di applicazione."];
Lezioni[8] = [ "8","02/10/2023","10:30", "11:30", "Moltiplicatori di Lagrange: interpretazione geometrica nel piano della condizione di parallelismo dei gradienti. Esempi di luoghi di zeri con punti singolari. Teorema delle funzioni implicite in due variabili: enunciato e dimostrazione dell'esistenza. Esempio di utilizzo misto di parametrizzazioni e moltiplicatori. Bordi dei bordi (punti di taglio)."];
Lezioni[9] = [ "9","02/10/2023","11:30", "12:30", "Matrice Jacobiana e chain rule per funzioni di più variabili. Calcolo della derivata della funzione costruita dal teorema della funzione implicita nel piano (supponendo che esista). Dimostrazione del metodo dei moltiplicatori di Lagrange nel piano. Norma del gradiente in coordinate polari."];
Lezioni[10] = [ "10","02/10/2023","12:30", "13:30", "Esercizi sui massimi/minimi per funzioni di due variabili su insiemi compatti. Massimo/minimo di funzioni con valori assoluti."];
Lezioni[11] = [ "11","06/10/2023","12:30", "13:30", "Metodo dei moltiplicatori di Lagrange (caso di più moltiplicatori): enunciato ed esempi di applicazione."];
Lezioni[12] = [ "12","06/10/2023","10:30", "11:30", "Limiti all'infinito per funzioni di più variabili: definizioni e primi esempi. Importanza dell'ottenere stime uniformi in theta quando si utilizzano le coordinate polari."];
Lezioni[13] = [ "13","09/10/2023","10:30", "11:30", "Generalizzazioni del teorema di Weierstrass ad insiemi non compatti. Primi esempi di problemi di massimo/minimo su insiemi non limitati."];
Lezioni[14] = [ "14","09/10/2023","11:30", "12:30", "Ulteriori esempi di limiti all'infinito per funzioni di due variabili. Tecnica di pareggiamento degli esponenti e di distinzione di varie zone. Ulteriori esempi di problemi di massimo/minimo su insiemi non compatti."];
Lezioni[15] = [ "15","09/10/2023","12:30", "13:30", "Ripasso sulle forme quadratiche: rappresentazione mediante matrici simmetriche, forme (semi)definite positive/negative, segnatura e metodi per calcolarla. Un forma quadratica definita positiva è coerciva: dimostrazione mediante il teorema di Weierstrass e mediante il teorema spettrale. Accenno alla caratterizzazione variazionale di autovalori/autovettori."];
Lezioni[16] = [ "16","16/10/2023","10:30", "11:30", "Derivate successive per funzioni di più variabili. Enunciato del teorema di inversione dell'ordine di derivazione e conseguenze sul numero di derivate parziali di ordine fissato. Matrice Hessiana. Enunciato dei legami tra la segnatura dell'Hessiana ed il comportamento locale di una funzione vicino ad un punto stazionario. Primi esempi di classificazione di punti stazionari."];
Lezioni[17] = [ "17","16/10/2023","11:30", "12:30", "Formula di Taylor in più variabili: linguaggio dei multi-indici, resto di Peano e di Lagrange. Scrittura per esteso in due variabili. Primi esempi di calcolo."];
Lezioni[18] = [ "18","16/10/2023","12:30", "13:30", "Dimostrazione di alcuni legami tra la segnatura della matrice Hessiana ed il comportamento locale di una funzione (utilizzando i polinomi di Taylor di ordine 2). Idea della dimostrazione della formula di Taylor in dimensione 2. Ulteriori esempi legati ai polinomi di Taylor e alla classificazione di punti stazionari."];
Lezioni[19] = [ "19","20/10/2023","08:30", "09:30", "Esercizi misti su studio locale e globale di funzioni."];
Lezioni[20] = [ "20","20/10/2023","09:30", "10:30", "Ulteriori esercizi misti su studio locale e globale di funzioni."];
Lezioni[21] = [ "21","23/10/2023","10:30", "11:30", "Introduzione agli integrali doppi: notazioni, interpretazione geometrica, idea della definizione (alla Darboux, via integrale inferiore e superiore), proprietà base (linearità, monotonia, additività rispetto alla zona di integrazione)."];
Lezioni[22] = [ "22","23/10/2023","11:30", "12:30", "Calcolo di integrali doppi: formule di riduzione sui rettangoli e su insiemi normali. Esempi di calcolo di integrali doppi con queste tecniche."];
Lezioni[23] = [ "23","23/10/2023","12:30", "13:30", "Calcolo di integrali doppi utilizzando le coordinate polari."];
Lezioni[24] = [ "24","27/10/2023","08:30", "09:30", "Introduzione agli integrali tripli: notazioni, idea della definizione, interpretazione fisica. Tecniche di calcolo: formule di riduzione sui parallelepipedi, integrazione per colonne (insiemi normali rispetto ad un piano) e per sezioni. Primi esempi."];
Lezioni[25] = [ "25","27/10/2023","09:30", "10:30", "Esempi di integrali tripli calcolati con varie tecniche. Utilizzo di simmetrie per semplificare il calcolo di integrali doppi e tripli."];
Lezioni[26] = [ "26","30/10/2023","10:30", "11:30", "Formula generale per il cambio di variabili negli integrali multipli. Giustificazione intuitiva del metodo. Esempi classici: traslazioni, dilatazioni lungo gli assi. Esempi di applicazione."];
Lezioni[27] = [ "27","30/10/2023","11:30", "12:30", "Coordinate cilindriche e sferiche nello spazio, con relativi determinanti Jacobiani. Esempi di integrali tripli calcolati utilizzando i metodi visti finora."];
Lezioni[28] = [ "28","30/10/2023","12:30", "13:30", "Calcolo di aree, volumi, baricentri, momenti di inerzia di figure piane e solide mediante integrali doppi e tripli. Solidi di rotazione: equazione in coordinate cartesiane e cilindriche, rotazioni complete e non complete, formula per il volume. Teorema di Guldino per i volumi."];
Lezioni[29] = [ "29","03/11/2023","08:30", "09:30", "Esercizi finali sugli integrali multipli: integrande con il valore assoluto, descrizione di insiemi strani in coordinate polari, calcolo del determinante Jacobiano attraverso la trasformazione inversa, calcolo del volume dell'intersezione tra due cilindri con assi perpendicolari."];
Lezioni[30] = [ "30","03/11/2023","09:30", "10:30", "Integrali dipendenti da parametro: definizione, continuità (passaggio al limite sotto il segno di integrale), derivabilità (derivata sotto il segno di integrale). Controesempio il cui l'integrale del limite è diverso dal limite dell'integrale. Derivata di un integrale in dimensione uno con integranda ed estremi dipendenti da parametro."];
Lezioni[31] = [ "31","06/11/2023","10:30", "11:30", "Introduzione alle curve: sostegno, speed e velocity, vettore e retta tangente, curve chiuse e semplici. Esempi di curve diverse con lo stesso sostegno. Quattro possibili strategie per dimostrare la semplicità di una curva."];
Lezioni[32] = [ "32","06/11/2023","11:30", "12:30", "Esempio di disegno del sostegno di una curva mediante lo studio delle componenti. Definizione di lunghezza di una curva. Curve rettificabili. Esempi di curve di lunghezza infinita. Formula per il calcolo della lunghezza nel caso regolare. Caso speciale di curve cartesiane e curve descritte in coordinate polari. Accenno all'invarianza della lunghezza per riparametrizzazione regolare."];
Lezioni[33] = [ "33","06/11/2023","12:30", "13:30", "Stime dall'alto e dal basso per la norma di un integrale vettoriale. Dimostrazione della formula per la lunghezza di una curva nel caso regolare (come integrale della speed)."];
Lezioni[34] = [ "34","11/11/2023","16:30", "17:30", "Integrali curvilinei: notazioni, interpretazione geometrica, idea della definizione, formula per il calcolo. Baricentro di una curva. Esempio di disegno del sostegno di una curva. Significato dell'integrazione non orientata. Invarianza rispetto a riparametrizzazioni regolari monotone."];
Lezioni[35] = [ "35","11/11/2023","17:30", "18:30", "Forme differenziali e campi di vettori. Integrale di una forma differenziale lungo una curva: notazione, definizione, significato fisico, formula per il calcolo. Relazione tra integrali di forme e di funzioni. Significato dell'integrazione orientata."];
Lezioni[36] = [ "36","13/11/2023","10:30", "11:30", "Forme differenziali chiuse ed esatte. Primitiva e potenziale. Chiusura implica esattezza. L'integrale di una forma differenziale esatta è la differenza tra i valori assunti da una primitiva agli estremi della curva. Caratterizzazione dell'esattezza in termini di integrali lungo curve."];
Lezioni[37] = [ "37","13/11/2023","11:30", "12:30", "Insiemi convessi, stellati, semplicemente connessi, connessi per archi, connessi. Definizione di omotopia tra curve. Dimostrazione che le forme chiuse su insiemi stellati sono esatte. L'integrale di una forma chiusa su due curve omotope con gli stessi estremi coincide (enunciato). Le forme chiuse su insiemi semplicemente connessi sono esatte."];
Lezioni[38] = [ "38","13/11/2023","12:30", "13:30", "Esempio classico di forma differenziale chiusa ma non esatta. Esattezza della stessa forma su insiemi particolari. Tre strategie per il calcolo dell'integrale di una forma differenziale lungo una curva. esempi ed esercizi."];
Lezioni[39] = [ "39","17/11/2023","08:30", "09:30", "Superfici nello spazio: presentazione cartesiana, implicita, parametrica. Equazione del piano tangente e vettore normale nelle varie presentazioni. Area di una superficie: controesempio della lanterna di Schwarz e idea della definizione."];
Lezioni[40] = [ "40","17/11/2023","09:30", "10:30", "Area di una superficie: formula per il calcolo nel caso regolare. Area di superfici cartesiane. Superfici di rotazione e formula per la loro area. Teorema di Guldino per l'area delle superfici di rotazione. Integrali superficiali: notazioni e formula per il calcolo. Baricentro di una superficie."];
Lezioni[41] = [ "41","20/11/2023","10:30", "11:30", "Gradiente, Laplaciano, divergenza, rotore. Formule classiche: divergenza del gradiente, rotore del gradiente, divergenza del rotore. Significato di gradiente/rotore/divergenza nulli/uguali. Divergenza del prodotto di una funzione per un campo di vettori."];
Lezioni[42] = [ "42","20/11/2023","11:30", "12:30", "Integrali di flusso in due e tre variabili: interpretazione fisica e formule per il calcolo. Integrali di flusso in due variabili vs integrali di forme differenziali. Versori normali canonici a curve e superfici. Esempio di calcolo del flusso di un vettore attraverso una superficie. Enunciato del teorema della divergenza in due e tre variabili."];
Lezioni[43] = [ "43","20/11/2023","12:30", "13:30", "Formule per l'area di un dominio il cui bordo è costituito da una o più curve assegnate. Calcolo di integrali su domini descritti mediante il loro bordo. Esercizi basati su applicazioni del teorema della divergenza."];
Lezioni[44] = [ "44","24/11/2023","08:30", "09:30", "Enunciato del teorema di Gauss-Green e integrazione per parti in più variabili. Dimostrazione dell'equivalenza tra formula di integrazione per parti e teorema della divergenza. Dimostrazione del teorema della divergenza in insiemi normali del piano."];
Lezioni[45] = [ "45","24/11/2023","09:30", "10:30", "Esercizi basati su applicazioni del teorema della divergenza."];
Lezioni[46] = [ "46","27/11/2023","10:30", "11:30", "Orientazione del bordo di una superficie: definizione intuitiva ed esempi. Enunciato della formula di Stokes (teorema del rotore). Road map della dimostrazione. Il flusso di un rotore attraverso una superficie senza bordo è nullo."];
Lezioni[47] = [ "47","27/11/2023","11:30", "12:30", "Problema dell'inversione del rotore (trovare un campo con un rotore assegnato): giustificazione della procedura ed esempio di applicazione. Esempio di campo vettoriale con divergenza nulla che non è un rotore."];
Lezioni[48] = [ "48","27/11/2023","12:30", "13:30", "Quattro strategie per il calcolo di un integrale di flusso attraverso una superficie."];
Lezioni[49] = [ "49","01/12/2023","08:30", "09:30", "Integrali impropri in più variabili: definizioni, casi modello, primi esempi."];
Lezioni[50] = [ "50","01/12/2023","09:30", "10:30", "Calcolo dell'integrale Gaussiano. Utilizzo delle coordinate polari per lo studio della convergenza di integrali impropri in due variabili."];
Lezioni[51] = [ "51","04/12/2023","10:30", "11:30", "Esempi di studio della convergenza di integrali impropri in dimensione due: pareggiamento degli esponenti, divisione in zone, utilizzo di stime, restrizione a opportuni sottoinsiemi."];
Lezioni[52] = [ "52","04/12/2023","11:30", "12:30", "Esempi di studio di integrali impropri in dimensione 3, anche con parametri. Ulteriori esempi in dimensione due."];
Lezioni[53] = [ "53","04/12/2023","12:30", "13:30", "Esempi finali sullo studio della convergenza di integrali impropri."];
Lezioni[54] = [ "54","11/12/2023","10:30", "11:30", "Discussione di esercizi presi da test d'esame."];
Lezioni[55] = [ "55","11/12/2023","11:30", "12:30", "Discussione di esercizi misti (calcolo del flusso di un rotore attraverso una superficie, studio di un limite con un parametro)."];
Lezioni[56] = [ "56","11/12/2023","12:30", "13:30", "Discussione di esercizi misti (studio di integrali impropri con parametri, utilizzo del teorema di esistenza degli zeri in più variabili)."];
