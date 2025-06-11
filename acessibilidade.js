let tamanhoFonte = 100;
const opcoes = document.getElementById("acessibilidade-opcoes");
document.getElementById("acessibilidade-btn").addEventListener("click", () => {
  opcoes.classList.toggle("hidden");
});

function alterarFonte(variacao) {
  tamanhoFonte += variacao * 10;
  if (tamanhoFonte < 50) tamanhoFonte = 50;
  if (tamanhoFonte > 200) tamanhoFonte = 200;
  document.body.style.fontSize = `${tamanhoFonte}%`;
}

function lerTexto() {
  const texto = document.body.innerText;
  const utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = "pt-BR";

  // Seleciona voz feminina brasileira se disponível
  const vozes = speechSynthesis.getVoices();
  const vozFeminina = vozes.find(v => v.lang === "pt-BR" && v.name.toLowerCase().includes("feminina"));
  if (vozFeminina) utterance.voice = vozFeminina;

  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);

  utterance.onend = () => {
    speechSynthesis.cancel();
  };
}
