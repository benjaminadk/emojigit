const vscode = require('vscode')
const doesTerminalExist = require('./doesTerminalExist')

const { workspace, window, extensions } = vscode

module.exports = async commitMessage => {
  // get boolean value of autoCommit setting
  // pass as second argument to sendText
  const autoCommit = workspace.getConfiguration().get('gitmoji.autoCommit')

  // get boolean value of autoClose setting
  const autoClose = workspace.getConfiguration().get('gitmoji.autoClose')

  // if terminal is open assume commit goes to cwd
  if (doesTerminalExist()) {
    const terminal = window.activeTerminal
    terminal.show()
    terminal.sendText(commitMessage, autoCommit)
    if (autoCommit && autoClose) {
      setTimeout(() => terminal.dispose(), 2000)
    }
  } else {
    // no terminals active
    // get built in vscode git extension api
    const gitExtension = extensions.getExtension('vscode.git').exports
    const git = gitExtension.getAPI(1)

    // list of workspace repositories
    const repos = git.repositories
    // if no repositories show warning message
    if (!repos || !repos.length) {
      return window.showWarningMessage('You have no active repositories.')

      // if one repository create a new terminal and put commit message there
    } else if (repos.length === 1) {
      const cwd = repos[0].rootUri.path.slice(1)
      // create new terminal
      const terminal = window.createTerminal({ cwd })
      terminal.show()
      terminal.sendText(commitMessage, autoCommit)
      if (autoCommit && autoClose) {
        setTimeout(() => terminal.dispose(), 2000)
      }
      // handle multi repository workspaces
    } else {
      // gather directory names of all repos
      const directories = repos.map((el, i) => {
        return el.rootUri.path.split('/').pop()
      })
      // allow user to chose directory they want commit to go to
      const directory = await window.showQuickPick(directories, {
        placeHolder: 'Which repositiory should commit be sent to?',
        ignoreFocusOut: true
      })

      if (!directory) {
        window.showWarningMessage('Gitmoji Commit: You did not pick a repository.')
      }
      // determine index of choice
      const index = directories.indexOf(directory)
      // remove leading / from path
      const cwd = repos[index].rootUri.path.slice(1)
      // create terminal at cwd
      const terminal = window.createTerminal({ cwd })
      terminal.show()
      terminal.sendText(commitMessage, autoCommit)
      if (autoCommit && autoClose) {
        setTimeout(() => terminal.dispose(), 2000)
      }
    }
  }
}
