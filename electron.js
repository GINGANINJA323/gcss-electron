const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.webContents.openDevTools();
    win.loadFile('./public/index.html');
}

app.on('ready', () => {
    createWindow();
})

app.on('window-all-closed', app.quit);