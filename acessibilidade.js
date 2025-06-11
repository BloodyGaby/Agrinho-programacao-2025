// Toggle visibilidade do menu
document.getElementById("abrir-acessibilidade").addEventListener("click", () => {
  const opcoes = document.getElementById("acessibilidade-opcoes");
  opcoes.style.display = opcoes.style.display === "block" ? "none" : "block";
});

// Controle de fonte
let tamanhoFonteAtual = 1; // em rem

function aumentarFonte() {
  tamanhoFonteAtual += 0.1;
  document.body.style.fontSize = `${tamanhoFonteAtual}rem`;
}

function diminuirFonte() {
  tamanhoFonteAtual = Math.max(0.6, tamanhoFonteAtual - 0.1);
  document.body.style.fontSize = `${tamanhoFonteAtual}rem`;
}

// Leitura de texto (exclui botões)
function lerTexto() {
  const synth = window.speechSynthesis;
  synth.cancel(); // Para leitura anterior se houver

  const cloneBody = document.body.cloneNode(true);
  const acessibilidade = cloneBody.querySelector(".acessibilidade-container");
  if (acessibilidade) acessibilidade.remove();

  const texto = cloneBody.innerText;

  const utter = new SpeechSynthesisUtterance(texto);
  utter.lang = 'pt-BR';
  utter.rate = 0.9;

  utter.onend = () => {
    console.log("Leitura finalizada.");
  };

  synth.speak(utter);
}
