import lesson2 from '../lesson2';

const {
  sum,
  sumAll,
  pow,
  random,
} = lesson2.task;

describe('sum function', () => {
  it('should return a sum of two params', () => {
    expect(sum(1, 2)).toEqual(3);
    expect(sum(-2, 5)).toEqual(3);
    expect(sum(10, 20)).toEqual(30);
    expect(() => sum()).toThrow();
    expect(() => sum(1)).toThrow();
    expect(() => sum(1, 2, 3)).toThrow();
    expect(() => sum([])).toThrow();
    expect(() => sum({}, 5)).toThrow();
    expect(sum(Infinity, 20)).toEqual(Infinity);
    expect(sum(-Infinity, 20)).toEqual(-Infinity);
    expect(sum(-10, -20)).toEqual(-30);
    expect(() => sum(NaN, 'number')).toThrow();
  });
});

describe('sumAll function', () => {
  it('should return a sum of all params', () => {
    expect(sumAll(1, 2, 3, 4, 5)).toEqual(15);
    expect(sumAll(-2, 5, 5)).toEqual(8);
    expect(sumAll(10, 20, -10)).toEqual(20);
    expect(() => sumAll()).toThrow();
    expect(() => sumAll('str')).toThrow();
    expect(() => sumAll([], 5, 6, 7)).toThrow();
    expect(sumAll(4)).toEqual(4);
  });
});

describe('pow function', () => {
  it('should return the base to the exponent power', () => {
    expect(pow(2, 20)).toEqual(1048576);
    expect(pow(4, 3)).toEqual(64);
    expect(pow(2, 4)).toEqual(16);
    expect(() => pow(2)).toThrow();
    expect(() => pow(1, 2, 3)).toThrow();
    expect(() => pow({}, 5)).toThrow();
    expect(() => pow('str')).toThrow();
    expect(pow(2, Infinity)).toEqual(Infinity);
  });
});

describe('random function', () => {
  it('should return random number', () => {
    expect(() => random(2)).toThrow();
    expect(() => random(1, 2, 3)).toThrow();
    expect(() => random({}, 5)).toThrow();
    expect(() => random('str')).toThrow();
    expect(() => random(2, 1)).toThrow();
    expect(random(1, 100)).toBeLessThanOrEqual(100);
    expect(random(1, 100)).toBeGreaterThanOrEqual(1);
  });
});
