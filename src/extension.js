const gitmojiCommit = require('./gitmojiCommit')
const gitmojiCheatSheet = require('./gitmojiCheatSheet')

function activate(context) {
  context.subscriptions.push(gitmojiCheatSheet(context))
  context.subscriptions.push(gitmojiCommit())
}

exports.activate = activate

function deactivate() {}
exports.deactivate = deactivate
