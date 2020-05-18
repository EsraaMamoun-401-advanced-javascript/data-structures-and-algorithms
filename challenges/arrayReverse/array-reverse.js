'use strict';

function toArrayReverse(array) {
  let reverseArray = [];
  for (let i = 0; i < array.length; i++) {
    let index = array.length - i - 1;
    reverseArray[i] = array[index];
  }
  console.log(reverseArray);
  return reverseArray;
}

let example1 = [1, 2, 3, 4, 5, 6];

let example2 = [89, 2354, 3546, 23, 10, -923, 823, -12];

let example3 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];

let arrays = [example1, example2, example3];

for (let i = 0; i < arrays.length; i++) {
  toArrayReverse(arrays[i]);
}
