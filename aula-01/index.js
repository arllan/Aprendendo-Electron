/*

app - controla o ciclo de vida da aplicação - abrir e fechar a aplicação

BrowserWindow - controla as configurações da janela da aplicação (todas as propriedades da janela são configuradas aqui)

*/

const { app, BrowserWindow } = require('electron'); // chama os modulos do electron

app.on('ready',()=>{ // espera quando carregar execute o que estiver dentro
    let mainWindow = new BrowserWindow({ // configurar a janela 
        width:600,
        height:400
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`); // abre um arquivo local
})

app.on('window-all-closed', ()=>{ // quando fechar a aplicação clicando no icone nativo do windows e para fazer para de rodar a aplicação.
    app.quit();
})