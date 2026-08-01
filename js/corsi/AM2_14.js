var NomeCorso = "Analisi Matematica 2 - 2013/2014";
var ArchivioCorso = "AM2/AM2_14";
var PrefissoFile = "AM2_14_L";
var Percorso = MEDIA.lezioni + "AM2_14/AM2_14_L";
var CifreNumeroLezione = 2;

var SchedaCorso = {
  nome: "Analisi Matematica 2",
  annoAccademico: "2013/2014",
  crediti: "6",
  target: "Corsi di Laurea in Ingegneria Elettronica e in Ingegneria delle Telecomunicazioni",
  anno: "Primo anno",
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "ALAM2_14_Burocrazia.pdf",
    titolo: "Informazioni burocratiche",
  },
  {
    sezione: "book",
    file: "AM2_14_Book.pdf",
    titolo: "Stampato integrale lezioni"
  }
];

var Lezioni = new Array();
Lezioni[1] = [ "1","06/03/2014","14:30", "15:30", "Presentazione del corso. Struttura euclidea e palle nello spazio a n dimensioni, funzioni di n variabili e loro grafico, linee di livello."];
Lezioni[2] = [ "2","06/03/2014","15:30", "16:30", "Restrizione di funzioni di più variabili a rette o curve. Definizioni di limite in un punto per funzioni di più variabili. Funzioni continue. Primi esempi di limite."];
Lezioni[3] = [ "3","06/03/2014","16:30", "17:30", "Esempi di limiti in un punto per funzioni di più variabili: esistenza via stime+carabinieri o coordinate polari, non esistenza via restrizione a particolari curve."];
Lezioni[4] = [ "4","07/03/2014","08:30", "09:30", "Derivate parziali, derivate direzionali, gradiente e differenziale per funzioni di più variabili."];
Lezioni[5] = [ "5","07/03/2014","09:30", "10:30", "Relazioni tra differenziabilità, continuità, derivate parziali e direzionali. Formula per le derivate direzionali. Significato geometrico del gradiente come direzione di massima pendenza ascendente."];
Lezioni[6] = [ "6","08/03/2014","08:30", "09:30", "Calcolo di derivate parziali e direzionali, relazione geometrica tra gradiente e linee di livello."];
Lezioni[7] = [ "7","08/03/2014","09:30", "10:30", "Insiemi limitati, chiusi, compatti in più variabili. Teorema di Weiertrass. Ricerca dei candidati punti di massimo/minimo. Primi esempi elementari di problemi di max/min in più variabili."];
Lezioni[8] = [ "8","08/03/2014","10:30", "11:30", "Strategie per il calcolo di massimi e minimi su insiemi compatti. Esempi risolti mediante il metodo delle linee di livello e/o parametrizzazione del bordo."];
Lezioni[9] = [ "9","13/03/2014","14:30", "15:30", "Esempio di problema di max/min risolto mediante parametrizzazione del bordo. Descrizione del metodo dei moltiplicatori di Lagrange: caso di un solo moltiplicatore."];
Lezioni[10] = [ "10","13/03/2014","15:30", "16:30", "Esempi di problemi di max/min risolti mediante un moltiplicatore di Lagrange. Giustificazione geometrica del metodo dei moltiplicatori."];
Lezioni[11] = [ "11","13/03/2014","16:30", "17:30", "Metodo con 2 moltiplicatori di Lagrange nello spazio. Primo esempio di utilizzo misto di moltiplicatori e parametrizzazioni. Punti di taglio (bordi dei bordi)."];
Lezioni[12] = [ "12","14/03/2014","08:30", "09:30", "Definizioni di limite all'infinito per funzioni di più variabili. Teorema di Weiertrass generalizzato in più variabili. Primi esempi di limiti all'infinito in due variabili."];
Lezioni[13] = [ "13","14/03/2014","09:30", "10:30", "Esempi di limiti all'infinito per funzioni di due variabili."];
Lezioni[14] = [ "14","15/03/2014","09:30", "10:30", "Esempi di problemi di max/min per funzioni di due variabili con valori assoluti."];
Lezioni[15] = [ "15","15/03/2014","10:30", "11:30", "Esempi di problemi di max/min su insieme non compatti. Limiti all'infinito per funzioni definite solo su un sottoinsieme del piano."];
Lezioni[16] = [ "16","15/03/2014","11:30", "12:30", "Esercizi su max/min e limiti all'infinito per funzioni di due variabili."];
Lezioni[17] = [ "17","20/03/2014","14:30", "15:30", "Derivate successive per funzioni di più variabili. Teorema di inversione dell'ordine di derivazione. Matrice Hessiana. Studio locale in un punto stazionario e segnatura della matrice Hessiana."];
Lezioni[18] = [ "18","20/03/2014","15:30", "16:30", "Sviluppi di Taylor per funzioni di più variabili. Calcolo di sviluppi di Taylor utilizzando quelli delle funzioni elementari. Esempi di studio locale in un intorno dell'origine."];
Lezioni[19] = [ "19","20/03/2014","16:30", "17:30", "Convessità per funzioni di più variabili. Esempi di classificazione di punti stazionari."];
Lezioni[20] = [ "20","21/03/2014","08:30", "09:30", "Dimostrazione che i punti stazionari con Hessiana definita positiva sono punti di minimo locale. Funzioni vettoriali e matrice Jacobiana. Chain rule."];
Lezioni[21] = [ "21","21/03/2014","09:30", "10:30", "Idea della dimostrazione della formula di Taylor in più variabili. Esempi finali misti di studio locale/globale."];
Lezioni[22] = [ "22","27/03/2014","14:30", "15:30", "Integrali doppi: notazioni, significato geometrico, definizione di integrale inferiore e superiore con le somme di Riemann, proprietà elementari."];
Lezioni[23] = [ "23","27/03/2014","15:30", "16:30", "Integrali doppi: formule di riduzione su un rettangolo. Insiemi normali rispetto all'asse x o rispetto all'asse y e relative formule di riduzione."];
Lezioni[24] = [ "24","27/03/2014","16:30", "17:30", "Esempi di scrittura di insiemi come normali rispetto all'asse x e/o rispetto all'asse y. Utilizzo di simmetrie nel calcolo di integrali doppi."];
Lezioni[25] = [ "25","28/03/2014","08:30", "09:30", "Integrali tripli: notazioni, significato geometrico/fisico, definizione, formula di riduzione sui parallelepipedi. Osservazione generale sull'integrale della funzione 1."];
Lezioni[26] = [ "26","28/03/2014","09:30", "10:30", "Integrali tripli: formula di riduzione per colonne e per sezioni."];
Lezioni[27] = [ "27","29/03/2014","09:00", "10:00", "Uso delle coordinate polari per il calcolo di integrali doppi."];
Lezioni[28] = [ "28","29/03/2014","10:00", "11:00", "Formula generale per il cambio di variabili negli integrali multipli."];
Lezioni[29] = [ "29","29/03/2014","11:00", "12:00", "Coordinate cilindriche e coordinate sferiche nello spazio. Descrizione di insiemi dello spazio mediante coordinate sferiche."];
Lezioni[30] = [ "30","03/04/2014","14:30", "15:30", "Esempi di integrali doppi di funzioni con valori assoluti."];
Lezioni[31] = [ "31","03/04/2014","15:30", "16:30", "Uso delle coordinate polari in insiemi che non hanno simmetria radiale. Calcolo di volumi mediante integrali tripli."];
Lezioni[32] = [ "32","03/04/2014","16:30", "17:30", "Calcolo di baricentri e momenti di inerzia mediante integrali doppi e tripli."];
Lezioni[33] = [ "33","04/04/2014","08:30", "09:30", "Solidi di rotazione. Volume di un solido di rotazione: formula diretta e teorema di Guldino."];
Lezioni[34] = [ "34","04/04/2014","09:30", "10:30", "Calcolo di volumi e baricentri di solidi di rotazione (anche con rotazione incompleta). Intersezione di due cilindri con assi ortogonali."];
Lezioni[35] = [ "35","05/04/2014","08:30", "09:30", "Curve nel piano e nello spazio: chiusura, semplicità, sostegno, velocity vs speed, vettore e retta tangente."];
Lezioni[36] = [ "36","05/04/2014","09:30", "10:30", "Lunghezza di una curva: definizione mediante spezzate approssimanti e formula per il calcolo. Curve cartesiane e in coordinate polari e relative formule per la lunghezza."];
Lezioni[37] = [ "37","05/04/2014","10:30", "11:30", "Integrali curvilinei: notazioni, significato geometrico, idea della definizione, formula per il calcolo. Baricentro di una curva. Esempio di disegno di una curva."];
Lezioni[38] = [ "38","10/04/2014","14:30", "15:30", "Forme differenziali. Integrale di una forma differenziale lungo una curva e rapporti con l'integrale curvilineo. Interpretazione fisica in termini di lavoro di un campo di forze."];
Lezioni[39] = [ "39","10/04/2014","15:30", "16:30", "Forme differenziali chiuse ed esatte. Potenziale (primitiva) di una forma differenziale. Caratterizzazione delle forme esatte in termini di integrali lungo curve."];
Lezioni[40] = [ "40","10/04/2014","16:30", "17:30", "Insiemi convessi, stellati, connessi, semplicemente connessi. Una forma chiusa è esatta su un insieme semplicemente connesso. Esempi di calcolo di primitive."];
Lezioni[41] = [ "41","11/04/2014","08:30", "09:30", "Esempio di forma differenziale chiusa ma non esatta. L'integrale di una forma differenziale chiusa su due curve omotope coincide. Esempi di applicazione."];
Lezioni[42] = [ "42","11/04/2014","09:30", "10:30", "Esercizi di ricapitolazione sulle forme differenziali."];
Lezioni[43] = [ "43","12/04/2014","08:30", "09:30", "Superfici: descrizione cartesiana, implicita, parametrica. Piano tangente e vettore normale per superfici in forma implicita."];
Lezioni[44] = [ "44","12/04/2014","09:30", "10:30", "Piano tangente e vettore normale per superfici in forma parametrica e cartesiana. Area di una superficie: idea della definizione e formula generale per il calcolo."];
Lezioni[45] = [ "45","12/04/2014","10:30", "11:30", "Formula per l'area di una superficie in forma cartesiana. Area di una superficie di rotazione: formula diretta e teorema di Guldino."];
Lezioni[46] = [ "46","08/05/2014","14:30", "15:30", "Gradiente, divergenza, laplaciano, rotore: definizioni e rapporti tra queste nozioni. Significato di divergenza nulla e rotore nullo."];
Lezioni[47] = [ "47","08/05/2014","15:30", "16:30", "Integrali di flusso nel piano (attraverso curve). Interpretazione in termini di forme differenziali. Formula di Gauss-Green e teorema della divergenza nel piano. Area del dominio racchiuso da una curva."];
Lezioni[48] = [ "48","08/05/2014","16:30", "17:30", "Calcolo di aree, integrali doppi e flussi attraverso curve utilizzando il teorema della divergenza."];
Lezioni[49] = [ "49","09/05/2014","08:30", "09:30", "Integrali superficiali. Flusso di un vettore attraverso una superficie orientata.  Formula di Gauss-Green e teorema della divergenza nello spazio."];
Lezioni[50] = [ "50","09/05/2014","09:30", "10:30", "Calcolo di flussi attraverso superfici utilizzando il teorema della divergenza nello spazio."];
Lezioni[51] = [ "51","15/05/2014","14:30", "15:30", "Orientazione canonica del bordo di una superficie indotta da una orientazione della superficie stessa. Orientazioni e parametrizzazioni."];
Lezioni[52] = [ "52","15/05/2014","15:30", "16:30", "Formula di Stokes. Interpretazione della circuitazione in termini di forme differenziali. Esempio di applicazione."];
Lezioni[53] = [ "53","15/05/2014","16:30", "17:30", "Quattro possibili strategie per il calcolo del flusso di un campo di vettori attraverso una superficie."];
Lezioni[54] = [ "54","16/05/2014","08:30", "09:30", "Integrali impropri in più variabili: idea della definizione ed esempi classici."];
Lezioni[55] = [ "55","16/05/2014","09:30", "10:30", "Esempi di integrali impropri in dimensione 2 studiati mediante stime e coordinate polari."];
Lezioni[56] = [ "56","22/05/2014","14:30", "15:30", "Esercizi sugli integrali impropri in più variabili: tecnica di pareggiamento degli esponenti."];
Lezioni[57] = [ "57","22/05/2014","15:30", "16:30", "Esercizi sugli integrali impropri in più variabili: integrali con parametri."];
Lezioni[58] = [ "58","22/05/2014","16:30", "17:30", "Ulteriori esempi di integrali impropri in più variabili."];
Lezioni[59] = [ "59","29/05/2014","08:30", "09:30", "Esercizi misti su disegno di curve e integrali su insiemi delimitati da curve."];
Lezioni[60] = [ "60","29/05/2014","09:30", "10:30", "Esercizi misti su studio locale e globale di funzioni di due variabili."];
