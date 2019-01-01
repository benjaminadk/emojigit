const vscode = require('vscode')
const path = require('path')

module.exports = (extensionPath, data) => {
  const stylePathOnDisk = vscode.Uri.file(path.join(extensionPath, 'assets', 'style.css'))
  const styleUri = stylePathOnDisk.with({ scheme: 'vscode-resource' })
  const scriptPathOnDisk = vscode.Uri.file(path.join(extensionPath, 'assets', 'index.js'))
  const scriptUri = scriptPathOnDisk.with({ scheme: 'vscode-resource' })

  const rows = data.map(
    (d, i) => `<tr>
  <td class="emoji">${d.emoji}</td>
  <td class="colon">${d.colon}</td>
  <td class="text">${d.text}</td>
  </tr>`
  )
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src vscode-resource: https:; script-src vscode-resource:; style-src vscode-resource:;">
    <link rel="stylesheet" type="text/css" href="${styleUri}" >
    <title>Gitmoji Commit Cheat Sheet</title>
  </head>
  <body>
    <p>Click emoji/colon to copy 🧙‍</p>
    <table>
      <thead>
        <tr>
          <th>Commit Emoji</th>
          <th>Colon Syntax</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>${rows.join('')}</tbody>
    </table>
    <script src="${scriptUri}"></script>
  </body>
</html>`
}
