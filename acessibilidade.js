<script>
  document.getElementById('botao-acessibilidade').addEventListener('click', function() {
    const opcoes = document.getElementById('opcoes-acessibilidade');
    const expanded = opcoes.style.display === 'block';
    opcoes.style.display = expanded ? 'none' : 'block';
  });

  document.getElementById('aumentar-fonte').addEventListener('click', function() {
    document.querySelectorAll('body, body *:not(script):not(style)').forEach(el => {
      const currentSize = window.getComputedStyle(el).fontSize;
      const newSize = parseFloat(currentSize) * 1.2;
      el.style.fontSize = `${newSize}px`;
    });
  });

  document.getElementById('diminuir-fonte').addEventListener('click', function() {
    document.querySelectorAll('body, body *:not(script):not(style)').forEach(el => {
      const currentSize = window.getComputedStyle(el).fontSize;
      const newSize = parseFloat(currentSize) / 1.2;
      el.style.fontSize = `${newSize}px`;
    });
  });

  document.getElementById('ler-texto').addEventListener('click', function() {
    const texto = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(texto);
    const voices = window.speechSynthesis.getVoices();
    const voiceFeminina = voices.find(v => v.lang.includes('pt') && v.name.toLowerCase().includes('female')) || voices.find(v => v.lang.includes('pt'));
    if (voiceFeminina) utterance.voice = voiceFeminina;
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  });
</script>