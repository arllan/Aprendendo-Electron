const { ipcRenderer } = require('electron'); // modulo do eletron para comunicação de código local da aplicação com código nativo

let botaoHTML = document.querySelector('#fechar-janela');

botaoHTML.addEventListener('click',function(){
    ipcRenderer.send('fechar-janela-sobre');

    console.log("Teste");
})



// let linkSobre = document.querySelector('#link-sobre');

// linkSobre.addEventListener('click', function (){ // executa quando clicar no botão - chama uma função nativa
//     ipcRenderer.send('abrir-janela-sobre');
// })
