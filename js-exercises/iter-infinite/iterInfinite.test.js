import { count, cycle, repeat } from './iterInfinite';

describe('count', () => {
  it('sending count value without the optional parameter - infinite iterator', () => {
    let _count = count(10);
    expect(_count.next().value).toEqual(10);
    expect(_count.next().value).toEqual(11);
    expect(_count.next().value).toEqual(12);
  });
  it('sending count value with step', () => {
    let _count = count(10, 5);
    expect(_count.next().value).toEqual(10);
    expect(_count.next().value).toEqual(15);
    expect(_count.next().value).toEqual(20);
    expect(_count.next().value).toEqual(25);
    expect(_count.next().value).toEqual(30);
  });
  it('sending cycle without the optional parameter - infinite iterator', () => {
    let _cycle = cycle('ABC');
    expect(_cycle.next().value).toEqual('A');
    expect(_cycle.next().value).toEqual('B');
    expect(_cycle.next().value).toEqual('C');
  });
  it('sending cycle with the optional parameter', () => {
    let _cycle = cycle('ABC', 2);
    expect(_cycle.next().value).toEqual('A');
    expect(_cycle.next().value).toEqual('B');
    expect(_cycle.next().value).toEqual(undefined);
  });
  it('sending cycle with generator function without the optional parameter - infinite iterator', () => {
    let _cycle = cycle(count(10));
    expect(_cycle.next().value).toEqual(10);
    expect(_cycle.next().value).toEqual(11);
    expect(_cycle.next().value).toEqual(12);
  });
  it('sending cycle with generator function without the optional parameter - infinite iterator', () => {
    let _repeat = repeat('TEST');
    expect(_repeat.next().value).toEqual('TEST');
    expect(_repeat.next().value).toEqual('TEST');
    expect(_repeat.next().value).toEqual('TEST');
  });
});

describe('bad parameters', () => {
  it('calling count without any parameter', () => {
    expect(() => {
      count().toThrowError(
        TypeError,
        /Function called without the required params/
      );
    });
  });
  it('calling count with wrong parms', () => {
    expect(() => {
      count('str').toThrowError(TypeError, /Function called with wrong parms/);
    });
  });
  it('calling count with wrong parms', () => {
    expect(() => {
      count(10, 'str').toThrowError(
        TypeError,
        /Function called with wrong parms/
      );
    });
  });
});
