'use strict';

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(val) {
    let newNode = new Node(val);
    
    if (!this.front && !this.rear) {
      this.front = newNode;
      this.rear = newNode;
      return;
    }
    this.rear.next = newNode;
    this.rear = newNode;
  }

  dequeue() {

    if (!this.front && !this.rear) return;
    let oldFront = this.front;
    this.front = this.front.next;

    oldFront.next = null;
    return oldFront.val;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  breadthFirst(root = this.root) {
    let printedArr = [];

    if (!root) return;
    let newQueue = new Queue();
    newQueue.enqueue(root); 

    while (newQueue.front) {
     
      if (newQueue.front.val.left) newQueue.enqueue(newQueue.front.val.left);
      if (newQueue.front.val.right) newQueue.enqueue(newQueue.front.val.right);

      let removedItem = newQueue.dequeue();
      printedArr.push(removedItem.val);
    }
    return printedArr;
  }
}

// let tree = new BinaryTree();
// tree.root = new TreeNode('2');
// tree.root.left = new TreeNode('5');
// tree.root.right = new TreeNode('7');
// tree.root.left.left = new TreeNode('2');
// tree.root.left.right = new TreeNode('6');
// tree.root.right.left = new TreeNode('5');
// tree.root.right.right = new TreeNode('11');

// console.log('tree.breadthFirst()', tree.breadthFirst());

module.exports = { 
  TreeNode, 
  Node, 
  BinaryTree, 
};