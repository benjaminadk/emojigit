const { workspace } = require('vscode')
const sendMessageToTerminal = require('./sendMessageToTerminal')
const sendMessageToSourceControl = require("./sendMessageToSourceControl")

module.exports = (commitMessage) => {
  // get the gitmoji commit receiver
  const commitmentDelegator = workspace.getConfiguration().get('gitmoji.commitmentDelegator')
  // continue even if no commit receiver is selected

  // send the composed message ...
  switch (commitmentDelegator) {
    case 'terminal':
      // ... to a terminal
      sendMessageToTerminal(commitMessage);
      break;
    default:
      // ... to Source Control
      sendMessageToSourceControl(commitMessage);
      break;
  }
}
