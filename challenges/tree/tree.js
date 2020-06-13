'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  preOrder() {   // Root - Left - Right
    let results = [];

    // Recursive Function
    let _walk = (node) => {
      results.push(node.value); // 1. read TreeNode

      if(node.left) _walk(node.left); // 2. go Left

      if(node.right) _walk(node.right); // 3. go Right
    };

    _walk(this.root);
    return results;
  }

  inOrder() {  // Left - Root - Right
    let results = [];

    let _walk = (node) => {
      if(node.left) _walk(node.left);
      results.push(node.value);
      if(node.right) _walk(node.right);
    };

    _walk(this.root);
    return results;
  }

  postOrder() {  // Left - Right - Root
    let results = [];

    let _walk = (node) => {
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);

    return results;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;

      while(currentNode) {
        if (newNode.value < currentNode.value){
          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else if (newNode.value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          console.log('Sorry, this value dose not work..!!');
          break;
        }
      }
    }
  }

  contains (elm, node) {
    let currentNode = node;

    if (currentNode.value === elm) return true;

    if (currentNode.value > elm && currentNode.left) {
      currentNode = currentNode.left;
      return this.contains(elm, currentNode);
    }

    if (currentNode.value < elm && currentNode.right) {
      currentNode = currentNode.right;
      return this.contains(elm, currentNode);
    }

    if (!currentNode.left && currentNode.right) return false;
  }

}

// let tree = null;

// let one = new Node(1);
// let two = new Node(2);
// let three = new Node(3);
// let four = new Node(4);
// let five = new Node(5);
// let six = new Node(6);
// let seven = new Node(7);
// let eight = new Node(8);
// let nine = new Node(9);

// one.left = two;
// one.right = three;
// two.left = six;
// six.right = seven;
// seven.left = eight;
// seven.right = nine;
// three.left = four;
// three.right = five;

// tree = new BinaryTree(one);

// console.log({tree}); //  BinaryTree { root: Node { value: 1, left: [Node], right: [Node] } }

// console.log('tree.preOrder() ===>', tree.preOrder()); // [ 1, 2, 6, 7, 8, 9, 3, 4, 5 ]

// console.log('tree.inOrder() ===>', tree.inOrder()); // [ 6, 8, 7, 9, 2, 1, 4, 3, 5 ]

// console.log('tree.postOrder() ===>', tree.postOrder()); // [ 8, 9, 7, 6, 2, 4, 5, 3, 1 ]

// let newBinarySearchTree = new BinarySearchTree();

// console.log('Before add', {newBinarySearchTree}); // BinarySearchTree { root: undefined }

// newBinarySearchTree.add(10);
// newBinarySearchTree.add(11);
// newBinarySearchTree.add(12);
// newBinarySearchTree.add(13);
// newBinarySearchTree.add(14);
// newBinarySearchTree.add(15);
// newBinarySearchTree.add(16);
// newBinarySearchTree.add(17);

// console.log('After add', {newBinarySearchTree}); // BinarySearchTree { root: Node { value: 10, left: null, right: [Node] } }

// console.log('newBinarySearchTree.preOrder(tree.root)', newBinarySearchTree.preOrder(tree.root)); // [ 10, 11, 12, 13, 14, 15, 16, 17 ]
// console.log('newBinarySearchTree.inOrder(tree.root)', newBinarySearchTree.inOrder(tree.root)); // [ 10, 11, 12, 13, 14, 15, 16, 17 ]
// console.log('newBinarySearchTree.postOrder(tree.root)', newBinarySearchTree.postOrder(tree.root)); // [ 17, 16, 15, 14, 13, 12, 11, 10 ]

// console.log('newBinarySearchTree.contains(15, newBinarySearchTree.root)', newBinarySearchTree.contains(15, newBinarySearchTree.root)); // true
// console.log('newBinarySearchTree.contains(2, newBinarySearchTree.root)', newBinarySearchTree.contains(2, newBinarySearchTree.root)); // false
// console.log('newBinarySearchTree.contains(13, newBinarySearchTree.root)', newBinarySearchTree.contains(13, newBinarySearchTree.root)); // true
// console.log('newBinarySearchTree.contains(6, newBinarySearchTree.root)', newBinarySearchTree.contains(6, newBinarySearchTree.root)); // false

module.exports = {
  Node: Node,
  BT: BinaryTree,
  BST: BinarySearchTree,
};