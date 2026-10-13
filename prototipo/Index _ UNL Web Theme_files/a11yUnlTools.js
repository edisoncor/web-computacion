(function () {
  if (window.__a11yUNL_injected__) return;

  window.addEventListener("DOMContentLoaded", () => {
    const baseURL = getScriptBaseURL();

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = baseURL + "a11yUnlStyle.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = baseURL + "a11yUnl.js";
    document.body.appendChild(script);
  });

  function getScriptBaseURL(scriptName = "a11yUnlTools.js") {
    let src;

    if (document.currentScript && document.currentScript.src) {
      src = document.currentScript.src;
    } else {
      const scripts = Array.from(document.getElementsByTagName("script"));
      const matched = scripts.find(s => s.src && s.src.includes(scriptName));
      if (matched) {
        src = matched.src;
      }
    }

    if (src) {
      const url = new URL(src, window.location.href);
      return url.href.substring(0, url.href.lastIndexOf("/") + 1);
    }

    console.warn("⚠️ No se pudo determinar baseURL. Usando '/' por defecto.");
    return "/";
  }
})();