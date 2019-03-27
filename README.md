# Gitmoji Commit

Stop wasting time looking up git commit message emojis. This extension helps you find the right emoji and helps write your commit message, all without leaving VS Code.

## Content

- [Gitmoji Commit](#gitmoji-commit)
  - [Content](#content)
  - [Usage](#usage)
    - [Create Commit Message](#create-commit-message)
    - [Cheat Sheet](#cheat-sheet)
    - [Tips](#tips)
    - [Breaking Changes](#breaking-changes)
  - [Configuration](#configuration)
  - [Future Plans](#future-plans)
  - [Changelog](#changelog)
  - [Demo](#demo)
  - [Other Info](#other-info)
  - [Contributors](#contributors)

## Usage

Currently, **Gitmoji Commit** adds two commands to VS Code.

### Create Commit Message

Automates creating a commit message by prompting user for type of commit and message. The type selected determines the emoji. The emoji is chosen visually - ✨, but inserted into the commit message in colon syntax - `:sparkles:`.

When the time comes to type your commit message:

1. `Ctl + Shift + P` (or `Cmd + Shift + P` on Mac) to open command prompt
2. Locate `Gitmoji Commit: Create Commit Message` command and select
3. Begin typing to filter commit types
4. Select desired commit type via `Click` or `Enter`
5. Type the text of your commit message into the input
6. Press `Enter`
7. Your commit message will appear in the integrated terminal (commit format - `git commit -m ":<your emoji>: <your message>"`)
8. Proceed with life

- intended for use with integrated terminal

### Cheat Sheet

Reference all Gitmojis including their emoji, colon syntax, and description.

1. `Ctl + Shift + P` (or `Cmd + Shift + P` on Mac) to open command prompt
2. Locate `Gitmoji Commit: Open Cheat Sheet` command and select
3. Optionally, click an emoji or colon syntax to copy
4. For reference purposes

### Tips

Simplify usage of either command by mapping each one to a custom keyboard shortcut. For more information on keyboard shortcuts refer to the [VS Code Documenation](https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-editor).

### Breaking Changes

Version `2.0.0` changed a few items. Depending on your settings this may or may not impact your use of the extension. These changes were made to use better semantic naming for commands and options.

1. Commands are now `extension.gitmojiCommit` and `extension.gitmojiCheatSheet`. If you had keyboard shortcuts to the previous `extension.emojiCommit` or `extension.emojiCheatSheet` you need to update those.

2. The option for emoji syntax is now `gitmoji.emojiSyntax`. If you had this setting set to `unicode` you have to set this option again. If you use `colon` syntax there is no need to change as that is the default.

## Configuration

|     Setting      |                                              Options                                              | Default |
| :--------------: | :-----------------------------------------------------------------------------------------------: | :-----: |
|   Emoji Syntax   |                        `colon` - e.g. `:tada:` **OR** `unicode` - e.g. 🎉                         | `colon` |
|   Auto Commit    |          `true` - automatic commit **OR** `false` - commit sent to terminal for approval          | `false` |
|    Auto Close    |     `true` - closes terminal after commit **OR** `false` - terminal remains open after commit     | `false` |
|   Custom Emoji   |              `true` - use custom emoji map **OR** `false` - use default gitmoji map               | `false` |
| Custom Emoji Map | define an array of gitmoji objects `{ emoji: '✨', colon: ':sparkles:', text: 'Initial commit' }` |  `[]`   |

Automatic commits were requested feature to speed up the workflow. The default settings compose a commit message and copy it into the terminal. The user then has to click enter into order to execute the `git` command. With `autoCommit` this is done automatically. `autoClose` speeds up the workflow even more by closing the terminal after the commit command is executed. Hopefully, this provides some flexibity for users to tailor functionality to their preferred work flow.

Extensibility was a requested feature as teams may want to use there own system of emojis and commit types. To integrate this feature into the extension the easiest thing to do was let users supply their own mapping as an option. Use `customEmojiMap` to define an array of objects. Objects must conform to to the `gitmoji object` shape, and the emojis should be supported by GitHub. Toggle the use of this custom mapping with `customEmoji`, this way users can keep their custom config and/or switch back to the regular mapping on a project by project basis.

## Future Plans

- [ ] Handle multi-repository workspaces in a better fashion.
- [ ] Integrate with vscode's git extension for smoother auto commits.
- [ ] Develop tests
- [ ] Validation for custom emoji mapping - use external JSON instead of settings ?

## Changelog

Follow changes to this extension in the [Changelog](https://github.com/benjaminadk/emojigit/blob/master/CHANGELOG.md)

## Demo

![demo](https://res.cloudinary.com/benjaminadk/image/upload/v1546353734/portfolio/gitmoji-3.gif)

## Other Info

[**Download Gitmoji Commit**](https://marketplace.visualstudio.com/items?itemName=benjaminadk.emojis4git)

[**Source Code**](https://github.com/benjaminadk/emojigit)

Inspired by [**Gitmoji**](https://gitmoji.carloscuesta.me/)

## Contributors

|                                [**benjaminadk**](https://github.com/benjaminadk)                                |                                 [**darkhist**](https://github.com/darkhist)                                  |                              [**AnandChowdhary**](https://github.com/AnandChowdhary)                              |
| :-------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars2.githubusercontent.com/u/28043421?s=80" width="80">](https://github.com/benjaminadk) | [<img src="https://avatars2.githubusercontent.com/u/11217831?s=80" width="80">](https://github.com/darkhist) | [<img src="https://avatars2.githubusercontent.com/u/2841780?s=80" width="80">](https://github.com/AnandChowdhary) |
