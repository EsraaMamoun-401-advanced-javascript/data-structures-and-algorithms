'use strict';

const TreeNode = require('../challenges/BinaryTree/Breadth-first.js').TreeNode;
const BinaryTree = require('../challenges/BinaryTree/Breadth-first.js').BinaryTree;

describe('TreeNode & BinaryTree', () => {
  it('breadthFirst()', () => {

    let tree = new BinaryTree();

    tree.root = new TreeNode('2');
    tree.root.left = new TreeNode('5');
    tree.root.right = new TreeNode('7');
    tree.root.left.left = new TreeNode('2');
    tree.root.left.right = new TreeNode('6');
    tree.root.right.left = new TreeNode('5');
    tree.root.right.right = new TreeNode('11');

    expect(tree.breadthFirst()).toEqual(['2', '5', '7', '2', '6', '5', '11']);
  });
});