'use strict';

const shiftArray = require('../challenges/arrayShift/array-shift');


describe('Shift Array', () => {
  it('insertShiftArray() when return shift array', () => {
    let theFunction = shiftArray([2, 4, 6, 8], 5);
    expect(theFunction).toEqual([2, 4, 5, 6, 8]);
  });
});