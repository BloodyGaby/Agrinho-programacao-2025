document.getElementById('botao-acessibilidade').addEventListener('click', function() {
    const opcoes = document.getElementById('opcoes-acessibilidade');
    const expanded = opcoes.style.display === 'block';
    opcoes.style.display = expanded ? 'none' : 'block';
});

document.getElementById('aumentar-fonte').addEventListener('click', function() {
    document.body.style.fontSize = '1.2em';
});

document.getElementById('diminuir-fonte').addEventListener('click', function() {
    document.body.style.fontSize = '1em';
});

document.getElementById('alterna-contraste').addEventListener('click', function() {
    const currentBg = document.body.style.backgroundColor;
    if (currentBg === 'black') {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = '#ffffff';
    }
});