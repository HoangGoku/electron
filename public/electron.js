const path = require('path');
const { app, BrowserWindow, protocol } = require('electron');
const isDev = require('electron-is-dev');
const url = require('url');

function createWindow() {
  protocol.registerFileProtocol('app', (request, callback) => {
    const url = request.url.replace('app:///', '');
    const filePath = path.join(__dirname, url);
    callback(filePath);
  });
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.

  win.loadURL(
    isDev
      ? 'app:///index.html'
      : `app:///index.html`
  );

  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});