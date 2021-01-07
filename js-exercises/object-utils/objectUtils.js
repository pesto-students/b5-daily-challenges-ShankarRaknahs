// your implementation

const map = (obj, callbackFunction) => {
  const paramTypeValue = typeof obj;
  if (paramTypeValue !== "object" || obj.length < 1) {
    throw new TypeError(
      `Received ${paramTypeValue}, expecting an object with minimum one key-value pair.`
    );
  }

  const resultantObj = {};
  for (const key of Object.keys(obj)) {
    const callbackValue = callbackFunction([key, obj[key]]);
    resultantObj[callbackValue[0]] = callbackValue[1];
  }
  return resultantObj;
};

const filter = (obj, callbackFunction) => {
  const paramTypeValue = typeof obj;
  if (paramTypeValue !== "object" || obj.length < 1) {
    throw new TypeError(
      `Received ${paramTypeValue}, expecting an object with minimum one key-value pair.`
    );
  }
  const resultantObj = {};
  for (const key of Object.keys(obj)) {
    const callbackValue = callbackFunction([key, obj[key]]);
    if (callbackValue) {
      resultantObj[key] = obj[key];
    }
  }
  return resultantObj;
};

const invert = (obj) => {
  const paramTypeValue = typeof obj;
  if (paramTypeValue !== "object" || obj.length < 1) {
    throw new TypeError(
      `Received ${paramTypeValue}, expecting an object with minimum one key-value pair.`
    );
  }
  const resultantObj = {};
  for (const key of Object.keys(obj)) {
    resultantObj[obj[key]] = key;
  }
  return resultantObj;
};

const merge = (...objs) => {
  let resultantObj = {};
  for (const obj of objs) {
    const paramTypeValue = typeof obj;
    if (paramTypeValue !== "object" || obj.length < 1) {
      throw new TypeError(
        `Received ${paramTypeValue} in the objects, expecting all values as objects with minimum one key-value pair.`
      );
    }

    resultantObj = { ...resultantObj, ...obj };
  }
  return resultantObj;
};

const all = (obj, callbackFunction) => {
  const paramTypeValue = typeof obj;
  if (paramTypeValue !== "object" || obj.length < 1) {
    throw new TypeError(
      `Received ${paramTypeValue}, expecting an object with minimum one key-value pair.`
    );
  }
  for (const key of Object.keys(obj)) {
    if (!callbackFunction([key, obj[key]])) {
      return false;
    }
  }
  return true;
};

const some = (obj, callbackFunction) => {
  const paramTypeValue = typeof obj;
  if (paramTypeValue !== "object" || obj.length < 1) {
    throw new TypeError(
      `Received ${paramTypeValue}, expecting an object with minimum one key-value pair.`
    );
  }
  for (const key of Object.keys(obj)) {
    if (callbackFunction([key, obj[key]])) {
      return true;
    }
  }
  return false;
};

export {
  map, filter, invert, merge, all, some,
};
