const { commands, window } = require('vscode')
const getCommitType = require('./getCommitType')
const composeCommit = require('./composeCommit')
const sendMessageToTerminal = require('./sendMessageToTerminal')

// register this function as gitmojiCommit
module.exports = () =>
  commands.registerCommand('extension.gitmojiCommit', async function() {
    // get the gitmoji commit type
    const commitType = await getCommitType()
    // if no type is selected exit and display warning message
    if (!commitType) {
      return window.showWarningMessage('Gitmoji Commit: You did not pick a commit type.')
    }

    // prompt user for commit message text
    const commitText = await window.showInputBox({
      placeHolder: `Commit message text ex: git commit -m ':emoji: {{ your text here }}'`,
      ignoreFocusOut: true
    })

    // if no text is entered exit and display warning message
    if (!commitText) {
      return window.showWarningMessage('Gitmoji Commit: Commit message has no text.')
    }

    const commitMessage = composeCommit(commitType, commitText)

    // send the composed message to integrated terminal
    sendMessageToTerminal(commitMessage)
  })
