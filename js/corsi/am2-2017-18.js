var NomeCorso = "Analisi Matematica 2 - 2017/2018";
var Percorso = MEDIA.lezioni + "AM2_18/AM2_18_L";
var CifreNumeroLezione = 3;

var SchedaCorso = {
  nome: "Analisi Matematica 2",
  annoAccademico: "2017/2018",
  crediti: "12",
  ore: "120 (ufficialmente, di più realisticamente)",
  target: "Matematica",
  anno: "Secondo",
  periodo: "fine Settembre / fine Maggio",
  avviso: "Achtung! Questo corso è pensato per gli studenti del Corso di Laurea in Matematica. Certamente è adatto anche per studenti di altri corsi di studi, purché sufficientemente motivati e privi di problemi sui preliminari (cioè precorso, Analisi 1 e Algebra Lineare). Ad esempio è sicuramente adatto per chi ha seguito con successo il corrispondente corso di Analisi Matematica 1 (anno 2016/2017, oppure 2014/2015), o per chi ha già seguito con noia i corsi di Analisi 2 per ingegneria. Per tutti gli altri, il consiglio è di partire con una delle versioni edulcorate, ad esempio il corso di Analisi 2 del 2013/2014."
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "AM2_18_Burocrazia.pdf",
    titolo: "Informazioni generali"
  },
  {
    sezione: "burocrazia",
    file: "AM2_18_Esame.pdf",
    titolo: "Regole d'esame"
  },
  {
    sezione: "burocrazia",
    file: "AM2_18_Programma.pdf",
    titolo: "Programma dettagliato"
  },
  {
    sezione: "book",
    file: "AM2_18_Book1.pdf",
    titolo: "Stampato integrale lezioni",
    nota: "Volume 1 — Lezioni 1–48"
  },
  {
    sezione: "book",
    file: "AM2_18_Book2.pdf",
    titolo: "Stampato integrale lezioni",
    nota: "Volume 2 — Lezioni 49–85"
  },
  {
    sezione: "book",
    file: "AM2_18_Book3.pdf",
    titolo: "Stampato integrale lezioni",
    nota: "Volume 3 — Lezioni 86–129"
  }
];

var Lezioni = new Array();
Lezioni[1] = [ "1","24/09/2017","09:00", "10:00", "Introduzione al corso. Struttura euclidea, metrica e topologia nello spazio a n dimensioni. Funzioni di n variabili e loro grafico. Definizione di limite per funzioni di più variabili."];
Lezioni[2] = [ "2","24/09/2017","10:00", "11:00", "Metodi per visualizzare un grafico in dimensione 2: linee di livello e restrizioni a rette. Primi esempi di limite per funzioni di più variabili."];
Lezioni[3] = [ "3","25/09/2017","11:00", "12:00", "Limiti all'infinito per funzioni di più variabili. Esempi di limiti per funzioni di più variabili: esistenza via stime+carabinieri o coordinate polari, non esistenza via restrizione a particolari curve."];
Lezioni[4] = [ "4","27/09/2017","12:00", "13:00", "Ulteriori esempi di limiti per funzioni di più variabili."];
Lezioni[5] = [ "5","29/09/2017","09:00", "10:00", "Derivate parziali e direzionali e loro significato geometrico. Differenziale per funzioni di più variabili. Piano tangente ad un grafico. Definizione di gradiente e matrice Jacobiana."];
Lezioni[6] = [ "6","29/09/2017","10:00", "11:00", "Relazioni tra differenziabilità, esistenza delle derivate parziali, continuità e relativi controesempi. Formula per le derivate direzionali. Interpretazione geometrica del gradiente. Esempi di calcolo di derivate parziali."];
Lezioni[7] = [ "7","03/10/2017","09:00", "10:00", "Teorema del differenziale totale: caso classico e caso con ipotesi più minimaliste. Esercizi sullo studio della differenziabilità di funzioni di più variabili."];
Lezioni[8] = [ "8","03/10/2017","10:00", "11:00", "Derivate successive per funzioni di più variabili. Teoremi di inversione dell'ordine di derivazione: teorema di Schwarz e teorema con ipotesi di differenziabilità delle derivate prime. Costruzione dei controesempi."];
Lezioni[9] = [ "9","04/10/2017","11:00", "12:00", "Norma di una matrice. Lipschitzianità delle funzioni affini. Teorema di Lagrange direzionale e controesempio nel caso vettoriale. Disuguaglianza alla Lagrange direzionale per funzioni vettoriali."];
Lezioni[10] = [ "10","04/10/2017","12:00", "13:00", "Disuguaglianza alla Lagrange per funzioni vettoriali di una variabile. Lipschitzianità e limitatezza della matrice Jacobiana su domini convessi. Controesempi in assenza di convessità. Differenziabilità della funzione composta."];
Lezioni[11] = [ "11","10/10/2017","09:00", "10:00", "Chain rule per il calcolo delle derivate parziali di funzioni composte. Esempi di utilizzo: norma del gradiente in coordinate polari, risoluzione di semplici equazioni lineari alle derivate parziali."];
Lezioni[12] = [ "12","10/10/2017","10:00", "11:00", "Formalismo dei multi-indici. Enunciato della formula di Taylor in più variabili, con resto alla Peano ed alla Lagrange. Enunciato e dimostrazione dei lemmi comuni alle due dimostrazioni (caratterizzazione dei polinomi di Taylor)."];
Lezioni[13] = [ "13","11/10/2017","11:00", "12:00", "Formula di Taylor in più variabili: dimostrazione dei lemmi finali in versione Peano e Lagrange. Esempi di calcolo di polinomi di Taylor in più variabili."];
Lezioni[14] = [ "14","11/10/2017","12:00", "13:00", "Forme quadratiche, matrice associata, segnatura e metodi per calcolarla. Stima dal basso per una forma quadratica definita positiva."];
Lezioni[15] = [ "15","13/10/2017","09:00", "10:00", "Matrice Hessiana e studio locale nell'intorno di un punto stazionario. Esempi di applicazione."];
Lezioni[16] = [ "16","13/10/2017","10:00", "11:00", "Esempi di calcolo di gradiente e matrice Hessiana mediante i polinomi di Taylor. Esercizi che hanno a che fare con la connessione: gli aperti connessi sono connessi per archi, le funzioni con gradiente nullo su un connesso sono costanti, tutti i valori tranne al più 2 sono assunti infinite volte."];
Lezioni[17] = [ "17","17/10/2017","09:00", "10:00", "Compattezza e teorema di Weierstrass (e relative varianti) in più variabili. Ricerca dei punti di massimo/minimo. Nei punti di massimo/minimi interni il gradiente (se esiste) si annulla."];
Lezioni[18] = [ "18","17/10/2017","10:00", "11:00", "Primi esempi di problemi di massimo/minimo su insiemi compatti: casi che si vedono ad occhio, metodo delle linee di livello e metodo di parametrizzazione del bordo."];
Lezioni[19] = [ "19","18/10/2017","11:00", "12:00", "Metodo dei moltiplicatori di Lagrange (caso di un solo moltiplicatore): descrizione del metodo e primi esempi di applicazione."];
Lezioni[20] = [ "20","18/10/2017","12:00", "13:00", "Giustificazione intuitiva del metodo dei moltiplicatori di Lagrange. Significato geometrico dei punti che risolvono il primo sistema (cioè dei punti del vincolo in cui il gradiente dell'equazione si annulla). Utilizzo misto di moltiplicatori ed altre tecniche."];
Lezioni[21] = [ "21","20/10/2017","09:00", "10:00", "Metodo dei moltiplicatori di Lagrange (caso con più moltiplicatori): descrizione del metodo e primo esempio di applicazione."];
Lezioni[22] = [ "22","20/10/2017","10:00", "11:00", "Esempi di problemi di massimo/minimo (funzione con valore assoluto, insieme non compatto, funzione omogenea su tutto lo spazio)."];
Lezioni[23] = [ "23","24/10/2017","09:00", "10:00", "Convessità in spazi vettoriali: insiemi convessi, combinazioni convesse, funzioni convesse, disuguaglianza di Jensen. La convessità come fatto unidimensionale. Punti estremali di insiemi convessi e punti di massimo di funzioni convesse."];
Lezioni[24] = [ "24","24/10/2017","10:00", "11:00", "Equivalenza tra due definizioni di locale limitatezza. Le funzioni convesse sono localmente limitate nella parte interna dell'insieme di definizione. Le funzioni convesse sono continue e localmente Lipschitziane nella parte interna dell'insieme di definizione."];
Lezioni[25] = [ "25","25/10/2017","11:00", "12:00", "Convessità e derivata prima: equivalenza tra convessità, monotonia del gradiente, stare sopra agli iperpiani tangenti. Convessità e derivata seconda: legami tra convessità e segnatura della matrice Hessiana. I sottolivelli delle funzioni convesse sono convessi."];
Lezioni[26] = [ "26","25/10/2017","12:00", "13:00", "Dimostrazione del teorema fondamentale dell'algebra (mediante Weierstrass generalizzato e studio locale). Esercizi sulle funzioni convesse. Caratterizzazione delle funzioni convesse regolari radiali."];
Lezioni[27] = [ "27","27/10/2017","09:00", "10:00", "Caratterizzazione variazionale di autovalori/autovettori, quoziente di Rayleigh e dimostrazione variazionale del teorema spettrale. Equazione delle onde nel piano."];
Lezioni[28] = [ "28","16/10/2017","10:00", "11:00", "Esercizi misti: calcolo e classificazione di punti stazionari, esempio non banale di utilizzo dei moltiplicatori di Lagrange, esempio di utilizzo del metodo delle successioni per il calcolo di un liminf."];
Lezioni[29] = [ "29","31/10/2017","09:00", "10:00", "Introduzione agli integrali doppi: notazioni, significato geometrico, step functions, integrale inferiore e superiore, criterio di integrabilità. Proprietà basilari dell'integrale (linearità, monotonia, integrale del prodotto e del valore assoluto, ...) analoghe a quelle valide in una variabile."];
Lezioni[30] = [ "30","31/10/2017","10:00", "11:00", "Descrizione della formula di riduzione per integrali doppi su rettangoli e su insiemi normali. Analogia con il double counting. Esempi di applicazione."];
Lezioni[31] = [ "31","03/11/2017","09:00", "10:00", "Enunciato e dimostrazione della formula di riduzione per integrali doppi (sia nella massima generalità, sia sotto ipotesi di integrabilità). Esempi patologici che mostrano l'ottimalità degli enunciati."];
Lezioni[32] = [ "32","03/11/2017","10:00", "11:00", "Insiemi misurabili e loro caratterizzazione. Misurabilità degli insiemi normali. Integrabilità delle funzioni continue su insiemi misurabili."];
Lezioni[33] = [ "33","07/11/2017","09:00", "10:00", "Utilizzo delle coordinate polari per il calcolo di integrali doppi: descrizione della formula ed esempi di applicazione. Esempi di utilizzo delle simmetrie per semplificare o ridurre i calcoli."];
Lezioni[34] = [ "34","07/11/2017","10:00", "11:00", "Formula generale per il cambio di variabili negli integrali doppi ed esempi classici di applicazione. Classi particolari di trasformazioni: traslazioni, dilatazioni degli assi, affinità."];
Lezioni[35] = [ "35","08/11/2017","11:00", "12:00", "Integrali tripli: notazioni, significato fisico, definizione. Formula di riduzione sui parallelepipedi e su insiemi normali (integrazione per colonne). Esempi di applicazione."];
Lezioni[36] = [ "36","08/11/2017","12:00", "13:00", "Formula di riduzione per sezioni per gli integrali tripli. Principio di Cavalieri. Esempi di calcolo di integrali tripli."];
Lezioni[37] = [ "37","09/11/2017","09:00", "10:00", "Coordinate cilindriche e sferiche nello spazio. Cambi di variabile in generale negli integrali tripli. Esempi di applicazione."];
Lezioni[38] = [ "38","09/11/2017","10:00", "11:00", "Calcolo del baricentro e momento d'inerzia di figure piane/solide mediante integrali doppi/tripli. Solidi di rotazione: equazioni e formula per il volume. Teorema di Guldino per il volume dei solidi di rotazione."];
Lezioni[39] = [ "39","14/11/2017","09:00", "10:00", "Dimostrazione della formula di cambio di variabili negli integrali multipli (parte prima): proposizioni generali e dimostrazione per le trasformazioni affini."];
Lezioni[40] = [ "40","14/11/2017","10:00", "11:00", "Dimostrazione della formula di cambio di variabili negli integrali multipli (parte seconda): dalla epsilon disuguaglianza per i cubi piccoli alla conclusione."];
Lezioni[41] = [ "41","15/11/2017","11:00", "12:00", "Dimostrazione della formula di cambio di variabili negli integrali multipli (parte terza): norme cubiche di vettori e matrici, lemma di cubo esterno, i diffeomorfismi mandano misurabili in misurabili, dimostrazione della epsilon disuguaglianza per i cubi piccoli."];
Lezioni[42] = [ "42","15/11/2017","12:00", "13:00", "Commenti finali sulla dimostrazione della formula di cambio di variabili negli integrali multipli. Accenno al lemma di cubo interno. Esempi di calcolo di integrali multipli con valori assoluti."];
Lezioni[43] = [ "43","17/11/2017","09:00", "10:00", "Introduzione agli integrali impropri in più variabili. Dimostrazione che per integrande non negative l'integrale non dipende da come viene invasa la zona di integrazione. Controesempi per integrande di segno variabile. Integrali di potenze negative della distanza dall'origine in dimensione due e tre."];
Lezioni[44] = [ "44","17/11/2017","10:00", "11:00", "Calcolo dell'integrale gaussiano mediante integrali doppi. Esempi di studio della convergenza di integrali impropri, anche parametrici."];
Lezioni[45] = [ "45","21/11/2017","09:00", "10:00", "Volume della palla n-dimensionale: formula esplicita e dimostrazione per ricorrenza. Integrali impropri in dimensione n: dimostrazione degli esponenti critici per gli integrali di potenze della norma."];
Lezioni[46] = [ "46","21/11/2017","10:00", "11:00", "Esercizi sullo studio della convergenza di integrali multipli impropri."];
Lezioni[47] = [ "47","22/11/2017","11:00", "12:00", "Coordinate sferiche in dimensione qualunque: calcolo dell'integrale della parte trigonometrica del determinante Jacobiano. Esempi finali sugli integrali multipli impropri: utilizzo di stime sia sulle integrande, sia sulla zona di integrazione."];
Lezioni[48] = [ "48","22/11/2017","12:00", "13:00", "Integrali dipendenti da parametro: teoremi di continuità e derivabilità (derivazione sotto il segno di integrale) per integrali propri. Caso della dimensione 1 con estremi ed integranda parametrici. Continuità di un integrale improprio parametrico sotto ipotesi di dominazione."];
Lezioni[49] = [ "49","24/11/2017","09:00", "10:00", "Definizione di curva e suo sostegno. Vettore e retta tangente. Speed e velocity. Curve chiuse e semplici. Strategie per dimostrare la semplicità. Disegno di una curva piana."];
Lezioni[50] = [ "50","24/11/2017","10:00", "11:00", "Definizione di lunghezza di una curva e di curva rettificabile. Le curve Lipschitziane sono rettificabili. Esempi di curve di lunghezza infinita. Discussione dell'indipendenza della lunghezza dalla parametrizzazione, sia nel caso regolare, sia nel caso solo continuo. Enunciato della formula per il calcolo della lunghezza nel caso regolare."];
Lezioni[51] = [ "51","28/11/2017","09:00", "10:00", "Integrali di funzioni vettoriali: stime dall'alto e dal basso. Dimostrazione della formula per la lunghezza delle curve regolari. Esempi di applicazione."];
Lezioni[52] = [ "52","28/11/2017","10:00", "11:00", "Integrali curvilinei: notazioni, significato geometrico, definizione (alla Darboux ed alla Riemann), formula per il calcolo nel caso regolare. Baricentri di curve."];
Lezioni[53] = [ "53","29/11/2017","11:00", "12:00", "Definizione di forma differenziale e di campo di vettori. Integrale di una forma differenziale su una curva: definizione ed interpretazione fisica. Differente comportamento dell'integrale curvilineo di una forma e di una funzione rispetto a riparametrizzazioni della curva."];
Lezioni[54] = [ "54","29/11/2017","12:00", "13:00", "Forme differenziali esatte e chiuse. Esattezza implica chiusura. L'integrale di una forma esatta lungo una curva è la differenza tra i valori di una primitiva agli estremi. Caratterizzazione dell'esattezza in termini di integrali lungo curve."];
Lezioni[55] = [ "55","01/12/2017","09:00", "10:00", "Insiemi convessi, stellati, connessi, semplicemente connessi. Caratterizzazioni della semplice connessione e definizione di omotopia. Le forme chiuse sugli aperti stellati sono esatte."];
Lezioni[56] = [ "56","01/12/2017","10:00", "11:00", "L'integrale di una forma chiusa su due curve omotope con gli stessi estremi coincide. Esempio di forma differenziale chiusa ma non esatta. Come testare l'esattezza di una forma chiusa in un aperto non semplicemente connesso."];
Lezioni[57] = [ "57","05/12/2017","09:00", "10:00", "Quattro strategie per il calcolo dell'integrale di una forma differenziale lungo una curva: discussione ed esempi. Perché non è corretto identificare forme differenziali e campi di vettori: pull-back di forme differenziali."];
Lezioni[58] = [ "58","05/12/2017","10:00", "11:00", "Superfici nello spazio: definizione e primi esempi. Piano tangente e vettore normale canonico. La retta tangente ad una curva su una superficie è contenuta nel piano tangente. Discussione della formula che genera un vettore normale a due vettori dati (prodotto vettore)."];
Lezioni[59] = [ "59","06/12/2017","11:00", "12:00", "Come non si definisce l'area di una superficie: esempio di Schwarz. Definizione di area di una superficie regolare e modi equivalenti di scrivere la formula per il calcolo. Caso delle superfici cartesiane."];
Lezioni[60] = [ "60","06/12/2017","12:00", "13:00", "Superfici di rotazione: parametrizzazione, formule per il calcolo dell'area, teorema di Guldino. Integrali superficiali: idea della definizione e formula per il calcolo. Invarianza dell'area per riparametrizzazione."];
Lezioni[61] = [ "61","07/12/2017","09:00", "10:00", "Gradiente, laplaciano, divergenza, rotore: definizioni e relazioni tra di esse. Significato di gradiente/divergenza/rotore nulli/uguali."];
Lezioni[62] = [ "62","07/12/2017","10:00", "11:00", "Teorema di Gauss-Green e teorema della divergenza nel piano: enunciato. Calcolo del versore normale al bordo. Interpretazione del termine di bordo come integrale di flusso e come integrale di una forma differenziale."];
Lezioni[63] = [ "63","12/12/2017","09:00", "10:00", "Equivalenza tra teorema di Gauss-Green e teorema della divergenza. Dimostrazione nel caso di insiemi normali. Idea euristica per trattare il caso generale scomponendo il dominio e sfruttando le cancellazioni sui bordi interni. Dimostrazione nel caso di campi vettoriali con supporto contenuto in particolari rettangoli."];
Lezioni[64] = [ "64","12/12/2017","10:00", "11:00", "Dimostrazione del teorema della divergenza nel caso generale (due dimensionale) riducendosi all'enunciato locale mediante una partizione dell'unità. Enunciato del teorema della divergenza in dimensione tre."];
Lezioni[65] = [ "65","13/12/2017","11:00", "12:00", "Applicazioni del teorema della divergenza: area ed integrale di funzioni su domini delimitati da curve date, calcolo di integrali di flusso attraverso curve date."];
Lezioni[66] = [ "66","13/12/2017","12:00", "13:00", "Ulteriori applicazioni del teorema della divergenza. Interpretazione dell'integrazione in coordinate polari/sferiche in termini di integrali curvilinei/superficiali. Baricentro di una semisfera (come superficie)."];
Lezioni[67] = [ "67","14/12/2017","09:00", "10:00", "Orientazione del bordo di una superficie. Enunciato della formula di Stokes (teorema del rotore). L'integrale di un rotore su una superficie chiusa è nullo. Esempio di vettore a divergenza nulla che non è un rotore."];
Lezioni[68] = [ "68","14/12/2017","10:00", "11:00", "Quattro strategie per calcolare un integrale di flusso attraverso una superficie. Esempio pratico di inversione del rotore."];
Lezioni[69] = [ "69","15/12/2017","09:00", "10:00", "Dimostrazione della formula di Stokes. Dimostrazione via teorema della divergenza di un caso particolare (dimensione due e maggior regolarità) del cambio di variabili negli integrali multipli. Interpretazione delle dimostrazioni precedenti in termini di push-forward di curve e pull-back di forme differenziali."];
Lezioni[70] = [ "70","15/12/2017","10:00", "11:00", "Inversione del rotore (trovare un vettore il cui rotore sia un vettore dato): condizione necessaria e algoritmo nel caso di un parallelepipedo. Laplaciano in coordinate polari e funzioni armoniche radiali nel piano (e nello spazio)."];
Lezioni[71] = [ "71","26/02/2018","14:00", "15:00", "Spazi metrici: distanza, palle, nozione di convergenza, diametro, funzioni Lipschitziane e Holderiane. Successioni di Cauchy e loro proprietà basilari. Completezza. Norme e spazi di Banach."];
Lezioni[72] = [ "72","26/02/2018","15:00", "16:00", "Definizione di spazio di Hilbert. Esempi di spazi metrici. Distanze equivalenti e norme equivalenti. Equivalenza di tutte le norme in dimensione finita."];
Lezioni[73] = [ "73","28/02/2018","09:00", "10:00", "Definizione di totale limitatezza. Caratterizzazione degli spazi metrici compatti: equivalenza tra completezza più totale limitatezza, compattezza per successioni, compattezza per ricoprimenti. Prima parte della dimostrazione."];
Lezioni[74] = [ "74","28/02/2018","10:00", "11:00", "Lemma del raggio magico (numero di Lebesgue di un ricoprimento). Seconda parte della dimostrazione della caratterizzazione della compattezza. Criterio per dimostrare la totale limitatezza. Teorema di Heine-Cantor in spazi metrici. Due norme sono equivalenti se (e solo se) inducono la stessa nozione di convergenza."];
Lezioni[75] = [ "75","07/03/2018","09:00", "10:00", "Teorema delle contrazioni in spazi metrici: enunciato, dimostrazione, esempi e controesempi. Completamento di uno spazio metrico: definizioni ed enunciato dei tre risultati principali (esistenza, unicità, estensione). Dimostrazione dell'unicità."];
Lezioni[76] = [ "76","07/03/2018","10:00", "11:00", "Completamento di spazi metrici: dimostrazione del teorema di estensione e del teorema di esistenza."];
Lezioni[77] = [ "77","08/03/2018","11:00", "12:00", "Teorema delle funzioni implicite: presentazione del problema, enunciato e dimostrazione nel caso di una equazione in due variabili (esistenza/unicità, continuità, derivabilità, ulteriore regolarità)."];
Lezioni[78] = [ "78","08/03/2018","12:00", "13:00", "Teorema delle funzioni implicite: enunciato e dimostrazione nel caso di una equazione in dimensione qualunque. Primi esempi ed esercizi: calcolo del polinomio di Taylor di funzioni definite implicitamente, limiti all'infinito di una funzione vs limitatezza del suo luogo di zeri."];
Lezioni[79] = [ "79","13/03/2018","14:00", "15:00", "Teorema delle funzioni implicite dimostrato mediante punto fisso: illustrazione della tecnica nel caso di una equazione in dimensione 2, dimostrazione della parte di esistenza e unicità in dimensione e codimensione arbitraria."];
Lezioni[80] = [ "80","13/03/2018","15:00", "16:00", "Teorema delle funzioni implicite in dimensione e codimensione arbitraria: continuità, lipschitzianità, differenziabilità, ulteriore regolarità. Esempi di applicazione."];
Lezioni[81] = [ "81","14/03/2018","09:00", "10:00", "Teorema della funzione inversa (teorema di invertibilità locale). Esempio di funzione localmente invertibile in ogni punto ma non globalmente iniettiva. Teorema della mappa aperta (le funzioni con Jacobiano full rank mandano aperti in aperti)."];
Lezioni[82] = [ "82","14/03/2018","10:00", "11:00", "Esempi di studio di invertibilità locale/globale per funzioni di due variabili."];
Lezioni[83] = [ "83","15/03/2018","10:00", "11:00", "Moltiplicatori di Lagrange: dimostrazione mediante esplicitazione del vincolo (nei tre casi progressivi: una equazione in dimensione 2, una equazione in dimensione qualunque, dimensione e codimensione arbitrarie)."];
Lezioni[84] = [ "84","15/03/2018","11:00", "12:00", "Moltiplicatori di Lagrange: dimostrazione mediante teorema della mappa aperta e dimostrazione mediante penalizzazione del vincolo. Semicontinuità del rango di una matrice."];
Lezioni[85] = [ "85","19/03/2018","14:00", "15:00", "Moltiplicatori di Lagrange: condizione sufficiente per essere punto di massimo/minimo. Esercizi sulle funzioni definite implicitamente."];
Lezioni[86] = [ "86","19/03/2018","15:00", "16:00", "Successioni di funzioni: definizione di convergenza puntuale, convergenza uniforme, convergenza uniforme sui compatti. Esempi classici."];
Lezioni[87] = [ "87","21/03/2018","09:00", "10:00", "Convergenza uniforme: teorema di scambio del limite. Continuità del limite uniforme di funzioni continue. Distanza nello spazio delle funzioni limitate che induce la convergenza uniforme."];
Lezioni[88] = [ "88","21/03/2018","10:00", "11:00", "Convergenza uniforme: teoremi di scambio dell'integrale e della derivata."];
Lezioni[89] = [ "89","22/03/2018","11:00", "12:00", "La convergenza puntuale implica la convergenza uniforme sotto ipotesi di monotonia (sia ad x fisso sia ad n fisso): enunciati, dimostrazioni, controesempi che mostrano l'ottimalità delle ipotesi."];
Lezioni[90] = [ "90","22/03/2018","12:00", "13:00", "Esempi di studio della convergenza di successioni di funzioni. Esempi in cui la convergenza puntuale implica la convergenza uniforme: spazi di polinomi di grado limitato, spazi di funzioni equilipschitziane."];
Lezioni[91] = [ "91","26/03/2018","14:00", "15:00", "Serie di funzioni. Convergenza totale: definizione e rapporti con la convergenza uniforme. M-test di Weierstrass. Serie di funzioni a segno alterno. Convergenza totale come convergenza delle norme in uno spazio di Banach."];
Lezioni[92] = [ "92","26/03/2018","15:00", "16:00", "Primi esercizi sulle serie di funzioni."];
Lezioni[93] = [ "93","28/03/2018","09:00", "10:00", "Serie di potenze: definizioni, enunciato dei principali risultati, esempi pratici del loro utilizzo per il calcolo di speciali serie numeriche."];
Lezioni[94] = [ "94","28/03/2018","10:00", "11:00", "Serie di potenze: dimostrazione dei risultati principali (struttura dell'insieme convergenza, formula per il calcolo del raggio di convergenza, teorema di Abel, ulteriore regolarità e derivazione per serie)."];
Lezioni[95] = [ "95","29/03/2018","09:00", "10:00", "Criterio di convergenza per le serie di Taylor. Convergenza delle serie di Taylor delle funzioni elementari: esponenziale, seno, coseno, logaritmo, arcotangente, potenza ad esponente reale."];
Lezioni[96] = [ "96","29/03/2018","10:00", "11:00", "Esempi di studio dell'andamento asintotico di serie di funzioni quando non valgono i teoremi di scambio. Utilizzo del confronto serie-integrali."];
Lezioni[97] = [ "97","29/03/2018","11:00", "12:00", "Calcolo alla Eulero della somma dei quadrati dei reciproci degli interi, esempi di calcolo della somma di serie di potenze, ulteriori esempi di studio di serie di potenze."];
Lezioni[98] = [ "98","05/04/2018","11:00", "12:00", "Funzioni analitiche: definizione e proprietà algebriche. Stima delle derivate successive di una serie di potenze. Analiticità delle serie di potenze. Analiticità della funzione 1/x e delle funzioni elementari."];
Lezioni[99] = [ "99","05/04/2018","12:00", "13:00", "Prodotto di Cauchy di serie numeriche. Teorema sul prodotto tra una serie convergente ed una assolutamente convergente. Esempio dell'esponenziale. Analiticità del prodotto di funzioni analitiche."];
Lezioni[100] = [ "100","16/04/2018","14:00", "15:00", "L'insieme degli zeri di una funzione analitica è discreto. Disuguaglianze di tipo Lojasevic. Risoluzione per serie di un'equazione differenziale."];
Lezioni[101] = [ "101","16/04/2018","15:00", "16:00", "Introduzione alle equazioni differenziali: riepilogo notazioni, equivalenza tra formulazione differenziale e integrale di un problema di Cauchy, operatore di Volterra, enunciato del teorema di esistenza ed unicità (teorema CLPL: Cauchy-Lipschitz-Picard-Lindelof), enunciato del teorema di sola esistenza (teorema di Peano). Esempio di non unicità e di non esistenza globale."];
Lezioni[102] = [ "102","18/04/2018","09:00", "10:00", "Parte di esistenza del teorema CLPL: dimostrazione 1 (via contrazioni classica, con tempo di vita dipendente dalla costante di Lipschitz) e dimostrazione 2 (via contrazioni rispetto ad una norma pesata, con tempo di vita ottimale). Studio generale degli spazi di funzioni con norme pesate."];
Lezioni[103] = [ "103","18/04/2018","10:00", "11:00", "Parte di esistenza del teorema CLPL: dimostrazione 3 (mediante le iterate di Picard, con tempo di vita ottimale) e dimostrazione 4 (via contrattività di una opportuna iterata della mappa di Volterra, ancora con tempo di vita ottimale)."];
Lezioni[104] = [ "104","19/04/2018","11:00", "12:00", "Teorema di Ascoli-Arzelà (versione standard su un intervallo della retta reale): enunciato e dimostrazione. Caso di funzioni definite su tutta la retta."];
Lezioni[105] = [ "105","19/04/2018","12:00", "13:00", "Teorema di Ascoli-Arzelà (versione metrica e variante con sola convergenza sui compatti). Dimostrazione del teorema di Peano mediante problemi approssimanti Lipschitz."];
Lezioni[106] = [ "106","23/04/2018","14:00", "15:00", "Dimostrazione del teorema di Peano mediante approssimanti alla Tonelli (problemi con ritardo). Strategie generali per l'approssimazione di funzioni continue mediante funzioni Lipschitz."];
Lezioni[107] = [ "107","23/04/2018","15:00", "16:00", "Parte di unicità del teorema CLPL: dimostrazione 1 (via lemma di Gronwall) e dimostrazione 2 (via unicità del punto fisso per una contrazione)."];
Lezioni[108] = [ "108","26/04/2018","11:00", "12:00", "Esistenza di una soluzione massimale (sia nel caso lipschitz, sia nel caso solo continuo). Teorema di alternativa per una soluzione massimale (esistenza globale, blow up, break down). Primo teorema di esistenza globale (rhs globalmente limitato)."];
Lezioni[109] = [ "109","26/04/2018","12:00", "13:00", "Teorema dell'asintoto. Primi esempi di studio qualitativo per equazioni differenziali autonome."];
Lezioni[110] = [ "110","02/05/2018","09:00", "10:00", "Soprasoluzioni e sottosoluzioni: definizioni e teorema di confronto (sia nel caso continuo, sia nel caso lipschitz). Parte di unicità del teorema CLPL: dimostrazione 3 (via norma al quadrato della differenza). Secondo teorema di esistenza globale (rhs con crescita sublineare)."];
Lezioni[111] = [ "111","02/05/2018","10:00", "11:00", "Esempi di studio qualitativo di soluzioni di equazioni differenziali autonome."];
Lezioni[112] = [ "112","03/05/2018","11:00", "12:00", "Primi esempi di studio qualitativo di equazioni non autonome."];
Lezioni[113] = [ "113","03/05/2018","12:00", "13:00", "Primo esempio di studio qualitativo di un'equazione differenziale non autonoma con valori soglia."];
Lezioni[114] = [ "114","07/05/2018","14:00", "15:00", "Ulteriore esempio di studio qualitativo di soluzioni di equazioni differenziali con valori soglia."];
Lezioni[115] = [ "115","07/05/2018","15:00", "16:00", "Ulteriori esempi di studio qualitativo di soluzioni di equazioni differenziali."];
Lezioni[116] = [ "116","09/05/2018","09:00", "10:00", "Dipendenza continua dal dato iniziale: passaggio al limite nel caso con rhs continuo e stima (dall'alto e dal basso) della differenza nel caso con rsh lipschitziano. Condizioni di tipo Osgood per esistenza globale e unicità."];
Lezioni[117] = [ "117","09/05/2018","10:00", "11:00", "Ulteriori esempi di studio qualitativo di soluzioni di equazioni differenziali. Stime iterate."];
Lezioni[118] = [ "118","10/05/2018","11:00", "12:00", "Equazioni di ordine 2: spazio delle fasi, introduzione al metodo energetico, energy landscape, primi esempi."];
Lezioni[119] = [ "119","10/05/2018","12:00", "13:00", "Equazioni di ordine 2: esistenza di soluzioni periodiche, calcolo del periodo e sua dipendenza dal livello energetico, oscillatore armonico e pendolo non linearizzato."];
Lezioni[120] = [ "120","14/05/2018","14:00", "15:00", "Ulteriori esempi di studio di soluzioni di equazioni ordine 2: soluzioni periodiche, esistenza globale vs blow up, fenomeno della buca di potenziale."];
Lezioni[121] = [ "121","14/05/2018","15:00", "16:00", "Sistemi di equazioni differenziali lineari autonome a coefficienti costanti: teoria generale. Esponenziale di una matrice: definizione, calcolo, proprietà vere e false."];
Lezioni[122] = [ "122","16/05/2018","09:00", "10:00", "Sistemi di equazioni differenziali lineari omogenee: studio della stabilità e stabilità asintotica dell'origine nel caso 2*2 (via forma canonica della matrice)."];
Lezioni[123] = [ "123","16/05/2018","10:00", "11:00", "Sistemi di equazioni differenziali lineari omogenee: studio dell'asintotica stabilità con metodi energetici. Introduzione al teorema di linearizzazione."];
Lezioni[124] = [ "124","17/05/2018","11:00", "12:00", "Teorema di linearizzazione: idea generale, enunciato e dimostrazione energetica nel caso di linearizzato diagonalizzabile con autovalori reali negativi. Esempi di applicazione. Equazione del pendolo smorzato."];
Lezioni[125] = [ "125","17/05/2018","12:00", "13:00", "Modelli matematici in biologia: crescita esponenziale, equazione logistica, epidemia SIS, epidemia SIR, modello preda-predatore (Volterra-Lotka)."];
Lezioni[126] = [ "126","17/05/2018","16:00", "17:00", "Modelli matematici in biologia: modello preda-predatore con autolimitazione, modello per due specie in competizione."];
Lezioni[127] = [ "127","17/05/2018","17:00", "18:00", "Calcolo degli integrali di Fresnel mediante forme differenziali esatte. Determinante Wronskiano e teorema di oscillazione per equazioni lineari di ordine due."];
Lezioni[128] = [ "128","18/05/2018","11:00", "12:00", "Esempio di teorema di convergenza dominata per integrali impropri. Continuità e derivabilità di integrali impropri dipendenti da parametro via convergenza dominata. Esempio legato alla Gamma di Eulero. Strategia per il calcolo dell'integrale di Dirichlet."];
Lezioni[129] = [ "129","18/05/2018","12:00", "13:00", "Dimostrazione delle proprietà necessarie per il calcolo dell'integrale di Dirichlet. Omeomorfismo tra linee di livello ed esistenza di livelli critici. Dimensione di uno spazio metrico e accenno alla curva di Peano."];
