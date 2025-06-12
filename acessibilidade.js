document.getElementById('botao-acessibilidade').addEventListener('click', () => {
  const opcoes = document.getElementById('opcoes-acessibilidade');
  if (opcoes.style.display === 'flex') {
    opcoes.style.display = 'none';
  } else {
    opcoes.style.display = 'flex';
  }
});

document.getElementById('aumentar-fonte').addEventListener('click', () => {
  document.body.classList.add('aumentar-fonte');
});

document.getElementById('diminuir-fonte').addEventListener('click', () => {
  document.body.classList.remove('aumentar-fonte');
});

document.getElementById('ler-texto').addEventListener('click', () => {
  const texto = document.body.innerText;
  const utterance = new SpeechSynthesisUtterance(texto);

  function falar() {
    const vozes = speechSynthesis.getVoices();
    let vozFeminina = vozes.find(v => {
      return (v.lang === 'pt-BR' || v.lang.startsWith('pt')) &&
        /female|feminina|woman|mulher/i.test(v.name);
    });

    if (!vozFeminina) {
      vozFeminina = vozes.find(v => v.lang === 'pt-BR');
    }

    if (vozFeminina) {
      utterance.voice = vozFeminina;
    } else {
      utterance.lang = 'pt-BR';
    }

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  }

  if (speechSynthesis.getVoices().length === 0) {
    speechSynthesis.onvoiceschanged = () => {
      falar();
    };
  } else {
    falar();
  }
});
