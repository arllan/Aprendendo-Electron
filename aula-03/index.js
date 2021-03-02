const  { app, BrowserWindow, ipcMain } = require("electron");

app.on('ready', ()=>{ // abre a janela principal
    let mainWindow = new BrowserWindow({ // configurar a janela 
        width:600,
        height:400
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`); // abre um arquivo local
})

app.on('window-all-closed', ()=>{ // quando fechar a aplicação para de rodar o processo no windows
    app.quit();
})



let janelaSobre = null; // variavel da janela sobre

ipcMain.on('abrir-janela-do-sobre',()=>{ //espera o evento para abrir a tela sobre.
    if(janelaSobre == null){
        janelaSobre = new BrowserWindow({
            width:300,
            height:200,
            alwaysOnTop:true, // propriedade para ficar por cima de todas as janelas
            // frame:false
        })
        janelaSobre.on('closed', ()=>{ // quando fechar a mini janela deixa variavel novamente e null para não da erro
            janelaSobre = null;
        })
    }
    janelaSobre.loadURL(`file://${__dirname}/sobre.html`); // abre a janela sobre
})


ipcMain.on('fechar-janela-sobre',()=>{ // escuta evento do html e se caso clicado fecha a janela - está fazendo ligação com o sobre.js e sobre.html 
    janelaSobre.close();
})
