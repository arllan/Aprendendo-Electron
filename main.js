const { app, BrowserWindow, ipcMain } = require('electron'); // app - Requsito para rodar a aplicação | BrowserWindow - requisito para abrir a janela

app.on('ready', ()=>{
    let mainWindow = new BrowserWindow({ // configurar a janela 
        width:600,
        height:400
    });

    // mainWindow.loadURL('https://www.alura.com.br'); // abre uma pagina
    mainWindow.loadURL(`file://${__dirname}/app/index.html`); // abre um arquivo local
});

app.on('window-all-closed', ()=>{ // quando fechar a aplicação para de rodar a aplicação
    app.quit();
})


// fica esperando acontecer o evento 'abrir-janela-sobre' se caso ele acontecer executa aqui
let sobreWindow = null;
ipcMain.on('abrir-janela-sobre',()=>{
    if(sobreWindow == null) {
        sobreWindow = new BrowserWindow({ // todas
            width:300,
            height:200,
            alwaysOnTop:true, // propriedade para ficar por cima de todas as janelas
            frame:false
        });

        sobreWindow.on('closed', ()=>{ // quando fechar a mini janela deixa variavel novamente e null para não da erro
            sobreWindow = null;
        })
    }
    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`); // abre a janela sobre
    
});


ipcMain.on('fechar-janela-sobre',()=>{ // escuta evento do html e se caso clicado fecha a janela - está fazendo ligação com o sobre.js e sobre.html 
    sobreWindow.close();
})