var NomeCorso = "Complementi di Analisi Matematica II - SSSUP 2013/2014";
var ArchivioCorso = "SAnna/SA_14";
var PrefissoFile = "SA14_L";
var Percorso = MEDIA.lezioni + "SA14/SA14_L";
var CifreNumeroLezione = 2;
var SchedaCorso = {
  nome: "Complementi di Analisi Matematica II",
  annoAccademico: "2013/2014",
  crediti: "3",
  ore: "30 (ufficialmente, 30 realisticamente)",
  target: "Studenti secondo anno SSSUP",
  anno: "Secondo",
  periodo: "Gennaio/Maggio",
  avviso: ""
};
var DocumentiCorso = [
  {
    sezione: "book",
    file: "SA14_Book.pdf",
    titolo: "Stampato integrale lezioni"
  }
];
var Lezioni = new Array();

Lezioni[1] = [ "1", "21/01/2014", "17:00", "18:00", "Presentazione del corso. Spazi metrici: prime definizioni ed esempi." ];
Lezioni[2] = [ "2", "21/01/2014", "18:00", "19:00", "Spazi di Banach e spazi di Hilbert. Rapporti tra prodotto scalare, norma, distanza. Convergenza puntuale ed uniforme di funzioni." ];
Lezioni[3] = [ "3", "23/01/2014", "17:00", "18:00", "Teorema delle contrazioni in spazi metrici (teorema di punto fisso). Lo spazio delle funzioni continue su un intervallo chiuso è completo rispetto alla distanza della convergenza uniforme." ];
Lezioni[4] = [ "4", "23/01/2014", "18:00", "19:00", "Dimostrazione mediante punto fisso del teorema di esistenza ed unicità per equazioni differenziali." ];
Lezioni[5] = [ "5", "27/01/2014", "17:00", "18:00", "Teorema di Ascoli-Arzelà (con dimostrazione)." ];
Lezioni[6] = [ "6", "27/01/2014", "18:00", "19:00", "Dimostrazione del teorema di sola esistenza per equazioni differenziali mediante approssimazione con problemi Lipschitz." ];
Lezioni[7] = [ "7", "31/01/2014", "17:00", "18:00", "Compattezza in spazi metrici: equivalenza tra compattezza per ricoprimenti, compattezza per successioni e completezza + totale limitatezza." ];
Lezioni[8] = [ "8", "31/01/2014", "18:00", "19:00", "Teorema di Weierstrass e sue varianti in spazi metrici. Teorema di Heine-Cantor in spazi metrici." ];
Lezioni[9] = [ "9", "04/03/2014", "17:00", "18:00", "Introduzione al calcolo delle variazioni: metodo diretto vs metodo indiretto. Condizioni necessarie per essere punto di max/min: differenziale secondo Gateaux e derivata lungo curve." ];
Lezioni[10] = [ "10", "04/03/2014", "18:00", "19:00", "Equazione di Eulero-Lagrange per funzionali integrali: primi esempi. Condizioni al bordo di Dirichlet e di Neumann." ];
Lezioni[11] = [ "11", "14/03/2014", "18:00", "19:00", "Equazione di Eulero-Lagrange per funzionali integrali: caso più generale. Discussione di diverse condizioni al bordo. Ruolo della convessità nel dimostrare che le soluzioni sono minimi." ];
Lezioni[12] = [ "12", "14/03/2014", "19:00", "20:00", "Esempi di studio di funzionali: caso convesso vs caso non convesso (rispetto alla derivata)." ];
Lezioni[13] = [ "13", "21/03/2014", "18:00", "19:00", "Spazi di Hilbert. Convergenza di serie negli spazi di Hilbert. Basi Hilbertiane." ];
Lezioni[14] = [ "14", "21/03/2014", "19:00", "20:00", "Enunciato dell'esistenza della base Hilbertiana. Convergenza forte e convergenza debole negli spazi di Hilbert. Compattezza debole delle palle." ];
Lezioni[15] = [ "15", "28/03/2014", "18:00", "19:00", "Principali proprietà della convergenza debole. Semicontinuità della norma rispetto alla convergenza debole. Spazio L^2." ];
Lezioni[16] = [ "16", "28/03/2014", "19:00", "20:00", "Spazi di Sobolev: definizione W (integrazione per parti) e definizione H (approssimazione). Holderianità delle funzioni in H^1 (in dimensione 1). Primi esempi di convergenza." ];
Lezioni[17] = [ "17", "04/04/2014", "18:00", "19:00", "Metodo diretto nel calcolo delle variazioni (parte prima): formulazione debole, compattezza, semicontinuità. Passaggio al limite negli integrali: convergenza dominata." ];
Lezioni[18] = [ "18", "04/04/2014", "19:00", "20:00", "Metodo diretto nel calcolo delle variazioni (parte seconda): equazione di Eulero in H^1, regolarità via bootstrap. Convergenza debole e semicontinuità di integrali." ];
Lezioni[19] = [ "19", "11/04/2014", "18:00", "19:00", "Teorema spettrale in dimensione finita. Caratterizzazione variazione di autovalori/autovettori. Quoziente di Rayleigh e moltiplicatori di Lagrange." ];
Lezioni[20] = [ "20", "11/04/2014", "19:00", "20:00", "Quoziente di Reyleigh senza moltiplicatori di Lagrange. Applicazioni compatte in spazi di Hilbert. Teorema spettrale per applicazioni compatte in spazi di Hilbert." ];
Lezioni[21] = [ "21", "10/05/2014", "10:00", "11:00", "\"Doppia primitiva\" come esempio di operatore lineare, simmetrico e compatto. Discussione di varie possibili condizioni al bordo." ];
Lezioni[22] = [ "22", "10/05/2014", "11:00", "12:00", "Calcolo degli autovalori e autovettori della \"doppia primitiva\" con diverse condizioni al bordo. Corrispondenti sviluppi in serie di Fourier." ];
Lezioni[23] = [ "23", "16/05/2014", "18:00", "19:00", "Teoremi di convergenza puntuale e uniforme per serie di Fourier. Applicazione al calcolo di una serie numerica." ];
Lezioni[24] = [ "24", "16/05/2014", "19:00", "20:00", "Serie di Fourier e spazi di Sobolev. Equazione di Eulero per un problema variazionale in più dimensioni: Laplaciano. Condizioni di Dirichlet e Neumann in più variabili." ];
Lezioni[25] = [ "25", "20/05/2014", "17:00", "18:00", "Laplaciano su un rettangolo e relativa serie di Fourier. Laplaciano discreto e algoritmo jpeg." ];
Lezioni[26] = [ "26", "20/05/2014", "18:00", "19:00", "Introduzione alle equazioni alle derivate parziali di evoluzione. Equazione del calore risolta mediante serie di Fourier." ];
Lezioni[27] = [ "27", "23/05/2014", "17:00", "18:00", "Regolarità delle soluzioni dell'equazione del calore ottenuta mediante le serie di Fourier. Equazione del calore con dato iniziale distribuzione." ];
Lezioni[28] = [ "28", "23/05/2014", "18:00", "19:00", "Delta di Dirac come esempio di distribuzione. Proprietà qualitative dell'equazione del calore: decrescita dell'energia, comportamento dell'integrale, limite all'infinito." ];
Lezioni[29] = [ "29", "26/05/2014", "18:00", "19:00", "Equazione delle onde su tutta la retta: formula esplicita come somma di traveling waves. Dominio di dipendenza. Accenno al dominio di dipendenza in dimensione pari vs dispari." ];
Lezioni[30] = [ "30", "26/05/2014", "19:00", "20:00", "Equazione delle onde su un intervallo risolta mediante serie di Fourier. Regolarità dei dati vs regolarità della soluzione. Identità dell'energia." ];
