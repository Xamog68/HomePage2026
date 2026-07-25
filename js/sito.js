function generaTabellaLezioni() {
  for (var i = 1; i < Lezioni.length; i++) {
    var NumeroOra = Lezioni[i][0];
    var NumeroOraMod = (NumeroOra > 99) ? NumeroOra : "0" + NumeroOra;
    NumeroOraMod = (NumeroOra < 10) ? "00" + NumeroOra : NumeroOraMod;

    var IndirizzoAvi = Percorso + NumeroOraMod + ".avi";
    var IndirizzoPdf = Percorso + NumeroOraMod + ".pdf";

    var LinkAvi =
      Lezioni[i][5] == "m"
        ? "Missing!"
        : "<A href=\"" + IndirizzoAvi + "\" target=\"_blank\" " +
          "onclick=\"ga('send', 'event', '" + NomeCorso +
          "','Avi','Lezione " + NumeroOraMod + "')\">avi</A>";

    document.write(
      "<TR><TD>" +
      Lezioni[i][0] +
      "</TD><TD>" +
      Lezioni[i][1] +
      "</TD><TD>" +
      Lezioni[i][2] +
      "</TD><TD>" +
      Lezioni[i][3] +
      "</TD><TD>" +
      Lezioni[i][4] +
      "</TD><TD>" +
      LinkAvi +
      "</TD><TD><A href=\"" +
      IndirizzoPdf +
      "\" target=\"_blank\" " +
      "onclick=\"ga('send', 'event', '" +
      NomeCorso +
      "','Pdf','Lezione " +
      NumeroOraMod +
      "')\">pdf</A></TD></TR>"
    );
  }
}
