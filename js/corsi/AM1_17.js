var NomeCorso = "Analisi Matematica 1 - 2016/2017";
var Percorso = MEDIA.lezioni + "AM1_17/AM1_17_L";
var CifreNumeroLezione = 3;

var SchedaCorso = {
  nome: "Analisi Matematica 1",
  annoAccademico: "2016/2017",
  crediti: "15",
  target: "Corso di Laurea in Matematica",
  anno: "Primo anno",
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "AM1_17_Ufficiale.pdf",
    titolo: "Presentazione ufficiale"
  },
  {
    sezione: "burocrazia",
    file: "AM1_17_Burocrazia.pdf",
    titolo: "Informazioni generali"
  },
  {
    sezione: "burocrazia",
    file: "AM1_17_Esame.pdf",
    titolo: "Regole d’esame"
  },
  {
    sezione: "burocrazia",
    file: "AM1_17_Programma.pdf",
    titolo: "Programma dettagliato"
  },
  {
    sezione: "book",
    file: "AM1_17_Book1.pdf",
    titolo: "Stampato integrale delle lezioni",
    nota: "Volume 1 — Lezioni 1–54"
  },
  {
    sezione: "book",
    file: "AM1_17_Book2.pdf",
    titolo: "Stampato integrale delle lezioni",
    nota: "Volume 2 — Lezioni 55–93"
  },
  {
    sezione: "book",
    file: "AM1_17_Book3.pdf",
    titolo: "Stampato integrale delle lezioni",
    nota: "Volume 3 — Lezioni 94–135"
  }
];

var Lezioni = new Array();
Lezioni[1] = [ "1","23/09/2016","11:00", "12:00", "Logica elementare (a livello intuitivo): proposizioni, predicati, quantificatori. Negazione di una proposizione, and e vel, tavole di verità."];
Lezioni[2] = [ "2","23/09/2016","12:00", "13:00", "Implicazione tra proposizioni e sua negazione. Insiemi e notazioni insiemistiche. Insieme delle parti. Prodotto cartesiano."];
Lezioni[3] = [ "3","26/09/2016","11:00", "12:00", "Funzioni tra insiemi: definizione operativa e formale. Grafico, composizione, iniettività, surgettività, funzione inversa. Immagine e controimmagine."];
Lezioni[4] = [ "4","26/09/2016","12:00", "13:00", "Principio di induzione. Dimostrazione di uguaglianze e disuguaglianze mediante il principio di induzione. Disuguaglianza di Bernoulli."];
Lezioni[5] = [ "5","28/09/2016","09:00", "10:00", "Insiemi numerici. Definizione assiomatica dei numeri reali (assiomi algebrici, di ordinamento, di continuità). Enunciato dei teoremi di esistenza ed unicità dei reali."];
Lezioni[6] = [ "6","28/09/2016","10:00", "11:00", "Maggioranti, minoranti, massimo, minimo, estremo inferiore e superiore. Dimostrazione dell'esistenza di inf e sup. Caratterizzazione di inf e sup. Dimostrazione che l'insieme dei naturali non è superiormente limitato."];
Lezioni[7] = [ "7","29/09/2016","09:00", "10:00", "Funzioni reali: monotonia, funzioni pari/dispari, funzioni periodiche. Minimo periodo. Funzioni elemerntari: potenze a esponente intero positivo e loro inverse."];
Lezioni[8] = [ "8","29/09/2016","10:00", "11:00", "Funzioni elementari: esponenziali e logaritmi. Discussione di cosa bisognerebbe dimostrare per avere una definizione rigorosa. Operazioni sui grafici. Iniettività ed equazioni. Monotonia e disequazioni."];
Lezioni[9] = [ "9","03/10/2016","11:00", "12:00", "Funzioni elementari: funzioni trigonometriche e relative inverse."];
Lezioni[10] = [ "10","03/10/2016","12:00", "13:00", "Esercizi riassuntivi sulle funzioni elementari."];
Lezioni[11] = [ "11","05/10/2016","09:00", "10:00", "Significato dei termini \'definitivamente\' e \'frequentemente\'. Definizione di successione e sue rappresentazioni. Definizioni di limite per successioni."];
Lezioni[12] = [ "12","05/10/2016","10:00", "11:00", "Primi esempi e risultati sui limiti di successione: permanenza del segno, unicità del limite, teorema di confronto a 2, teorema di confronto a 3 (teorema dei carabinieri)."];
Lezioni[13] = [ "13","06/10/2016","09:00", "10:00", "Teorema delle successioni monotone. Il numero e (monotonia e limitatezza della successione che lo definisce)."];
Lezioni[14] = [ "14","06/10/2016","10:00", "11:00", "Retta reale estesa. Enunciato del teorema algebrico sui limiti di successione. Limitatezza delle successioni con limite reale. Dimostrazione di alcuni casi del teorema sul limite della somma e del prodotto."];
Lezioni[15] = [ "15","10/10/2016","11:00", "12:00", "Limiti dell'esponenziale e della radice n-esima di una costante. Criterio della radice, del rapporto e rapporto -> radice per limiti di successione: enunciati e dimostrazioni."];
Lezioni[16] = [ "16","10/10/2016","12:00", "13:00", "Confronto tra ordini di infinito. Esercizi sui limiti che sfruttano le tecniche viste finora."];
Lezioni[17] = [ "17","12/10/2016","09:00", "10:00", "Limiti di funzioni: definizioni."];
Lezioni[18] = [ "18","12/10/2016","10:00", "11:00", "Definizione di funzione continua in un punto ed in un insieme. Enunciato della continuità delle funzioni ottenute a partire da quelle elementari. Enunciato dei limiti notevoli. Esempi di cambi di variabile nei limiti."];
Lezioni[19] = [ "19","13/10/2016","09:00", "10:00", "Criterio successioni -> funzioni. Dimostrazione dei limiti notevoli classici."];
Lezioni[20] = [ "20","13/10/2016","10:00", "11:00", " Criterio funzioni -> successioni. Trucco del passaggio all'esponenziale. Esempi di limiti calcolati sfruttando i limiti notevoli."];
Lezioni[21] = [ "21","17/10/2016","11:00", "12:00", "Sottosuccessioni e loro limiti. Utilizzo di successioni e sottosuccessioni per mostrare la non esistenza di limiti di funzioni e successioni."];
Lezioni[22] = [ "22","17/10/2016","12:00", "13:00", "Esercizi misti sui limiti: trucco del valore assoluto, razionalizzazioni di radici, limiti in punti diversi da zero/infinito, limiti di sommatorie."];
Lezioni[23] = [ "23","19/10/2016","09:00", "10:00", "Definizione di o piccolo e di equivalenza asintotica. Principali proprietà di o piccolo."];
Lezioni[24] = [ "24","19/10/2016","10:00", "11:00", "Sviluppini delle funzioni elementari. Utilizzo degli sviluppini per il calcolo di limiti."];
Lezioni[25] = [ "25","20/10/2016","09:00", "10:00", "Rapporto incrementale, derivata e differenziale. Retta tangente ad un grafico. Equivalenza tra le definizioni e interpretazione geometrica. Limiti notevoli vs sviluppini vs derivate delle funzioni elementari."];
Lezioni[26] = [ "26","20/10/2016","10:00", "11:00", "Continuità delle funzioni derivabili. Teoremi algebrici sulle derivate. Derivata della composizione e dell'inversa (enunciati). Derivata delle funzioni elementari e delle relative inverse."];
Lezioni[27] = [ "27","24/10/2016","11:00", "12:00", "Enunciato del teorema di De L'Hôpital. Esempi in cui si può e non si può applicare. Pericoli del \"fare i limiti metà per volta\" o mediante equivalenza asintotica."];
Lezioni[28] = [ "28","24/10/2016","12:00", "13:00", "Enunciato della formula di Taylor con resto di Peano e centro in 0. Dimostrazione degli sviluppi di Taylor delle funzioni elementari."];
Lezioni[29] = [ "29","26/10/2016","11:00", "12:00", "Enunciato della formula di Taylor con resto di Peano e centro in un punto qualunque. Polinomio di Taylor della somma e del prodotto di due funzioni. Esempi semplici di composizione."];
Lezioni[30] = [ "30","26/10/2016","12:00", "13:00", "Polinomio di Taylor della composizione di due funzioni. Esempi di calcolo di sviluppi di Taylor."];
Lezioni[31] = [ "31","27/10/2016","09:00", "10:00", "Funzioni iperboliche."];
Lezioni[32] = [ "32","27/10/2016","10:00", "11:00", "Definizione di ordine di infinitesimo/infinito e parte principale. Esercizi misti sui limiti."];
Lezioni[33] = [ "33","02/11/2016","09:00", "10:00", "Serie numeriche: definizione come limite delle somme parziali. Serie telescopiche e geometriche. Proprietà algebriche."];
Lezioni[34] = [ "34","02/11/2016","10:00", "11:00", "Condizione necessaria per la convergenza di una serie numerica. Serie a termini di segno costante. Criteri di convergenza: confronto, radice, rapporto. Primi esempi di studio della convergenza."];
Lezioni[35] = [ "35","03/11/2016","09:00", "10:00", "Criteri di convergenza per serie numeriche: confronto asintotico (casi standard e casi limite). Serie armonica generalizzata (due dimostrazioni). Criterio di condensazione di Cauchy."];
Lezioni[36] = [ "36","03/11/2016","10:00", "11:00", "Esempi di studio della convergenza di serie numeriche a termini di segno costante, anche parametriche."];
Lezioni[37] = [ "37","07/11/2016","11:00", "12:00", "Criterio di Leibnitz per le serie a segno alterno. Assoluta convergenza. Teorema dei carabinieri per le serie. Esempi di serie convergenti ma non assolutamente convergenti."];
Lezioni[38] = [ "38","07/11/2016","12:00", "13:00", "Esercizi riassuntivi sulle serie, anche parametriche. Il numero e (e la funzione esponenziale) come somma di una serie."];
Lezioni[39] = [ "39","09/11/2016","09:00", "10:00", "Teorema di esistenza degli zeri: enunciato e tre possibili dimostrazioni. Teorema dei valori intermedi. Esempi di applicazione allo studio di equazioni o della surgettività di una funzione."];
Lezioni[40] = [ "40","09/11/2016","10:00", "11:00", "Studio locale di una funzione nell'intorno di un punto stazionario: criterio delle derivate successive e sua interpretazione in termini di polinomi di Taylor. Esempi di applicazione."];
Lezioni[41] = [ "41","10/11/2016","09:00", "10:00", "Teoremi che legano la monotonia di una funzione al segno della sua derivata prima."];
Lezioni[42] = [ "42","10/11/2016","10:00", "11:00", "Definizioni di max/min e di punti di max/min. Enunciato del teorema di Weierstrass in un intervallo. Ricerca dei punti di max/min: punti stazionari interni, singolari interni, bordo. Varianti del teorema di Weierstrass: funzioni periodiche, funzioni definite su tutta la retta con condizioni all'infinito."];
Lezioni[43] = [ "43","14/11/2016","11:00", "12:00", "Esercizi sulle funzioni che sfruttano il teorema di esistenza degli zeri, lo studio locale, il teorema di Weierstrass e le sue varianti."];
Lezioni[44] = [ "44","14/11/2016","12:00", "13:00", "Esercizi sulle funzioni che sfruttano il teorema di esistenza degli zeri, lo studio locale, il teorema di Weierstrass e le sue varianti."];
Lezioni[45] = [ "45","16/11/2016","09:00", "10:00", "Schema classico per lo studio di funzioni: simmetrie, continuità, limiti agli estremi, zeri e segno, monotonia, punti di massimo/minimo locale/globale. Definizione geometrica di convessità/concavità. Legami tra convessità e derivata seconda. Punti di flesso."];
Lezioni[46] = [ "46","16/11/2016","10:00", "11:00", "Classi di regolarità, asintoti orizzontali, verticali, obliqui. Esempio di disequazione risolta mediante uno studio di funzioni."];
Lezioni[47] = [ "47","17/11/2016","09:00", "10:00", "Funzioni lipschitziane. Legami tra lipschitzianità e limitatezza della derivata prima."];
Lezioni[48] = [ "48","17/11/2016","10:00", "11:00", "Enunciato della Formula di Taylor con resto di Lagrange. Applicazioni classiche: approssimazione di funzioni, dimostrazione di disuguaglianze, convergenza di serie di Taylor. Le funzioni convesse stanno sopra la retta tangente. Calcolo della somma della serie armonica a segni alterni."];
Lezioni[49] = [ "49","21/11/2016","11:00", "12:00", "Applicazioni dello studio di funzioni: studio di equazioni parametriche, disequazioni, monotonia di successioni. Rischi legati al confronto di due grafici."];
Lezioni[50] = [ "50","21/11/2016","12:00", "13:00", "Ulteriori esercizi sullo studio di funzioni. Disuguaglianze classiche (confronti tra funzioni elementari e loro polinomi di Taylor) che si dimostrano con studi di funzione."];
Lezioni[51] = [ "51","23/11/2016","09:00", "10:00", "Esempi di studi di funzione che richiedono lo studio di opportune funzioni ausiliarie."];
Lezioni[52] = [ "52","23/11/2016","10:00", "11:00", "Disuguaglianze di lipschitzianità. Ulteriori esempi di studi di funzione."];
Lezioni[53] = [ "53","24/11/2016","09:00", "10:00", "Esempio di funzione non costante con tutte le derivate nulle in un punto. L'esistenza delle derivate fino ad un certo ordine non è condizione necessaria per l'esistenza del polinomio di Taylor di quell'ordine. Esempi di limiti e sviluppi di Taylor."];
Lezioni[54] = [ "54","24/11/2016","10:00", "11:00", "Esempi di studio di funzioni dipendenti da un parametro. Come dimostrare con i limiti che una successione è definitivamente monotona."];
Lezioni[55] = [ "55","28/11/2016","11:00", "12:00", "Introduzione agli integrali: notazioni, significato geometrico, funzioni a gradino, definizione di integrale inferiore e superiore. Funzione di Dirichlet."];
Lezioni[56] = [ "56","28/11/2016","12:00", "13:00", "Enunciato dell'integrabilità delle funzioni monotone e delle funzioni continue. Prime proprietà dell'integrale: linearità, monotonia, additività rispetto alla zona di integrazione, disuguaglianza con il valore assoluto, proprietà di reticolo."];
Lezioni[57] = [ "57","30/11/2016","09:00", "10:00", "Definizione di primitiva e di funzione integrale. Due primitive in un intervallo differiscono per una costante. Teorema della media integrale. Teorema fondamentale del calcolo integrale. Lipschitzianità della funzione integrale."];
Lezioni[58] = [ "58","30/11/2016","10:00", "11:00", "Dimostrazione dell'integrabilità delle funzioni monotone. Discorso sul +c negli integrali. Primitive elementari. Primi esempi di calcolo esplicito di integrali, anche con valori assoluti."];
Lezioni[59] = [ "59","01/12/2016","09:00", "10:00", "Formula di integrazione per parti. Esempi classici di applicazione. Tecnica del grande ritorno e dell'1 nascosto. Esempio paradossale utilizzando la formula senza estremi."];
Lezioni[60] = [ "60","01/12/2016","10:00", "11:00", "Formula di integrazione per sostituzione. Esempi classici di applicazione. Primitive di potenze di seno e coseno."];
Lezioni[61] = [ "61","07/12/2016","09:00", "10:00", "Integrazione delle funzioni razionali: descrizione dell'algoritmo, integrazione dei fratti semplici."];
Lezioni[62] = [ "62","07/12/2016","10:00", "11:00", "Precisazioni sui passi dell'algoritmo per integrare le funzioni razionali: fattorizzazione reale di polinomi, dimostrazione della decomposizione in fratti semplici, trucco per risolvere velocemente il sistema lineare."];
Lezioni[63] = [ "63","12/12/2016","11:00", "12:00", "Sostituzioni razionalizzanti: funzioni razionali di esponenziali, radici qualunque di  funzioni razionali di primo grado, radici quadrate di polinomi di secondo grado."];
Lezioni[64] = [ "64","12/12/2016","12:00", "13:00", "Sostituzioni razionalizzanti: formule parametriche per le funzioni razionali di seno e coseno. Interpretazione delle sostituzioni razionalizzanti in termini di parametrizzazioni razionali di curve algebriche."];
Lezioni[65] = [ "65","14/12/2016","09:00", "10:00", "Utilizzo delle simmetrie per il calcolo di integrali di funzioni pari/dispari. Integrali del quadrato di seno e coseno tra estremi multipli di un angolo retto. Esempi finali sul calcolo di integrali propri."];
Lezioni[66] = [ "66","14/12/2016","10:00", "11:00", "Introduzione agli integrali impropri: definizione nel caso monoproblema e spezzamento nel caso con più problemi. Comportamento degli integrali impropri con potenze negative della x, sia a 0 sia all'infinito."];
Lezioni[67] = [ "67","15/12/2016","09:00", "10:00", "Criteri di convergenza per integrali impropri: confronto, confronto asintotico (casi standard e casi limite), assoluta integrabilità. Primi esempi di applicazione."];
Lezioni[68] = [ "68","15/12/2016","10:00", "11:00", "Integrali impropri con problemi in punti diversi dall'origine. Ulteriori esempi di studio della convergenza di integrali impropri."];
Lezioni[69] = [ "69","19/12/2016","11:00", "12:00", "Integrali oscillanti: criterio alla Dirichlet (trucco dell'integrazione per parti) e metodo dei triangolini (o rettangolini). Esempi classici: integrale di Dirichlet e di Fresnel, e corrispondenti con valore assoluto."];
Lezioni[70] = [ "70","19/12/2016","12:00", "13:00", "Confronto serie-integrali e applicazioni (convergenza di serie, stima di sommatorie, stima delle code di serie)."];
Lezioni[71] = [ "71","20/12/2016","09:00", "10:00", "Lemma di Abel (sommazione per parti). Criterio di Dirichlet per la convergenza di una serie. Alcuni esempi di utilizzo border-line dei numeri complessi."];
Lezioni[72] = [ "72","20/12/2016","10:00", "11:00", "Dipendenza di un integrale proprio/improprio dall'insieme di integrazione. Funzione Gamma di Eulero. Esempi di stime di primitive e code di integrali impropri."];
Lezioni[73] = [ "73","20/12/2016","16:00", "17:00", "Esercizi riassuntivi sul programma finora svolto che riguardano funzioni definite mediante integrali."];
Lezioni[74] = [ "74","28/02/2017","11:00", "12:00", "Introduzione alle equazioni differenziali: nomenclatura. [Audio molto incompleto]"];
Lezioni[75] = [ "75","28/02/2017","12:00", "13:00", "Introduzione alle equazioni differenziali: primi esempi di famiglie di soluzioni dipendenti da parametri, problema di Cauchy, enunciato dei teoremi di sola esistenza e di esistenza e unicità, esempio di non unicità (pennello di Peano). [Audio molto incompleto]"];
Lezioni[76] = [ "76","01/03/2017","09:00", "10:00", "Equazioni differenziali a variabili separabili: descrizione della procedura per determinare una soluzione ed esempi di applicazione. Studio della soluzione: intervallo massimale di esistenza, tempo di vita, eventuali blow up e break down."];
Lezioni[77] = [ "77","01/03/2017","10:00", "11:00", "Equazioni differenziali a variabili separabili: enunciato e dimostrazione del teorema di esistenza ed unicità. Discussione di un primo esempio con valori soglia."];
Lezioni[78] = [ "78","03/03/2017","09:00", "10:00", "Teoria generale delle equazioni differenziali lineari: struttura dello spazio delle soluzioni nel caso omogeneo e non omogeneo."];
Lezioni[79] = [ "79","03/03/2017","10:00", "11:00", "Equazioni differenziali lineari a coefficienti costanti: come determinare una base dello spazio delle soluzioni passando per le radici del polinomio caratteristico."];
Lezioni[80] = [ "80","07/03/2017","11:00", "12:00", "Equazioni differenziali lineari a coefficienti costanti non omogenee: ricerca per tentativi di una soluzione speciale in casi semplici (ad esempio con termini forzanti esponenziali, polinomiali, trigonometrici)."];
Lezioni[81] = [ "81","07/03/2017","12:00", "13:00", "Equazioni differenziali lineari a coefficienti costanti non omogenee: metodo di variazione delle costanti per la ricerca di una soluzione speciale. Equazioni differenziali lineari del primo ordine a coefficienti qualunque: formula risolutiva, sua giustificazione (mediante fattore integrante o variazione delle costanti), esempi di applicazione."];
Lezioni[82] = [ "82","08/03/2017","09:00", "10:00", "Esempi classici di studio di equazioni differenziali con parametri: equazione lineare del primo ordine con effetto soglia, oscillatore armonico con risonanza."];
Lezioni[83] = [ "83","08/03/2017","10:00", "11:00", "Esempi classici di studio di equazioni differenziali con parametri: blow up vs esistenza globale per rhs di tipo potenza, valori soglia. Ricerca degli autovalori della derivata seconda con condizioni al bordo nulle."];
Lezioni[84] = [ "84","10/03/2017","09:00", "10:00", "Introduzione alle successioni per ricorrenza. Successioni di ordine 1 lineari autonome: formula generale e sue giustificazioni. Successioni di ordine 2 lineari omogenee: formula generale (basata sulle radici del polinomio caratteristico)."];
Lezioni[85] = [ "85","10/03/2017","10:00", "11:00", "Interpretazione matriciale e polinomiale della formula per le successioni per ricorrenza lineari omogenee. Successioni per ricorrenza lineari non omogenee: ricerca euristica di una soluzione (analoga alle equazioni differenziali)."];
Lezioni[86] = [ "86","14/03/2017","11:00", "12:00", "Sistemi di equazioni differenziali vs equazioni singole di ordine superiore. Legami con autovalori ed autovettori nel caso lineare. Sistemi di successioni per ricorrenza lineari: riduzione ad una successione singola."];
Lezioni[87] = [ "87","14/03/2017","12:00", "13:00", "Introduzione alle successioni per ricorrenza non lineari autonome del primo ordine: primi esempi di studio mediante un piano basato sulla monotonia. Interpretazione grafica."];
Lezioni[88] = [ "88","15/03/2017","09:00", "10:00", "Successioni per ricorrenza autonome: studio mediante un piano basato sulla distanza dal presunto limite. Studio del comportamento di serie i cui termini generali sono successioni definite per ricorrenza."];
Lezioni[89] = [ "89","15/03/2017","10:00", "11:00", "Successioni per ricorrenza autonome spiraleggianti: studio mediante il piano basato sulla distanza dal presunto limite ed il piano basato sulle due sottosuccessioni."];
Lezioni[90] = [ "90","17/03/2017","09:00", "10:00", "Primi esempi di studio di successioni per ricorrenza non autonome: piani con la monotonia, con il rapporto, con limitatezza e carabinieri."];
Lezioni[91] = [ "91","17/03/2017","10:00", "11:00", "Ulteriori esempi di successioni per ricorrenza, autonome e non autonome."];
Lezioni[92] = [ "92","21/03/2017","11:00", "12:00", "Esempio di studio di una successione per ricorrenza non autonoma con un valore soglia."];
Lezioni[93] = [ "93","21/03/2017","12:00", "13:00", "Legami tra la stabilità dei punti fissi di una funzione e valore assoluto della derivata. Esempio di successione per ricorrenza senza limite (caos). Equazione logistica."];
Lezioni[94] = [ "94","22/03/2017","09:00", "10:00", "Liminf e limsup di successioni: definizione, primi esempi, caratterizzazione, rapporto con l'eventuale limite. Teorema del confronto e teorema dei carabinieri in versione liminf/limsup."];
Lezioni[95] = [ "95","22/03/2017","10:00", "11:00", "Dato un sottoinsieme dei reali, esiste una successione (volendo monotona) a valori nell'insieme che tende al sup. Teorema delle sottosuccessioni in versione liminf/limsup. Caratterizzazione di liminf/limsup come minlim/maxlim. Utilizzo di stime e sottosuccessioni per determinare liminf/limsup."];
Lezioni[96] = [ "96","24/03/2017","09:00", "10:00", "Criterio della radice, del rapporto e del rapporto--radice in versione liminf/limsup. Liminf/limsup del prodotto per una costante. Liminf/limsup della somma. Caso in cui uno dei due è un limite."];
Lezioni[97] = [ "97","24/03/2017","10:00", "11:00", "Liminf/limsup di funzioni: definizione, caratterizzazione come minlim/maxlim di successioni, priumi esempi."];
Lezioni[98] = [ "98","28/03/2017","11:00", "12:00", "Linguaggio topologico nella retta reale: parte interna, chiusura, frontiera, punti isolati, punti di accumulazione. Insiemi aperti e chiusi. Famiglie infinite di sottoinsiemi, e loro unione/intersezione."];
Lezioni[99] = [ "99","28/03/2017","12:00", "13:00", "Caratterizzazione della chiusura per successioni. Topologia relativa. Quattro facce della continuità: epsilon/delta, con le successioni, con i limiti, topologica. Equivalenza tra continuità epsilon/delta e continuità per successioni. Continuità della composizione di funzioni continue."];
Lezioni[100] = [ "100","29/03/2017","09:00", "10:00", "In un punto di massimo/minimo interno la derivata, se esiste, si annulla. Teoremi di Rolle, Cauchy, Lagrange. Controesempi e interpretazioni geometriche. [Audio inascoltabile]"];
Lezioni[101] = [ "101","29/03/2017","10:00", "11:00", "Enunciato e dimostrazione della formula di Taylor con resto di Peano e di Lagrange. [Audio incompleto]"];
Lezioni[102] = [ "102","04/04/2017","11:00", "12:00", "Dimostrazione dei teoremi di De L'Hôpital."];
Lezioni[103] = [ "103","04/04/2017","12:00", "13:00", "Teoremi di Stolz-Cesaro: enunciato, dimostrazione, esempi. Teorema delle medie di Cesaro. Criterio rapporto -> radice come applicazione di Stolz-Cesaro."];
Lezioni[104] = [ "104","05/04/2017","09:00", "10:00", "Teorema di Bolzano-Weierstrass. Definizione di insieme compatto (come chiuso e limitato). Dimostrazione del teorema di Weierstrass per funzioni continue su un compatto. Gli insiemi compatti ammettono max e min. Le funzioni continue non mandano chiusi in chiusi e limitati in limitati."];
Lezioni[105] = [ "105","05/04/2017","10:00", "11:00", "Funzioni semicontinue inferiormente e superiormente: definizione, caratterizzazione con le successioni, esempi. Teorema di Weierstrass per funzioni semicontinue. Cosa succede a liminf/limsup di una successione quando si applica una funzione."];
Lezioni[106] = [ "106","07/04/2017","09:00", "10:00", "Tre facce della compattezza: limitato e chiuso, compattezza per successioni, compattezza per ricoprimenti. Equivalenza tra le prime due. Le funzioni continue mandano compatti per successioni in compatti per successioni. Compatto per ricoprimenti implica limitato e chiuso."];
Lezioni[107] = [ "107","07/04/2017","10:00", "11:00", "Le funzioni continue mandano compatti per ricoprimenti in compatti per ricoprimenti. Lemma del raggio magico (numero di Lebesgue). Lemma dei distributori (esistenza della epsilon rete). Compatto per successioni implica compatto per ricoprimenti. Idea per dimostrazione alternativa del teorema di Weierstrass."];
Lezioni[108] = [ "108","11/04/2017","11:00", "12:00", "Definizione di successione di Cauchy e prime proprietà. Completezza dei numeri reali: dimostrazione via liminf/limsup e via Bolzano-Weierstrass. Equivalenza tra assioma di continuità e completezza e proprietà archimedea. [Audio inascoltabile]"];
Lezioni[109] = [ "109","11/04/2017","10:00", "11:00", "Funzioni uniformemente continue: definizione, commenti, prime proprietà. Lipschitzianità implica uniforme continuità."];
Lezioni[110] = [ "110","12/04/2017","09:00", "10:00", "Teorema di Heine-Cantor: enunciato e due dimostrazioni (per assurdo via compattezza per successioni, diretta via compattezza per ricoprimenti e raggio magico). Teorema di estensione: enunciato e dimostrazione."];
Lezioni[111] = [ "111","12/04/2017","10:00", "11:00", "Uniformemente continua in una semiretta implica sublineare. Continua in una semiretta più limite finito implica uniformemente continua. Esercizi sull'uniforme continuità."];
Lezioni[112] = [ "112","21/04/2017","09:00", "10:00", "Funzioni Holderiane: definizione, commenti, prime proprietà. Rapporti tra Lipschitzianità, Holderianità, uniforme continuità, continuità, sia su insiemi generali, sia su insiemi limitati."];
Lezioni[113] = [ "113","21/04/2017","10:00", "11:00", "Strategie per dimostrare che una funzione è (o non è) Lipschitziana/Holderiana/uniformemente continua. Holderianità vs Lipschitzianità di opportune potenze. Esempi di applicazione delle strategie."];
Lezioni[114] = [ "114","26/04/2017","09:00", "10:00", "Combinazioni convesse e sottoinsiemi convessi della retta. Funzioni convesse e strettamente convesse: definizione algebrica e significato geometrico. Caratterizzazioni delle funzioni convesse: lemma dei due e dei tre rapporti incrementali."];
Lezioni[115] = [ "115","26/04/2017","10:00", "11:00", "Funzioni convesse: legami tra convessità e crescenza della derivata prima (posto che questa esista), legami tra convessità e segno della derivata seconda (posto che questa esista). Continuità e locale lipschitzianità nella parte interna dell'insieme di definizione. Il max/sup di funzioni convesse è convessa."];
Lezioni[116] = [ "116","28/04/2017","09:00", "10:00", "Funzioni convesse: derivata destra e sinistra (definizioni, esistenza, relazione tra le due, monotonia, continuità a destra/sinistra). Caratterizzazione dei punti di derivabilità in termini di derivata destra/sinistra."];
Lezioni[117] = [ "117","28/04/2017","10:00", "11:00", "Disuguaglianze di convessità. Le funzioni convesse stanno sopra le rette tangenti (sia nel caso regolare, sia nel caso generale). Disuguaglianza di Jensen (dimostrazione induttiva e dimostrazione via retta tangente). Disuguaglianza di Bernoulli come disuguaglianza di convessità. Disuguaglianza di Young."];
Lezioni[118] = [ "118","02/05/2017","11:00", "12:00", "Disuguaglianza di Cauchy-Schwarz: dimostrazione classica e per omogeneità. Disuguaglianza di Holder con due o più specie. Medie p-esime e disuguaglianza tra le medie."];
Lezioni[119] = [ "119","02/05/2017","12:00", "13:00", "Complementi sulle funzioni convesse (punti di massimo/minimo, punti stazionari, semicontinuità superiore, prodotto di funzioni convesse). Legami tra integrabilità in senso improprio su una semiretta, limiti all’infinito, uniforme continuità."];
Lezioni[120] = [ "120","03/05/2017","09:00", "10:00", "Relazioni tra monotonia, iniettività, continuità. Lemma della sotto-sotto-successione. Continuità della funzione inversa (insieme di partenza compatto)."];
Lezioni[121] = [ "121","03/05/2017","10:00", "11:00", "Continuità della funzione inversa (insieme di partenza convesso). Derivata della funzione inversa. Ulteriore regolarità della funzione inversa e calcolo dei suoi polinomi di Taylor."];
Lezioni[122] = [ "122","04/05/2017","09:00", "10:00", "Ricapitolazione sui simboli di Landau: o piccolo, O grande, equivalenza asintotica. Rapporti tra le definizioni ed esempi."];
Lezioni[123] = [ "123","04/05/2017","10:00", "11:00", "Proprietà di Darboux delle derivate. Come dimostrare che una funzione è derivabile o non derivabile in un punto."];
Lezioni[124] = [ "124","09/05/2017","11:00", "12:00", "Formula di Stirling per l'approssimazione del fattoriale (equivalenza asintotica e stima dal basso) e prodotto di Wallis."];
Lezioni[125] = [ "125","09/05/2017","12:00", "13:00", "Stima dell'errore nel metodo dei trapezi per il calcolo approssimato di un integrale. Stima asintotica per l'integrale della potenza n-esima del seno. Calcolo dell'integrale gaussiano a partire dalla stima asintotica precedente."];
Lezioni[126] = [ "126","10/05/2017","09:00", "10:00", "Tre diverse definizioni di integrale: secondo Darboux unrestricted, secondo Darboux ortodossa, secondo Riemann. Integrabilità delle funzioni continue su un intervallo."];
Lezioni[127] = [ "127","10/05/2017","10:00", "11:00", "Dimostrazione dell'equivalenza tra le tre definizioni di integrale, ed in particolare del fatto che una funzione integrabile secondo Darboux è integrabile secondo Riemann."];
Lezioni[128] = [ "128","12/05/2017","09:00", "10:00", "Postilla alla dimostrazione dell'implicazione tra integrabilità alla Darboux e alla Riemann. Integrabilità del valore assoluto, del massimo/minimo e del prodotto di funzioni integrabili."];
Lezioni[129] = [ "129","12/05/2017","10:00", "11:00", "Proprietà di riordinamento e di raggruppamento per serie numeriche assolutamente convergenti. Teorema di riordinamento di Riemann (riordinamento di serie convergenti, ma non assolutamente convergenti)."];
Lezioni[130] = [ "130","16/05/2017","11:00", "12:00", "Dimostrazione della formula per la derivata della funzione composta. Moduli di continuità. Approssimazione di integrali mediante somme di Riemann: stima dell'errore in funzione del modulo di continuità."];
Lezioni[131] = [ "131","16/05/2017","12:00", "13:00", "Esempi di funzioni di classe C-infinito con tutte le derivate nulle in un punto. Raccordo C-infinito tra due costanti. Approssimazione di funzioni integrabili mediante funzioni di classe C-infinito. Dimostrazione dell'integrabilità di una funzione discontinua in un punto."];
Lezioni[132] = [ "132","17/05/2017","09:00", "10:00", "Definizioni formali degli insiemi numerici: numeri naturali via assiomi di Peano, interi via quoziente su coppie di naturali, razionali via quoziente su coppie di interi, reali via sezioni di Dedekind (o semirette sinistre) di razionali."];
Lezioni[133] = [ "133","17/05/2017","10:00", "11:00", "Funzioni elementari rivisitate: continuità e surgettività delle potenze ad esponente intero e delle relative inverse. Definizione dell'esponenziale via equazione funzionale, e sua monotonia e continuità. Accenno alla definizione delle funzioni trigonometriche via equazioni funzionali."];
Lezioni[134] = [ "134","19/05/2017","09:00", "10:00", "Densità dei naturali sulla circonferenza trigonometrica. Teorema di approssimazione di Dirichlet (approssimazione degli irrazionali mediante frazioni). Insiemi strani 1: accenno all'insieme di Cantor."];
Lezioni[135] = [ "135","19/05/2017","10:00", "11:00", "Insiemi strani 2: razionali ingrassati. Dimostrazione dell'irrazionalità del numero e. Serie armonica generalizzata ristretta agli interi che si scrivono in base 10 senza usare una data cifra. Divergenza della serie dei reciproci dei primi."];
