'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder(root) {
    let tempArr = [];

    tempArr.push(root.val);

    if (root.left) {
      tempArr = [...tempArr, ...this.preOrder(root.left)];
    }

    if (root.right) {
      tempArr = [...tempArr, ...this.preOrder(root.right)];
    }
    return tempArr;
  }

  oddNumBst(root) {
    let values = this.preOrder(root);
    let sumOdd = 0;

    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 !== 0) sumOdd += values[i];
    }

    console.log({sumOdd});

    return sumOdd;
  }

}

let tree = new BinaryTree();

tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(10);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(7);
tree.root.right.right = new Node(4);

console.log({tree});

console.log('tree.oddNumBst(tree.root): ', tree.oddNumBst(tree.root));

module.exports = {BinaryTree, Node};