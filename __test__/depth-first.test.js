'use strict';

let breadth_first = require('../challenges/depthFirst/depth-first');

jest.spyOn(global.console, 'log');

describe('depthFirst fuction', () => {
  it('depthFirst', () => {
    let root = new breadth_first.Node(1);
    root.left = new breadth_first.Node(2);
    root.right = new breadth_first.Node(3);
    root.left.left = new breadth_first.Node(4);
    root.left.right = new breadth_first.Node(5);
    breadth_first.depthFirst(root);
    expect(console.log).toHaveBeenCalled();
  });
});