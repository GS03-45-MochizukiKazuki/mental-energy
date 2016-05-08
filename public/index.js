'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const dialog = electron.dialog;
const ipcMain = electron.ipcMain;

let mainWindow;
let settingsWindow;

let menuTemplate = [{
  label: 'Mental Energy',
  submenu: [
    { label : 'About', accelerator: 'CmdOrCtrl+Shift+A', click: function(){ showAboutDialog(); } },
    { type : 'separator' },
    { label : 'Settings', accelerator: 'CmdOrCtrl+,', click: function(){ showSettingsWindow();} },
    { type : 'separator' },
    { label : 'Quit', accelerator: 'CmdOrCtrl+Q', click: function(){ app.quit();} }
  ]
}];

let menu = Menu.buildFromTemplate(menuTemplate);

// ipc通信　データの受け取り
ipcMain.on('settings_changed', function(event, color){
  // renderer processに渡す
  mainWindow.webContents.send('set_bgcolor', color);
});


function showAboutDialog(){
  dialog.showMessageBox({
    type: 'info',
    buttons: ['OK'],
    message: 'About tihis App',
    detail: 'This app was created by mo49'
  });
}

function showSettingsWindow() {
  settingsWindow = new BrowserWindow({width: 800, height: 600});
  settingsWindow.loadURL('file://' + __dirname + '/settings.html')
  // settingsWindow.loadURL( __dirname + '/settings.html');
  // settingsWindow.webContents.openDevTools(); // 開発中
  settingsWindow.show();
  settingsWindow.on('closed', function(){
    settingsWindow = null;
  });
}

function createMainWindow() {
  Menu.setApplicationMenu(menu);
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  // mainWindow.webContents.openDevTools(); // 開発中
  mainWindow.on('closed', function(){
    mainWindow = null;
  });
}

app.on('ready', function(){
  // create window
  createMainWindow();
})

app.on('window-all-closed', function(){
  // mac以外なら終了
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Dock,Spotlightなどから起動
app.on('activate', function(){
  if (mainWindow === null) {
    createMainWindow();
  }
});
