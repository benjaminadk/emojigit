# Gitmoji Commit

Stop wasting time looking up git commit message emojis. This extension helps you find the right emoji and helps write your commit message, all without leaving VS Code.

## Content

- [Gitmoji Commit](#gitmoji-commit)
  - [Content](#content)
  - [Usage](#usage)
    - [Create Commit Message](#create-commit-message)
    - [Cheat Sheet](#cheat-sheet)
    - [Tips](#tips)
  - [Future Plans](#future-plans)
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

- intended for use with the integrated terminal

### Cheat Sheet

Reference all Gitmojis including their emoji, colon syntax, and description.

1. `Ctl + Shift + P` (or `Cmd + Shift + P` on Mac) to open command prompt
2. Locate `Gitmoji Commit: Open Cheat Sheet` command and select
3. Optionally, click an emoji or colon syntax to copy
4. For reference purposes

### Tips

Simplify usage of either command by mapping each one to a custom keyboard shortcut. For more information on keyboard shortcuts refer to the [VS Code Documenation](https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-editor).

## Future Plans

I have been debating between generating the text of the commit (_the original version_) vs providing an input where the user types there own text (_the current version_). One solution is to offer a toggle in settings. I decided to change to the input because I found myself changing the app supplied text on almost every commit. I made the app because I could rememeber the emojis, their codes, and what they were for. I am open to feedback on how to approach this issue.

## Demo

![demo](https://s3-us-west-1.amazonaws.com/benjaminadk/gitmoji-commit-demo.gif)

## Other Info

[**Download Gitmoji Commit**](https://marketplace.visualstudio.com/items?itemName=benjaminadk.emojis4git)

[**Source Code**](https://github.com/benjaminadk/emojigit)

Inspired by [**Gitmoji**](https://gitmoji.carloscuesta.me/)

## Contributors

|                                [**benjaminadk**](https://github.com/benjaminadk)                                |                                 [**darkhist**](https://github.com/darkhist)                                  |
| :-------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars2.githubusercontent.com/u/28043421?s=80" width="80">](https://github.com/benjaminadk) | [<img src="https://avatars2.githubusercontent.com/u/11217831?s=80" width="80">](https://github.com/darkhist) |
