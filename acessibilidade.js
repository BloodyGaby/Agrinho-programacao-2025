// Alternar exibição do menu
document.getElementById('botao-acessibilidade').addEventListener('click', () => {
  const opcoes = document.getElementById('opcoes-acessibilidade');
  opcoes.style.display = (opcoes.style.display === 'flex') ? 'none' : 'flex';
});

// Aumentar fonte
document.getElementById('aumentar-fonte').addEventListener('click', () => {
  const elementos = document.querySelectorAll('p, h1, h2, h3, h4, h5, span, li, a, div');
  elementos.forEach(el => {
    let tamanhoAtual = window.getComputedStyle(el).fontSize;
    el.style.fontSize = (parseFloat(tamanhoAtual) + 2) + "px";
  });
});

// Diminuir fonte
document.getElementById('diminuir-fonte').addEventListener('click', () => {
  const elementos = document.querySelectorAll('p, h1, h2, h3, h4, h5, span, li, a, div');
  elementos.forEach(el => {
    let tamanhoAtual = window.getComputedStyle(el).fontSize;
    el.style.fontSize = (parseFloat(tamanhoAtual) - 2) + "px";
  });
});

// Leitor de texto com voz feminina
document.getElementById('ler-texto').addEventListener('click', () => {
  const texto = document.body.innerText;
  const utterance = new SpeechSynthesisUtterance(texto);

  // Verifica vozes disponíveis
  const setVoice = () => {
    const vozes = speechSynthesis.getVoices();
    const vozFeminina = vozes.find(v => v.lang === 'pt-BR' && v.name.toLowerCase().includes("feminina"));

    if (vozFeminina) {
      utterance.voice = vozFeminina;
    } else {
      utterance.lang = 'pt-BR';
    }

    speechSynthesis.cancel(); // Evita sobreposição
    speechSynthesis.speak(utterance);
  };

  if (speechSynthesis.getVoices().length === 0) {
    speechSynthesis.addEventListener('voiceschanged', setVoice);
  } else {
    setVoice();
  }
});
