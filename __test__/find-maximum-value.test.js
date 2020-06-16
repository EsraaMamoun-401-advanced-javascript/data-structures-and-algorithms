'use strict';

let BT = require('../challenges/findMaximumValue/find-maximum-value.js').BinaryTree;
let Node = require('../challenges/findMaximumValue/find-maximum-value.js').Node;

describe('Finding Maximum Value ', () => {

  it('full tree', () => {
    let tree = new BT();
    tree.root = new Node(1);
    tree.root.left = new Node(2);
    tree.root.right = new Node(3);
    tree.root.left.left = new Node(10);
    tree.root.left.right = new Node(6);

    expect(tree.findMaximumValue(tree.root)).toBe(10);
  });

  it('root', () => {
    let tree = new BT();
    tree.root = new Node(1);

    expect(tree.findMaximumValue(tree.root)).toBe(1);
  });

  it('empty tree', () => {
    let tree = new BT();

    expect(tree.findMaximumValue(tree)).toBe(0);
  });

  it('tree without a number value', () => {
    let tree = new BT();
    
    tree.root = new Node('Hello');

    expect(tree.findMaximumValue(tree.root)).toBe(0);
  });
});