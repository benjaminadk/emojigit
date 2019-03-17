const vscode = require('vscode')
const gitmojis = require('../gitmojis')

const content = gitmojis.map(g => ({
  label: `${g.emoji} ${g.text}`,
  description: g.colon
}))

module.exports = async () => {
  return await vscode.window.showQuickPick(content, {
    placeHolder: 'Type to search gitmoji commit types !',
    ignoreFocusOut: true,
    matchOnDescription: true
  })
}
