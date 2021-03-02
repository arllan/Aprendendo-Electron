const { app, BrowserWindow, ipcMain } = require('electron');


app.on('ready',()=>{
    let mainWindow = new BrowserWindow({ // configurar a janela 
        width:600,
        height:400
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`); // abre um arquivo local
})

app.on('window-all-closed', ()=>{ // quando fechar a aplicação clicando no icone nativo do windows e para fazer para de rodar a aplicação.
    app.quit();
})


ipcMain.on('fechar-janela-sobre',()=>{ // escuta evento do html e se caso clicado fecha a janela - está fazendo ligação com o renderer.js e sobre.html 
    app.quit(); // fecha a janela.
})
