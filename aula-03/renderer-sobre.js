const { ipcRenderer } = require('electron'); // modulo do eletron para comunicação de código local da aplicação com código nativo

let botaoHTMLSobre = document.querySelector('#fechar-janela-sobre'); // seletor da pagina sobre.html

botaoHTMLSobre.addEventListener('click', function(){ // espera o botão de fechar do html da pagina sobre ser clicado
    ipcRenderer.send('fechar-janela-sobre');
});