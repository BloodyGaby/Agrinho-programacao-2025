// Toggle mostrar/esconder opções
document.getElementById('botao-acessibilidade').addEventListener('click', () => {
  const opcoes = document.getElementById('opcoes-acessibilidade');
  if (opcoes.style.display === 'block') {
    opcoes.style.display = 'none';
  } else {
    opcoes.style.display = 'block';
  }
});

// Aumentar fonte
document.getElementById('aumentar-fonte').addEventListener('click', () => {
  document.body.classList.add('aumentar-fonte');
});

// Diminuir fonte
document.getElementById('diminuir-fonte').addEventListener('click', () => {
  document.body.classList.remove('aumentar-fonte');
});

// Ler texto com voz feminina em pt-BR, fallback para padrão
document.getElementById('ler-texto').addEventListener('click', () => {
  const texto = document.body.innerText;
  const utterance = new SpeechSynthesisUtterance(texto);

  // Espera carregar as vozes, pode precisar de setTimeout em alguns browsers
  function falar() {
    const vozes = speechSynthesis.getVoices();
    // Procura voz feminina pt-BR (procura “female” no nome ou lang)
    let vozFeminina = vozes.find(v => {
      return (v.lang === 'pt-BR' || v.lang.startsWith('pt')) &&
        /female|feminina|woman|woman voice/i.test(v.name);
    });

    // Se não achar pela regex, tenta só pt-BR (pode pegar qualquer)
    if (!vozFeminina) {
      vozFeminina = vozes.find(v => v.lang === 'pt-BR');
    }

    if (vozFeminina) {
      utterance.voice = vozFeminina;
    } else {
      utterance.lang = 'pt-BR'; // fallback
    }

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  }

  // Caso getVoices() ainda esteja vazio, tentar esperar um pouco
  if (speechSynthesis.getVoices().length === 0) {
    speechSynthesis.onvoiceschanged = () => {
      falar();
    };
  } else {
    falar();
  }
});
