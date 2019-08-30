const gitmojiCommit = require('./gitmojiCommit')
const gitmojiCheatSheet = require('./gitmojiCheatSheet')

function activate(context) {
  context.subscriptions.push(gitmojiCheatSheet(context))
  context.subscriptions.push(gitmojiCommit())
}

function deactivate() {}

exports.activate = activate
exports.deactivate = deactivate
