function sqrt(number) {
  return typeof number !== 'number' ? false : Math.sqrt(number);
}

function power(number1, number2) {
  return typeof number1 !== 'number' && typeof number2 !== 'number'
    ? false
    : number1 ** number2;
}

function round(number) {
  return typeof number !== 'number' ? false : Math.round(number);
}

export { sqrt, power, round };
