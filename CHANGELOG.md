# Change Log

All versions and changes will be documented in this file

## [Unreleased]

## 2.0.2

- fix `Merge branches 🔀` colon syntax (missing 's')

## 2.0.1

- fix logic if `autoClose` is true

## 2.0.0

- **Breaking Change** configuration contributions format to `gitmoji.<setting>`

  - If your previous setting was `emojiSyntax: unicode` change to `gitmoji.emojiSyntax: unicode`

- add `gitmoji.autoCommit: boolean` option

  - automatically sends commit to source control
  - skips sending commit to terminal for approval
  - default value is `false`

- add `gitmoji.autoClose: boolean` option

  - will close terminal after commit is made

## 1.0.10

- add option to use Unicode version of emoji

## 1.0.9

- fix typo in `arrow` emojis

## 1.0.8

- update docs

## 1.0.7

- refactor all code
- add new feature - `Gitmoji Cheat Sheet`

## 1.0.6

- fix double quotes in both terminal exists/create terminal if branches

## 1.0.5

- change from single quote `'` to double quotes `"` in commit message

## 1.0.4

- fix typo on `bulb` emoji

## 1.0.3

- update docs

## 1.0.2

- adds macOS command to README
- user inputs commit text

## 1.0.1

- add demo gif to README

## 1.0.0

- Initial release
