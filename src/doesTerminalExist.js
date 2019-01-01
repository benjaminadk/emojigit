const vscode = require('vscode')

module.exports = () => {
  if (vscode.window.terminals.length === 0) {
    return false
  }
  return true
}
