const toggleBtn = document.getElementById("acessibilidade-toggle");
const opcoes = document.getElementById("acessibilidade-opcoes");
let tamanhoFonte = 100; // porcentagem

toggleBtn.addEventListener("click", () => {
  opcoes.classList.toggle("escondido");
});

document.getElementById("aumentar-fonte").addEventListener("click", () => {
  tamanhoFonte += 10;
  document.body.style.fontSize = `${tamanhoFonte}%`;
});

document.getElementById("diminuir-fonte").addEventListener("click", () => {
  tamanhoFonte = Math.max(50, tamanhoFonte - 10);
  document.body.style.fontSize = `${tamanhoFonte}%`;
});

document.getElementById("ler-pagina").addEventListener("click", () => {
  const texto = document.body.innerText;
  const sintetizador = window.speechSynthesis;

  if (sintetizador.speaking) {
    sintetizador.cancel();
    return;
  }

  const utter = new SpeechSynthesisUtterance(texto);
  utter.lang = "pt-BR";
  sintetizador.speak(utter);
});
