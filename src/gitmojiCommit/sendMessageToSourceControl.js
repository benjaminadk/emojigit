const { workspace, window, extensions } = require('vscode');

module.exports = async (commitMessage) => {
  // get boolean value of autoCommit setting
  const autoCommit = workspace.getConfiguration().get('gitmoji.autoCommit')

  // get built in vscode git extension api
  const gitExtension = extensions.getExtension('vscode.git').exports;
  const git = gitExtension.getAPI(1);

  // list of workspace repositories
  const repos = git.repositories;
  // if no repositories show warning message
  if (!repos || !repos.length) {
    return window.showWarningMessage('You have no active repositories.');

    // if one repository, just set the commit message
  } else if (repos.length === 1) {
    if (autoCommit) {
      repos[0].commit(commitMessage).catch(e => window.showWarningMessage(e.stdout));
    } else {
      setCommit(repos[0], commitMessage)
    }
  } else {
    // gather directory names of all repos
    const directories = repos.map((el, i) => {
      return el.rootUri.path.split('/').pop()
    });
    // allow user to chose directory they want commit to go to
    const directory = await window.showQuickPick(directories, {
      placeHolder: 'Which repositiory should commit be sent to?',
      ignoreFocusOut: true
    });

    if (!directory) {
      window.showWarningMessage('Gitmoji Commit: You did not pick a repository.');
    }
    // determine index of choice
    const index = directories.indexOf(directory);
    // Set the Commit Message
    if (autoCommit) {
      repos[index].commit(commitMessage).catch(e => window.showWarningMessage(e.stdout));
    } else {
      setCommit(repos[index], commitMessage);
    }
  }
};

function setCommit(repository, commit) {
  repository.inputBox.value = commit;
}