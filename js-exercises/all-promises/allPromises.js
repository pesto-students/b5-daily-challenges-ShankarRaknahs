const convertToArrayFrom = (promise, result) =>
  Promise.resolve(promise).then((value) => {
    result.push(value);
    return result;
  });

const reducer = (accumulator, promise) =>
  accumulator.then((finalArray) => convertToArrayFrom(promise, finalArray));

const allPromises = (promises) =>
  new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(promises);
    } else {
      const initialPromise = Promise.resolve([]);
      const result = promises.reduce(reducer, initialPromise);
      resolve(result);
    }
  });

export { allPromises };
