const vscode = require('vscode')
const gitmojis = require('../gitmojis')
const getWebviewContent = require('./getWebviewContent')
const path = require('path')

const config = {
  type: 'gitmoji',
  title: 'Gitmoji Commit Cheat Sheet'
}

let currentPanel = undefined

module.exports = context =>
  vscode.commands.registerCommand('extension.gitmojiCheatSheet', async function() {
    const columnToShowIn = vscode.window.activeTextEditor
      ? vscode.window.activeTextEditor.viewColumn
      : undefined

    if (currentPanel) {
      currentPanel.reveal(columnToShowIn)
    } else {
      currentPanel = vscode.window.createWebviewPanel(
        config.type,
        config.title,
        vscode.ViewColumn.One,
        {
          enableScripts: true,
          localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'assets'))]
        }
      )
      currentPanel.webview.html = getWebviewContent(context.extensionPath, gitmojis)
      currentPanel.onDidDispose(
        () => {
          currentPanel = undefined
        },
        null,
        context.subscriptions
      )
    }
  })
