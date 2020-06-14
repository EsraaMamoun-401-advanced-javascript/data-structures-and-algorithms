'use strict';

let tree = require('../challenges/fizzBuzzTree/fizz-buzz-tree.js');

let Node = tree.Node;
let FizzBuzzTree = tree.FizzBuzzTree;


describe('FizzBuzzTree fuction', () => {
  it('root Tree', () => {
    let treeRoot = new Node(4);
    FizzBuzzTree(treeRoot);

    expect(FizzBuzzTree(treeRoot).value).toBe('4');
  });

  it('handle tree', () => {
    let treeRoot = new Node(4);
    treeRoot.left = new Node(2);
    treeRoot.left.right = new Node(9);
    treeRoot.right = new Node(30);
    treeRoot.right.left = new Node(10);

    expect(FizzBuzzTree(treeRoot).left.value).toBe('2');
    expect(FizzBuzzTree(treeRoot).right.value).toBe('FizzBuzz');
    expect(FizzBuzzTree(treeRoot).right.left.value).toBe('Buzz');
    expect(FizzBuzzTree(treeRoot).left.right.value).toBe('Fizz');
  });
});