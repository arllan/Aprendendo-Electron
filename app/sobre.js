const { ipcRenderer, shell } = require('electron'); // modulo do eletron para comunicação de código local da aplicação com código nativo

const process = require('process');

let linkFechar = document.querySelector('#link-fechar');
let linkSiteExterno = document.querySelector('#linkExterno');
let versaoElectron = document.querySelector('#versao-electron');

window.onload = function(){
    versaoElectron.textContent = process.versions.electron;
}


linkFechar.addEventListener('click', function(){
    ipcRenderer.send('fechar-janela-sobre');
    console.log('foi');
})


linkSiteExterno.addEventListener("click", function(){
    shell.openExternal("https://google.com.br")// abre um link externo
})