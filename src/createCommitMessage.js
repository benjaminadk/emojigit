const vscode = require('vscode')
const doesTerminalExist = require('./doesTerminalExist')
const convert = require('./convert')
const getCommitType = require('./getCommitType')

module.exports = () => {
  return vscode.commands.registerCommand('extension.emojiCommit', async function() {
    const commitType = await getCommitType()

    const commitText = await vscode.window.showInputBox({
      placeHolder: 'Commit message text ex: git commit -m :emoji: {{ your text here }}'
    })

    if (!commitText) {
      return vscode.window.showWarningMessage('Your commit message has no text!!!')
    }

    const commitMessage = `git commit -m "${convert(commitType)} ${commitText}"`

    if (doesTerminalExist()) {
      vscode.window.activeTerminal.show()
      vscode.window.activeTerminal.sendText(commitMessage, false)
    } else {
      vscode.window.onDidOpenTerminal(e => {
        e.sendText(commitMessage, false)
      })
      vscode.window.createTerminal().show()
    }
  })
}
