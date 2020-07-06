'use strict';

let Tree = require('../challenges/tree/tree.js');
let tree_intersection = require('../challenges/treeIntersection/tree-intersection');

describe('tree-intersection Module', () => {

  it('tree_intersection Feunction', () => {
    let one = new Tree.Node(1);
    let two = new Tree.Node(2);
    let three = new Tree.Node(3);
    let four = new Tree.Node(4);
    let five = new Tree.Node(5);
    let six = new Tree.Node(6);
    let seven = new Tree.Node(7);
    let eight = new Tree.Node(8);
    let nine = new Tree.Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    let tree1 = new Tree.BT(one);
    let tree2 = new Tree.BT(six);

    let expected = [6, 7, 8, 9];
    let treeIntersection = tree_intersection(tree1, tree2);
    
    expect(treeIntersection).toEqual(expected);
  });

});