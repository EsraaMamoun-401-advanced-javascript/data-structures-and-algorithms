'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

function FizzBuzzTree(treeNode) {
  let elm = '';

  if (treeNode.value % 3 === 0) elm += 'Fizz';
  if (treeNode.value % 5 === 0) elm += 'Buzz';
  //   if (treeNode.value % 3 === 0 && treeNode.value % 5 === 0) elm += 'FizzBuzz';
  if (treeNode.value % 3 !== 0 && treeNode.value % 5 !== 0) elm = `${treeNode.value}`;

  let newNode = new Node(elm);

  if (treeNode.left) {
    newNode.left = FizzBuzzTree(treeNode.left);
  }

  if (treeNode.right) {
    newNode.right = FizzBuzzTree(treeNode.right);
  }

  return newNode;
}

// let newNode = new Node(4);
// newNode.left = new Node(2);
// newNode.left.right = new Node(9);
// newNode.right = new Node(30);
// newNode.right.left = new Node(10);

// console.log('FizzBuzzTree(newNode).left.value ::::', FizzBuzzTree(newNode).left.value); // 2
// console.log('FizzBuzzTree(newNode).right.value ::::', FizzBuzzTree(newNode).right.value); // FizzBuzz
// console.log('FizzBuzzTree(newNode).right.left.value ::::', FizzBuzzTree(newNode).right.left.value); // Buzz
// console.log('FizzBuzzTree(newNode).left.right.value ::::', FizzBuzzTree(newNode).left.right.value); // Fizz

module.exports = {
  Node,
  FizzBuzzTree,
};