<link rel="stylesheet" href="estilos.css" />
<script>
document.getElementById('botao-acessibilidade').addEventListener('click', function() {
    const opcoes = document.getElementById('opcoes-acessibilidade');
    const expanded = opcoes.style.display === 'block';
    opcoes.style.display = expanded ? 'none' : 'block';
});

let currentFontSize = 1.0;

document.getElementById('aumentar-fonte').addEventListener('click', function() {
    currentFontSize += 0.1;
    document.querySelectorAll('body, body *').forEach(function(el) {
        if (el.nodeType === 1 && window.getComputedStyle(el).fontSize) {
            const size = parseFloat(window.getComputedStyle(el).fontSize);
            el.style.fontSize = (size * 1.1) + 'px';
        }
    });
});

document.getElementById('diminuir-fonte').addEventListener('click', function() {
    currentFontSize -= 0.1;
    document.querySelectorAll('body, body *').forEach(function(el) {
        if (el.nodeType === 1 && window.getComputedStyle(el).fontSize) {
            const size = parseFloat(window.getComputedStyle(el).fontSize);
            el.style.fontSize = (size * 0.9) + 'px';
        }
    });
});

// Ler texto com voz feminina
const synth = window.speechSynthesis;
document.getElementById('ler-texto').addEventListener('click', function () {
    if (synth.speaking) {
        synth.cancel();
        return;
    }
    const texto = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(texto);
    const voices = synth.getVoices();
    utterance.voice = voices.find(v => v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('feminina')) || voices[0];
    synth.speak(utterance);
});
</script>