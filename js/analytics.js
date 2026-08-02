const GA_MEASUREMENT_ID = "G-P6KEY6K5F2";

const dominioUfficiale = "pagine.dm.unipi.it";

if (window.location.hostname === dominioUfficiale) {
  /*
    Sul sito ufficiale carica Google Analytics.
  */
  const scriptAnalytics = document.createElement("script");
  scriptAnalytics.async = true;
  scriptAnalytics.src =
    "https://www.googletagmanager.com/gtag/js?id=" +
    encodeURIComponent(GA_MEASUREMENT_ID);

  document.head.appendChild(scriptAnalytics);

  window.dataLayer = window.dataLayer || [];

  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);
} else {
  /*
    In locale e su GitHub Pages non invia dati:
    mostra soltanto gli eventi in console.
  */
  window.gtag = function () {
    console.log("Analytics locale:", ...arguments);
  };
}
