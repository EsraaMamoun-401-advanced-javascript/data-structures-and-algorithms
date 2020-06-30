'use strict';

function QuickSort(arr, left, right) {
  if (left < right) {
    let position = Partition(arr, left, right);
    QuickSort(arr, left, position - 1);
    QuickSort(arr, position + 1, right);
  }
  return arr;
}

function Partition(arr, left, right) {
  let pivot = arr[right];
  let low = left - 1;

  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot){
      low++;
      Swap(arr, i, low);
    }
  }
  Swap(arr, right, low + 1);
  return low + 1;
}

function Swap(arr, i, low) {
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

console.log('QuickSort([8, 4, 23, 42, 16, 15], 0, 5)=====>', QuickSort([8, 4, 23, 42, 16, 15], 0, 5));
console.log('QuickSort([5, 12, 7, 5, 5, 7], 0, 6)=====>', QuickSort([5, 12, 7, 5, 5, 7, 9], 0, 6));
console.log('QuickSort([2, 3, 5, 7, 13, 11], 0, 7)=====>', QuickSort([2, 3, 5, 7, 13, 11, 7, -3], 0, 7));

 
module.exports = QuickSort;