function curry(func) {
  return function afterCurry1(...args1) {
    if (args1.length >= func.length) {
      return func.apply(this, args1);
    }
    return function afterCurry2(...args2) {
      return afterCurry1.apply(this, args1.concat(args2));
    };
  };
}

export { curry };
