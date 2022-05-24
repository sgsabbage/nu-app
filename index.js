const { app, BrowserWindow, ipcMain, Notification } = require('electron')
const path = require("path");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1920,
        height: 1200,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    })

    ipcMain.on("nu-notification", (event, title, options) => {
        win.once('focus', () => win.flashFrame(false));
        win.flashFrame(true)
        new Notification({ title: title, body: options.body }).show();
    })

    win.loadURL('http://nu.localhost/login')

}

app.whenReady().then(() => {
    createWindow()
})