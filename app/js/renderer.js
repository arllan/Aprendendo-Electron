console.log('estou aqui');// mostra isso quando abrir o aplicação - mostra no console da janela apenas

const { ipcRenderer } = require('electron'); // modulo do eletron para comunicação de código local da aplicação com código nativo


let linkSobre = document.querySelector('#link-sobre');

linkSobre.addEventListener('click', function (){ // executa quando clicar no botão - chama uma função nativa
    ipcRenderer.send('abrir-janela-sobre');
})