const { workspace } = require('vscode')
const gitmojis = require('../gitmojis')

// based on user settings for emoji syntax searches, finds and returns emoji from all gitmojis
// e.g. if `colon` is set returns :zap:, if `emoji` is set returns ⚡
module.exports = el => {
  const syntax = workspace.getConfiguration().get('gitmoji.emojiSyntax')
  return gitmojis().find(gitmoji => el.label.match(gitmoji.emoji))[
    syntax === 'colon' ? 'colon' : 'emoji'
  ]
}
