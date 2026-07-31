const GA_MEASUREMENT_ID = "G-P6KEY6K5F2";

if (
  window.location.hostname !== "localhost" &&
  window.location.hostname !== "127.0.0.1"
) {
  /*
    Carica per prima la libreria ufficiale di Google Analytics.
  */
  const scriptAnalytics = document.createElement("script");
  scriptAnalytics.async = true;
  scriptAnalytics.src =
    "https://www.googletagmanager.com/gtag/js?id=" +
    encodeURIComponent(GA_MEASUREMENT_ID);

  document.head.appendChild(scriptAnalytics);

  /*
    Inizializza la coda usata da gtag.js.
  */
  window.dataLayer = window.dataLayer || [];

  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());

  window.gtag("config", GA_MEASUREMENT_ID);
  /*
    In locale non invia dati, ma mostra gli eventi in console.
  */
  window.gtag = function () {
    console.log("Analytics locale:", ...arguments);
  };
}
