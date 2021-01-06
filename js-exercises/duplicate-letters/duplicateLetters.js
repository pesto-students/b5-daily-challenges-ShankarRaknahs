function duplicateLetters(args) {
  if (typeof args !== 'string') {
    return false;
  }
  const sortedString = args.trim().toLowerCase().split('').sort();
  let counter = 0;
  let highCounterValue = 0;
  for (let element = 0; element < sortedString.length; element += 1) {
    if (sortedString[element] === sortedString[element + 1]) {
      counter += 1;
    } else if (counter > 0) {
      highCounterValue = counter >= highCounterValue ? counter + 1 : highCounterValue;
      counter = 0;
    }
  }
  return highCounterValue !== 0 ? highCounterValue : false;
}

export { duplicateLetters };
