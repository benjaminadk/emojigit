const vscode = require('vscode')

function convert(el) {
  if (el.match('🎨')) return ':art: Improve structure'
  if (el.match('⚡')) return ':zap: Improve performance'
  if (el.match('🔥')) return ':fire: Remove'
  if (el.match('🐛')) return ':bug: Fix bug in'
  if (el.match('🚑')) return ':ambulance: Hot fix'
  if (el.match('✨')) return ':sparkles: Add feature'
  if (el.match('📝')) return ':memo: Documentation'
  if (el.match('🚀')) return ':rocket: Deploy code'
  if (el.match('💄')) return ':lipstick: Update style'
  if (el.match('🎉')) return ':tada: Initial commit'
  if (el.match('✅')) return ':white_check_mark: Add test'
  if (el.match('🔒')) return ':lock: Fix security issue'
  if (el.match('🍎')) return ':apple: Fix macOs issue'
  if (el.match('🐧')) return ':penguin: Fix linux issue'
  if (el.match('🏁')) return ':checkered_flag: Fix windows issue'
  if (el.match('🍏')) return ':green_apple: Fix iOS issue'
  if (el.match('🔖')) return ':bookmark: Release tag'
  if (el.match('🚨')) return ':rotating_light: Remove linter warning'
  if (el.match('🚧')) return ':construction: Work in progress'
  if (el.match('💚')) return ':green_heart: Fix CI'
  if (el.match('⬇')) return ':down_arrow: Downgrade dependency'
  if (el.match('⬆')) return ':up_arrow: Upgrade dependency'
  if (el.match('📌')) return ':pushpin: Pin dependency'
  if (el.match('👷‍')) return ':construction_worker: Add CI build'
  if (el.match('📈')) return ':chart_with_upward_trend: Add analytics'
  if (el.match('♻')) return ':recycle: Refactor'
  if (el.match('🐳')) return ':whale: Docker'
  if (el.match('➕')) return ':heavy_plus_sign: Add dependency'
  if (el.match('➖')) return ':heavy_minus_sign: Remove dependency'
  if (el.match('🔧')) return ':wrench: Change config file'
  if (el.match('🌐')) return ':globe_with_meridians: Localize'
  if (el.match('✏')) return ':pencil2: Fix typo'
  if (el.match('💩')) return ':hankey: Bad code'
  if (el.match('⏪')) return ':rewind: Revert changes'
  if (el.match('🔀')) return ':twisted_rightwards_arrow: Merge branches'
  if (el.match('📦')) return ':package: Update package'
  if (el.match('👽')) return ':alien: Update code'
  if (el.match('🚚')) return ':truck: Move/Rename'
  if (el.match('📄')) return ':page_facing_up: Add license'
}

function activate(context) {
  console.log('Congratulations, your extension "emojis4git" is now active!')

  let disposable = vscode.commands.registerCommand('extension.emojiCommit', async function() {
    vscode.window
      .showQuickPick(
        [
          '🎨  Improve structure or format of code',
          '⚡  Improve performance',
          '🔥  Remove code of files',
          '🐛  Fix a bug',
          '🚑  Critical hotfix',
          '✨  Introducing new features',
          '📝  Writing docs',
          '🚀  Deploy code',
          '💄  Updating the UI and style files',
          '🎉  Initial commit',
          '✅  Adding tests',
          '🔒  Fixing security issues',
          '🍎  Fixing something on macOS',
          '🐧  Fixing something on Linux',
          '🏁  Fixing something on Windows',
          '🍏  Fixing something on iOS',
          '🔖  Releasing / Versioning tags',
          '🚨  Removing linter warnings',
          '🚧  Work in progress',
          '💚  Fixing CI build',
          '⬇   Downgrading dependencies',
          '⬆   Upgrading dependencies',
          '📌  Pinning dependencies to specific versions',
          '👷‍  Adding CI build system',
          '📈  Addin analytics or code tracking',
          '♻  Refactoring code',
          '🐳  Work about Docker',
          '➕  Adding a dependency',
          '➖  Removing a dependency',
          '🔧  Changing configuration files',
          '🌐   Internationalization and localization',
          '✏  Fixing typos',
          '💩  Writing bad code that needs to be improved',
          '⏪  Reverting changes',
          '🔀  Merging branches',
          '📦  Updating compiled files or packages',
          '👽  Updating code due to external changes',
          '🚚  Moving or renaming files',
          '📄  Adding or updating license',
          '💥  Introducing breaking changes',
          '🍱  Adding or updating assets'
        ],
        { placeHolder: 'What type of commit are you doing?' }
      )
      .then(el => {
        vscode.window.activeTerminal.sendText(`git commit -m '${convert(el)}'`, false)
        vscode.window.activeTerminal.show()
      })
  })

  context.subscriptions.push(disposable)
}
exports.activate = activate

function deactivate() {}
exports.deactivate = deactivate
