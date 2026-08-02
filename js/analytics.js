const GA_MEASUREMENT_ID = "G-P6KEY6K5F2";

const hostLocale =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

if (!hostLocale) {
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

  window.gtag("config", GA_MEASUREMENT_ID, {
    cookie_domain: "none",
    debug_mode: true
  });
} else {
  window.gtag = function () {
    console.log("Analytics locale:", ...arguments);
  };
}
