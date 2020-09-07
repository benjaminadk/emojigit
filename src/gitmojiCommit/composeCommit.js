const convertToEmoji = require('./convertToEmoji');

module.exports = (commitType, commitText) => {
  const emoji = convertToEmoji(commitType);
  return `${emoji} ${commitText}`;
};