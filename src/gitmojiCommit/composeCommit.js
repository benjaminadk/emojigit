const { workspace } = require('vscode')
const convertToEmoji = require('./convertToEmoji')

module.exports = (commitType, commitText) => {
  const multiline = workspace.getConfiguration().get('gitmoji.multilineCommit')
  const emoji = convertToEmoji(commitType)

  if (multiline) {
    return `git commit -m $'${emoji} ${commitText}'`
  } else {
    return `git commit -m "${emoji} ${commitText}"`
  }
}
