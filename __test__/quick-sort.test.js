'use strict';

const quickSort = require('../challenges/quickSort/quick-sort');


describe('Quick Sort', () => {
  it('quickSort() is return sorted array', () => {
    expect(quickSort([8, 4, 23, 42, 16, 15], 0, 5)).toEqual([4, 8, 15, 16, 23, 42]);
    expect(quickSort([5, 12, 7, 5, 5, 7, 9], 0, 6)).toEqual([5, 5, 5, 7, 7, 9, 12]);
    expect(quickSort([2, 3, 5, 7, 13, 11, 7, -3], 0, 7)).toEqual([-3, 2, 3, 5, 7, 7, 11, 13]);
  });
});