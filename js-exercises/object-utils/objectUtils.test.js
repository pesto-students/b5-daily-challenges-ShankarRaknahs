import { map, filter, invert, merge, all, some } from './objectUtils';

// write your own test cases

const studentsAge = { shankar: 20, arjun: 30, Kiran: 10 };

describe('testing Map Object Utility', () => {
  it('is expected to modify the key value pair according to the callback', () => {
    expect(
      map(studentsAge, ([key, val]) => [key.toUpperCase(), val * 3])
    ).toEqual({
      SHANKAR: 60,
      ARJUN: 90,
      KIRAN: 30,
    });
  });

  it('should throw error on invalid type of parameters', () => {
    expect(() => map(123)).toThrow();
    expect(() => map([])).toThrow();
    expect(() => map('test')).toThrow();
  });
});

describe('testing Filter Object Utility', () => {
  it('is expected to filter the data based on the key or value combination mentioned in the callback function', () => {
    expect(filter(studentsAge, ([key, val]) => key === 'shankar')).toEqual({
      shankar: 20,
    });
  });

  it('should throw error on invalid type of parameters', () => {
    expect(() => map(123)).toThrow();
    expect(() => map([])).toThrow();
    expect(() => map('test')).toThrow();
  });
});

describe('testing Invert Object Utility', () => {
  it('is expected to invert the key value pair of the input object', () => {
    expect(invert(studentsAge)).toEqual({
      20: 'shankar',
      30: 'arjun',
      10: 'Kiran',
    });
  });

  it('should throw error on invalid type of parameters', () => {
    expect(() => map(123)).toThrow();
    expect(() => map([])).toThrow();
    expect(() => map('test')).toThrow();
  });
});
