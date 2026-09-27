var NomeCorso = "Analisi Matematica 1 - 2026/2027";
var ArchivioCorso = "AM1/AM1_27";
var PrefissoFile = "AM1_27_L";
var Percorso = MEDIA.lezioni + "AM1_27/AM1_27_L";

var SchedaCorso = {
  nome: "Analisi Matematica 1",
  annoAccademico: "2026/2027",
  crediti: "15",
  target: "Corso di Laurea in Matematica",
  anno: "Primo anno",
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "AM1_27_Burocrazia.pdf",
    titolo: "Informazioni generali"
  },
  {
    sezione: "burocrazia",
    file: "AM1_27_Esame.pdf",
    titolo: "Regole d’esame",
  },
  {
    sezione: "burocrazia",
    file: "AM1_27_Programma.pdf",
    titolo: "Programma dettagliato"
  }
];

var Lezioni = new Array();
Lezioni[1] = [ "1", "23/09/2026", "14:00", "15:00", "Prova" ];

/* ============================================================
   CALENDARIO PREVISTO 2026/27 -- FINO A NATALE

   Righe pronte da copiare nel blocco attivo qui sopra.
   Sostituire i due __ con il numero effettivo della lezione
   e completare/adattare l'argomento.
   ============================================================

Lezioni[__] = [ "__", "23/09/2026", "14:00", "15:00", "" ];
Lezioni[__] = [ "__", "23/09/2026", "15:00", "16:00", "" ];
Lezioni[__] = [ "__", "24/09/2026", "09:00", "10:00", "" ];
Lezioni[__] = [ "__", "24/09/2026", "10:00", "11:00", "" ];
Lezioni[__] = [ "__", "28/09/2026", "11:00", "12:00", "" ];
Lezioni[__] = [ "__", "28/09/2026", "12:00", "13:00", "" ];
Lezioni[__] = [ "__", "30/09/2026", "14:00", "15:00", "" ];
Lezioni[__] = [ "__", "30/09/2026", "15:00", "16:00", "" ];
Lezioni[__] = [ "__", "01/10/2026", "09:00", "10:00", "" ];
Lezioni[__] = [ "__", "01/10/2026", "10:00", "11:00", "" ];
Lezioni[__] = [ "__", "05/10/2026", "11:00", "12:00", "" ];
Lezioni[__] = [ "__", "05/10/2026", "12:00", "13:00", "" ];
Lezioni[__] = [ "__", "07/10/2026", "14:00", "15:00", "" ];
Lezioni[__] = [ "__", "07/10/2026", "15:00", "16:00", "" ];
Lezioni[__] = [ "__", "08/10/2026", "09:00", "10:00", "" ];
Lezioni[__] = [ "__", "08/10/2026", "10:00", "11:00", "" ];
Lezioni[__] = [ "__", "12/10/2026", "11:00", "12:00", "" ];
Lezioni[__] = [ "__", "12/10/2026", "12:00", "13:00", "" ];
Lezioni[__] = [ "__", "14/10/2026", "14:00", "15:00", "" ];
Lezioni[__] = [ "__", "14/10/2026", "15:00", "16:00", "" ];
Lezioni[__] = [ "__", "15/10/2026", "09:00", "10:00", "" ];
Lezioni[__] = [ "__", "15/10/2026", "10:00", "11:00", "" ];
Lezioni[__] = [ "__", "19/10/2026", "11:00", "12:00", "" ];
Lezioni[__] = [ "__", "19/10/2026", "12:00", "13:00", "" ];
Lezioni[__] = [ "__", "21/10/2026", "14:00", "15:00", "" ];
Lezioni[__] = [ "__", "21/10/2026", "15:00", "16:00", "" ];
Lezioni[__] = [ "__", "22/10/2026", "09:00", "10:00", "" ];
Lezioni[__] = [ "__", "22/10/2026", "10:00", "11:00", "" ];
Lezioni[__] = [ "__", "26/10/2026", "11:00", "12:00", "" ];
Lezioni[__] = [ "__", "26/10/2026", "12:00", "13:00", "" ];
Lezioni[__] = [ "__", "28/10/2026", "14:00", "15:00", "" ];
Lezioni[__] = [ "__", "28/10/2026", "15:00", "16:00", "" ];
Lezioni[__] = [ "__", "29/10/2026", "09:00", "10:00", "" ];
Lezioni[__] = [ "__", "29/10/2026", "10:00", "11:00", "" ];
Lezioni[__] = [ "__", "02/11/2026", "11:00", "12:00", "" ];
Lezioni[__] = [ "__", "02/11/2026", "12:00", "13:00", "" ];
Lezioni[__] = [ "__", "04/11/2026", "14:00", "15:00", "" ];
Lezioni[__] = [ "__", "04/11/2026", "15:00", "16:00", "" ];
Lezioni[__] = [ "__", "05/11/2026", "09:00", "10:00", "" ];
Lezioni[__] = [ "__", "05/11/2026", "10:00", "11:00", "" ];
Lezioni[__] = [ "__", "09/11/2026", "11:00", "12:00", "" ];
Lezioni[__] = [ "__", "09/11/2026", "12:00", "13:00", "" ];
Lezioni[__] = [ "__", "11/11/2026", "14:00", "15:00", "" ];
Lezioni[__] = [ "__", "11/11/2026", "15:00", "16:00", "" ];
Lezioni[__] = [ "__", "12/11/2026", "09:00", "10:00", "" ];
Lezioni[__] = [ "__", "12/11/2026", "10:00", "11:00", "" ];
Lezioni[__] = [ "__", "16/11/2026", "11:00", "12:00", "" ];
Lezioni[__] = [ "__", "16/11/2026", "12:00", "13:00", "" ];
Lezioni[__] = [ "__", "18/11/2026", "14:00", "15:00", "" ];
Lezioni[__] = [ "__", "18/11/2026", "15:00", "16:00", "" ];
Lezioni[__] = [ "__", "19/11/2026", "09:00", "10:00", "" ];
Lezioni[__] = [ "__", "19/11/2026", "10:00", "11:00", "" ];
Lezioni[__] = [ "__", "23/11/2026", "11:00", "12:00", "" ];
Lezioni[__] = [ "__", "23/11/2026", "12:00", "13:00", "" ];
Lezioni[__] = [ "__", "25/11/2026", "14:00", "15:00", "" ];
Lezioni[__] = [ "__", "25/11/2026", "15:00", "16:00", "" ];
Lezioni[__] = [ "__", "26/11/2026", "09:00", "10:00", "" ];
Lezioni[__] = [ "__", "26/11/2026", "10:00", "11:00", "" ];
Lezioni[__] = [ "__", "30/11/2026", "11:00", "12:00", "" ];
Lezioni[__] = [ "__", "30/11/2026", "12:00", "13:00", "" ];
Lezioni[__] = [ "__", "02/12/2026", "14:00", "15:00", "" ];
Lezioni[__] = [ "__", "02/12/2026", "15:00", "16:00", "" ];
Lezioni[__] = [ "__", "03/12/2026", "09:00", "10:00", "" ];
Lezioni[__] = [ "__", "03/12/2026", "10:00", "11:00", "" ];
Lezioni[__] = [ "__", "07/12/2026", "11:00", "12:00", "" ];
Lezioni[__] = [ "__", "07/12/2026", "12:00", "13:00", "" ];
Lezioni[__] = [ "__", "09/12/2026", "14:00", "15:00", "" ];
Lezioni[__] = [ "__", "09/12/2026", "15:00", "16:00", "" ];
Lezioni[__] = [ "__", "10/12/2026", "09:00", "10:00", "" ];
Lezioni[__] = [ "__", "10/12/2026", "10:00", "11:00", "" ];
Lezioni[__] = [ "__", "14/12/2026", "11:00", "12:00", "" ];
Lezioni[__] = [ "__", "14/12/2026", "12:00", "13:00", "" ];
Lezioni[__] = [ "__", "16/12/2026", "14:00", "15:00", "" ];
Lezioni[__] = [ "__", "16/12/2026", "15:00", "16:00", "" ];
Lezioni[__] = [ "__", "17/12/2026", "09:00", "10:00", "" ];
Lezioni[__] = [ "__", "17/12/2026", "10:00", "11:00", "" ];
Lezioni[__] = [ "__", "21/12/2026", "11:00", "12:00", "" ];
Lezioni[__] = [ "__", "21/12/2026", "12:00", "13:00", "" ];
Lezioni[__] = [ "__", "23/12/2026", "14:00", "15:00", "" ];
Lezioni[__] = [ "__", "23/12/2026", "15:00", "16:00", "" ];

============================================================ */

/* ============================================================
   ARGOMENTI 2025/26 -- SERBATOIO PER IL COPIA/INCOLLA

   Sono solo una traccia: copiare e adattare il testo nella
   lezione effettivamente svolta nel 2026/27.
   ============================================================

1. Logica elementare (a livello intuitivo). Proposizioni e operazioni sulle proposizioni: negazione, and e vel, implicazione, doppia implicazione. Tavole di verità. Modi equivalenti di scrivere una implicazione e legami con le dimostrazioni per assurdo.
2. Predicati e quantificatori. Negazione di una proposizione con uno o più quantificatori. Insiemi e notazioni insiemistiche. Insieme delle parti. Prodotto cartesiano.
3. Funzioni tra insiemi: definizione operativa e formale. Grafico, composizione, iniettività, surgettività, funzione inversa. Immagine e controimmagine.
4. Principio di induzione. Dimostrazione di uguaglianze e disuguaglianze mediante il principio di induzione. Disuguaglianza di Bernoulli.
5. Insiemi numerici. Definizione assiomatica dei numeri reali (assiomi algebrici, di ordinamento, di continuità). Enunciato dei teoremi di esistenza ed unicità dei reali.
6. Maggioranti, minoranti, massimo, minimo, estremo inferiore e superiore. Dimostrazione dell'esistenza di inf e sup. Caratterizzazione di inf e sup. Dimostrazione che l'insieme dei naturali non è superiormente limitato.
7. Funzioni reali: proprietà di simmetria (funzioni pari/dispari/periodiche) e di monotonia. Minimo periodo. Funzioni elementari: potenze a esponente intero positivo e loro inverse. Valore assoluto.
8. Funzioni elementari: esponenziali e logaritmi. Accenno ad una possibile definizione rigorosa via equazione funzionale. Funzioni elementari: funzioni trigonometriche e relative inverse (definizione geometrica, grafici, interpretazione nella circonferenza trigonometrica).
9. Operazioni sui grafici. Iniettività ed equazioni. Monotonia e disequazioni.
10. Esercizi riassuntivi sulle funzioni elementari.
11. Significato dei termini 'definitivamente' e 'frequentemente'. Definizione di successione e metodi per visualizzarla. Definizioni di limite per successioni. Primi esempi e controesempi.
12. Altri esempi e primi risultati sui limiti di successione: legami tra esistenza del limite e limitatezza, permanenza del segno, teorema di confronto a 2 (con avvertenza su possibili abusi), teorema di confronto a 3 (teorema dei carabinieri).
13. Definizioni di limitatezza e monotonia per successioni. Teorema delle successioni monotone. Il numero e (monotonia e limitatezza della successione che lo definisce).
14. Retta reale estesa. Enunciato del teorema algebrico sui limiti di successione. Dimostrazione di alcuni casi del teorema sul limite della somma e del prodotto. Primi esempi di calcolo di limiti di successioni.
15. Limiti dell'esponenziale e della radice n-esima di una costante. Criterio della radice, del rapporto e rapporto -> radice per limiti di successione: enunciati e dimostrazioni.
16. Confronto tra ordini di infinito. Esercizi sui limiti che sfruttano le tecniche viste finora.
17. Limiti di funzioni: definizioni. Definizione di funzione continua in un punto ed in un insieme.
18. Enunciato della continuità delle funzioni ottenute a partire da quelle elementari. Dimostrazione della continuità di una funzione esponenziale. Dimostrazione della continuità della composizione di due funzioni continue in un caso semplice. Enunciato dei limiti notevoli. Primi esempi di limiti calcolati mediante cambi di variabili e limiti notevoli.
19. Criterio successioni -> funzioni. Dimostrazione dei limiti notevoli classici.
20.  Criterio funzioni -> successioni. Trucco del passaggio all'esponenziale e del valore assoluto. Esempi di limiti calcolati sfruttando i limiti notevoli.
21. Sottosuccessioni e loro limiti. Utilizzo di successioni e sottosuccessioni per mostrare la non esistenza di limiti di funzioni e successioni.
22. Esercizi misti sui limiti: razionalizzazioni di radici, limiti in punti diversi da zero/infinito, limiti di sommatorie, limiti delle medie p-esime.
23. Definizione di o piccolo e di equivalenza asintotica. Principali proprietà di o piccolo.
24. Sviluppini delle funzioni elementari. Utilizzo degli sviluppini per il calcolo di limiti.
25. Rapporto incrementale, derivata e differenziale. Retta tangente ad un grafico. Equivalenza tra le definizioni e interpretazione geometrica. Limiti notevoli vs sviluppini vs derivate delle funzioni elementari. Continuità delle funzioni derivabili.
26. Teoremi algebrici sulle derivate. Derivata della composizione e dell'inversa (enunciati). Derivata delle funzioni elementari e delle relative inverse.
27. Enunciato del teorema di De L'Hôpital. Esempi in cui si può e non si può applicare. Pericoli del \"fare i limiti metà per volta\" o mediante equivalenza asintotica.
28. Enunciato della formula di Taylor con resto di Peano e centro in 0. Unicità del polinomio di Taylor. Dimostrazione degli sviluppi di Taylor delle funzioni elementari.
29. Formula di Taylor con resto di Peano e centro in un punto qualunque: enunciato e deduzione dal caso con centro in 0. Operazioni con i polinomi di Taylor: polinomio di Taylor della somma/differenza, del prodotto e della composizione.
30. Definizione di ordine di infinitesimo e parte principale. Esempi di calcolo di polinomi di Taylor.
31. Funzioni iperboliche.
32. Esercizi misti sui limiti, sviluppi di Taylor, parti principali.
33. Serie numeriche: definizione come limite delle somme parziali. Serie telescopiche e geometriche. Proprietà algebriche.
34. Condizione necessaria per la convergenza di una serie numerica. Serie a termini di segno costante. Criteri di convergenza: confronto, radice, rapporto. Primi esempi di studio della convergenza.
35. Criteri di convergenza per serie numeriche: confronto asintotico (casi standard e casi limite). Serie armonica generalizzata: dimostrazione via criterio di condensazione di Cauchy e via disuguaglianze elementari.
36. Esempi di studio della convergenza di serie numeriche a termini di segno costante, anche parametriche.
37. Criterio di Leibniz per le serie a segno alterno. Assoluta convergenza. Teorema dei carabinieri per le serie. Esempi di serie convergenti ma non assolutamente convergenti.
38. Esercizi riassuntivi sulle serie, anche parametriche.
39. Teorema di esistenza degli zeri: enunciato e tre possibili dimostrazioni. Teorema dei valori intermedi. Sottoinsiemi connessi/convessi dei reali. Le funzioni continue assumono tutti i valori tra inf e sup in un insieme connesso.
40. Teoremi che legano la monotonia di una funzione al segno della sua derivata prima. Primi esempi di applicazione allo studio di equazioni o della surgettività di una funzione.
41. Definizioni di max/min e di punti di max/min. Teorema di Weierstrass in un intervallo: enunciato e dimostrazione via ordinamento. Ricerca dei punti di max/min: punti stazionari interni, singolari interni, bordo.
42. Varianti del teorema di Weierstrass: funzioni periodiche, funzioni definite su tutta la retta con condizioni all'infinito. Studio locale di una funzione nell'intorno di un punto stazionario: criterio delle derivate successive e sua interpretazione in termini di polinomi di Taylor.
43. Schema classico per lo studio di funzioni: simmetrie, continuità, limiti agli estremi, zeri e segno, derivata prima e monotonia, punti di massimo/minimo locale/globale. Definizione di asintoti orizzontali, verticali, obliqui.
44. Calcolo dei coefficienti degli asintoti obliqui e loro interpretazione come sviluppi di Taylor all'infinito. Definizione geometrica di convessità/concavità. Legami tra convessità e derivata seconda. Punti di flesso.
45. Enunciato della Formula di Taylor con resto di Lagrange. Applicazioni classiche: approssimazione di funzioni, dimostrazione di disuguaglianze, convergenza di serie di Taylor. Classi di regolarità e accenno alle funzioni analitiche.
46. Funzioni lipschitziane. Legami tra lipschitzianità e limitatezza della derivata prima.
47. Esempi di utilizzo dello studio di funzione: calcolo di inf/sup/min/max di funzioni su insiemi, studio di iniettività e surgettività.
48. Esempi di utilizzo dello studio di funzione: dimostrazione delle disuguaglianze che legano seno e coseno ai rispettivi polinomi di Taylor; studio di disequazioni ed equazioni con parametro.
49. Esercizi misti sullo studio di funzioni.
50. Esercizi misti sullo studio di funzioni.
51. Introduzione agli integrali: notazioni, significato geometrico, funzioni a gradino, definizione di integrale inferiore e superiore. Funzione di Dirichlet.
52. Criterio di integrabilità. Enunciato dell'integrabilità delle funzioni monotone e delle funzioni continue (con dimostrazione nel caso delle monotone). Prime proprietà dell'integrale: linearità, monotonia, disuguaglianza con il valore assoluto, integrabilità del prodotto, proprietà di reticolo.
53. Additività dell'integrale rispetto alla zona di integrazione. Primitive, funzioni integrali e loro ruolo nel calcolo degli integrali. Lipschitzianità della funzione integrale. Teorema della media integrale.
54. Teorema fondamentale del calcolo integrale. Due primitive in un intervallo differiscono per una costante. Primitive elementari. Discorso sul +c negli integrali. Integrabilità del valore assoluto.
55. Formula di integrazione per parti. Esempi classici di applicazione. Tecnica del grande ritorno e dell'1 nascosto. Esempio paradossale utilizzando la formula senza estremi.
56. Formula di integrazione per sostituzione. Esempi classici di applicazione. Primitive di potenze di seno e coseno.
57. Integrazione delle funzioni razionali: descrizione dell'algoritmo, integrazione dei fratti semplici.
58. Precisazioni sui passi dell'algoritmo per integrare le funzioni razionali: fattorizzazione reale di polinomi, dimostrazione della decomposizione in fratti semplici, trucco per risolvere velocemente il sistema lineare.
59. Sostituzioni razionalizzanti: funzioni razionali di esponenziali, radici qualunque di funzioni razionali di primo grado, radici quadrate di polinomi di secondo grado.
60. Sostituzioni razionalizzanti: formule parametriche per le funzioni razionali di seno e coseno. Interpretazione delle sostituzioni razionalizzanti in termini di parametrizzazioni razionali di curve algebriche.
61. Utilizzo delle simmetrie per il calcolo di integrali. Integrali del quadrato di seno e coseno tra estremi multipli di un angolo retto. Integrali di funzioni pari/dispari. Esempi finali sul calcolo di primitive.
62. Introduzione agli integrali impropri: definizione nel caso monoproblema e spezzamento nel caso con più problemi. Comportamento degli integrali impropri con potenze negative della x, sia a 0 sia all'infinito. Primi esempi di calcolo.
63. Criteri di convergenza per integrali impropri: confronto, confronto asintotico (casi standard e casi limite), assoluta integrabilità. Primi esempi di applicazione.
64. Integrali impropri con problemi in punti diversi dall'origine. Ulteriori esempi di studio della convergenza di integrali impropri. Un integrale improprio all'infinito può convergere senza che la funzione tenda a zero.
65. Esempi classici di integrali oscillanti (integrali di Dirichlet e di Fresnel) trattati mediante integrazione per parti. Metodo dei triangolini (o rettangolini) per mostrare la non assoluta integrabilità degli stessi.
66. Criterio di Dirichlet per la convergenza di integrali impropri e di serie. Lemma di Abel (sommazione per parti).
67. Confronto serie-integrali e applicazioni (convergenza di serie, stima di sommatorie, stima delle code di serie).
68. Esempi di studio di funzioni integrali.
69. Il prodotto di funzioni integrabili è integrabile. Esercizi sullo studio della convergenza di integrali impropri.
70. Esercizi riassuntivi su integrali impropri, confronti serie-integrali e studio di funzioni integrali.
71. Introduzione alle equazioni differenziali: nomenclatura (ordine di un'equazione, forma normale, equazioni autonome). Tre classi speciali di equazioni: a variabili separabili, lineari del primo ordine, lineari di ogni ordine a coefficienti costanti, omogenee e non omogenee.
72. Introduzione alle equazioni differenziali: primi esempi di famiglie di soluzioni dipendenti da parametri, problema di Cauchy, enunciato dei teoremi di sola esistenza e di esistenza ed unicità, esempio di non unicità (pennello di Peano).
73. Equazioni differenziali a variabili separabili: descrizione della procedura per determinare una soluzione ed esempi di applicazione. Studio della soluzione: intervallo massimale di esistenza e life span. Alternativa tra esistenza globale, blow up e break down.
74. Equazioni differenziali a variabili separabili: enunciato e dimostrazione del teorema di esistenza ed unicità. Discussione di un primo esempio con valore soglia.
75. Equazioni differenziali lineari omogenee: l'insieme delle soluzioni è uno spazio vettoriale di dimensione uguale all'ordine dell'equazione. Nel caso di coefficienti costanti, algoritmo per determinare una base dello spazio delle soluzioni passando per le radici del polinomio caratteristico.
76. Esercizi sulle equazioni differenziali lineari a coefficienti costanti omogenee. Equazioni lineari non omogenee: struttura generale dello spazio delle soluzioni. Primi esempi di ricerca per tentativi di una soluzione speciale in casi semplici (ad esempio con termini forzanti esponenziali, polinomiali, trigonometrici).
77. Equazioni differenziali lineari non omogenee: metodo di variazione delle costanti per la ricerca di una soluzione. Equazioni differenziali lineari del primo ordine a coefficienti qualunque: formula risolutiva, sua giustificazione (mediante fattore integrante o variazione delle costanti). Equazioni di Bernoulli.
78. Riepilogo delle strategie per la ricerca euristica di soluzioni per equazioni differenziali lineari. Esercizi sulla risoluzione di equazioni differenziali.
79. Esempi classici di studio di equazioni differenziali con parametri: oscillatore armonico con risonanza, oscillatore armonico con attrito, equazione lineare del primo ordine con effetto soglia.
80. Esempi classici di studio di equazioni differenziali con parametri: autovalori della derivata seconda con condizioni di Dirichlet, blow up vs esistenza globale per rhs di tipo potenza, vera condizione in termini di integrali impropri.
81. Introduzione alle successioni per ricorrenza. Successioni di ordine 1 lineari autonome: formula generale e sue giustificazioni. Successioni di ordine 2 lineari omogenee: formula generale (basata sulle radici del polinomio caratteristico).
82. Successione di Fibonacci. Interpretazione matriciale e polinomiale della formula per le successioni per ricorrenza lineari omogenee. Successioni per ricorrenza lineari non omogenee: ricerca euristica di una soluzione (analoga alle equazioni differenziali).
83. Sistemi di successioni per ricorrenza lineari: riduzione ad una successione singola. Sistemi di equazioni differenziali vs equazioni singole di ordine superiore. Legami con autovalori ed autovettori nel caso lineare. Accenno all'esponenziale di una matrice.
84. Introduzione alle successioni per ricorrenza non lineari autonome del primo ordine: primi esempi di studio mediante un piano basato sulla monotonia. Interpretazione grafica.
85. Successioni per ricorrenza autonome spiraleggianti: studio mediante il piano basato sulla distanza dal presunto limite ed il piano basato sulle due sottosuccessioni.
86. Ulteriori esempi di successioni per ricorrenza autonome: piano con la doppia iterazione per quelle spiraleggianti, ulteriori esempi di utilizzo della distanza dal presunto limite, esempi di limiti e serie con termini definiti per ricorrenza.
87. Primi esempi di studio di successioni per ricorrenza non autonome: piani con la monotonia, con il rapporto, con limitatezza e confronto/carabinieri.
88. Ulteriori esempi di successioni per ricorrenza non autonome.
89. Esempio di studio di una successione per ricorrenza non autonoma con un valore soglia.
90. Ulteriori esempi di successioni per ricorrenza con comportamenti soglia. Legami tra la stabilità dei punti fissi di una funzione e valore assoluto della derivata. Esempio di successione per ricorrenza senza limite (caos).
91. Liminf e limsup di successioni: definizione come limite di inf/sup, primi esempi, caratterizzazione, definizione come inf dei maggioranti definitivi (o sup dei minoranti definitivi), rapporto con l'eventuale limite.
92. Teorema del confronto e teorema dei carabinieri in versione liminf/limsup. Teorema delle sottosuccessioni in versione liminf/limsup. Caratterizzazione di liminf/limsup come minlim/maxlim.
93. Criterio della radice, del rapporto e del rapporto--radice in versione liminf/limsup. Liminf/limsup della somma. Caso in cui uno dei due è un limite. Accenno al caso del prodotto.
94. Liminf/limsup di funzioni: definizione, caratterizzazione come minlim/maxlim di successioni. Esempi: utilizzo di stime e sottosuccessioni per determinare liminf/limsup.
95. Linguaggio topologico nella retta reale: parte interna, chiusura, frontiera, punti isolati, punti di accumulazione. Insiemi aperti e chiusi. Famiglie infinite di sottoinsiemi aperti/chiusi, e loro unione/intersezione.
96. Caratterizzazione della chiusura per successioni. Topologia relativa. Quattro facce della continuità: epsilon/delta, con le successioni, con i limiti, topologica. Equivalenza tra continuità epsilon/delta e continuità per successioni. Continuità della composizione di funzioni continue.
97. Fil rouge del calcolo differenziale (concatenazione logica dagli assiomi dei numeri reali ai teoremi sulle funzioni derivabili). Teoremi di Rolle, Cauchy, Lagrange. Controesempi ed interpretazioni geometriche.
98. Enunciato e dimostrazione della formula di Taylor con resto di Peano e di Lagrange. Road map per una dimostrazione diretta della formula con resto di Lagrange usando solo il teorema di Rolle.
99. Dimostrazione dei teoremi di De L'Hôpital.
100. Teoremi di Stolz–Cesàro: enunciato, dimostrazione, esempi. Teorema delle medie di Cesàro. Criterio rapporto -> radice come applicazione di Stolz–Cesàro. Limsup/liminf di una funzione applicata ad una funzione.
101. Tre facce della compattezza: limitato e chiuso, compattezza per successioni, compattezza per ricoprimenti. Teorema di Bolzano-Weierstrass. Dimostrazione dell'equivalenza tra le prime due definizioni. Dimostrazione che in ogni sottoinsieme non vuoto dei reali esistono successioni che tendono a inf/sup.
102. Ogni sottoinsieme non vuoto dei reali ammette max/min. Dimostrazione del teorema di Weierstrass per funzioni continue su un compatto. Le funzioni continue mandano compatti in compatti (ma non mandano chiusi in chiusi e limitati in limitati). Funzioni semicontinue inferiormente e superiormente: definizione ed esempi. Teorema di Weierstrass per funzioni semicontinue.
103. Compatto per ricoprimenti implica chiuso e limitato. Lemma del raggio magico (numero di Lebesgue). Lemma dei distributori (esistenza della epsilon rete). Compatto per successioni implica compatto per ricoprimenti. Le funzioni continue mandano compatti per ricoprimenti in compatti per ricoprimenti.
104. Definizione di successione di Cauchy e prime proprietà. Completezza dei numeri reali: dimostrazione via liminf/limsup e via Bolzano-Weierstrass. Accenno all'equivalenza tra assioma di continuità e completezza + proprietà archimedea.
105. Funzioni uniformemente continue: definizione, commenti, primi esempi. Lipschitzianità implica uniforme continuità. Comportamento delle funzioni uniformemente continue rispetto a somma, prodotto, restrizione, rincollamento.
106. Le funzioni uniformemente continue mandano successioni di Cauchy in successioni di Cauchy. Teorema di estensione: enunciato e dimostrazione. Teorema di Heine-Cantor: enunciato e due dimostrazioni (per assurdo via compattezza per successioni, diretta via compattezza per ricoprimenti e raggio magico).
107. Continua in una semiretta più limite reale all'infinito implica uniformemente continua. Uniformemente continua in una semiretta implica sublineare. Funzioni Holderiane: definizione, primi esempi, commento geometrico.
108. Proprietà delle funzioni Holderiane (somma, prodotto, composizione). Rapporti tra Lipschitzianità e Holderianità, sia su insiemi generali, sia su insiemi limitati. Holderianità vs Lipschitzianità di opportune potenze.
109. Esercizi misti su funzioni uniformemente continue, Holderiane, Lipschitziane. Esempi borderline: funzioni uniformemente continue ma non Holderiane di ogni ordine, funzioni Holderiane di ogni ordine ma non Lipschitziane.
110. Integrabilità delle funzioni continue in un intervallo. Legami tra la convergenza di un integrale improprio su una semiretta e il liminf/limsup all'infinito. Ulteriori esempi su funzioni Holderiane.
111. Combinazioni convesse e sottoinsiemi convessi della retta. Funzioni convesse e strettamente convesse: definizione algebrica e significato geometrico. Caratterizzazioni delle funzioni convesse: lemma dei due e dei tre rapporti incrementali.
112. Legami tra convessità e crescenza della derivata prima (posto che questa esista), legami tra convessità e segno della derivata seconda (posto che questa esista). Continuità e locale lipschitzianità nella parte interna dell'insieme di definizione. Derivata destra/sinistra per funzioni convesse: esistenza in ogni punto interno e proprietà di monotonia.
113. Funzioni convesse: continuità a destra della derivata destra. Caratterizzazione dei punti di derivabilità in termini di derivata destra/sinistra. Punti di minimo di funzioni convesse. Disuguaglianze di convessità: le funzioni convesse stanno sopra le rette tangenti (sia nel caso regolare, sia nel caso generale) e disuguaglianza di Jensen (dimostrazione induttiva e dimostrazione via retta tangente).
114. Disuguaglianza di Bernoulli come disuguaglianza di convessità. Disuguaglianza di Young. Disuguaglianza di Cauchy-Schwarz: dimostrazione classica e per omogeneità. Disuguaglianza di Holder con due o più specie. Medie p-esime e disuguaglianza tra le medie.
115. Funzioni convesse: semicontinuità superiore fino al bordo, i punti di massimo sono sempre al bordo. Lemma della sotto-sotto-successione. Relazioni tra monotonia, iniettività, continuità. Continuità della funzione inversa (insieme di partenza compatto).
116. Continuità della funzione inversa (insieme di partenza convesso). Derivata della funzione inversa. Ulteriore regolarità della funzione inversa. Derivata della funzione composta via lemma della sotto-sotto-successione.
117. Formula di Stirling per l'approssimazione del fattoriale (equivalenza asintotica e stima dal basso): enunciato e dimostrazione a partire dal prodotto di Wallis. Interpretazione del logaritmo del rapporto in termini di confronto tra un integrale e l'area di un trapezio. Formula iterativa per l'integrale della potenza n-esima del seno.
118. Dimostrazione del calcolo del prodotto di Wallis.  Stima asintotica per l'integrale della potenza n-esima del seno. Calcolo dell'integrale gaussiano a partire dalla stima asintotica precedente.
119. Proprietà di riordinamento e di raggruppamento per serie numeriche assolutamente convergenti. Teorema di riordinamento di Riemann (riordinamento di serie convergenti, ma non assolutamente convergenti).
120. Prodotto di Cauchy di serie numeriche: euristica, controesempio alla convergenza, dimostrazione del teorema di convergenza quando almeno una converge assolutamente. Esempio con la serie di Taylor dell'esponenziale.
121. Ricapitolazione sui simboli di Landau: o piccolo, O grande, equivalenza asintotica. Rapporti tra le definizioni ed esempi.
122. Come dimostrare che una funzione è derivabile o non derivabile in un punto. Proprietà di Darboux delle derivate. Esempi patologici: funzioni derivabili ovunque con derivata discontinua, funzioni con derivata positiva in un punto e non monotone in nessun intorno del punto.
123. Tre diverse definizioni di integrale: secondo Darboux inclusiva, secondo Darboux ortodossa, secondo Riemann. Dimostrazione dell'equivalenza tra le tre definizioni di integrale, ed in particolare del fatto che una funzione integrabile secondo Darboux è integrabile secondo Riemann.
124. Esempio in cui non è possibile passare al limite sotto il segno di integrale. Dimostrazione che l'integrale della potenza n-esima del seno tende a 0. Dimostrazione dell'integrabilità di funzioni continue tranne un numero finito di punti.
125. Esempi di funzioni di classe C-infinito con tutte le derivate nulle in un punto. Raccordo C-infinito tra due costanti. Approssimazione di funzioni integrabili mediante funzioni di classe C-infinito.
126. Esercizi misti, anche presi da test d'esame.
127. Definizioni formali degli insiemi numerici: numeri naturali via assiomi di Peano, interi via quoziente su coppie di naturali, razionali via quoziente su coppie di interi, reali via sezioni di Dedekind (o semirette sinistre) di razionali.
128. Road map della dimostrazione dell'unicità dei reali. Funzioni razionali come campo ordinato in cui non valgono proprietà archimedea e assioma di continuità. Tre esempi di bravate: calcolo degli integrali di Fresnel a partire dall'integrale Gaussiano, approccio di Eulero al Basel problem (somma dei reciproci dei quadrati), analogia tra una successione per ricorrenza e un'equazione differenziale.
129. Serie armonica generalizzata ristretta agli interi che si scrivono in base 10 senza usare una data cifra. Divergenza della serie dei reciproci dei primi (dimostrazione via prodotto di Eulero e alla Erdos). Non esistenza del limite della successione sin(n). Accenno alla densità degli interi sulla circonferenza trigonometrica.
130. Dimostrazione dell'irrazionalità del numero e. Limite strano collegato alla convergenza rapida della serie dell'esponenziale. Insiemi e funzioni strani: razionali ingrassati, funzioni periodiche con somma uguale all'identità, funzioni continue in un intervallo chiuso che assumono ogni valore nell'immagine infinite volte.

============================================================ */
