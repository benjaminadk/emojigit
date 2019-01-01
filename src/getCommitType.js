const vscode = require('vscode')
const gitmojis = require('./gitmojis')

const content = gitmojis.map(g => `${g.emoji}  ${g.text} ?`)

module.exports = async () => {
  return await vscode.window.showQuickPick(content, {
    placeHolder: 'Type to search gitmoji commit types !'
  })
}
