var NomeCorso = "Algebra Lineare 2021/2022";
var ArchivioCorso = "AL/AL_22";
var PrefissoFile = "AL_22_L";
var Percorso = MEDIA.lezioni + "AL_22/AL_22_L";
var CifreNumeroLezione = 2;
var SchedaCorso = {
  nome: "Algebra Lineare",
  annoAccademico: "2021/2022",
  crediti: "6",
  target: "Corsi di Laurea in Ingegneria Elettronica e in Ingegneria delle Telecomunicazioni",
  anno: "Primo anno",
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "AL_22_Burocrazia.pdf",
    titolo: "Informazioni burocratiche"
  },
  {
    sezione: "burocrazia",
    file: "AL_22_Esame.pdf",
    titolo: "Regole d’esame"
  },
  {
    sezione: "burocrazia",
    file: "AL_22_Programma.pdf",
    titolo: "Programma dettagliato"
  },
  {
    sezione: "book",
    file: "AL_22_Book.pdf",
    titolo: "Algebra Lineare — Stampato integrale delle lezioni"
  }
];

var Lezioni = new Array();
Lezioni[1] = ["1", "28/09/2021", "09:30", "10:30", "Vettori geometrici nel piano cartesiano. Operazioni tra vettori: somma, prodotto per un numero, prodotto scalare, norma, distanza. Quadrato della norma della somma e della differenza di due vettori."];
Lezioni[2] = ["2", "28/09/2021", "10:30", "11:30", "Coordinate polari nel piano. Interpretazione geometrica del prodotto scalare (usando le coordinate polari o il teorema di Carnot). Disuguaglianza di Cauchy-Schwarz (dimostrazione algebrica e interpretazione geometrica). Calcolo dell'angolo tra due vettori."];
Lezioni[3] = ["3", "28/09/2021", "11:30", "12:30", "Rette nel piano: equazione cartesiana vs equazione parametrica. Passaggio da una rappresentazione all'altra. Significato dei coefficienti nei vari tipi di rappresentazione. Calcolo dell'angolo tra due rette."];
Lezioni[4] = ["4", "01/10/2021", "14:00", "15:00", "Introduzione ai sistemi lineari. Sistemi omogenei e non omogenei. Esempi con soluzione unica, nessuna soluzione, infinite soluzioni. Primi esempi di risoluzione."];
Lezioni[5] = ["5", "01/10/2021", "15:00", "16:00", "Matrici a scala e pivot. Algoritmo di Gauss. Interpretazione dei risultati dell'algoritmo di Gauss. Esempi di applicazione. Variante alla Jordan dell'algoritmo di Gauss."];
Lezioni[6] = ["6", "05/10/2021", "09:30", "10:30", "Mutua posizione di due rette nel piano. Intersezione di due rette nel piano (date in varia forma). Equazione parametrica di una retta nello spazio. Mutua posizione di due rette nello spazio. Angolo tra due rette (nel piano e nello spazio)."];
Lezioni[7] = ["7", "05/10/2021", "10:30", "11:30", "Piani nello spazio: equazione cartesiana e parametrica. Significato geometrico dei coefficienti nell'equazione cartesiana. Passaggio dalla cartesiana alla parametrica e viceversa. Formula per determinare un vettore nello spazio perpendicolare a due vettori dati. Mutua posizione di due piani nello spazio."];
Lezioni[8] = ["8", "05/10/2021", "11:30", "12:30", "Mutua posizione di una retta ed un piano nello spazio. Calcolo dell'angolo tra una retta ed un piano. Distanza di un punto da una retta nel piano. Distanza di un punto da un piano e da una retta nello spazio."];
Lezioni[9] = ["9", "07/10/2021", "14:00", "15:00", "Matrici e operazioni tra matrici: somma, prodotto per un numero, trasposta, prodotto tra matrici. Matrice identica e sue proprietà. Prodotto di un vettore riga per un vettore colonna."];
Lezioni[10] = ["10", "07/10/2021", "15:00", "16:00", "La trasposta del prodotto è il prodotto delle trasposte (in ordine inverso). Interpretazione dei sistemi lineari in termini di matrici. Esercizi di geometria analitica: varie formule per l'area di un triangolo dati i vertici, rette che formano un angolo dato con una retta assegnata."];
Lezioni[11] = ["11", "12/10/2021", "09:30", "10:30", "Definizione di campo di numeri e di spazio vettoriale. Esempi classici di campo e spazio vettoriale. Sottospazi vettoriali: definizione e primi esempi."];
Lezioni[12] = ["12", "12/10/2021", "10:30", "11:30", "Definizioni: combinazione lineare, Span, sistema di generatori, vettori linearmente indipendenti e dipendenti, base. Esempi di verifica che alcuni sottoinsiemi sono basi. Lo Span è un sottospazio vettoriale. Componenti di un vettore rispetto ad una base: definizione ed unicità."];
Lezioni[13] = ["13", "12/10/2021", "11:30", "12:30", "Spazi di dimensione finita. Esempio di spazio di dimensione infinita. Esempi di basi canoniche in alcuni spazi vettoriali classici. Tutte le basi hanno lo stesso numero di elementi. Come ottenere basi per eliminazione da un sistema di generatori o aggiungendo elementi ad un insieme di vettori linearmente indipendenti. Lemma di eliminazione."];
Lezioni[14] = ["14", "15/10/2021", "14:00", "15:00", "Lemma di sostituzione e conseguenze: in uno spazio di dimensione n, per dimostrare che n vettori sono una base basta verificare la lineare indipendenza o l'essere generatori. Esempi di basi e componenti in spazi vettoriali."];
Lezioni[15] = ["15", "15/10/2021", "15:00", "16:00", "Intersezione e somma di sottospazi vettoriali. Somma diretta di sottospazi e componenti di un vettore rispetto ad una somma diretta. Formula di Grassmann. Esempi ed esercizi."];
Lezioni[16] = ["16", "19/10/2021", "09:30", "10:30", "Definizione di applicazione lineare. Comportamento rispetto ad una combinazione lineare. Teorema di struttura. Primi esempi. Matrice associata ad un'applicazione lineare dopo aver scelto basi in partenza ed arrivo."];
Lezioni[17] = ["17", "19/10/2021", "10:30", "11:30", "Esempi di costruzione ed utilizzo della matrice associata ad un'applicazione lineare. Filosofia generale: spazi vettoriali e applicazioni lineari vs numeri e matrici. Matrice di cambio di base: costruzione ed utilizzo."];
Lezioni[18] = ["18", "19/10/2021", "11:30", "12:30", "Ker e immagine di un'applicazione lineare. Teorema rank-nullity (relazione tra le dimensioni di ker, immagine e spazio di partenza). Conseguenze in termini di iniettività e surgettività."];
Lezioni[19] = ["19", "22/10/2021", "14:00", "15:00", "Interpretazione dei sistemi lineari in termini di combinazioni lineari (legami con span, lineare indipendenza, generatori) e in termini di ker e immagine di un'opportuna applicazione lineare. Struttura dell'insieme delle soluzioni di un sistema lineare non omogeneo (soluzione qualunque più soluzione generica dell'omogeneo)."];
Lezioni[20] = ["20", "22/10/2021", "15:00", "16:00", "Sottospazi vettoriali: rappresentazione cartesiana e parametrica. Esercizi sui sottospazi vettoriali: passaggio dalla forma cartesiana a quella parametrica, calcolo della base e della dimensione, della somma ed intersezione."];
Lezioni[21] = ["21", "26/10/2021", "09:30", "10:30", "Matrice inversa e legami con l'applicazione inversa. Inversa del prodotto e della trasposta. Calcolo mediante l'algoritmo alla Gauss-Jordan: descrizione e giustificazione dell'algoritmo. Uso delle matrici inverse nei cambi di base."];
Lezioni[22] = ["22", "26/10/2021", "10:30", "11:30", "Introduzione ai determinanti: obiettivi, definizione assiomatica, prime proprietà (alternanza e annullamento nel caso di vettori linearmente dipendenti). Enunciato del teorema di esistenza ed unicità. Caso 2*2 con interpretazione geometrica."];
Lezioni[23] = ["23", "26/10/2021", "11:30", "12:30", "Determinante nel caso 3*3 e regola di Sarrus. Determinante e algoritmo di Gauss. Determinante di matrici diagonali e triangolari superiori. Se i vettori sono linearmente indipendenti, allora il determinante è diverso da zero."];
Lezioni[24] = ["24", "29/10/2021", "14:00", "15:00", "Sottomatrici e minori. Sviluppi di Laplace (ricorsivi) per colonne e per righe. Esistenza del determinante: enunciato via sviluppi per colonne e idea della dimostrazione. Unicità del determinante via algoritmo di Gauss. Dimostrazione che gli sviluppi per righe coincidono con quelli per colonne. Determinante della matrice trasposta."];
Lezioni[25] = ["25", "29/10/2021", "15:00", "16:00", "Descrizione dello sviluppo di Leibniz (con le permutazioni) del determinante. Teorema di Binet (il determinante del prodotto è il prodotto dei determinanti). Determinante della matrice inversa. Utilizzo dei determinanti per dimostrare la lineare indipendenza di vettori."];
Lezioni[26] = ["26", "02/11/2021", "09:30", "10:30", "Formula per i vettori perpendicolari e sua interpretazione con i determinanti. Formula di Cramer per la risoluzione di un sistema lineare. Formula per la matrice inversa con i determinanti."];
Lezioni[27] = ["27", "02/11/2021", "10:30", "11:30", "Rango di una matrice. Dimostrazione completa dell'equivalenza tra R-rango, C-rango, D-rango. Rango ed algoritmo di Gauss. Pivot e rango delle matrici a scala."];
Lezioni[28] = ["28", "02/11/2021", "11:30", "12:30", "Rango e sistemi lineari: teorema di Rouché-Capelli. Esempi di studio di sistemi lineari dipendenti da parametri."];
Lezioni[29] = ["29", "05/11/2021", "14:00", "15:00", "Esercizi misti sulla prima parte del corso: studio del rango di una matrice dipendente da parametri, matrice associata ad una applicazione lineare con diversa scelta delle basi."];
Lezioni[30] = ["30", "05/11/2021", "15:00", "16:00", "Esercizi misti sulla prima parte del corso: studio di un'applicazione lineare tra spazi di polinomi, calcolo delle matrici di proiezione rispetto ad una somma diretta."];
Lezioni[31] = ["31", "09/11/2021", "09:30", "10:30", "Basi ortogonali e ortonormali. Componenti di un vettore rispetto a tali basi. Procedimento di ortogonalizzazione di Gram-Schmidt."];
Lezioni[32] = ["32", "09/11/2021", "10:30", "11:30", "Ortogonale di un sottospazio e sue proprietà. Somme dirette ortogonali. Proiezione ortogonale su un sottospazio. Esempi di calcolo di basi ortogonali e di proiezioni ortogonali."];
Lezioni[33] = ["33", "09/11/2021", "11:30", "12:30", "Matrici ortogonali: caratterizzazione e proprietà. Struttura delle matrici ortogonali 2*2. Trucco per velocizzare il calcolo dell'inversa di una matrice con righe o colonne ortogonali. Ulteriori esempi di basi e proiezioni ortogonali."];
Lezioni[34] = ["34", "12/11/2021", "14:00", "15:00", "Introduzione alle forme canoniche (per applicazioni e matrici). Legami tra il caso delle applicazioni e quello delle matrici. Forma canonica di un'applicazione lineare potendo scegliere basi a piacere in partenza ed arrivo (dipende solo dal rango)."];
Lezioni[35] = ["35", "12/11/2021", "15:00", "16:00", "Introduzione motivazionale alle forme canoniche per applicazioni da uno spazio in sé (stessa base in partenza ed arrivo) o per matrici quadrate. Autovalori, autovettori, autospazio, esempio di diagonalizzazione 2*2."];
Lezioni[36] = ["36", "16/11/2021", "13:30", "14:30", "Polinomi: radici, molteplicità di una radice, teorema di Ruffini, teorema fondamentale dell'algebra e conseguenze, relazione tra i coefficienti e la somma/prodotto delle radici. Polinomio caratteristico di una matrice: definizione e legami dei suoi coefficienti con traccia e determinante."];
Lezioni[37] = ["37", "16/11/2021", "14:30", "15:30", "Definizione di matrici simili e dimostrazione che hanno uguali il polinomio caratteristico, gli autovalori, la traccia e il determinante. Molteplicità algebrica e geometrica di un autovalore: definizione e relazione tra di esse. Enunciato della condizione necessaria e sufficiente e della condizione sufficiente per la diagonalizzabilità."];
Lezioni[38] = ["38", "16/11/2021", "08:30", "09:30", "Dimostrazione che la molteplicità geometrica è minore o uguale di quella algebrica. Autovettori corrispondenti ad autovalori distinti sono linearmente indipendenti. Dimostrazione della condizione necessaria e sufficiente per la diagonalizzabilità."];
Lezioni[39] = ["39", "19/11/2021", "09:30", "10:30", "Spazio delle matrici simmetriche. Applicazioni lineari simmetriche. Un'applicazione è simmetrica se e solo se ha matrice simmetrica rispetto ad una qualunque base ortonormale. Enunciato del teorema spettrale per applicazioni e matrici simmetriche. Dimostrazione delle implicazioni facili. Primi due lemmi: autovettori corrispondenti ad autovalori distinti sono ortogonali, l'ortogonale di un sottospazio invariante è a sua volta invariante."];
Lezioni[40] = ["40", "19/11/2021", "10:30", "11:30", "Gli autovalori di una matrice reale simmetrica sono reali. Dimostrazione dell'implicazione delicata nel teorema spettrale. Esempi ed esercizi sulle forme canoniche."];
Lezioni[41] = ["41", "23/11/2021", "09:30", "10:30", "Introduzione alle forme quadratiche: definizione, matrice associata, forme (semi)definite positive/negative e indefinite, indici di inerzia. Primi esempi di studio del segno di una forma quadratica."];
Lezioni[42] = ["42", "23/11/2021", "10:30", "11:30", "Metodi per trovare la segnatura di una forma quadratica: segno degli autovalori e completamento dei quadrati. Utilizzo del completamento dei quadrati per trovare sottospazi di dimensione opportuna su cui una forma quadratica è definita positiva/negativa."];
Lezioni[43] = ["43", "23/11/2021", "11:30", "12:30", "Metodi per trovare la segnatura di una forma quadratica: regola di Cartesio per il segno delle radici di un polinomio e metodo dei minori orlati di Sylvester. Possibilità di procedere in varie direzioni nell'utilizzo del metodo di Sylvester."];
Lezioni[44] = ["44", "26/11/2021", "14:00", "15:00", "Blocchi e matrici di Jordan complesse. Ogni matrice quadrata complessa è simile ad una matrice di Jordan complessa. Blocchi e matrici di Jordan reali. Ogni matrice quadrata reale è simile ad una matrice di Jordan reale. Descrizione dell'algoritmo per passare dalla forma di Jordan complessa a quella reale."];
Lezioni[45] = ["45", "26/11/2021", "15:00", "16:00", "Esempi di calcolo di forme canoniche di matrici. Determinare la matrice di passaggio alla forma di Jordan reale conoscendo quella complessa. Calcolo della matrice di passaggio alla forma canonica di Jordan in presenza di blocchi di dimensione maggiore di 1."];
Lezioni[46] = ["46", "30/11/2021", "08:30", "09:30", "Definizione astratta di prodotto scalare e primi esempi. Matrice associata ad un prodotto scalare e suo utilizzo per il calcolo del prodotto stesso."];
Lezioni[47] = ["47", "30/11/2021", "09:30", "10:30", "Come varia la matrice associata ad un prodotto scalare quando si cambia base: matrici congruenti. Algoritmo di Gram-Schmidt per un prodotto scalare qualunque definito positivo. Teorema di Sylvester (Sylvester's law of inertia). Esempi di passaggio alla forma alla Sylvester."];
Lezioni[48] = ["48", "30/11/2021", "10:30", "11:30", "Applicazioni simmetriche rispetto ad un prodotto scalare generale e relativo teorema spettrale. Studio di un prodotto scalare definito mediante integrali in uno spazio di polinomi."];
Lezioni[49] = ["49", "03/12/2021", "14:00", "15:00", "Dimostrazione del legame tra il segno degli autovalori e indici di inerzia di una forma quadratica. Esempi di utilizzo del metodo di Sylvester anche in presenza di determinanti nulli strada facendo. Esempi sull'intersezione di sottospazi vettoriali."];
Lezioni[50] = ["50", "03/12/2021", "15:00", "16:00", "Teorema di Hamilton-Cayley: enunciato e dimostrazione nel caso diagonalizzabile. Polinomio minimo: definizione e suoi legami con il polinomio caratteristico e la forma di Jordan."];
Lezioni[51] = ["51", "07/12/2021", "09:30", "10:30", "Introduzione alla geometria affine. Equazioni parametriche e cartesiane di sottospazi affini. Trasformazioni affini e loro composizioni. Omotetie nel piano."];
Lezioni[52] = ["52", "07/12/2021", "10:30", "11:30", "Le matrici affini conservano norma e prodotto scalare. Teorema di struttura delle isometrie nello spazio n-dimensionale. Matrici 2*2 ortogonali e relative isometrie del piano."];
Lezioni[53] = ["53", "07/12/2021", "11:30", "12:30", "Classificazione delle isometrie del piano sulla base del luogo dei punti fissi, con idea della dimostrazione. Esempi di rotazioni (rispetto a punti diversi dall'origine) e simmetrie. Esempi di classificazione di isometrie nel piano."];
Lezioni[54] = ["54", "10/12/2021", "14:00", "15:00", "Esercizi sulle isometrie del piano. Calcolo di immagine e controimmagine di rette e circonferenze mediante isometrie del piano. Casistica sulla composizione di due simmetrie."];
Lezioni[55] = ["55", "10/12/2021", "15:00", "16:00", "Autovalori di matrici simmetriche hanno modulo unitario. Classificazione delle matrici 3*3 ortogonali e relative isometrie dello spazio. Esempi di classificazione di isometrie lineari dello spazio."];
Lezioni[56] = ["56", "14/12/2021", "09:30", "10:30", "Classificazione delle isometrie dello spazio sulla base del luogo dei punti fissi. Esempi di scrittura di isometrie dello spazio sulla base della loro descrizione geometrica."];
Lezioni[57] = ["57", "14/12/2021", "10:30", "11:30", "Esercizi misti sulle isometrie dello spazio: espressione algebrica di una simmetria rispetto ad un piano che non passa per l'origine e di una rotazione rispetto ad un asse che non passa per l'origine. Orientazione di una base."];
Lezioni[58] = ["58", "14/12/2021", "11:30", "12:30", "Tre modi per calcolare la distanza tra due rette sghembe nello spazio. Tre modi per calcolare il volume di un tetraedro di cui sono noti i vertici."];
Lezioni[59] = ["59", "17/12/2021", "14:00", "15:00", "Semplici esempi di studio di ellissi ed iperboli nel piano (non in forma canonica). Esponenziali e funzioni trascendenti di matrici."];
Lezioni[60] = ["60", "17/12/2021", "15:00", "16:00", "Cambi di basi ed algoritmo jpeg."];
