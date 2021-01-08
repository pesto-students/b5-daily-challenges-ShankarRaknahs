import { deepCopyObject } from './deepCopyObject';

describe('deepCopyObject', () => {
  it('returns a deep copy of given object', () => {
    const myObj = {
      subObj: {
        key: 'value',
      },
    };

    const yourObj = deepCopyObject(myObj);

    yourObj.subObj.key = 'new value';

    expect(yourObj.subObj.key).toEqual('new value');
    expect(myObj.subObj.key).toEqual('value');
  });

  it('returns a deep copy of given object with nesting level 2', () => {
    const myObj = {
      subObj: {
        key: 'value',
      },
      nestObj: {
        key1: {
          key2: 'birth-value',
        },
      },
    };

    const yourObj = deepCopyObject(myObj);

    yourObj.nestObj.key1.key2 = 'death-value';

    expect(yourObj.nestObj.key1.key2).toEqual('death-value');
    expect(myObj.nestObj.key1.key2).toEqual('birth-value');
  });

  it('returns copy of other data types', () => {
    expect(deepCopyObject(4)).toEqual(4);
    expect(deepCopyObject('string!')).toEqual('string!');
    expect(deepCopyObject(true)).toBe(true);
    expect(deepCopyObject(null)).toBeNull();
  });
});
