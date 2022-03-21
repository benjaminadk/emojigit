const { window } = require('vscode')

module.exports = () => {
  return window.terminals.length !== 0
}
