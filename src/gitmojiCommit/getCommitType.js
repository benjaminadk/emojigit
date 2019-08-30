const { window } = require('vscode')
const gitmojis = require('../gitmojis')

module.exports = async () => {
  const content = gitmojis().map(gitmoji => ({
    label: `${gitmoji.emoji} ${
      gitmoji.text.length > 60 ? gitmoji.text.slice(0, 60) + '...' : gitmoji.text
    }`,
    description: gitmoji.colon
  }))

  return await window.showQuickPick(content, {
    placeHolder: 'Type to search gitmoji commit types !',
    ignoreFocusOut: true,
    matchOnDescription: true
  })
}
