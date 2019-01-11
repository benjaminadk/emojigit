const vscode = require('vscode')
const gitmojis = require('./gitmojis')

module.exports = el => {
  const syntax = vscode.workspace.getConfiguration().get('emojiSyntax')
  return gitmojis.find(gitmoji => el.match(gitmoji.emoji))[syntax === 'colon' ? 'colon' : 'emoji']
}
