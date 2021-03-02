const { ipcRenderer } = require('electron'); // modulo do eletron para comunicação de código local da aplicação com código nativo

let botaoHTML = document.querySelector('#abrir-janela-sobre'); // seletor da pagina index.html

botaoHTML.addEventListener('click',function(){
    ipcRenderer.send('abrir-janela-do-sobre');
});

