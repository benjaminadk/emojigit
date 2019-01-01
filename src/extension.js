const vscode = require('vscode')
const path = require('path')
const createCommitMessage = require('./createCommitMessage')
const getWebviewContent = require('./getWebviewContent')
const gitmojis = require('./gitmojis')

const config = {
  type: 'gitmoji',
  title: 'Gitmoji Commit Cheat Sheet'
}

function activate(context) {
  let currentPanel = undefined

  const disposable = vscode.commands.registerCommand('extension.emojiCheatSheet', async function() {
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
  context.subscriptions.push(disposable)
  context.subscriptions.push(createCommitMessage())
}

exports.activate = activate

function deactivate() {}
exports.deactivate = deactivate
