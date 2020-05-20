'use strict';

const BinarySearch = require('../challenges/arrayBinarySearch/array-binary-search');

describe('Binary Search', () => {
  it('BinarySearch() when return undefined', () => {
    let theFunction = BinarySearch([11, 22, 33, 44, 55, 66, 77], 90);
    expect(theFunction).toBe(-1);
  });
  it('BinarySearch() when return correct index', () => {
    let theFunction = BinarySearch([4, 8, 15, 16, 23, 42], 23);
    expect(theFunction).toBe(4);
  });
});
