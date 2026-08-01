var NomeCorso = "Algebra Lineare 2022/2023";
var ArchivioCorso = "AL/AL_23";
var PrefissoFile = "AL_23_L";
var Percorso = MEDIA.lezioni + "AL_23/AL_23_L";
var CifreNumeroLezione = 2;
var SchedaCorso = {
  nome: "Algebra Lineare",
  annoAccademico: "2022/2023",
  crediti: "6",
  target: "Corsi di Laurea in Ingegneria Elettronica e in Ingegneria delle Telecomunicazioni",
  anno: "Primo anno",
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "AL_23_Burocrazia.pdf",
    titolo: "Informazioni burocratiche"
  },
  {
    sezione: "burocrazia",
    file: "AL_23_Esame.pdf",
    titolo: "Regole d’esame"
  },
  {
    sezione: "burocrazia",
    file: "AL_23_Programma.pdf",
    titolo: "Programma dettagliato"
  },
  {
    sezione: "book",
    file: "AL_23_Book.pdf",
    titolo: "Algebra Lineare — Stampato integrale delle lezioni"
  }
];

var Lezioni = new Array();
Lezioni[1] = ["1", "29/09/2022", "08:30", "09:30", "Vettori geometrici nel piano cartesiano. Operazioni tra vettori: somma, prodotto per un numero, prodotto scalare, norma, distanza. Interpretazione geometrica del prodotto scalare in termini di angolo tra vettori."];
Lezioni[2] = ["2", "29/09/2022", "09:30", "10:30", "Coordinate polari nel piano. Formule di passaggio tra coordinate cartesiane e coordinate polari (e viceversa). Esercizi sulle coordinate polari."];
Lezioni[3] = ["3", "29/09/2022", "10:30", "11:30", "Rette nel piano: equazione cartesiana vs equazione parametrica. Passaggio da una rappresentazione all'altra. Significato dei coefficienti nei vari tipi di rappresentazione. Calcolo dell'angolo tra due rette."];
Lezioni[4] = ["4", "30/09/2022", "14:00", "15:00", "Sistemi lineari: risoluzione mediante l'algoritmo di Gauss-Jordan. Esempi di applicazione (casi con soluzione unica, nessuna soluzione, infinite soluzioni). Esempi di studio di sistemi lineari con un parametro."];
Lezioni[5] = ["5", "30/09/2022", "15:00", "16:00", "Esercizi sulle rette nel piano. Rette parallele e perpendicolari. Mutua posizione di due rette nel piano. Calcolo dell'intersezione di due rette nel piano (date in varia forma) e dell'angolo che formano."];
Lezioni[6] = ["6", "03/10/2022", "14:00", "15:00", "Esercizi sulle rette nel piano. Come determinare una retta che passa per un punto e forma un angolo assegnato con una retta data. Distanza tra un punto ed una retta: formula e dimostrazione."];
Lezioni[7] = ["7", "03/10/2022", "15:00", "16:00", "Equazione parametrica di una retta nello spazio. Piani nello spazio: equazione cartesiana e parametrica. Significato geometrico dei coefficienti nell'equazione cartesiana. Passaggio dalla parametrica alla cartesiana. Formula per determinare un vettore nello spazio perpendicolare a due vettori dati."];
Lezioni[8] = ["8", "04/10/2022", "08:30", "09:30", "Mutua posizione di due piani nello spazio. Calcolo dell'eventuale retta intersezione e dell'angolo compreso. Mutua posizione di una retta ed un piano nello spazio. Calcolo dell'eventuale intersezione e dell'angolo tra una retta ed un piano. Distanza di un punto da una retta nello spazio."];
Lezioni[9] = ["9", "04/10/2022", "09:30", "10:30", "Mutua posizione di due rette nello spazio. Altezze di un triangolo nello spazio. Varie formule per l'area di un triangolo di cui sono noti i vertici nello spazio."];
Lezioni[10] = ["10", "04/10/2022", "10:30", "11:30", "Matrici e operazioni tra matrici: somma, prodotto per un numero, trasposta. Prodotto tra matrici. La trasposta del prodotto è il prodotto delle trasposte (in ordine inverso). Matrice nulla e matrice identica. Caso speciale dei vettori riga e dei vettori colonna. Vari esempi sul prodotto di matrici."];
Lezioni[11] = ["11", "11/10/2022", "08:30", "09:30", "Spazi vettoriali: dimostrazione dell'unicità del vettore nullo. Esempi classici di strutture che sono spazi vettoriali e di strutture che non lo sono."];
Lezioni[12] = ["12", "11/10/2022", "09:30", "10:30", "Sottospazi vettoriali: come dimostrare che un sottoinsieme è o non è un sottospazio vettoriale. Esempi di sottospazi nel piano ed in spazi di polinomi."];
Lezioni[13] = ["13", "11/10/2022", "10:30", "11:30", "Esercizi su vettori linearmente indipendenti, generatori, basi, componenti."];
Lezioni[14] = ["14", "14/10/2022", "14:00", "15:00", "Classificazione dei sottospazi vettoriali del piano e dello spazio. Definizione di Span ed enunciato del lemma di eliminazione. Esercizi su sottospazi vettoriali descritti come Span."];
Lezioni[15] = ["15", "14/10/2022", "15:00", "16:00", "Intersezione e somma di sottospazi vettoriali. Formula di Grassmann. Esempi ed esercizi. Due strategie per il calcolo dell'intersezione tra due piani nello spazio descritti come Span."];
Lezioni[16] = ["16", "18/10/2022", "08:30", "09:30", "Applicazioni lineari: definizione, Ker, Immagine, teorema Rank-Nullity. Matrice associata ad una applicazione lineare. Esempi di calcolo di Ker, Immagine, matrice associata tra le basi canoniche."];
Lezioni[17] = ["17", "18/10/2022", "09:30", "10:30", "Matrice associata ad una applicazione lineare tra basi strane. Esempi di applicazioni lineari tra spazi di polinomi o di matrici."];
Lezioni[18] = ["18", "18/10/2022", "10:30", "11:30", "Teorema di struttura delle applicazioni lineari. Esempi di studio dell'esistenza e dell'unicità di applicazioni lineari che soddisfano delle proprietà assegnate."];
Lezioni[19] = ["19", "21/10/2022", "14:00", "15:00", "Costruzione della matrice di cambio di base e suo utilizzo. Calcolo della matrice inversa: formula esplicita in dimensione 2 e algoritmo di Gauss per il caso generale. Matrice inversa e cambi di base."];
Lezioni[20] = ["20", "21/10/2022", "15:00", "16:00", "Esercizi sui cambi di base e sulla scrittura della matrice associata ad una applicazione lineare usando basi assegnate in partenza ed arrivo."];
Lezioni[21] = ["21", "25/10/2022", "08:30", "09:30", "Calcolo di determinanti: formule per la dimensione 2 e 3 (Sarrus), algoritmo di Guass e sviluppi di Laplace per la dimensione n. Esempi di calcolo. Interpretazione geometrica in dimensione 2 come area di un parallelogrammo."];
Lezioni[22] = ["22", "25/10/2022", "09:30", "10:30", "Determinante in dimensione 3 e volume del tetraedro. Proprietà dei determinanti (determinante dell'identità, della trasposta, dell'inversa, del prodotto). Sottomatrici. Rango di una matrice: enunciato dell'equivalenza tra R-rango, C-rango, D-rango."];
Lezioni[23] = ["23", "25/10/2022", "10:30", "11:30", "Giustificazione della formula per il calcolo di un vettore ortogonale a due vettori dati nello spazio. Calcolo di dimensioni e basi di sottospazi utilizzando anche rango e determinanti."];
Lezioni[24] = ["24", "28/10/2022", "14:00", "15:00", "Interpretazione dei sistemi lineari in termini di matrici, Span, applicazioni lineari. Teorema di Rouché-Capelli. Struttura generale delle soluzioni di un sistema lineare (soluzione particolare più soluzione generale del sistema omogeneo associato). Studio di un sistema lineare parametrico."];
Lezioni[25] = ["25", "28/10/2022", "15:00", "16:00", "Regola di Cramer per risolvere un sistema lineare. Formula per la matrice inversa con i determinanti. Esempi di studio di sistemi lineari parametrici."];
Lezioni[26] = ["26", "04/11/2022", "14:00", "15:00", "Esercizi sui sottospazi vettoriali di spazi di matrici. Esempi di matrici non nulle con quadrato nullo."];
Lezioni[27] = ["27", "04/11/2022", "15:00", "16:00", "Somma diretta di sottospazi. Proiezioni su una somma diretta. Esercizi sulla somma di sottospazi ed esempio di calcolo delle matrici di proiezione. Ker e immagine delle matrici di proiezione."];
Lezioni[28] = ["28", "08/11/2022", "08:30", "09:30", "Esercizi sulla matrice associata ad una applicazione lineare e sui cambi di base."];
Lezioni[29] = ["29", "08/11/2022", "09:30", "10:30", "Esempio di applicazione lineare tra spazi di matrici. Esercizi su esistenza e caratterizzazione di applicazioni lineari che verificano determinate proprietà."];
Lezioni[30] = ["30", "08/11/2022", "10:30", "11:30", "Esempi finali su cambi di base e applicazioni lineari."];
Lezioni[31] = ["31", "11/11/2022", "14:00", "15:00", "Basi ortogonali e ortonormali. Componenti di un vettore rispetto a tali basi. Esercizi sulle basi ortonormali e ortogonali in 2 e 3 dimensioni."];
Lezioni[32] = ["32", "11/11/2022", "15:00", "16:00", "Algoritmo di Gram-Schmidt ed esempio di utilizzo. Basi ortogonali di sottospazi. Ortogonale di un sottospazio."];
Lezioni[33] = ["33", "12/11/2022", "08:30", "09:30", "Presentazione di sottospazi mediante equazioni cartesiane e come Span. Calcolo della matrice di proiezione ortogonale su un sottospazio e sull'ortogonale del sottospazio."];
Lezioni[34] = ["34", "12/11/2022", "09:30", "10:30", "Matrici ortogonali: definizioni equivalenti e principali proprietà. Ulteriori esercizi su basi e matrici ortogonali e ortonormali."];
Lezioni[35] = ["35", "12/11/2022", "10:30", "11:30", "Forma canonica di un'applicazione lineare potendo scegliere basi a piacere in partenza ed arrivo (dipende solo dal rango). Esempi di passaggio alla forma canonica."];
Lezioni[36] = ["36", "15/11/2022", "08:30", "09:30", "Introduzione motivazionale alle forme canoniche per applicazioni da uno spazio in sé (stessa base in partenza ed arrivo) o per matrici quadrate. Autovalori, autovettori, autospazio. Matrici simili. Esempio di diagonalizzazione 2*2."];
Lezioni[37] = ["37", "15/11/2022", "09:30", "10:30", "Molteplicità algebrica e geometrica di un autovalore. Condizione necessaria e sufficiente per la diagonalizzabilità. Esempi di diagonalizzazione sui reali e sui complessi."];
Lezioni[38] = ["38", "15/11/2022", "10:30", "11:30", "Esercizi sul calcolo di autovalori ed autovettori, con relative molteplicità algebriche e geometriche. Primo esempio di calcolo di una base Jordanizzante."];
Lezioni[39] = ["39", "18/11/2022", "14:00", "15:00", "Ricapitolazione dei principali fatti sulla forma di Jordan: blocchi di Jordan, matrici di Jordan, passaggio dalla forma di Jordan complessa alla forma di Jordan reale. Ricapitolazione generale sul problema delle forme canoniche. Primi esempi di calcolo di forme canoniche."];
Lezioni[40] = ["40", "18/11/2022", "15:00", "16:00", "Esempi in dimensione bassa di calcolo della forma canonica e di una possibile matrice di passaggio."];
Lezioni[41] = ["41", "22/11/2022", "08:30", "09:30", "Esercizi di ricapitolazione su diagonalizzazione, forma di Jordan, matrici simili, forme canoniche."];
Lezioni[42] = ["42", "22/11/2022", "09:30", "10:30", "Esercizi di ricapitolazione su diagonalizzazione, forma di Jordan, matrici simili, forme canoniche."];
Lezioni[43] = ["43", "22/11/2022", "10:30", "11:30", "Esercizi di ricapitolazione su diagonalizzazione, forma di Jordan, matrici simili, forme canoniche."];
Lezioni[44] = ["44", "25/11/2022", "14:00", "15:00", "Ricapitolazione della teoria sulle forme quadratiche: forme (semi)definite positive/negative e indefinite, matrice associata, segnatura. Primi esempi di studio del segno di una forma quadratica e di completamento dei quadrati."];
Lezioni[45] = ["45", "25/11/2022", "15:00", "16:00", "Esercizi sullo studio del segno di forme quadratiche e sul metodo di completamento dei quadrati."];
Lezioni[46] = ["46", "29/11/2022", "08:30", "09:30", "Descrizione del metodo di Cartesio per determinare il segno delle radici di un polinomio. Descrizione del metodo dei minori orlati di Sylvester. Possibilità di procedere in varie direzioni nell'utilizzo del metodo di Sylvester. Esempi di applicazione dei vari metodi."];
Lezioni[47] = ["47", "29/11/2022", "09:30", "10:30", "Studio della segnatura di forme quadratiche, anche con parametri."];
Lezioni[48] = ["48", "29/11/2022", "10:30", "11:30", "Esercizi di ricapitolazione sulle forme quadratiche, anche con parametri."];
Lezioni[49] = ["49", "02/12/2022", "14:00", "15:00", "Ricapitolazione della teoria sui prodotti scalari in generale: matrice associata, comportamento per cambi di base, matrici congruenti. Esercizi sui prodotti scalari in dimensione due."];
Lezioni[50] = ["50", "02/12/2022", "15:00", "16:00", "Esercizi sui prodotti scalari in dimensione tre. Verifica che certe espressioni definiscono o non definiscono un prodotto scalare."];
Lezioni[51] = ["51", "06/12/2022", "08:30", "09:30", "Esercizi sui prodotti scalari in spazi di polinomi o spazi di matrici: calcolo della matrice associata, della segnatura e di una base in cui la matrice associata assume la forma alla Sylvester."];
Lezioni[52] = ["52", "06/12/2022", "09:30", "10:30", "Esercizi sulle trasformazioni affini. Come determinare un'affinità che manda punti dati in punti dati, come trovare l'immagine e la controimmagine di una retta."];
Lezioni[53] = ["53", "06/12/2022", "10:30", "11:30", "Omotetie rispetto all'origine e rispetto ad un punto generico. Classificazione delle matrici 2*2 ortogonali, con relativi autovalori ed autovettori."];
Lezioni[54] = ["54", "09/12/2022", "14:00", "15:00", "Esercizi sulla scrittura dell'espressione di isometrie del piano. Simmetria centrale. Simmetria rispetto ad una retta passante per l'origine o a una retta generica. Rotazione rispetto all'origine o ad un punto generico."];
Lezioni[55] = ["55", "09/12/2022", "15:00", "16:00", "Enunciato della classificazione delle isometrie del piano sulla base del luogo dei punti fissi. Esempi di classificazione di isometrie di cui è assegnata l'espressione."];
Lezioni[56] = ["56", "13/12/2022", "08:30", "09:30", "Ricapitolazione della teoria: classificazione delle isometrie dello spazio sulla base del luogo dei punti fissi. Primi esempi di isometrie dello spazio: simmetrie rispetto a piani paralleli ai piani coordinati e simmetrie centrali.", "m"];
Lezioni[57] = ["57", "13/12/2022", "09:30", "10:30", "Isometrie dello spazio: simmetrie rispetto a piani generici. Rotazioni rispetto a rette generiche. Orientazione di una base dello spazio."];
Lezioni[58] = ["58", "13/12/2022", "10:30", "11:30", "Esempi di studio di isometrie dello spazio a partire dalla loro espressione analitica. Rapporti tra proprietà geometriche (assi/angoli di rotazione, piani di simmetria) e proprietà algebriche (autovalori e autospazi)."];
Lezioni[59] = ["59", "16/12/2022", "14:00", "15:00", "Due metodi per calcolare la distanza tra due rette sghembe nello spazio. Piano nello spazio che contiene una retta ed è parallelo ad un'altra retta. Studio di un'ellisse nel piano in posizione non canonica. Accenno alle funzioni trascendenti (ad esempio esponenziali) di una matrice."];
Lezioni[60] = ["60", "16/12/2022", "15:00", "16:00", "Cambi di basi in spazi di matrici, derivata seconda discreta, algoritmo jpeg."];
