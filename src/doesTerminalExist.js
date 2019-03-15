const vscode = require('vscode')

module.exports = () => {
  return vscode.window.terminals.length !== 0;
}
