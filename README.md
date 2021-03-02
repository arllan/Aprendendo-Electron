
# Aprendendo Electron

Aprendendo a criar estrutura de projetos com ***ELECTRON***. Todo o projeto feito com electron e iniciado pelo package.json.

## Iniciando Projeto Electron.

1- npm init - inicia o package e aperta enter em todas as opções.

2- Agora e só instalar a dependencia do electron ***npm install electron@1.6.1 --save*** o ***--save*** e para salvar no package.json

3-  Agora vamos adicionar no npm o comando para rodar a nossa aplicação 
```javascript
"scripts": {
	"test": "echo \"Error: no test specified\" && exit 1",
	"start":"electron ." // comando adicionado
}
```
4-  Agora vamos editar o arquivo inicial do script que e o index.js ***se caso ele não existir na pasta raiz e só criar.***
```javascript
console.log('ola mundo!');
```
5-  Para ver se tudo está funcionando basta executar o comando ***npm start***

6- Se caso estiver tudo configurado certo vai mostrar no console o ***ola mundo*** 

7- Agora e só acessar a pasta de exemplos que está presente no projeto.



## Propriedade da Janela

### BrowserWindow
A janela criada pelo electron e criada pelo pacote ***BrowserWindow*** e com ele podemos controlar todas as propriedades da construção da tela. A documentação completa mostrando as propriedades estão [aqui](https://www.electronjs.org/docs/api/browser-window)

### app
Todo o ciclo de vida da aplicação e controlado pelo pacote ***app*** e com ele que iniciamos a aplicação e fechamos a aplicação.


## PASTA EXEMPLOS

***Aula-01*** - Vai conter o exemplo de como criar a primeira tela já com a correção de fechar a janela acabar com o processo no terminal.

***Aula-02*** - Vai conter o exemplo de como o código na pagina HTML se comunicar com o nativo. Para esse exemplo foi utilizado os modulos
***ipcRenderer*** - Fica esperando o evento do HTML e quando e executado ele manda o evento para a parte do código nativo indentificar e fazer uma ação. ***ipcMain*** - Fica esperando o evento para executar no código nativo.
 
***Aula-03*** - Mostra como abrir outras janelas e também a como fechar outras janelas. É comunicação entre código no HTML e nativo.
 

