var NomeCorso = "Complementi di Matematica II - SSSUP 2011/2012";
var Percorso = MEDIA.lezioni + "SA12/SA12_";
var CifreNumeroLezione = 2;
var SchedaCorso = {
  nome: "Complementi di Matematica II",
  annoAccademico: "2011/2012",
  crediti: "3",
  target: "Allievi del secondo anno della Scuola Superiore Sant’Anna",
  anno: "Secondo anno",
};
var DocumentiCorso = [
  {
    sezione: "book",
    file: "SA12_Book.pdf",
    titolo: "Stampato integrale delle lezioni"
  },
  {
    sezione: "esercizi",
    file: "SA12_Esercizi.pdf",
    titolo: "Esercizi — Versione 1 (3 agosto 2012)"
  },
  {
    sezione: "esercizi",
    file: "SA12_Esercizi-Hint.pdf",
    titolo: "Ricevimento — 24 settembre 2012"
  }
];
var Lezioni = new Array();

Lezioni[1] = [ "1", "16/01/12", "18:00", "19:00", "Presentazione del corso: analisi in dimensione infinita (problemi di minimo e di evoluzione). Definizione e primi esempi di spazio metrico." ];
Lezioni[2] = [ "2", "16/01/12", "19:00", "20:00", "Dagli spazi metrici agli spazi topologici. Successioni di Cauchy e completezza." ];
Lezioni[3] = [ "3", "24/01/12", "17:00", "18:00", "Spazi di Banach e spazi di Hilbert" ];
Lezioni[4] = [ "4", "24/01/12", "18:00", "19:00", "Continuità, semicontinuità e compattezza per successioni. Coercività. Teorema di Weierstrass e sue varianti." ];
Lezioni[5] = [ "5", "31/01/12", "17:00", "18:00", "Completezza di R ed R^n. Compattezza in R ed R^n." ];
Lezioni[6] = [ "6", "31/01/12", "18:00", "19:00", "Serie assolutamente convergenti in spazi di Banach. Totale limitatezza e legami con la compattezza per spazi metrici. Teorema delle contrazioni in spazi metrici." ];
Lezioni[7] = [ "7", "09/02/12", "17:00", "18:00", "Convergenza puntuale e uniforme di funzioni. Convergenza totale di serie. Completezza dello spazio delle funzioni continue su un intervallo rispetto alla convergenza uniforme." ];
Lezioni[8] = [ "8", "09/02/12", "18:00", "19:00", "Dimostrazione del teorema di esistenza ed unicità per equazioni differenziali con secondo membro lipschitziano (mediante il teorema delle contrazioni)" ];
Lezioni[9] = [ "9", "17/02/12", "18:00", "19:00", "Teorema di Ascoli-Arzelà e relativa dimostrazione" ];
Lezioni[10] = [ "10", "17/02/12", "19:00", "20:00", "Dimostrazione del teorema di sola esistenza per equazioni differenziali con secondo membro continuo (mediante approssimanti \"con ritardo\")" ];
Lezioni[11] = [ "11", "02/03/12", "18:00", "19:00", "Compattezza in spazi metrici: equivalenza tra compattezza per ricoprimenti, compattezza per successioni, completezza + totale limitatezza" ];
Lezioni[12] = [ "12", "02/03/12", "19:00", "20:00", "Teorema di Heine-Cantor (dimostrazione con compattezza per successioni e per ricoprimenti). Uniforme continuità e passaggio al limite negli integrali." ];
Lezioni[13] = [ "13", "06/03/12", "17:00", "18:00", "Introduzione al calcolo delle variazioni. Metodi diretti vs indiretti. Derivata di Gateaux ed equazione di Eulero. Primo esempio di funzionale integrale." ];
Lezioni[14] = [ "14", "06/03/12", "18:00", "19:00", "Difficoltà nell'applicare il metodo diretto rispetto alla convergenza uniforme. Ulteriori esempi di funzionali integrali (anche con non esistenza del minimo)" ];
Lezioni[15] = [ "15", "14/03/12", "18:00", "19:00", "Funzionali integrali dipendenti dalla sola derivata: il caso convesso" ];
Lezioni[16] = [ "16", "14/03/12", "19:00", "20:00", "Funzionali integrali dipendenti dalla sola derivata: esempi nel caso non convesso. Banalità dei funzionali integrali dipendenti dalla sola u." ];
Lezioni[17] = [ "17", "22/03/12", "17:00", "18:00", "Funzionali integrali dipendenti da x, u, u'. Condizioni al bordo di Dirichlet e di Neumann per equazioni differenziali del secondo ordine." ];
Lezioni[18] = [ "18", "22/03/12", "18:00", "19:00", "Funzionali integrali dipendenti da derivate di ordine successivo. Equazione di Eulero in generale. Esempi di non esistenza del minimo." ];
Lezioni[19] = [ "19", "28/03/12", "18:00", "19:00", "Esempio di funzionale integrale non convesso con esistenza del minimo. Introduzione ai metodi diretti nel calcolo delle variazioni. Derivate deboli. Spazi L^2 e H^1." ];
Lezioni[20] = [ "20", "28/03/12", "19:00", "20:00", "Spazio l^2 (successioni a quadrato sommabile). Basi algebriche e basi hilbertiane. Non compattezza forte delle palle in dimensione infinita. [Video disponibile solo per la seconda parte della lezione]" ];
Lezioni[21] = [ "21", "04/04/12", "17:00", "18:00", "Convergenza debole. Compattezza debole delle palle in un Hilbert. Semicontinuità debole della norma e di funzionali integrali con integranda convessa." ];
Lezioni[22] = [ "22", "04/04/12", "18:00", "19:00", "Caratterizzazioni equivalenti dello spazio di Sobolev H^1. Holderianità delle funzioni di H^1. Primo esempio di metodo diretto nel calcolo delle variazioni." ];
Lezioni[23] = [ "23", "18/04/12", "18:00", "19:00", "Esempio standard di metodo diretto nel calcolo delle variazioni applicato ad un funzionale integrale" ];
Lezioni[24] = [ "24", "18/04/12", "19:00", "20:00", "Serie di Fourier come base Hilbertiana di L^2" ];
Lezioni[25] = [ "25", "24/04/12", "17:00", "18:00", "Equazione del calore risolta mediante serie di Fourier. Effetto regolarizzante. Ruolo delle condizioni al bordo nella scelta della base Hilbertiana." ];
Lezioni[26] = [ "26", "24/04/12", "18:00", "19:00", "Teorema spettrale per operatori compatti in spazi di Hilbert", "m" ];
Lezioni[27] = [ "27", "09/05/12", "18:00", "19:00", "L'equazione delle onde: teoria in un intervallo con serie di Fourier e su tutto R come metodi classici. Dominio di dipendenza della soluzione." ];
Lezioni[28] = [ "28", "09/05/12", "19:00", "20:00", "Problema di minimo legato alle posizioni di equilibrio dei fili inestensibili" ];
Lezioni[29] = [ "29", "16/05/12", "18:00", "19:00", "Ulteriori commenti sul dominio di dipendenza per l'equazione delle onde in dimensione pari e dispari. Equazioni di Eulero per funzionali in più variabili (in partenza)" ];
Lezioni[30] = [ "30", "16/05/12", "19:00", "20:00", "Equazione Laplaciano(u)=f. Serie di Fourier in due variabili" ];
