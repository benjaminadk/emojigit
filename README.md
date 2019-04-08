# Gitmoji Commit

Stop wasting time looking up git commit message emojis. This extension helps you find the right emoji and helps compose your commit message, all without leaving VS Code. You can even supply your own custom emoji mapping to suit the needs of you and/or your team.

## Content

- [Gitmoji Commit](#gitmoji-commit)
  - [Content](#content)
  - [Usage](#usage)
    - [Create Commit Message](#create-commit-message)
    - [Cheat Sheet](#cheat-sheet)
    - [Tips](#tips)
    - [Breaking Changes](#breaking-changes)
  - [Configuration](#configuration)
    - [Emoji Syntax](#emoji-syntax)
    - [Auto Commit](#auto-commit)
    - [Auto Close](#auto-close)
    - [Custom Emoji](#custom-emoji)
    - [Custom Emoji Map](#custom-emoji-map)
  - [Future Plans](#future-plans)
  - [Changelog](#changelog)
  - [Demo](#demo)
  - [Other Info](#other-info)
  - [Contributors](#contributors)

## Usage

Currently, **Gitmoji Commit** adds two commands to VS Code.

### Create Commit Message

Automates creating a commit message by prompting user for the type of commit and commit message text. The type of commit selected determines the emoji. The emoji is inserted into the commit message as either unicode (e.g. `✨`) or as GitHub emoji markdown colon syntax (e.g. `:sparkles:`).

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

### Emoji Syntax

_Emoji Syntax_ determines the format of the emoji inserted into the commit message. The default `colon` syntax uses GitHub's emoji markdown to represent the emoji. A full list of emojis supported by GitHub can be found [here](https://gist.github.com/rxaviers/7360908). Changing this setting to `unicode` will insert the actual emoji into the commit message.

### Auto Commit

_Auto Commit_ determines the behavior of how the composed commit message is delivered to the integrated terminal. By default this setting is `false`. The commit message will be inserted into the terminal but will require the user to press enter to execute the command. If this setting is changed to `true` the command will be executed automatically. This can speed up the user's workflow, but use with caution.

### Auto Close

_Auto Close_ determines if the integrated terminal will close automatically after the commit command is executed. This setting if meant to work with _Auto Commit_ set to `true`.

### Custom Emoji

_Custom Emoji_ determines if a custom emoji mapping should be used instead of the default **Gitmoji Commit** mapping. This custom mapping should be provided to the _Custom Emoji Map_ setting.

### Custom Emoji Map

_Custom Emoji Map_ is an array of **Gitmoji Commit** objects that can be used instead of the defaults. This setting allows the user to define their own emojis and commit types to suit the needs of them and/or their team. The objects provided must be in the appropriate shape. Each object should has three required properies.

| Property |                           Description                            |     Example      |
| :------: | :--------------------------------------------------------------: | :--------------: |
| `emoji`  |             The unicode representation of the emoji              |       `✨`       |
| `colon`  |      The GitHub markdown colon representation of the emoji       |   `:sparkles:`   |
|  `text`  | The description of the type of commit associated with this emoji | `Initial commit` |

To use this custom mapping make sure to set _Custom Emoji_ to `true`. Having this additional setting allows users to save a custom mapping in their options but also use the default mapping depending on the needs of their current project.

## Future Plans

- [ ] Handle multi-repository workspaces in a better fashion.
- [ ] Look into VSCode Git API
- [ ] Develop tests
- [ ] Validation for custom emoji mapping - use external JSON instead of settings ?

## Changelog

Follow changes to this extension in the [Changelog](https://github.com/benjaminadk/emojigit/blob/master/CHANGELOG.md)

## Demo

- Gitmoji Commit Message

![](https://s3-us-west-1.amazonaws.com/benjaminadk/gitmoji-01.gif)

- Gitmoji Cheat Sheet

![](https://s3-us-west-1.amazonaws.com/benjaminadk/gitmoji-02.gif)

## Other Info

[**Download Gitmoji Commit**](https://marketplace.visualstudio.com/items?itemName=benjaminadk.emojis4git)

[**Source Code**](https://github.com/benjaminadk/emojigit)

Inspired by [**Gitmoji**](https://gitmoji.carloscuesta.me/)

## Contributors

|                                [**benjaminadk**](https://github.com/benjaminadk)                                |                                 [**darkhist**](https://github.com/darkhist)                                  |                              [**AnandChowdhary**](https://github.com/AnandChowdhary)                              |
| :-------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars2.githubusercontent.com/u/28043421?s=80" width="80">](https://github.com/benjaminadk) | [<img src="https://avatars2.githubusercontent.com/u/11217831?s=80" width="80">](https://github.com/darkhist) | [<img src="https://avatars2.githubusercontent.com/u/2841780?s=80" width="80">](https://github.com/AnandChowdhary) |
