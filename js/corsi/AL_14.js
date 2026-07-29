var NomeCorso = "Algebra Lineare 2013/2014";
var Percorso = MEDIA.lezioni + "ALAM2_14/ALAM2_14_L";
var CifreNumeroLezione = 3;
var SchedaCorso = {
  nome: "Algebra Lineare",
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
    file: "ALAM2_14_Book.pdf",
    titolo: "Algebra Lineare — Stampato integrale delle lezioni"
  }
];

var Lezioni = new Array();
Lezioni[1] = ["1", "02/10/2013", "08:30", "09:30", "Vettori geometrici nel piano cartesiano. Operazioni tra vettori: somma, prodotto per un numero, prodotto scalare, norma, distanza."];
Lezioni[2] = ["2", "02/10/2013", "09:30", "10:30", "Coordinate polari nel piano. Interpretazione geometrica del prodotto scalare (usando le coordinate polari o il teorema di Carnot)."];
Lezioni[3] = ["3", "02/10/2013", "10:30", "11:30", "Equazioni vettoriali (parametriche) di segmenti e rette. Significato dei coefficienti di una retta in termini di prodotto scalare."];
Lezioni[4] = ["4", "04/10/2013", "13:30", "14:30", "Introduzione ai sistemi lineari. Esempi con soluzione unica, nessuna soluzione, infinite soluzioni. Algoritmo di Gauss. Primi esempi di applicazione."];
Lezioni[5] = ["5", "04/10/2013", "14:30", "15:30", "Introduzione alle matrici. Vettori riga e vettori colonna. Operazioni tra matrici: somma, prodotto per un numero, prodotto tra matrici. Trasposta di una matrice."];
Lezioni[6] = ["6", "09/10/2013", "08:30", "09:30", "Sistemi lineari (parte seconda): pivot della matrice ridotta a scala ed interpretazione dei risultati dell'algoritmo di Gauss."];
Lezioni[7] = ["7", "09/10/2013", "09:30", "10:30", "Esempi ed esercizi su sistemi lineari e rette nel piano."];
Lezioni[8] = ["8", "09/10/2013", "10:30", "11:30", "Ulteriori precisazioni sull'equazione della retta nel piano. Spazi euclidei: vettori n-dimensionali, prodotto scalare, norma, distanza. Introduzione alla geometria nello spazio: rette e piani."];
Lezioni[9] = ["9", "11/10/2013", "13:30", "14:30", "Geometria analitica nello spazio: come stabilire se 3 punti sono allineati, scrivere l'equazione del piano passante per 3 punti dati, passare dall'equazione parametrica di un piano a quella cartesiana."];
Lezioni[10] = ["10", "11/10/2013", "14:30", "15:30", "Geometria analitica nello spazio: trovare un vettore ortogonale a 2 vettori dati, posizione relativa di 2 piani, posizione relativa di un piano ed una retta."];
Lezioni[11] = ["11", "16/10/2013", "08:30", "09:30", "Definizione di campo di numeri, di spazio vettoriale e sottospazio vettoriale. Primi esempi."];
Lezioni[12] = ["12", "16/10/2013", "09:30", "10:30", "Combinazioni lineari, vettori linearmente indipendenti, sistemi di generatori, basi. Ulteriori esempi di spazi e sottospazi vettoriali."];
Lezioni[13] = ["13", "16/10/2013", "10:30", "11:30", "Esempi di basi per spazi vettoriali. Componenti di un vettore rispetto ad una base. Interpretazione dei sistemi lineari come combinazioni lineari dei vettori colonna della matrice associata."];
Lezioni[14] = ["14", "18/10/2013", "13:30", "14:30", "Definizione di Span. Teoremi sulle basi negli spazi vettoriali (esistenza e come ottenerle da insiemi di vettori dati che siano linearmente indipendenti o generatori). Dimensione di uno spazio vettoriale."];
Lezioni[15] = ["15", "18/10/2013", "14:30", "15:30", "Significato geometrico delle componenti di un vettore rispetto ad una base. Esercizi su basi, generatori, span, dimensione."];
Lezioni[16] = ["16", "23/10/2013", "08:30", "09:30", "Applicazioni lineari. Teorema di struttura: una applicazione lineare è univocamente determinata dai valori che assume in una base."];
Lezioni[17] = ["17", "23/10/2013", "09:30", "10:30", "Matrice associata ad una applicazione lineare dopo aver scelto basi in partenza ed arrivo."];
Lezioni[18] = ["18", "23/10/2013", "10:30", "11:30", "Esempio di costruzione della matrice associata ad una applicazione lineare con scelte diverse delle basi in partenza ed arrivo."];
Lezioni[19] = ["19", "25/10/2013", "13:30", "14:30", "Ker e immagine di una applicazione lineare. Relazione tra le dimensioni e conseguenze. Interpretazione dei sistemi lineari in termini di Ker e immagine."];
Lezioni[20] = ["20", "25/10/2013", "14:30", "15:30", "Matrici di cambio di base. Calcolo dell'inversa di una matrice mediante l'algoritmo di Gauss."];
Lezioni[21] = ["21", "30/10/2013", "08:30", "09:30", "Struttura generale dell'insieme delle soluzioni di un sistema lineare, omogeneo e non omogeneo."];
Lezioni[22] = ["22", "30/10/2013", "09:30", "10:30", "Somma e intersezione di sottospazi vettoriali. Formula di Grassmann."];
Lezioni[23] = ["23", "30/10/2013", "10:30", "11:30", "Dimostrazione del \"teorema di sostituzione\" (punto di partenza per i teoremi su basi e dimensione di spazi vettoriali). Enunciato delle proprietà del prodotto di matrici."];
Lezioni[24] = ["24", "06/11/2013", "08:30", "09:30", "Introduzione ai determinanti: obiettivi, indice degli argomenti, proprietà basic, esistenza ed unicità nel caso 2*2, interpretazione geometrica del caso 2*2."];
Lezioni[25] = ["25", "06/11/2013", "09:30", "10:30", "Prime proprietà dei determinanti: alternanza, annullamento nel caso di vettori linearmente dipendenti, comportamento rispetto alle operazioni dell'algoritmo di Gauss. Discussione del caso 3*3: formula di Sarrus, esistenza ed unicità, interpretazione geometrica."];
Lezioni[26] = ["26", "06/11/2013", "10:30", "11:30", "Determinanti di matrici diagonali e triangolari, unicità per ogni n via algoritmo di Gauss, sviluppi di Laplace (sviluppi ricorsivi) per colonne e per righe, determinante della matrice trasposta."];
Lezioni[27] = ["27", "08/11/2013", "13:30", "14:30", "Enunciato del teorema di esistenza del determinante con n generico via sviluppi per colonne. Dimostrazione che gli sviluppi per righe danno il determinante. Accenno agli sviluppi di Leibnitz (con le permutazioni)."];
Lezioni[28] = ["28", "08/11/2013", "14:30", "15:30", "Applicazioni dei determinanti: formula per la matrice inversa, formula di Cramer per i sistemi lineari, formula per i vettori perpendicolari."];
Lezioni[29] = ["29", "15/11/2013", "13:30", "14:30", "Rango di una matrice. Rapporti tra R-rango, C-rango, D-rango. Rango e algoritmo di Gauss. R-rango = C-rango per matrici a scala."];
Lezioni[30] = ["30", "15/11/2013", "14:30", "15:30", "Una matrice quadrata con righe linearmente indipendenti ha determinante non nullo. D-rango = C-rango = R-rango. Rango e sistemi lineari: teorema di Rouché-Capelli."];
Lezioni[31] = ["31", "20/11/2013", "08:30", "09:30", "Basi ortogonali e ortonormali. Componenti di un vettore rispetto ad una base ortogonale o ortonormale. Procedimento di ortogonalizzazione di Gram-Schmidt."];
Lezioni[32] = ["32", "20/11/2013", "09:30", "10:30", "Ortogonale di un sottospazio. Esempi di calcolo di basi ortonormali. [video in parte mancante]"];
Lezioni[33] = ["33", "20/11/2013", "10:30", "11:30", "Matrici ortogonali: proprietà e legami con le basi ortonormali."];
Lezioni[34] = ["34", "23/11/2013", "09:30", "10:30", "Esercizi sui sottospazi vettoriali: passaggio dalla rappresentazione cartesiana (mediante equazioni) a quella parametrica (come span) e viceversa."];
Lezioni[35] = ["35", "23/11/2013", "10:30", "11:30", "Ricerca di una base per l'intersezione di due sottospazi vettoriali. Esercizi sulle applicazioni lineari in cui si sfruttano cambi di base."];
Lezioni[36] = ["36", "23/11/2013", "11:30", "12:30", "Esercizi misti su somme dirette di sottospazi, applicazioni lineari, cambi di base."];
Lezioni[37] = ["37", "27/11/2013", "08:30", "09:30", "Introduzione generale alle forme canoniche. Matrici simili. Forma canonica potendo scegliere la base in partenza ed arrivo. Algoritmo di Gauss come cambio di base in arrivo. "];
Lezioni[38] = ["38", "27/11/2013", "09:30", "10:30", "Autovalori, autovettori, autospazi. Esempio 2*2 di ricerca di autovalori ed autovettori, e successiva diagonalizzazione."];
Lezioni[39] = ["39", "27/11/2013", "10:30", "11:30", "Autovalori come radici del polinomio caratteristico. Definizione di molteplicità algebrica e geometrica. Diagonalizzazione quando tutti gli autovalori sono distinti."];
Lezioni[40] = ["40", "29/11/2013", "13:30", "14:30", "Legami tra polinomio caratteristico, autovalori, traccia, determinante, e loro invarianza per similitudine."];
Lezioni[41] = ["41", "29/11/2013", "14:30", "15:30", "Legami tra molteplicità algebrica, molteplicità geometrica, diagonalizzazione. Esempio di diagonalizzazione sui reali vs diagonalizzazione sui complessi."];
Lezioni[42] = ["42", "30/11/2013", "09:30", "10:30", "Matrici simmetriche e interpretazione in termini di prodotto scalare. Enunciato del teorema spettrale e primi passi della dimostrazione."];
Lezioni[43] = ["43", "30/11/2013", "10:30", "11:30", "Seconda parte della dimostrazione del teorema spettrale. Enunciato dei teoremi di triangolarizzazione. Quadro generale per la diagonalizzazione sui reali e sui complessi."];
Lezioni[44] = ["44", "30/11/2013", "11:30", "12:30", "Forma canonica di Jordan, sui complessi e sui reali."];
Lezioni[45] = ["45", "04/12/2013", "08:30", "09:30", "Introduzione alla geometria affine. Sottospazi affini e loro giacitura. Trasformazioni affini. Esempi speciali di trasformazioni affini."];
Lezioni[46] = ["46", "04/12/2013", "09:30", "10:30", "Teorema di struttura delle isometrie in dimensione n (sono affinità con matrice ortogonale). Struttura delle matrici ortogonali in dimensione 2."];
Lezioni[47] = ["47", "04/12/2013", "10:30", "11:30", "Esempi ed esercizi sulle isometrie nel piano."];
Lezioni[48] = ["48", "06/12/2013", "13:30", "14:30", "Vari modi di scrivere la simmetria rispetto ad una retta del piano. Autovalori di simmetrie e rotazioni nel piano."];
Lezioni[49] = ["49", "06/12/2013", "14:30", "15:30", "Enunciato della classificazione delle isometrie nel piano e nello spazio sulla base del luogo dei punti fissi. Esempi di simmetria e rotazione nello spazio."];
Lezioni[50] = ["50", "11/12/2013", "08:30", "09:30", "Introduzione alle forme quadratiche. Matrice associata e sua segnatura. Come stabilire la segnatura mediante gli autovalori o il completamento dei quadrati."];
Lezioni[51] = ["51", "11/12/2013", "09:30", "10:30", "Ulteriori esempi di completamento dei quadrati. Metodo di Sylvester (minori orlati) e di Cartesio (coefficienti del polinomio caratteristico) per stabilire la segnatura di una forma quadratica."];
Lezioni[52] = ["52", "11/12/2013", "10:30", "11:30", "Relazioni tra traccia, determinante e segnatura per forme quadratiche in due variabili. Esempio esplicito di diagonalizzazione di una forma quadratica e sua interpretazione geometrica."];
Lezioni[53] = ["53", "13/12/2013", "13:30", "14:30", "Definizione generale di prodotto scalare. Matrice associata ad un prodotto scalare in una data base. Ortogonalizzazione di Gram-Schmidt e basi ortonormali rispetto ad un prodotto scalare definito positivo. Esempio di prodotto scalare definito mediante integrali in uno spazio di polinomi."];
Lezioni[54] = ["54", "13/12/2013", "14:30", "15:30", "Cambiamento della matrice associata ad un prodotto scalare a seguito di un cambio di base. Applicazioni simmetriche rispetto ad un prodotto scalare qualunque, loro matrici associate e relativo teorema spettrale."];
Lezioni[55] = ["55", "18/12/2013", "08:30", "09:30", "Polinomio minimo di una matrice. Teorema di Hamilton-Cayley. Relazioni tra polinomio minimo, polinomio caratteristico, diagonalizzabilità, dimensioni dei blocchi di Jordan."];
Lezioni[56] = ["56", "18/12/2013", "09:30", "10:30", "Esercizi misti di geometria nello spazio: proiezione di un punto su un piano, simmetrico di un punto rispetto ad un piano, distanza di un punto da un piano, mutua posizione di due rette."];
Lezioni[57] = ["57", "18/12/2013", "10:30", "11:30", "Esercizi di geometria analitica nello spazio: distanza tra rette sghembe, relazioni tra aree di triangoli e prodotto vettore."];
Lezioni[58] = ["58", "20/12/2013", "13:30", "14:30", "Rapporti tra forma canonica complessa e forma canonica reale, e relative matrici di cambio di base. Spazi vettoriali complessi come spazi vettoriali reali."];
Lezioni[59] = ["59", "20/12/2013", "14:30", "15:30", "Cose strane: esponenziali e funzioni trascendenti di matrici, cambi di base e compressione jpg."];
