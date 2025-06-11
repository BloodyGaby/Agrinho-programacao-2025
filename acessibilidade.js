// Seleciona os elementos
const toggleBtn = document.getElementById("acessibilidade-toggle");
const opcoes = document.getElementById("acessibilidade-opcoes");
const aumentarFonteBtn = document.getElementById("aumentar-fonte");
const diminuirFonteBtn = document.getElementById("diminuir-fonte");
const lerPaginaBtn = document.getElementById("ler-pagina");

// Controla o painel de opções
toggleBtn.addEventListener("click", () => {
  const isHidden = opcoes.classList.toggle("escondido");

  // Atualiza atributos ARIA para acessibilidade
  toggleBtn.setAttribute("aria-expanded", !isHidden);
  opcoes.setAttribute("aria-hidden", isHidden);
});

// Controle do tamanho da fonte
const body = document.body;
const fontSizeBase = 16; // tamanho base em px
let fontSizeAtual = fontSizeBase;

aumentarFonteBtn.addEventListener("click", () => {
  if (fontSizeAtual < 24) { // limite máximo
    fontSizeAtual += 2;
    body.style.fontSize = fontSizeAtual + "px";
  }
});

diminuirFonteBtn.addEventListener("click", () => {
  if (fontSizeAtual > 12) { // limite mínimo
    fontSizeAtual -= 2;
    body.style.fontSize = fontSizeAtual + "px";
  }
});

// Função para ler o conteúdo da página
lerPaginaBtn.addEventListener("click", () => {
  const texto = document.body.innerText;

  if ("speechSynthesis" in window) {
    // Para qualquer fala atual
    window.speechSynthesis.cancel();

    // Cria uma nova fala
    const utterance = new SpeechSynthesisUtterance(texto);

    // Configurações opcionais
    utterance.lang = "pt-BR";
    utterance.rate = 1; // velocidade da fala
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
  } else {
    alert("Desculpe, seu navegador não suporta síntese de voz.");
  }
});