if (!window.__a11yUNL_injected__) {
  window.__a11yUNL_injected__ = true;

  const style = document.createElement('style');
  const iconPath = getBaseIconURL("unl_icon.svg");
  let currentFontScale = 1;
  let speechRate = 0.7;
  let wasDragged = false;

  const toggle = document.createElement("button");
  toggle.id = "accessibility-toggle";
  toggle.innerHTML = `<img src="${iconPath}" alt="Accesibilidad" width="32" height="32" />`;
  toggle.setAttribute("aria-label", "Herramientas de accesibilidad");
  toggle.classList.add("no-scale");
  toggle.addEventListener("click", () => {
    if (wasDragged) {
      wasDragged = false;
      return;
    }
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

  const menu = document.createElement("div");
  menu.id = "accessibility-menu";
  menu.setAttribute("role", "complementary");
  menu.setAttribute("aria-label", "Herramientas de accesibilidad");
  menu.classList.add("no-scale");

  const actionsLow = [
    { text: "🔍 Aumentar texto", action: () => changeFontSize(1) },
    { text: "🔍 Disminuir texto", action: () => changeFontSize(-1) },
    { text: "▤ Escala de grises", action: () => setGrayscale() },
    { text: "⚫ Alto contraste", action: () => setHighContrast() },
    { text: "👁 Contraste negativo", action: () => setNegativeContrast() },
    { text: "💡 Fondo claro", action: () => setLightBackground() },
    { text: "🔗 Enlaces subrayados", action: () => underlineLinks() },
    { text: "🅰 Fuente legible", action: () => readableFont() },
  ];

  const actionsHigh = [
    { text: "🔊 Leer página", action: () => leerTexto(obtenerContenidoVisible()) },
    { text: "🛑 Detener lectura", action: () => detenerLectura() },
    { text: "🔄 Restablecer cambios", action: () => resetAccessibility(), isReset: true }
  ];

  const ul = document.createElement("ul");
  actionsLow.forEach(({ text, action }) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.addEventListener("click", action);
    li.appendChild(btn);
    ul.appendChild(li);
  });

  const title = document.createElement("h2");
  title.textContent = "Herramientas de accesibilidad";

  const velocidadLabel = document.createElement("label");
  velocidadLabel.textContent = "🔊 Velocidad de lectura:";
  velocidadLabel.setAttribute("for", "slider-velocidad");
  velocidadLabel.style.display = "block";
  velocidadLabel.style.marginTop = "10px";

  const velocidadSlider = document.createElement("input");
  velocidadSlider.type = "range";
  velocidadSlider.min = "0.5";
  velocidadSlider.max = "2";
  velocidadSlider.step = "0.1";
  velocidadSlider.value = speechRate;
  velocidadSlider.id = "slider-velocidad";
  velocidadSlider.style.width = "100%";

  const velocidadValor = document.createElement("span");
  velocidadValor.textContent = ` ${speechRate.toFixed(1)}x`;

  velocidadSlider.addEventListener("input", () => {
    speechRate = parseFloat(velocidadSlider.value);
    velocidadValor.textContent = ` ${speechRate.toFixed(1)}x`;
  });

  const ulHigh = document.createElement("ul");
  actionsHigh.forEach(({ text, action, isReset }) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.addEventListener("click", action);

    if (isReset) {
      btn.classList.add("reset-button");
    }

    li.appendChild(btn);
    ulHigh.appendChild(li);
  });

  menu.appendChild(title);
  menu.appendChild(ul);
  menu.appendChild(velocidadLabel);
  menu.appendChild(velocidadSlider);
  menu.appendChild(velocidadValor);
  menu.appendChild(ulHigh);

  const observer = new MutationObserver(() => {
    const toggleBtn = document.getElementById("accessibility-toggle");
    if (toggleBtn && toggleBtn.getAttribute("aria-hidden") === "true") {
      toggleBtn.removeAttribute("aria-hidden");
      toggleBtn.setAttribute("tabindex", "0");
    }
  });

  observer.observe(document.body, {
    attributes: true,
    subtree: true,
    attributeFilter: ["aria-hidden"]
  });

  document.head.appendChild(style);
  document.body.appendChild(menu);
  document.body.appendChild(toggle);

  makeElementDraggable(toggle);

  document.addEventListener("click", (event) => {
    const isClickOnToggle = toggle.contains(event.target);
    const isClickOnMenu = menu.contains(event.target);

    if (!isClickOnToggle && !isClickOnMenu && menu.style.display === "block") {
      menu.style.display = "none";
    }
  });

  function changeFontSize(delta) {
    registrarTamanosOriginales();
    currentFontScale += delta * 0.1;
    if (currentFontScale < 0.5) currentFontScale = 0.5;

    document.querySelectorAll("body *:not(.no-scale):not(.no-scale *)").forEach(el => {
      const baseSize = parseFloat(el.getAttribute("data-original-font-size"));
      if (!isNaN(baseSize)) {
        el.style.fontSize = (baseSize * currentFontScale) + "px";
        el.setAttribute("data-a11y-modified", "true");
      }
    });
  }

  function setGrayscale() {
    document.documentElement.style.filter = "grayscale(100%)";
    document.documentElement.setAttribute("data-a11y-modified", "true");
  }

  function setHighContrast() {
    document.documentElement.style.filter = "contrast(200%)";
    document.documentElement.setAttribute("data-a11y-modified", "true");
  }

  function setNegativeContrast() {
    document.documentElement.style.filter = "invert(100%)";
    document.documentElement.setAttribute("data-a11y-modified", "true");
  }

  function setLightBackground() {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
    document.body.setAttribute("data-a11y-modified", "true");
  }

  function underlineLinks() {
    document.querySelectorAll("a").forEach(link => {
      link.style.textDecoration = "underline";
      link.setAttribute("data-a11y-modified", "true");
    });
  }

  function readableFont() {
    document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
    document.body.setAttribute("data-a11y-modified", "true");
  }

  function resetAccessibility() {
    detenerLectura();
    currentFontScale = 1;

    document.querySelectorAll("[data-a11y-modified]").forEach(el => {
      const originalSize = el.getAttribute("data-original-font-size");
      if (originalSize && !isNaN(originalSize)) {
        el.style.fontSize = originalSize + "px";
      } else {
        el.style.removeProperty("font-size");
      }

      el.removeAttribute("data-original-font-size");
      el.removeAttribute("data-a11y-modified");
      el.style.removeProperty("font-family");
      el.style.removeProperty("text-decoration");
      el.style.removeProperty("filter");
      el.style.removeProperty("color");
      el.style.removeProperty("background-color");
    });

    document.documentElement.style.removeProperty("filter");
    document.body.style.removeProperty("background-color");
    document.body.style.removeProperty("color");
    document.body.style.removeProperty("font-family");
    document.body.style.removeProperty("filter");

    const velocidadSlider = document.getElementById("slider-velocidad");
    if (velocidadSlider) {
      velocidadSlider.value = "1.0";
      const velocidadValor = velocidadSlider.nextElementSibling;
      if (velocidadValor) velocidadValor.textContent = " 1.0x";
    }
  }

  function leerTexto(texto) {
    detenerLectura();
    const lang = document.documentElement.lang || "es-ES";
    const speech = new SpeechSynthesisUtterance(texto);
    speech.lang = lang;
    speech.rate = speechRate;
    speech.pitch = 1.6; // Modular voz de 1 a 2
    speech.volume = 0.2; // 0 1
    window.speechSynthesis.speak(speech);
  }

  function detenerLectura() {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
  }

  function getBaseIconURL(iconName) {
    if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.getURL) {
      return chrome.runtime.getURL(iconName);
    }

    const currentScript = document.currentScript || Array.from(document.getElementsByTagName("script")).pop();
    if (currentScript && currentScript.src) {
      const baseURL = currentScript.src.substring(0, currentScript.src.lastIndexOf("/") + 1);
      return baseURL + iconName;
    }

    console.warn("⚠️ No se pudo determinar la URL del ícono. Verifica la ruta.");
    return iconName;
  }

  function obtenerContenidoVisible() {
    const elementosVisibles = Array.from(document.body.children)
        .filter(el => {
          const isAccElement = el.id.startsWith("accessibility-");
          const isStyleOrScript = ["STYLE", "SCRIPT", "NOSCRIPT", "LINK"].includes(el.tagName);
          const isHidden = window.getComputedStyle(el).display === "none" || el.hidden;
          return !isAccElement && !isStyleOrScript && !isHidden;
        });

    return elementosVisibles.map(el => el.innerText.trim()).join(" ");
  }

  function makeElementDraggable(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e.preventDefault();
      wasDragged = false;

      const computedStyle = window.getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      if (computedStyle.bottom !== 'auto' && (!element.style.top || element.style.top === '')) {
        element.style.top = rect.top + "px";
        element.style.bottom = "auto";
      }

      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e.preventDefault();
      wasDragged = true;
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      element.style.top = (element.offsetTop - pos2) + "px";
      element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  function registrarTamanosOriginales() {
    document.querySelectorAll("body *:not(.no-scale):not(.no-scale *)").forEach(el => {
      if (!el.hasAttribute("data-original-font-size")) {
        const computedSize = window.getComputedStyle(el).fontSize;

        if (computedSize && computedSize.endsWith("px")) {
          const base = parseFloat(computedSize);
          if (!isNaN(base)) {
            el.setAttribute("data-original-font-size", base);
          }
        }
      }
    });
  }
}
