var NomeCorso = "Algebra Lineare 2023/2024";

var Percorso = MEDIA.lezioni + "AL_24/AL_24_L";

var CifreNumeroLezione = 2;

var SchedaCorso = {
  nome: "(modulo di) Algebra Lineare",
  annoAccademico: "2023/2024",
  crediti: "6",
  ore: "60 (ufficialmente, 60 realisticamente)",
  target: "Ingegneria Elettronica/Telecomunicazioni",
  anno: "Primo",
  periodo: "ottobre / dicembre",
  avviso:
    "Questo è un corso molto sbilanciato sulla parte di esercitazione, " +
    "cioè un corso in cui si richiama brevemente la teoria per poi risolvere " +
    "un discreto numero di esercizi sui vari argomenti, spiegando gli approcci " +
    "che funzionano e quelli che non funzionano, nonché gli errori ricorrenti " +
    "visti in tutte le precedenti edizioni. Per chi vuole seguire proficuamente " +
    "una lezione è quindi opportuno aver guardato precedentemente, almeno in " +
    "maniera sommaria (attingendo ai corsi precedenti registrati), la teoria " +
    "relativa agli argomenti trattati negli esercizi."
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "AL_24_Burocrazia.pdf",
    titolo: "Informazioni burocratiche"
  },
  {
    sezione: "burocrazia",
    file: "AL_24_Esame.pdf",
    titolo: "Regole d’esame"
  },
  {
    sezione: "burocrazia",
    file: "AL_24_Programma.pdf",
    titolo: "Programma dettagliato"
  },
  {
    sezione: "book",
    file: "AL_24_Book.pdf",
    titolo: "Algebra Lineare — Stampato integrale delle lezioni"
  }
];

var Lezioni = new Array();
Lezioni[1] = ["1", "26/09/2023", "08:30", "09:30", "Vettori geometrici nel piano cartesiano. Operazioni tra vettori: somma, prodotto per un numero, prodotto scalare, norma, distanza. Interpretazione geometrica del prodotto scalare in termini di angolo tra vettori."];
Lezioni[2] = ["2", "26/09/2023", "09:30", "10:30", "Coordinate polari nel piano. Formule di passaggio tra coordinate cartesiane e coordinate polari (e viceversa). Esercizi sulle coordinate polari."];
Lezioni[3] = ["3", "26/09/2023", "10:30", "11:30", "Rette nel piano: equazione cartesiana vs equazione parametrica. Passaggio da una rappresentazione all'altra. Significato dei coefficienti nei vari tipi di rappresentazione. Calcolo dell'angolo tra due rette."];
Lezioni[4] = ["4", "29/09/2023", "14:00", "15:00", "Sistemi lineari: risoluzione mediante l'algoritmo di Gauss-Jordan. Matrici a scala e pivot. Esempi di applicazione (casi con soluzione unica, nessuna soluzione, infinite soluzioni)."];
Lezioni[5] = ["5", "29/09/2023", "15:00", "16:00", "Esercizi sulle rette nel piano. Rette parallele e perpendicolari. Mutua posizione di due rette nel piano. Calcolo dell'intersezione di due rette nel piano (date in varia forma) e dell'angolo che formano. Calcolo delle due rette che passano per un punto e formano un angolo assegnato con una retta data."];
Lezioni[6] = ["6", "03/10/2023", "14:00", "15:00", "Esercizi sui piani nello spazio: passaggio dalla forma parametrica a quella cartesiana e viceversa, mutua posizione tra due piani nello spazio, calcolo dell'eventuale retta intersezione e dell'angolo compreso. Formula per trovare un vettore perpendicolare a due vettori dati nello spazio (prodotto vettore)."];
Lezioni[7] = ["7", "03/10/2023", "15:00", "16:00", "Equazione parametrica di una retta nello spazio. Mutua posizione di due rette nello spazio. Mutua posizione di una retta ed un piano nello spazio. Calcolo dell'intersezione tra una retta ed un piano e dell'angolo compreso. Distanza di un punto da una retta nel piano, e di un punto da un piano nello spazio."];
Lezioni[8] = ["8", "03/10/2023", "08:30", "09:30", "Esercizi di geometria analitica nello spazio: piano per un punto e perpendicolare ad una retta data, calcolo della distanza (e del punto di minima distanza) tra un punto ed una retta nello spazio."];
Lezioni[9] = ["9", "03/10/2023", "09:30", "10:30", "Matrici e operazioni tra matrici: somma, prodotto per un numero, trasposta. Prodotto tra matrici. La trasposta del prodotto è il prodotto delle trasposte (in ordine inverso). Matrice identica e primo accenno alla matrice inversa. Caso speciale dei vettori riga e dei vettori colonna. Vari esempi sul prodotto di matrici. Scrittura dei sistemi lineari in termini di matrici."];
Lezioni[10] = ["10", "03/10/2023", "10:30", "11:30", "Esercizi finali sulla geometria nello spazio. Altezze di un triangolo nello spazio. Varie formule per l'area di un triangolo di cui sono noti i vertici nello spazio. Equazione della sfera nello spazio."];
Lezioni[11] = ["11", "10/10/2023", "08:30", "09:30", "Spazi vettoriali: dimostrazione dell'unicità del vettore nullo e della legge di cancellazione. Esempi classici di strutture che sono spazi vettoriali e di strutture che non lo sono."];
Lezioni[12] = ["12", "10/10/2023", "09:30", "10:30", "Sottospazi vettoriali: come dimostrare che un sottoinsieme è o non è un sottospazio vettoriale. Esempi di sottospazi nel piano ed in spazi di polinomi."];
Lezioni[13] = ["13", "10/10/2023", "10:30", "11:30", "Esercizi su combinazioni lineari, vettori linearmente indipendenti, generatori, span, basi, dimensione."];
Lezioni[14] = ["14", "13/10/2023", "14:00", "15:00", "Utilizzo dell'algoritmo di Gauss per verificare che un insieme di vettori dato è una base. Calcolo delle componenti rispetto ad una base. Enunciato del lemma eliminazione. Calcolo della dimensione di sottospazi vettoriali descritti come Span."];
Lezioni[15] = ["15", "13/10/2023", "15:00", "16:00", "Intersezione e somma di sottospazi vettoriali. Formula di Grassmann. Esempi ed esercizi. Due strategie per il calcolo dell'intersezione tra due piani nello spazio descritti come Span."];
Lezioni[16] = ["16", "17/10/2023", "08:30", "09:30", "Ripasso della teoria sulle applicazioni lineari: definizione, teorema di struttura, Ker, Immagine, generatori dell'immagine, teorema Rank-Nullity. Legami tra iniettività, surgettività, Ker, Immagine e relative dimensioni. Primi esempi ed esercizi."];
Lezioni[17] = ["17", "17/10/2023", "09:30", "10:30", "Esempi di calcolo di Ker e Immagine di un'applicazione lineare. Matrice associata ad una applicazione lineare tra basi strane: definizione ed esempio di calcolo."];
Lezioni[18] = ["18", "17/10/2023", "10:30", "11:30", "Ulteriore esempio di calcolo della matrice associata ad un'applicazione lineare. Esempi di studio dell'esistenza e dell'unicità di applicazioni lineari che soddisfano delle proprietà assegnate."];
Lezioni[19] = ["19", "20/10/2023", "14:00", "15:00", "Calcolo della matrice inversa: formula esplicita in dimensione 2 e algoritmo di Gauss per il caso generale. Costruzione della matrice di cambio di base e suo utilizzo. Primi esempi di calcolo della matrice di cambio di base."];
Lezioni[20] = ["20", "20/10/2023", "15:00", "16:00", "Esercizi sui cambi di base e sulla scrittura della matrice associata ad una applicazione lineare usando basi assegnate in partenza ed arrivo. Utilizzi della matrice inversa per determinare delle matrici di cambio di base."];
Lezioni[21] = ["21", "24/10/2023", "08:30", "09:30", "Calcolo di determinanti: formule per la dimensione 2 e 3 (Sarrus), algoritmo di Guass e sviluppi di Laplace per la dimensione n. Esempi di calcolo. Accenno agli sviluppi di Leibniz."];
Lezioni[22] = ["22", "24/10/2023", "09:30", "10:30", "Sottomatrici e minori. Rango di una matrice: enunciato dell'equivalenza tra R-rango, C-rango, D-rango. Esempi di utilizzo del rango per determinare la dimensione di uno Span. Proprietà dei determinanti (determinante dell'identità, della trasposta, dell'inversa, del prodotto). "];
Lezioni[23] = ["23", "24/10/2023", "10:30", "11:30", "Interpretazione geometrica del determinante: in dimensione 2 come area di un parallelogrammo, in dimensione 3 come volume di un tetraedro. Calcolo di dimensioni e basi di sottospazi utilizzando anche rango e determinanti. Giustificazione della formula per il calcolo di un vettore ortogonale a due vettori dati nello spazio."];
Lezioni[24] = ["24", "27/10/2023", "14:00", "15:00", "Interpretazione dei sistemi lineari in termini di matrici, Span, combinazioni lineari di colonne, applicazioni lineari. Teorema di Rouché-Capelli. Struttura generale delle soluzioni di un sistema lineare (soluzione particolare più soluzione generale del sistema omogeneo associato). Esempi di studio di sistemi lineari con parametri."];
Lezioni[25] = ["25", "27/10/2023", "15:00", "16:00", "Regola di Cramer per risolvere un sistema lineare. Formula per la matrice inversa con i determinanti. Esercizi sullo studio di sistemi lineari parametrici e sulla matrice associata ad una applicazione lineare assegnata indicando l'immagine dei vettori di una base."];
Lezioni[26] = ["26", "31/10/2023", "08:30", "09:30", "Esercizi sulla verifica che certi sottoinsiemi sono o non sono sottospazi vettoriali."];
Lezioni[27] = ["27", "31/10/2023", "09:30", "10:30", "Esercizi sui sottospazi vettoriali: trovare la dimensione ed una base della somma e dell'intersezione."];
Lezioni[28] = ["28", "31/10/2023", "10:30", "11:30", "Esercizi su applicazioni lineari tra spazi di polinomi."];
Lezioni[29] = ["29", "03/11/2023", "14:00", "15:00", "Esercizi su applicazioni lineari e cambi di base. Matrice associata ad una applicazione lineare con diverse scelte della base di partenza/arrivo."];
Lezioni[30] = ["30", "03/11/2023", "15:00", "16:00", "Somma diretta di sottospazi. Proiezioni su una somma diretta. Esercizi sulla somma di sottospazi ed esempio di calcolo delle matrici di proiezione. Esercizio su un'applicazione lineare tra spazi di matrici."];
Lezioni[31] = ["31", "07/11/2023", "08:30", "09:30", "Basi ortogonali e ortonormali. Componenti di un vettore rispetto a tali basi. Esercizi sulle basi ortonormali e ortogonali."];
Lezioni[32] = ["32", "07/11/2023", "09:30", "10:30", "Algoritmo di Gram-Schmidt ed esempi di utilizzo. Basi ortogonali di sottospazi."];
Lezioni[33] = ["33", "07/11/2023", "10:30", "11:30", "Ortogonale di un sottospazio e proiezioni ortogonali. Calcolo della matrice di proiezione ortogonale su un sottospazio e sull'ortogonale del sottospazio."];
Lezioni[34] = ["34", "10/11/2023", "14:00", "15:00", "Matrici ortogonali: definizioni equivalenti e principali proprietà. Caratterizzazione di tutte le matrici ortogonali in dimensione 2. Trucco per determinare l'inversa di una matrice con le righe (o colonne) ortogonali ma non ortonormali."];
Lezioni[35] = ["35", "10/11/2023", "15:00", "16:00", "Forma canonica di un'applicazione lineare potendo scegliere basi a piacere in partenza ed arrivo (dipende solo dal rango). Esempi di passaggio alla forma canonica."];
Lezioni[36] = ["36", "14/11/2023", "08:30", "09:30", "Introduzione motivazionale alle forme canoniche per applicazioni da uno spazio in sé (stessa base in partenza ed arrivo) o per matrici quadrate. Autovalori, autovettori, autospazio. Matrici simili. Esempio di diagonalizzazione 2*2. Ogni polinomio si scrive come prodotto di fattori lineari a coefficienti complessi."];
Lezioni[37] = ["37", "14/11/2023", "09:30", "10:30", "Relazioni tra autovalori, traccia, determinante. Molteplicità algebrica e geometrica di un autovalore. Condizione necessaria e sufficiente per la diagonalizzabilità. Esempi di diagonalizzazione sui reali."];
Lezioni[38] = ["38", "14/11/2023", "10:30", "11:30", "Esempio di diagonalizzazione sui complessi. Esercizi sul calcolo di autovalori ed autovettori, con relative molteplicità algebriche e geometriche."];
Lezioni[39] = ["39", "21/11/2023", "08:30", "09:00", "Ricapitolazione dei principali fatti sulla forma di Jordan: blocchi di Jordan, matrici di Jordan, passaggio dalla forma di Jordan complessa alla forma di Jordan reale. Ricapitolazione generale sul problema delle forme canoniche."];
Lezioni[40] = ["40", "21/11/2023", "09:30", "10:00", "Esempi in dimensione due di calcolo della forma canonica e di una possibile matrice di passaggio."];
Lezioni[41] = ["41", "21/11/2023", "10:30", "11:30", "Esercizi su diagonalizzazione, forma di Jordan, forme canoniche. Calcolo della forma di Jordan della derivata come applicazione lineare tra spazi di polinomi."];
Lezioni[42] = ["42", "24/11/2023", "14:00", "15:00", "Esercizi di ricapitolazione su diagonalizzazione, forma di Jordan, matrici simili, forme canoniche."];
Lezioni[43] = ["43", "24/11/2023", "15:00", "16:00", "Esercizi di ricapitolazione su diagonalizzazione, forma di Jordan, matrici simili, forme canoniche."];
Lezioni[44] = ["44", "25/11/2023", "08:30", "09:30", "Ricapitolazione della teoria sulle forme quadratiche: forme (semi)definite positive/negative e indefinite, matrice associata, segnatura. Metodi per stabilire la segnatura di una forma quadratica: segno degli autovalori. Primi esempi di studio del segno di una forma quadratica."];
Lezioni[45] = ["45", "25/11/2023", "09:30", "10:30", "Metodi per stabilire la segnatura di una forma quadratica: completamento dei quadrati. Vari esempi di completamento dei quadrati."];
Lezioni[46] = ["46", "25/11/2023", "10:30", "11:30", "Descrizione del metodo di Cartesio per determinare il segno delle radici di un polinomio. Metodi per stabilire la segnatura di una forma quadratica: minori orlati di Sylvester. Possibilità di procedere in varie direzioni nell'utilizzo del metodo di Sylvester. Esempi di applicazione dei vari metodi."];
Lezioni[47] = ["47", "28/11/2023", "08:30", "09:30", "Ricapitolazione della teoria sui prodotti scalari in generale: matrice associata, comportamento per cambi di base, matrici congruenti. Esercizi sui prodotti scalari in dimensione due."];
Lezioni[48] = ["48", "28/11/2023", "09:30", "10:30", "Esercizi sui prodotti scalari in dimensione tre."];
Lezioni[49] = ["49", "28/11/2023", "10:30", "11:30", "Verifica che certe espressioni definiscono o non definiscono un prodotto scalare. Esercizi sui prodotti scalari in spazi di polinomi: calcolo della matrice associata, della segnatura e di una base in cui la matrice associata assume la forma alla Sylvester."];
Lezioni[50] = ["50", "01/12/2023", "14:00", "15:00", "Completamento dei quadrati nel caso in cui ci sono solo termini misti. Studio della segnatura di forme quadratiche, anche con parametri."];
Lezioni[51] = ["51", "01/12/2023", "15:00", "16:00", "Esercizi di ricapitolazione sulle forme quadratiche e sui prodotti scalari."];
Lezioni[52] = ["52", "05/12/2023", "08:30", "09:30", "Esercizi sulle trasformazioni affini. Come determinare un'affinità che manda punti dati in punti dati, come trovare l'immagine e la controimmagine di una retta. Omotetie rispetto all'origine."];
Lezioni[53] = ["53", "05/12/2023", "09:30", "10:30", "Omotetie rispetto ad un punto generico. Classificazione delle matrici 2*2 ortogonali, con relativi autovalori ed autovettori. Simmetria rispetto ad una retta nel piano, passante o meno per l'origine."];
Lezioni[54] = ["54", "05/12/2023", "10:30", "11:30", "Enunciato della classificazione delle isometrie del piano sulla base del luogo dei punti fissi. Esempi di classificazione. Rotazione rispetto all'origine o ad un punto generico. Composizione di affinità e/o isometrie."];
Lezioni[55] = ["55", "12/12/2023", "08:30", "09:30", "Descrizione delle matrici ortogonali 3*3. Enunciato della classificazione delle isometrie dello spazio sulla base del luogo dei punti fissi. Primi esempi di isometrie dello spazio: simmetrie rispetto a piani, passanti o meno per l'origine."];
Lezioni[56] = ["56", "12/12/2023", "09:30", "10:30", "Isometrie dello spazio: rotazioni rispetto a rette generiche. Orientazione di una base dello spazio. Come determinare l'immagine e la controimmagine di rette e piani rispetto ad un'isometria dello spazio."];
Lezioni[57] = ["57", "12/12/2023", "10:30", "11:30", "Esempi di studio di isometrie dello spazio a partire dalla loro espressione analitica. Rapporti tra proprietà geometriche (assi/angoli di rotazione, piani di simmetria) e proprietà algebriche (autovalori e autospazi)."];
Lezioni[58] = ["58", "15/12/2023", "14:00", "15:00", "Simmetrie centrali e loro composizione. Due metodi per calcolare la distanza tra due rette sghembe nello spazio. Studio di un'ellisse nel piano in posizione non canonica. Accenno alle funzioni trascendenti (ad esempio esponenziali e funzioni trigonometriche) di una matrice."];
Lezioni[59] = ["59", "15/12/2023", "15:00", "16:00", "Cambi di basi in spazi di matrici, derivata seconda discreta, algoritmo jpeg."];
