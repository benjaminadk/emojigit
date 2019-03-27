const { window } = require('vscode')
const gitmojis = require('../gitmojis')

module.exports = async () => {
  const content = gitmojis().map(el => ({
    label: `${el.emoji} ${el.text.length > 60 ? el.text.slice(0, 60) + '...' : el.text}`,
    description: el.colon
  }))

  return await window.showQuickPick(content, {
    placeHolder: 'Type to search gitmoji commit types !',
    ignoreFocusOut: true,
    matchOnDescription: true
  })
}
