'use strict';

let Tree = require('../tree/tree');

const tree_intersection = (BT1, BT2) => {
  let BT1preOrder = BT1.preOrder();
  let BT2preOrder = BT2.preOrder();

  let bothTrees = [];

  let idx = 0;
  while (idx < BT1preOrder.length) {
    for (let i = 0; i < BT2preOrder.length; i++) {
      if (BT1preOrder[idx] === BT2preOrder[i]) {
        bothTrees.push(BT2preOrder[i]);
      }
    }
    idx++;
  }
  return bothTrees;
};

// let one = new Tree.Node(1);
// let two = new Tree.Node(2);
// let three = new Tree.Node(3);
// let four = new Tree.Node(4);
// let five = new Tree.Node(5);
// let six = new Tree.Node(6);
// let seven = new Tree.Node(7);
// let eight = new Tree.Node(8);
// let nine = new Tree.Node(9);

// one.left = two;
// one.right = three;
// two.left = six;
// six.right = seven;
// seven.left = eight;
// seven.right = nine;
// three.left = four;
// three.right = five;


// let tree1 = new Tree.BT(one);
// let tree2 = new Tree.BT(six);

// console.log('####tree1=======', tree1.preOrder());
// console.log('####tree2=======', tree2.preOrder());

// console.log('tree_intersection(tree1,tree2)=======', tree_intersection(tree1,tree2));

module.exports = tree_intersection;