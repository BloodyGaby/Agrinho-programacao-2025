document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("acessibilidade-toggle");
  const opcoes = document.getElementById("acessibilidade-opcoes");
  const aumentarFonteBtn = document.getElementById("aumentar-fonte");
  const diminuirFonteBtn = document.getElementById("diminuir-fonte");
  const lerPaginaBtn = document.getElementById("ler-pagina");

  let fontSizeAtual = 16;

  toggleBtn.addEventListener("click", () => {
    const isHidden = opcoes.classList.toggle("escondido");
    toggleBtn.setAttribute("aria-expanded", !isHidden);
    opcoes.setAttribute("aria-hidden", isHidden);
  });

  aumentarFonteBtn.addEventListener("click", () => {
    if (fontSizeAtual < 24) {
      fontSizeAtual += 2;
      document.body.style.fontSize = fontSizeAtual + "px";
    }
  });

  diminuirFonteBtn.addEventListener("click", () => {
    if (fontSizeAtual > 12) {
      fontSizeAtual -= 2;
      document.body.style.fontSize = fontSizeAtual + "px";
    }
  });

  lerPaginaBtn.addEventListener("click", () => {
    const texto = document.body.innerText;
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(texto);
      utterance.lang = "pt-BR";
      utterance.rate = 1;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Este navegador não suporta leitura de texto.");
    }
  });
});
