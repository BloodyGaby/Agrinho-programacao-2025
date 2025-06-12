// Alternar exibição do menu com toggle na classe 'mostrar'
document.getElementById('botao-acessibilidade').addEventListener('click', () => {
  const opcoes = document.getElementById('opcoes-acessibilidade');
  opcoes.classList.toggle('mostrar');
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

// Leitor de texto com voz feminina em pt-BR
document.getElementById('ler-texto').addEventListener('click', () => {
  const texto = document.body.innerText;
  const utterance = new SpeechSynthesisUtterance(texto);

  const setVozFeminina = () => {
    const vozes = speechSynthesis.getVoices();

    // Procura voz feminina em pt-BR (com nomes comuns)
    const vozFeminina = vozes.find(voz =>
      voz.lang === 'pt-BR' &&
      (
        voz.name.toLowerCase().includes('feminina') ||
        voz.name.toLowerCase().includes('luciana') ||
        voz.name.toLowerCase().includes('fernanda') ||
        voz.name.toLowerCase().includes('brasil') ||
        voz.name.toLowerCase().includes('pt-br')
      )
    );

    if (vozFeminina) {
      utterance.voice = vozFeminina;
    }
    utterance.lang = 'pt-BR';

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };

  if (speechSynthesis.getVoices().length === 0) {
    speechSynthesis.addEventListener('voiceschanged', setVozFeminina, { once: true });
  } else {
    setVozFeminina();
  }
});