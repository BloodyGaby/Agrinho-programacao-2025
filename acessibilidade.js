// Alternar exibição do menu de acessibilidade
document.getElementById('botao-acessibilidade').addEventListener('click', () => {
  const opcoes = document.getElementById('opcoes-acessibilidade');
  opcoes.classList.toggle('mostrar');
});

// Variáveis de controle para limitar aumento/diminuição
let aumentoCount = 0;
let diminuicaoCount = 0;
const limiteMaximo = 2;

// Aumentar fonte e padding dos containers (limitado a 2 vezes)
document.getElementById('aumentar-fonte').addEventListener('click', () => {
  if (aumentoCount < limiteMaximo) {
    const elementos = document.querySelectorAll('p, h1, h2, h3, h4, h5, span, li, a, div');
    elementos.forEach(el => {
      const estilo = window.getComputedStyle(el);
      const tamanhoAtual = parseFloat(estilo.fontSize);
      const paddingTop = parseFloat(estilo.paddingTop) || 0;
      const paddingBottom = parseFloat(estilo.paddingBottom) || 0;

      el.style.fontSize = (tamanhoAtual + 2) + "px";

      if (paddingTop || paddingBottom) {
        el.style.paddingTop = (paddingTop + 1) + "px";
        el.style.paddingBottom = (paddingBottom + 1) + "px";
      }
    });

    aumentoCount++;
    diminuicaoCount = Math.max(0, diminuicaoCount - 1);
  }
});

// Diminuir fonte e padding dos containers (limitado a 2 vezes)
document.getElementById('diminuir-fonte').addEventListener('click', () => {
  if (diminuicaoCount < limiteMaximo) {
    const elementos = document.querySelectorAll('p, h1, h2, h3, h4, h5, span, li, a, div');
    elementos.forEach(el => {
      const estilo = window.getComputedStyle(el);
      const tamanhoAtual = parseFloat(estilo.fontSize);
      const paddingTop = parseFloat(estilo.paddingTop) || 0;
      const paddingBottom = parseFloat(estilo.paddingBottom) || 0;

      if (tamanhoAtual > 8) {
        el.style.fontSize = (tamanhoAtual - 2) + "px";
      }

      if (paddingTop > 0 || paddingBottom > 0) {
        el.style.paddingTop = Math.max(paddingTop - 1, 0) + "px";
        el.style.paddingBottom = Math.max(paddingBottom - 1, 0) + "px";
      }
    });

    diminuicaoCount++;
    aumentoCount = Math.max(0, aumentoCount - 1);
  }
});

// Leitor de texto com voz feminina em pt-BR
document.getElementById('ler-texto').addEventListener('click', () => {
  const texto = document.body.innerText;
  const utterance = new SpeechSynthesisUtterance(texto);

  function escolherVoz() {
    const vozes = speechSynthesis.getVoices();
    let vozFeminina = vozes.find(voz =>
      voz.lang.toLowerCase().startsWith('pt-br') &&
      (
        voz.name.toLowerCase().includes('feminina') ||
        voz.name.toLowerCase().includes('luciana') ||
        voz.name.toLowerCase().includes('fernanda') ||
        voz.name.toLowerCase().includes('google português') ||
        voz.name.toLowerCase().includes('brasil')
      )
    );

    if (!vozFeminina) {
      vozFeminina = vozes.find(voz =>
        voz.lang.toLowerCase().startsWith('pt-br') &&
        voz.name.toLowerCase().includes('female')
      );
    }

    if (!vozFeminina) {
      vozFeminina = vozes.find(voz => voz.lang.toLowerCase().startsWith('pt-br'));
    }

    if (vozFeminina) {
      utterance.voice = vozFeminina;
    }

    utterance.lang = 'pt-BR';
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  }

  if (speechSynthesis.getVoices().length === 0) {
    speechSynthesis.addEventListener('voiceschanged', escolherVoz, { once: true });
  } else {
    escolherVoz();
  }
});
