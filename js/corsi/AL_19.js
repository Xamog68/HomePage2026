var NomeCorso = "Algebra Lineare 2018/2019";
var ArchivioCorso = "AL/AL_19";
var PrefissoFile = "AL_19_L";
var Percorso = MEDIA.lezioni + "AL_19/AL_19_L";
var CifreNumeroLezione = 2;
var SchedaCorso = {
  nome: "Algebra Lineare",
  annoAccademico: "2018/2019",
  crediti: "6",
  target: "Corsi di Laurea in Ingegneria Elettronica e in Ingegneria delle Telecomunicazioni",
  anno: "Primo anno",
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "AL_19_Burocrazia.pdf",
    titolo: "Informazioni burocratiche"
  },
  {
    sezione: "burocrazia",
    file: "AL_19_Esame.pdf",
    titolo: "Regole d’esame"
  },
  {
    sezione: "burocrazia",
    file: "AL_19_Programma.pdf",
    titolo: "Programma dettagliato"
  },
  {
    sezione: "book",
    file: "AL_19_Book.pdf",
    titolo: "Algebra Lineare — Stampato integrale delle lezioni"
  }
];

var Lezioni = new Array();
Lezioni[1] = ["1", "28/09/2018", "13:30", "14:30", "Vettori geometrici nel piano cartesiano. Operazioni tra vettori: somma, prodotto per un numero, prodotto scalare, norma, distanza. Quadrato della norma della somma e della differenza di due vettori."];
Lezioni[2] = ["2", "28/09/2018", "14:30", "15:30", "Coordinate polari nel piano. Interpretazione geometrica del prodotto scalare (usando le coordinate polari o il teorema di Carnot). Disuguaglianza di Cauchy-Schwarz (dimostrazione algebrica e interpretazione geometrica). Calcolo dell'angolo tra due vettori."];
Lezioni[3] = ["3", "02/10/2018", "08:30", "09:30", "Rette nel piano: equazione cartesiana vs equazione parametrica. Passaggio da una rappresentazione all'altra. Significato dei coefficienti nei vari tipi di rappresentazione. Calcolo dell'angolo tra due rette."];
Lezioni[4] = ["4", "02/10/2018", "09:30", "10:30", "Introduzione ai sistemi lineari. Sistemi omogenei e non omogenei. Esempi con soluzione unica, nessuna soluzione, infinite soluzioni. Primi esempi di risoluzione."];
Lezioni[5] = ["5", "02/10/2018", "10:30", "11:30", "Matrici a scala e pivot. Algoritmo di Gauss. Interpretazione dei risultati dell'algoritmo di Gauss. Esempi di applicazione. Variante alla Jordan dell'algoritmo di Gauss."];
Lezioni[6] = ["6", "05/10/2018", "13:30", "14:30", "Mutua posizione di due rette nel piano. Intersezione di due rette nel piano (date in varia forma). Equazione parametrica di una retta nello spazio. Mutua posizione di due rette nello spazio."];
Lezioni[7] = ["7", "05/10/2018", "14:30", "15:30", "Piani nello spazio: equazione cartesiana e parametrica. Significato geometrico dei coefficienti nell'equazione cartesiana. Passaggio dalla parametrica alla cartesiana. Mutua posizione di due piani nello spazio."];
Lezioni[8] = ["8", "09/10/2018", "08:30", "09:30", "Matrici e operazioni tra matrici: somma, prodotto per un numero, trasposta, prodotto tra matrici. Interpretazione dei sistemi lineari in termini di matrici. Matrice nulla e matrice identica."];
Lezioni[9] = ["9", "09/10/2018", "09:30", "10:30", "Esercizi sulle matrici: proprietà matrice identica, trasposta del prodotto. Esercizi di geometria analitica: proiezione e distanza di un punto da una retta (nel piano e nello spazio) e da un piano (nello spazio), rette che formano un angolo dato con una retta assegnata."];
Lezioni[10] = ["10", "10/10/2018", "10:30", "11:30", "Esercizi di geometria analitica nello spazio: area di un triangolo, volume di un tetraedro, asse di un segmento, sfera con centro dato e passante per un punto dato, piano tangente ad una sfera, piano che contiene un punto ed una retta dati."];
Lezioni[11] = ["11", "12/10/2018", "14:30", "15:30", "Definizione di campo di numeri, di spazio vettoriale e sottospazio vettoriale. Esempi classici di campo e spazio vettoriale. Primi esempi di sottospazi vettoriali."];
Lezioni[12] = ["12", "12/10/2018", "15:30", "16:30", "Definizioni: combinazione lineare, Span, sistema di generatori, vettori linearmente indipendenti e dipendenti, base. Esempi di verifica che alcuni sottoinsiemi sono basi."];
Lezioni[13] = ["13", "16/10/2018", "08:30", "09:30", "Teorema di esistenza della base. Tutte le basi hanno lo stesso numero di elementi. Come ottenere basi per eliminazione da un sistema di generatori o aggiungendo elementi ad un insieme di vettori linearmente indipendenti. Lemma di eliminazione."];
Lezioni[14] = ["14", "16/10/2018", "09:30", "10:30", "Ordine logico di dimostrazione delle proprietà delle basi. Dimostrazione del lemma di sostituzione. Esempio di spazio vettoriale di dimensione infinita. Esempi di basi e componenti in spazi vettoriali."];
Lezioni[15] = ["15", "16/10/2018", "10:30", "11:30", "Intersezione e somma di sottospazi vettoriali. Somma diretta di sottospazi e componenti di un vettore rispetto ad una somma diretta. Formula di Grassmann."];
Lezioni[16] = ["16", "19/10/2018", "13:30", "14:30", "Sottospazi vettoriali: rappresentazione cartesiana e parametrica. Esercizi sui sottospazi vettoriali: passaggio dalla forma cartesiana a quella parametrica, calcolo della base e della dimensione, della somma ed intersezione."];
Lezioni[17] = ["17", "19/10/2018", "14:30", "15:30", "Applicazioni lineari: definizione e primi esempi. Teorema di struttura. Matrice associata ad un'applicazione lineare dopo aver scelto basi in partenza ed arrivo."];
Lezioni[18] = ["18", "23/10/2018", "08:30", "09:30", "Esempi di costruzione ed utilizzo della matrice associata ad un'applicazione lineare. Matrice di cambio di base: costruzione ed utilizzo."];
Lezioni[19] = ["19", "23/10/2018", "09:30", "10:30", "Ker e immagine di un'applicazione lineare. Teorema rank-nullity (relazione tra le dimensioni di ker, immagine e spazio di partenza). Conseguenze in termini di iniettività e surgettività."];
Lezioni[20] = ["20", "23/10/2018", "10:30", "11:30", "Interpretazione dei sistemi lineari in termini di combinazioni lineari di colonne: legami con span, lineare indipendenza, generatori. Interpretazione dei sistemi lineari in termini di ker e immagine di un'opportuna applicazione lineare."];
Lezioni[21] = ["21", "26/10/2018", "13:30", "14:30", "Matrice inversa: quando esiste e come si calcola con l'algoritmo alla Gauss-Jordan. Giustificazione dell'algoritmo. Inversa del prodotto e della trasposta. Uso delle matrici inverse nei cambi di base."];
Lezioni[22] = ["22", "26/10/2018", "14:30", "15:30", "Struttura dell'insieme delle soluzioni di un sistema lineare non omogeneo (soluzione qualunque più soluzione generica dell'omogeneo). Esercizi sulla matrice associata ad un'applicazione lineare e a cambi di base."];
Lezioni[23] = ["23", "30/10/2018", "08:30", "09:30", "Introduzione ai determinanti: obiettivi, definizione assiomatica, prime proprietà (alternanza e annullamento nel caso di vettori linearmente dipendenti). Enunciato del teorema di esistenza ed unicità. Caso 2*2 con interpretazione geometrica."];
Lezioni[24] = ["24", "30/10/2018", "09:30", "10:30", "Determinante nel caso 3*3: regola di Sarrus e interpretazione geometrica. Determinante e algoritmo di Gauss. Determinante di matrici diagonali e triangolari superiori. Unicità del determinante via algoritmo di Gauss."];
Lezioni[25] = ["25", "30/10/2018", "10:30", "11:30", "Sottomatrici e minori. Sviluppi di Laplace (ricorsivi) per colonne e per righe. Enunciato dell'esistenza del determinante via sviluppi per colonne. Dimostrazione che gli sviluppi per righe coincidono con quelli per colonne. Determinante della matrice trasposta."];
Lezioni[26] = ["26", "02/11/2018", "13:30", "14:30", "Descrizione dello sviluppo di Leibnitz (con le permutazioni) del determinante. Teorema di Binet (il determinante del prodotto è il prodotto dei determinanti). Determinante della matrice inversa. Utilizzo dei determinanti per dimostrare la lineare indipendenza di vettori."];
Lezioni[27] = ["27", "02/11/2018", "14:30", "15:30", "Formula per i vettori perpendicolari e sua interpretazione con i determinanti. Formula di Cramer per la risoluzione di un sistema lineare. Formula per la matrice inversa con i determinanti."];
Lezioni[28] = ["28", "06/11/2018", "08:30", "09:30", "Rango di una matrice. Dimostrazione completa dell'equivalenza tra R-rango, C-rango, D-rango. Rango ed algoritmo di Gauss. Pivot e rango delle matrici a scala."];
Lezioni[29] = ["29", "06/11/2018", "09:30", "10:30", "Rango e sistemi lineari: teorema di Rouché-Capelli. Esempi di studio di sistemi lineari dipendenti da parametri."];
Lezioni[30] = ["30", "06/11/2018", "10:30", "11:30", "Esercizi misti con utilizzo di rango e determinanti."];
Lezioni[31] = ["31", "12/11/2018", "13:30", "14:30", "Basi ortogonali e ortonormali. Componenti di un vettore rispetto a tali basi. Procedimento di ortogonalizzazione di Gram-Schmidt."];
Lezioni[32] = ["32", "12/11/2018", "14:30", "15:30", "Ortogonale di un sottospazio e sue proprietà. Proiezione ortogonale su un sottospazio. Esempi di calcolo di basi ortogonali e di ortogonali di sottospazi."];
Lezioni[33] = ["33", "13/11/2018", "08:30", "09:30", "Matrici ortogonali: caratterizzazione e proprietà. Struttura delle matrici ortogonali 2*2. Trucco per velocizzare il calcolo dell'inversa di una matrice con righe o colonne ortogonali."];
Lezioni[34] = ["34", "13/11/2018", "09:30", "10:30", "Introduzione alle forme canoniche. Forma canonica di un'applicazione lineare potendo scegliere basi a piacere in partenza ed arrivo (dipende solo dal rango)."];
Lezioni[35] = ["35", "13/11/2018", "10:30", "11:30", "Introduzione motivazionale alle forme canoniche per applicazioni da uno spazio in sé (stessa base in partenza ed arrivo): autovalori, autovettori, autospazio, esempio di diagonalizzazione 2*2."];
Lezioni[36] = ["36", "19/11/2018", "13:30", "14:30", "Definizione di matrici simili e problema della diagonalizzazione. Molteplicità delle radici di un polinomio, e relazione tra i coefficienti e la somma/prodotto delle radici. Molteplicità algebrica e geometrica di un autovalore. Condizioni necessarie/sufficienti per la diagonalizzabilità."];
Lezioni[37] = ["37", "19/11/2018", "14:30", "15:30", "Principali proprietà del polinomio caratteristico. Condizione sufficiente per la diagonalizzabilità (il polinomio caratteristico ha n radici distinte). Relazione tra molteplicità algebrica e geometrica di un autovalore."];
Lezioni[38] = ["38", "20/11/2018", "08:30", "09:30", "Autovettori corrispondenti ad autovalori distinti sono linearmente indipendenti. Dimostrazione della condizione necessaria e sufficiente per la diagonalizzabilità."];
Lezioni[39] = ["39", "20/11/2018", "09:30", "10:30", "Spazio delle matrici simmetriche. Applicazioni lineari simmetriche. Un'applicazione è simmetrica se e solo se ha matrice simmetrica rispetto ad una qualunque base ortonormale. Enunciato del teorema spettrale per applicazioni e matrici simmetriche. Dimostrazione delle implicazioni facili."];
Lezioni[40] = ["40", "20/11/2018", "10:30", "11:30", "Lemmi classici sulle applicazioni simmetriche: autovettori corrispondenti ad autovalori distinti sono ortogonali, l'ortogonale di un sottospazio invariante è a sua volta invariante, gli autovalori sono reali. Dimostrazione del teorema spettrale. Esempi di diagonalizzazione."];
Lezioni[41] = ["41", "23/11/2018", "13:30", "14:30", "Blocchi e matrici di Jordan complesse. Ogni matrice quadrata complessa è simile ad una matrice di Jordan complessa. Blocchi e matrici di Jordan reali. Ogni matrice quadrata reale è simile ad una matrice di Jordan reale. Descrizione dell'algoritmo per passare dalla forma di Jordan complessa a quella reale."];
Lezioni[42] = ["42", "23/11/2018", "14:30", "15:30", "Esempi di calcolo di forme caniche di matrici. Come trovare la matrice di passaggio alla forma di Jordan reale conoscendo la matrice di passaggio alla forma di Jordan complessa."];
Lezioni[43] = ["43", "27/11/2018", "08:30", "09:30", "Introduzione alle forme quadratiche: definizione, matrice associata, forme (semi)definite positive/negative, indici di inerzia. Primi esempi di studio del segno di una forma quadratica."];
Lezioni[44] = ["44", "27/11/2018", "09:30", "10:30", "Metodi per trovare la segnatura di una forma quadratica: segno degli autovalori e completamento dei quadrati. Utilizzo del completamento dei quadrati per trovare sottospazi di dimensione opportuna su cui una forma quadratica è definita positiva/negativa."];
Lezioni[45] = ["45", "27/11/2018", "10:30", "11:30", "Metodi per trovare la segnatura di una forma quadratica: regola di Cartesio per il segno delle radici di un polinomio e metodo dei minori orlati di Sylvester. Possibilità di procedere in varie direzioni nell'utilizzo del metodo di Sylvester."];
Lezioni[46] = ["46", "30/11/2018", "13:30", "14:30", "Dimostrazione del legame tra il segno degli autovalori e indici di inerzia di una forma quadratica. Esempi di utilizzo del metodo di Sylvester anche in presenza di determinanti nulli strada facendo."];
Lezioni[47] = ["47", "30/11/2018", "14:30", "15:30", "Teorema di Hamilton-Cayley: enunciato e dimostrazione nel caso diagonalizzabile. Polinomio minimo: definizione e suoi legami con il polinomio caratteristico e la forma di Jordan."];
Lezioni[48] = ["48", "04/12/2018", "08:30", "09:30", "Definizione astratta di prodotto scalare. Matrice associata ad un prodotto scalare. Forma quadratica associata ad un prodotto scalare. Esempi di prodotto scalare in spazi di polinomi."];
Lezioni[49] = ["49", "04/12/2018", "09:30", "10:30", "Come varia la matrice associata ad un prodotto scalare quando si cambia base: matrici congruenti. Algoritmo di Gram-Schmidt per un prodotto scalare qualunque definito positivo. Teorema di Sylvester (Sylvester's law of inertia). Esempio di passaggio alla forma alla Sylvester per un prodotto scalare definito positivo."];
Lezioni[50] = ["50", "04/12/2018", "10:30", "11:30", "Componenti di un vettore rispetto ad una base ortogonale per un prodotto scalare generale. Applicazioni simmetriche rispetto ad un prodotto scalare generale e relativo teorema spettrale. Calcolo della forma alla Sylvester per un prodotto scalare non definito positivo."];
Lezioni[51] = ["51", "07/12/2018", "13:30", "14:30", "Introduzione alla geometria affine. Equazioni parametriche e cartesiane di sottospazi affini. Trasformazioni affini e loro composizioni. Traslazioni e omotetie."];
Lezioni[52] = ["52", "07/12/2018", "14:30", "15:30", "Teorema di struttura delle isometrie nello spazio n-dimensionale. Rotazioni nel piano, rispetto all'origine e rispetto ad un punto generico."];
Lezioni[53] = ["53", "11/12/2018", "08:30", "09:30", "Matrici 2*2 ortogonali e relative isometrie del piano. Classificazione delle isometrie del piano sulla base del luogo dei punti fissi. Esempi di classificazione di isometrie nel piano."];
Lezioni[54] = ["54", "11/12/2018", "09:30", "10:30", "Simmetria rispetto ad una retta data. Rotazione di un angolo dato intorno ad un punto dato. Calcolo di immagine e controimmagine di rette mediante isometrie del piano."];
Lezioni[55] = ["55", "11/12/2018", "10:30", "11:30", "Classificazione delle matrici 3*3 ortogonali e relative isometrie dello spazio. Simmetria rispetto ad un piano passante per l'origine. Esempi di classificazione di isometrie lineari dello spazio."];
Lezioni[56] = ["56", "14/12/2018", "13:30", "14:30", "Classificazione delle isometrie dello spazio sulla base del luogo dei punti fissi. Esempi di scrittura di isometrie dello spazio sulla base della loro descrizione geometrica."];
Lezioni[57] = ["57", "14/12/2018", "14:30", "15:30", "Esercizi misti sulle isometrie del piano e dello spazio."];
Lezioni[58] = ["58", "18/12/2018", "08:30", "09:30", "Orientazione di una base in uno spazio vettoriale. Scrittura dell'espressione di una rotazione rispetto ad un asse, con attenzione al verso di rotazione. Come calcolare il volume del tetraedro."];
Lezioni[59] = ["59", "18/12/2018", "09:30", "10:30", "Rette sghembe nello spazio: come trovare la distanza, i punti di minima distanza, ed un piano che contiene la prima e non interseca la seconda. Semplici esempi di studio di ellissi in posizione non canonica."];
Lezioni[60] = ["60", "18/12/2018", "10:30", "11:30", "Cambi di basi ed algoritmo jpeg (o mp3)."];
