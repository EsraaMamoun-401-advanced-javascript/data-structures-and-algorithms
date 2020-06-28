'use strict';

function insertionSort(intArr) {
  for (let i = 1; i < intArr.length; i++) {
    let j = i - 1;
    let temp = intArr[i];
    while (j >= 0 && temp < intArr[j]) {
      intArr[j + 1] = intArr[j];
      j = j - 1;
    }
    intArr[j + 1] = temp;
  }
  return intArr;
}

// console.log('insertionSort([8,4,23,42,16,15])=====>', insertionSort([8, 4, 23, 42, 16, 15]));
// console.log('insertionSort([20,18,12,8,5,-2])=====>', insertionSort([20, 18, 12, 8, 5, -2]));
// console.log('insertionSort([5,12,7,5,5,7])=====>', insertionSort([5, 12, 7, 5, 5, 7]));
// console.log('insertionSort([2,3,5,7,13,11])=====>', insertionSort([2, 3, 5, 7, 13, 11]));


module.exports = insertionSort;