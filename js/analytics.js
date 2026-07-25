const GA_MEASUREMENT_ID = "G-P6KEY6K5F2";

if (
  window.location.hostname !== "localhost" &&
  window.location.hostname !== "127.0.0.1"
) {
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }

  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);

  const scriptAnalytics = document.createElement("script");
  scriptAnalytics.async = true;
  scriptAnalytics.src =
    "https://www.googletagmanager.com/gtag/js?id=" +
    GA_MEASUREMENT_ID;

  document.head.appendChild(scriptAnalytics);
} else {
  window.gtag = function () {
    console.log("Analytics locale:", ...arguments);
  };
}
