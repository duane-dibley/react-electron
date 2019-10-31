const { app, BrowserWindow } = require('electron');

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    width: 800,
  });

  // and load the index.html of the app.
  win.loadFile('index.html');

  // DevTools within Chromium front-end
  win.webContents.openDevTools();
}

app.on('ready', createWindow);
