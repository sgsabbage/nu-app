const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
    'nu',
    {
        sendNotification: (title, options) => ipcRenderer.send('nu-notification', title, options)
    }
)