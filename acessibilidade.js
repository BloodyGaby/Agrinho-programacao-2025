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

// Leitor de texto com voz feminina em pt-BR
document.getElementById('ler-texto').addEventListener('click', () => {
  const texto = document.body.innerText;
  const utterance = new SpeechSynthesisUtterance(texto);

  // Função que define a voz
  const setVozFeminina = () => {
    const vozes = speechSynthesis.getVoices();

    // Tenta encontrar uma voz feminina adequada
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

    // Aplica a voz encontrada ou apenas define o idioma
    if (vozFeminina) {
      utterance.voice = vozFeminina;
    }
    utterance.lang = 'pt-BR';

    speechSynthesis.cancel(); // Cancela qualquer leitura anterior
    speechSynthesis.speak(utterance);
  };

  // Aguarda as vozes carregarem, se necessário
  if (speechSynthesis.getVoices().length === 0) {
    speechSynthesis.addEventListener('voiceschanged', setVozFeminina, { once: true });
  } else {
    setVozFeminina();
  }
});
