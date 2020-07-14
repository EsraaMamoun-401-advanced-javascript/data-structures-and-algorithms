'use strict';

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

function depthFirst(root) {

  if (root) {

    console.log(root.value);

    depthFirst(root.left);

    depthFirst(root.right);
  }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

depthFirst(root);

module.exports = {
  Node, 
  depthFirst,
};