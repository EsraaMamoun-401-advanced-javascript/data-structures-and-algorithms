'use strict';

let array1 = [4, 8, 15, 16, 23, 42];
let value1 = 23;

let array2 = [11, 22, 33, 44, 55, 66, 77];
let value2 = 90;

function BinarySearch(array, key) {
  let indexValue;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      indexValue = i;
    }
  }

  if (indexValue == undefined) {
    indexValue = -1;
  }

  return indexValue;
}

console.log(`Ex1: The value ${value1} is exist in the array ${array1}: the index is`, BinarySearch(array1, value1));

console.log(`Ex2: The value ${value2} is not exist in the array ${array2} =>`, BinarySearch(array2, value2));

module.exports = BinarySearch;