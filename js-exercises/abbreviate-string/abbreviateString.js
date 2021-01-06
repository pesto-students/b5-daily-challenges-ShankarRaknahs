function abbreviateString(expandedString) {
  if (typeof expandedString !== 'string' || expandedString.trim() === '') {
    throw new TypeError('Only String can be abbreviated');
  }
  const expandedWords = expandedString.split(' ');
  let abbreviatedString = expandedWords[0];

  if (expandedWords.length > 1) {
    abbreviatedString += ` ${expandedWords[
      expandedWords.length - 1
    ]
      .charAt(0)
      .toUpperCase()}.`;
  }

  return abbreviatedString;
}

export { abbreviateString };
