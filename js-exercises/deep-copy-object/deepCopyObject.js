const deepCopyObject = (objToCopy) => {
  if (objToCopy == null || typeof objToCopy !== 'object') {
    return objToCopy;
  }
  const newCopiedObject = objToCopy.constructor();

  for (const attr of Reflect.ownKeys(objToCopy)) {
    if (typeof objToCopy[attr] === 'object') {
      newCopiedObject[attr] = deepCopyObject(objToCopy[attr]);
    } else {
      newCopiedObject[attr] = objToCopy[attr];
    }
  }

  return newCopiedObject;
};

export { deepCopyObject };
