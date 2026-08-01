var NomeCorso = "Algebra Lineare 2014/2015";
var ArchivioCorso = "AL/AL_15";
var PrefissoFile = "AL_15_L";
var Percorso = MEDIA.lezioni + "AL_15/AL_15_L";
var CifreNumeroLezione = 2;
var SchedaCorso = {
  nome: "Algebra Lineare",
  annoAccademico: "2014/2015",
  crediti: "6",
  target: "Corsi di Laurea in Ingegneria Elettronica e in Ingegneria delle Telecomunicazioni",
  anno: "Primo anno",
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "AL_15_Burocrazia.pdf",
    titolo: "Informazioni burocratiche",
    nota: "versione aggiornata al 24/09/2014"
  },
  {
    sezione: "burocrazia",
    file: "AL_15_Esame.pdf",
    titolo: "Regole d’esame",
    nota: "versione aggiornata al 26/09/2014"
  },
  {
    sezione: "book",
    file: "AL_15_Book.pdf",
    titolo: "Algebra Lineare — Stampato integrale delle lezioni"
  }
];

var Lezioni = new Array();
Lezioni[1] = ["1", "01/10/2014", "08:30", "09:30", "Vettori geometrici nel piano cartesiano. Operazioni tra vettori: somma, prodotto per un numero, prodotto scalare, norma, distanza."];
Lezioni[2] = ["2", "01/10/2014", "09:30", "10:30", "Coordinate polari nel piano. Interpretazione geometrica del prodotto scalare (usando le coordinate polari o il teorema di Carnot). Disuguaglianza di Cauchy-Schwarz."];
Lezioni[3] = ["3", "01/10/2014", "10:30", "11:30", "Rette nel piano: equazione cartesiana vs equazione parametrica. Significato dei coefficienti nei vari tipi di rappresentazione."];
Lezioni[4] = ["4", "03/10/2014", "13:30", "14:30", "Introduzione ai sistemi lineari. Esempi con soluzione unica, nessuna soluzione, infinite soluzioni. Algoritmo di Gauss."];
Lezioni[5] = ["5", "03/10/2014", "14:30", "15:30", "Matrici a scala e pivot. Interpretazione dei risultati dell'algoritmo di Gauss. Esempi di applicazione. Variante alla Jordan dell'algoritmo di Gauss."];
Lezioni[6] = ["6", "08/10/2014", "08:30", "09:30", "Geometria analitica nello spazio. Equazione parametrica della retta nello spazio. Mutua posizione di due rette nello spazio."];
Lezioni[7] = ["7", "08/10/2014", "09:30", "10:30", "Piani nello spazio: equazione cartesiana e parametrica. Significato geometrico dei coefficienti nell'equazione cartesiana. Passaggio dalla parametrica alla cartesiana."];
Lezioni[8] = ["8", "08/10/2014", "10:30", "11:30", "Intersezione di due rette nel piano (date in varia forma) e nello spazio, intersezione di due piani nello spazio, intersezione di una retta ed un piano nello spazio."];
Lezioni[9] = ["9", "10/10/2014", "13:30", "14:30", "Matrici e operazioni tra matrici: somma, prodotto per un numero, prodotto tra matrici. Trasposta di una matrice. Interpretazione dei sistemi lineari in termini di matrici."];
Lezioni[10] = ["10", "10/10/2014", "14:30", "15:30", "Esercizi di geometria analitica nello spazio: area di un triangolo, volume di un tetraedro, piede dell'altezza di un triangolo. Sistemi lineari n*n."];
Lezioni[11] = ["11", "15/10/2014", "08:30", "09:30", "Definizione di campo di numeri, di spazio vettoriale e sottospazio vettoriale. Esempi classici di campo e spazio vettoriale. Primi esempi di sottospazi vettoriali."];
Lezioni[12] = ["12", "15/10/2014", "09:30", "10:30", "Definizioni: combinazione lineare, Span, sistema di generatori, vettori linearmente indipendenti e dipendenti, base, dimensione. Basi canoniche e dimensione degli spazi vettoriali classici. Esempio di spazio di dimensione infinita."];
Lezioni[13] = ["13", "15/10/2014", "10:30", "11:30", "Componenti di un vettore rispetto ad una base. Esempi di basi e calcolo di componenti. Interpretazione dei sistemi lineari in termini di combinazioni lineari di colonne."];
Lezioni[14] = ["14", "22/10/2014", "08:30", "09:30", "Teorema di esistenza della base. Tutte le basi hanno lo stesso numero di elementi. Come ottenere basi per eliminazione da un sistema di generatori o aggiungendo elementi ad un insieme di vettori linearmente indipendenti."];
Lezioni[15] = ["15", "22/10/2014", "09:30", "10:30", "Intersezione e somma di sottospazi vettoriali. Formula di Grassmann."];
Lezioni[16] = ["16", "22/10/2014", "10:30", "11:30", "Presentazione cartesiana e parametrica di un sottospazio vettoriale. Esempi di sottospazi vettoriali descritti in vario modo e relative basi e dimensione."];
Lezioni[17] = ["17", "24/10/2014", "13:30", "14:30", "Applicazioni lineari. Teorema di struttura. Matrice associata ad un'applicazione lineare dopo aver scelto basi in partenza ed arrivo."];
Lezioni[18] = ["18", "24/10/2014", "14:30", "15:30", "Esempi di costruzione della matrice associata ad un'applicazione lineare. Costruzione di una matrice di cambio di base."];
Lezioni[19] = ["19", "29/10/2014", "08:30", "09:30", "Ker e immagine di un'applicazione lineare. Teorema rank-nullity (relazione tra le dimensioni di ker, immagine e spazio di partenza). Conseguenze in termini di iniettività e surgettività."];
Lezioni[20] = ["20", "29/10/2014", "09:30", "10:30", "Interpretazione dei sistemi lineari in termini di ker e immagine. Struttura dell'insieme delle soluzioni di un sistema lineare non omogeneo (soluzione qualunque più soluzione generica dell'omogeneo)."];
Lezioni[21] = ["21", "29/10/2014", "10:30", "11:30", "Matrice inversa: quando esiste e come si calcola con l'algoritmo alla Gauss-Jordan. Giustificazione dell'algoritmo. Uso delle matrici inverse nei cambi di base."];
Lezioni[22] = ["22", "31/10/2014", "13:30", "14:30", "Dimostrazione del \"teorema di sostituzione\" (punto di partenza per i teoremi su basi e dimensione di spazi vettoriali). Esercizi sulla matrice associata ad un'applicazione lineare."];
Lezioni[23] = ["23", "31/10/2014", "14:30", "15:30", "Proprietà della matrice trasposta ed inversa. Esercizi misti su sottospazi vettoriali e cambi di base."];
Lezioni[24] = ["24", "05/11/2014", "08:30", "09:30", "Introduzione ai determinanti: obiettivi, definizione assiomatica, prime proprietà (alternanza e annullamento nel caso di vettori linearmente dipendenti). Enunciato del teorema di esistenza ed unicità. Caso 2*2 con interpretazione geometrica."];
Lezioni[25] = ["25", "05/11/2014", "09:30", "10:30", "Determinante nel caso 3*3: regola di Sarrus e interpretazione geometrica. Determinante e algoritmo di Gauss. Determinante di matrici diagonali e triangolari superiori. Unicità del determinante via algoritmo di Gauss."];
Lezioni[26] = ["26", "05/11/2014", "10:30", "11:30", "Sottomatrici e minori. Sviluppi di Laplace (ricorsivi) per colonne e per righe. Enunciato dell'esistenza del determinante via sviluppi per colonne. Dimostrazione che gli sviluppi per righe coincidono con quelli per colonne. Determinante della matrice trasposta."];
Lezioni[27] = ["27", "07/11/2014", "13:30", "14:30", "Descrizione dello sviluppo di Leibnitz (con le permutazioni) del determinante. Teorema di Binet (enunciato e parte della dimostrazione). Regola di Cramer per i sistemi lineari."];
Lezioni[28] = ["28", "07/11/2014", "14:30", "15:30", "Dimostrazione del teorema di Binet e della formula di Cramer. Formula per la matrice inversa con i determinanti. Formula per i vettori perpendicolari e sua interpretazione con i determinanti. Formule per il volume del tetraedro."];
Lezioni[29] = ["29", "10/11/2014", "16:30", "17:30", "Rango di una matrice. Dimostrazione completa dell'equivalenza tra R-rango, C-rango, D-rango. Rango ed algoritmo di Gauss. Pivot e rango delle matrici a scala."];
Lezioni[30] = ["30", "10/11/2014", "17:30", "18:30", "Rango e sistemi lineari: teorema di Rouché-Capelli. Esempi di utilizzo del rango nella risoluzione di esercizi."];
Lezioni[31] = ["31", "12/11/2014", "08:30", "09:30", "Basi ortogonali e ortonormali. Componenti di un vettore rispetto a tali basi. Procedimento di ortogonalizzazione di Gram-Schmidt."];
Lezioni[32] = ["32", "12/11/2014", "09:30", "10:30", "Ortogonale di un sottospazio e sue proprietà. Esempi di calcolo di basi ortogonali e di ortogonali di sottospazi."];
Lezioni[33] = ["33", "12/11/2014", "10:30", "11:30", "Matrici ortogonali e loro proprietà. Proiezione ortogonale su un sottospazio."];
Lezioni[34] = ["34", "13/11/2014", "16:30", "17:30", "Struttura delle matrici ortogonali 2*2. Esercizi su matrici ortogonali, basi ortogonali e ortonormali, applicazioni lineari e matrici di cambio di base."];
Lezioni[35] = ["35", "19/11/2014", "08:30", "09:30", "Forma canonica di un'applicazione lineare potendo scegliere basi a piacere in partenza ed arrivo (dipende solo dal rango)."];
Lezioni[36] = ["36", "19/11/2014", "09:30", "10:30", "Introduzione motivazionale alle forme canoniche per applicazioni da uno spazio in sé (stessa base in partenza ed arrivo): matrici simili, autovalori, autovettori, autospazio, esempio di diagonalizzazione 2*2."];
Lezioni[37] = ["37", "19/11/2014", "10:30", "11:30", "Prime proprietà delle matrici simili. Polinomio caratteristico ed autovalori. Molteplicità algebrica e geometrica. Disuguaglianza tra le molteplicità."];
Lezioni[38] = ["38", "21/11/2014", "13:30", "14:30", "Richiami su coefficienti di un polinomio vs somma e prodotto delle radici. Coefficienti del polinomio caratteristico di una matrice. Autovalori relativi ad autovettori distinti sono linearmente indipendenti."];
Lezioni[39] = ["39", "21/11/2014", "14:30", "15:30", "Condizione necessaria e sufficiente per la diagonalizzabilità sui reali o sui complessi. Condizione solo necessaria. Descrizione dei blocchi di Jordan e della forma canonica di Jordan sui reali e sui complessi."];
Lezioni[40] = ["40", "22/11/2014", "09:00", "10:00", "Applicazioni lineari simmetriche vs matrici simmetriche. Enunciato del teorema spettrale in termini di applicazioni ed in termini di matrici. Autovettori relativi ad autovalori distinti  (di applicazioni simmetriche) sono ortogonali."];
Lezioni[41] = ["41", "22/11/2014", "10:00", "11:00", "Dimostrazione del teorema spettrale (via esistenza di almeno un autovalore reale ed invarianza dell'ortogonale di un sottospazio invariante). Riassunto su diagonalizzazione/Jordanizzazione."];
Lezioni[42] = ["42", "22/11/2014", "11:00", "12:00", "Esempi ed esercizi sulle forme canoniche."];
Lezioni[43] = ["43", "26/11/2014", "08:30", "09:30", "Introduzione alle forme quadratiche: definizione, matrice associata, forme (semi)definite positive/negative, segnatura come terna di numeri."];
Lezioni[44] = ["44", "26/11/2014", "09:30", "10:30", "Descrizione dei metodi per trovare la segnatura di una forma quadratica: segno degli autovalori, completamento dei quadrati, minori orlati di Sylvester (in vario ordine), Cartesio."];
Lezioni[45] = ["45", "26/11/2014", "10:30", "11:30", "Ricerca di sottospazi di dimensione opportuna su cui una forma quadratica è definita positiva/negativa (via completamento dei quadrati). Dimostrazione del legame tra segnatura e segno degli autovalori della matrice associata."];
Lezioni[46] = ["46", "28/11/2014", "13:30", "14:30", "Dimostrazione dell'esistenza di un polinomio che annulla una matrice. Polinomio minimo di una matrice. Enunciato del teorema di Hamilton-Cayley. Proprietà del polinomio minimo e suoi legami con i blocchi di Jordan."];
Lezioni[47] = ["47", "28/11/2014", "14:30", "15:30", "Forma di Jordan reale vs forma di Jordan complessa: come ottenere la prima dalla seconda e come ottenere la matrice di cambio di base che porta nella prima da quella che porta nella seconda."];
Lezioni[48] = ["48", "03/12/2014", "08:30", "09:30", "Definizione astratta di prodotto scalare. Matrice associata ad un prodotto scalare. Forma quadratica associata ad un prodotto scalare. Come varia la matrice associata ad un prodotto scalare quando si cambia base: matrici congruenti."];
Lezioni[49] = ["49", "03/12/2014", "09:30", "10:30", "Algoritmo di Gram-Schmidt per un prodotto scalare qualunque definito positivo. Teorema di Sylvester (Sylvester's law of inertia). Esempio di passaggio alla forma alla Sylvester per un prodotto scalare non definito positivo."];
Lezioni[50] = ["50", "03/12/2014", "10:30", "11:30", "Esempio di funzioni ortogonali rispetto ad un prodotto scalare definito tramite integrale. Applicazioni simmetriche rispetto ad un prodotto scalare generale e relativo teorema spettrale. Esempio di calcolo dell'ortogonale di un sottospazio."];
Lezioni[51] = ["51", "05/12/2014", "13:30", "14:30", "Introduzione alla geometria affine. Equazioni parametriche e cartesiane di sottospazi affini. Trasformazioni affini e loro composizioni. Traslazioni e omotetie, rispetto all'origine e rispetto ad un punto generico."];
Lezioni[52] = ["52", "05/12/2014", "14:30", "15:30", "Teorema di struttura delle isometrie nello spazio n-dimensionale. Rotazioni nel piano. Interpretazione dei blocchi di Jordan reali come composizione di una rotazione ed un'omotetia."];
Lezioni[53] = ["53", "10/12/2014", "08:30", "09:30", "Classificazione delle isometrie del piano sulla base del luogo dei punti fissi. Esempi di calcolo dell'immagine e della controimmagine di punti e rette rispetto ad un'isometria del piano."];
Lezioni[54] = ["54", "10/12/2014", "09:30", "10:30", "Esercizi sulle isometrie del piano."];
Lezioni[55] = ["55", "10/12/2014", "10:30", "11:30", "Introduzione alle isometrie dello spazio. Classificazione delle matrici 3*3 ortogonali. Simmetria rispetto ad un piano passante per l'origine."];
Lezioni[56] = ["56", "17/12/2014", "08:30", "09:30", "Matrici ortogonali che rappresentano (nello spazio) la simmetria rispetto ad un piano o la rotazione rispetto ad una retta (entrambi passanti per l'origine)."];
Lezioni[57] = ["57", "17/12/2014", "09:30", "10:30", "Matrici che rappresentano una rotazione rispetto ad una retta seguita dalla simmetria rispetto al piano ortogonale alla retta stessa. Classificazione delle isometrie dello spazio sulla base del luogo dei punti fissi."];
Lezioni[58] = ["58", "17/12/2014", "10:30", "11:30", "Esercizi sulle isometrie dello spazio. Rette sghembe nello spazio: come trovare la distanza, i punti di minima distanza, ed un piano che contiene la prima e non interseca la seconda."];
Lezioni[59] = ["59", "19/12/2014", "13:30", "14:30", "Semplici esempi di studio di ellissi ed iperboli nel piano (non in forma canonica). Esponenziali e funzioni trascendenti di matrici."];
Lezioni[60] = ["60", "19/12/2014", "14:30", "15:30", "Cambi di basi ed algoritmo jpeg (o mp3)."];
