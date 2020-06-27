'use strict';

let BT = require('../challenges/oddNumBst/odd-num-bst').BinaryTree;
let Node = require('../challenges/oddNumBst/odd-num-bst').Node;

describe('Odd Number BTS ', () => {

  it('full tree', () => {
    let tree = new BT();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(10);
    tree.root.left.right = new Node(7);

    expect(tree.oddNumBst(tree.root)).toBe(11);
  });

  it('root', () => {
    let tree = new BT();
    tree.root = new Node(1);

    expect(tree.oddNumBst(tree.root)).toBe(1);
  });
  
});