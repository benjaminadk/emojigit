const { commands, window, ViewColumn, Uri } = require('vscode')
const gitmojis = require('../gitmojis')
const getWebviewContent = require('./getWebviewContent')
const path = require('path')

const config = {
  type: 'gitmoji',
  title: 'Gitmoji Commit Cheat Sheet'
}

let currentPanel = undefined

module.exports = context =>
  commands.registerCommand('extension.gitmojiCheatSheet', async function() {
    const columnToShowIn = window.activeTextEditor ? window.activeTextEditor.viewColumn : undefined

    if (currentPanel) {
      currentPanel.reveal(columnToShowIn)
    } else {
      currentPanel = window.createWebviewPanel(config.type, config.title, ViewColumn.One, {
        enableScripts: true,
        localResourceRoots: [Uri.file(path.join(context.extensionPath, 'assets'))]
      })
      currentPanel.webview.html = getWebviewContent(context.extensionPath, gitmojis())
      currentPanel.onDidDispose(
        () => {
          currentPanel = undefined
        },
        null,
        context.subscriptions
      )
    }
  })
