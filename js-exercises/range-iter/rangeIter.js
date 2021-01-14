const checkParamPresent = (...params) => {
  for (const param of params) {
    if (param === undefined) {
      throw new TypeError(`Received ${param} as arguments`);
    }
  }
};

const checkParamType = (expectedType, ...params) => {
  for (const param of params) {
    const paramType = typeof param;
    if (paramType !== expectedType) {
      throw new TypeError(
        `Expecting the argument type ${expectedType} but received ${paramType}`
      );
    }
  }
};

function rangeIter(lb, ub, step = 1) {
  checkParamPresent(lb, ub);
  checkParamType('number', lb, ub);

  let start = lb;
  const end = ub;
  let rangeIterator;

  if (start > end) {
    rangeIterator = [];
  } else if (start === end) {
    rangeIterator = [start];
  } else {
    rangeIterator = {
      [Symbol.iterator]() {
        return {
          next() {
            if (start <= end) {
              const result = {
                done: false,
                value: start,
              };
              start += step;
              return result;
            }
            return { done: true };
          },
        };
      },
    };
  }

  return [...rangeIterator];
}

export { rangeIter };
