const painel = document.getElementById('painelAcessibilidade');
const btnToggle = document.getElementById('btnAcessibilidade');
let tamanhoFonte = 100; // percentual base: 100%

// Mostra/esconde o painel
btnToggle.addEventListener('click', () => {
  painel.classList.toggle('escondido');
});

// Aumenta a fonte de toda a página
function aumentarFonte() {
  if (tamanhoFonte < 200) {
    tamanhoFonte += 10;
    document.body.style.fontSize = `${tamanhoFonte}%`;
  }
}

// Diminui a fonte de toda a página
function diminuirFonte() {
  if (tamanhoFonte > 60) {
    tamanhoFonte -= 10;
    document.body.style.fontSize = `${tamanhoFonte}%`;
  }
}

// Lê o texto da página
function lerTexto() {
  const texto = document.body.innerText;
  const utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = "pt-BR";
  utterance.rate = 1;
  utterance.pitch = 1.2;
  const vozes = window.speechSynthesis.getVoices();
  utterance.voice = vozes.find(v => v.lang === 'pt-BR') || null;
  window.speechSynthesis.speak(utterance);
}