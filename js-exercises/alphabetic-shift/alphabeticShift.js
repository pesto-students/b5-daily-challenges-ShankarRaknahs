const alphabeticShift = (inputAlphabets) => {
  if (typeof inputAlphabets !== 'string' || inputAlphabets.trim() === '') {
    throw new TypeError('Input does not have valid input');
  }

  let shiftedAlphabets = '';

  for (const character of inputAlphabets) {
    shiftedAlphabets += String.fromCharCode(character.charCodeAt() + 1);
  }

  return shiftedAlphabets;
};

export { alphabeticShift };
