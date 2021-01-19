function isIterable(value) {
  if (typeof value === 'string') {
    return true;
  }
  if (typeof value === 'object') {
    if (value === null) {
      return false;
    }
    return typeof value[Symbol.iterator] === 'function';
  }
  return false;
}

function* count(start, step = 1) {
  if (typeof start !== 'number') {
    throw new TypeError(
      `Expecting the type number but received ${typeof start} with the value ${start}`
    );
  }
  if (typeof step !== 'number') {
    throw new TypeError(
      `Expecting the type number but received ${typeof step} with the value as ${step}`
    );
  }

  let counter = start;

  while (true) {
    yield counter;
    counter += step;
  }
}

function* cycle(str, maxIterationCount = Number.MAX_VALUE * 2) {
  if (!isIterable(str)) {
    throw new TypeError(
      `Expecting the iterable operator but received ${typeof str} with the value ${str}`
    );
  }
  if (typeof maxIterationCount !== 'number') {
    throw new TypeError(
      `Expecting the type number but received ${typeof maxIterationCount} with the value as ${maxIterationCount}`
    );
  }
  let counter = 0;
  for (const char of str) {
    if (maxIterationCount === counter) {
      return;
    }
    counter += 1;
    yield char;
  }
}

function* repeat(value, maxRepeatCount = Number.MAX_VALUE * 2) {
  if (value === null || value === undefined) {
    throw new TypeError(`Expecting the value but received ${value} `);
  }
  if (typeof maxRepeatCount !== 'number') {
    throw new TypeError(
      `Expecting the type number but received ${typeof maxRepeatCount} with the value as ${maxRepeatCount}`
    );
  }
  let counter = 0;
  while (true) {
    if (maxRepeatCount === counter) {
      return;
    }
    counter += 1;
    yield value;
  }
}

export { count, cycle, repeat };
