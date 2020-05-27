'use strict';

const Node = require('../challenges/linkedList/node.js');

describe('Node Module', () => {
  it('constructor', () => {
    let value = 'any value';
    let node = new Node(value);

    expect(node.vlaue).toEqual(value);
    expect(node.next).toBeNull();
  });
});