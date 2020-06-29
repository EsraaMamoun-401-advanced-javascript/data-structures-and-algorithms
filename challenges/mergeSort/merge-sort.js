'use strict';


function Mergesort(arr) {
  let n = arr.length;

  if (n > 1) {
    let mid = Math.floor(n / 2);
    console.log({mid});
    let left = arr.slice(0, mid);
    console.log({left});
    let right = arr.slice(mid, arr.length);
    console.log({right});
    Mergesort(left);    
    Mergesort(right);
    Merge(left, right, arr);
  }
  console.log({arrMergesort: arr});
  return arr;
}

function Merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      console.log({arrk:arr[k]});
      i = i + 1;
      console.log({i});
    } else {
      arr[k] = right[j];
      console.log({arrk:arr[k]});
      j = j + 1;
      console.log({j});
    }
    k = k + 1;
    console.log({k});
  }

  if (i === left.length) {
    arr[k] = right[j];
  } else {
    arr[k] = left[i];
  }
  console.log({arrMerge: arr});

}


console.log('Mergesort([8,4,23,42,16,15])=====>', Mergesort([8, 4, 23, 42, 16, 15]));
// console.log('Mergesort([20,18,12,8,5,-2])=====>', Mergesort([20, 18, 12, 8, 5, -2]));
// console.log('Mergesort([5,12,7,5,5,7])=====>', Mergesort([5, 12, 7, 5, 5, 7]));
// console.log('Mergesort([2,3,5,7,13,11])=====>', Mergesort([2, 3, 5, 7, 13, 11]));


module.exports = Mergesort;