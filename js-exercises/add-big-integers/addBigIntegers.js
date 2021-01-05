function addTwoNumbers(str1, str2) {
  let sum = '';
  let numberInStr1 = str1;
  let numberInStr2 = str2;

  if (numberInStr2.length > numberInStr1.length) {
    [numberInStr1, numberInStr2] = [numberInStr2, numberInStr1];
  }

  let carry = 0;
  let firstNumberLastdigit;
  let secondNumberLastDigit;
  let holder;
  let digitSum;

  for (let i = 0; i < numberInStr1.length; i += 1) {
    firstNumberLastdigit = parseInt(
      numberInStr1.charAt(numberInStr1.length - 1 - i), 10,
    );
    secondNumberLastDigit = parseInt(
      numberInStr2.charAt(numberInStr2.length - 1 - i), 10,
    ) || 0;
    holder = (carry + firstNumberLastdigit + secondNumberLastDigit).toString();
    digitSum = holder.charAt(holder.length - 1);
    carry = parseInt(holder.substr(0, holder.length - 1), 10) || 0;
    sum = i === numberInStr1.length - 1 ? holder + sum : digitSum + sum;
  }
  return sum;
}

function addBigIntegers(intString) {
  const inputIntegers = intString.split('\n');

  for (let i = 1; i < inputIntegers.length;) {
    inputIntegers[i - 1] = addTwoNumbers(
      inputIntegers[i - 1],
      inputIntegers[i],
    );
    inputIntegers.splice(i, 1);
  }

  return inputIntegers.length === 1 ? inputIntegers[0] : false;
}

export { addBigIntegers };
