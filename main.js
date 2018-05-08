const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url = require('url')

let window = null
var menuTemplate = []
if (process.platform === "darwin") {
  menuTemplate = [{
    label: "VoterChain Verifier",
    submenu: [{
      role: 'about'
  },
  {
    role: 'quit'
  }]
}]
} else {
  menuTemplate = [{
    label: "VoterChain Verifier",
    submenu: [{
      role: 'about'
  },
  {
    role: 'close'
  }]
}]
}

app.setName("VoterChain Verifier")
app.setAboutPanelOptions({applicationName: "VoterChain Verifier", applicationVersion: "1.0.0", credits: "Mayank Metha D"})
// Wait until the app is ready
app.once('ready', () => {
  // Create a new window
  window = new BrowserWindow({
    // Set the initial width to 800px
    width: 1200,
    // Set the initial height to 600px
    height: 600,
    // Set the default background color of the window to match the CSS
    // background color of the page, this prevents any white flickering
    backgroundColor: "#D6D6D6",
    // Don't show the window until it's ready, this prevents any white flickering
    show: false,
  })
  const menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu)
  // Load a URL in the window to the local index.html path
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Show window when page is ready
  window.once('ready-to-show', () => {
    window.show()
  })
})