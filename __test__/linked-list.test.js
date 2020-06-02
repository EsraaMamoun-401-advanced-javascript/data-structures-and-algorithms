'use strict';

const LinkedList = require('../challenges/linkedList/linked-list.js');

describe('Node Class: ', () => {
  it('Constructor Node', () => {
    let value = 'any value';
    let node = new LinkedList.node(value);

    expect(node.val).toBe(value);
    expect(node.next).toBeNull();
  });
});

describe('LinkedList Class: ', () => {

  it('insert() when there is node and value', () => {
    let val = 'any value';
    let theList = new LinkedList.ll();
    theList.insert(val);
    expect(theList.head.val).toEqual(val);
  });

  it('insert() type of the next value', () => {
    let val = 'any value';
    let theList = new LinkedList.ll();
    theList.insert(val);
    expect(typeof (theList.head.next)).toEqual('object');
  });

  it('includes()', () => {
    let val = 'any value';
    let theList = new LinkedList.ll();
    theList.includes(val);
    expect(theList.head.val).toEqual(val);

    console.log('current theList includes()', theList);
  });

  it('can successfully add a node to the end of the linked list', () => {
    let myList = new LinkedList.ll();

    expect(myList.toString()).toBe('null');

    myList.append('A');
    expect(myList.toString()).toBe('[A] -> null');

    myList.append('B');
    expect(myList.toString()).toBe('[A] -> [B] -> null');
  });

  it('can successfully add multiple nodes to the end of a linked list', () => {
    let myList = new LinkedList.ll();
    myList.append('A');
    myList.append('B');
    myList.append('C');
    myList.append('D');

    expect(myList.toString()).toBe('[A] -> [B] -> [C] -> [D] -> null');
  });

  it('can successfully insert a node before a node located in the middle of a linked list', () => {
    let myList = new LinkedList.ll();
    myList.append('A');
    myList.append('B');
    myList.append('x');
    myList.append('D');
    myList.append('E');

    myList.insertBefore('nV', 'x');

    expect(myList.toString()).toBe(
      '[A] -> [B] -> [nV] -> [x] -> [D] -> [E] -> null',
    );
  });

  it('can successfully insert a node before the first node of a linked list', () => {
    let myList = new LinkedList.ll();
    myList.append('x');

    myList.insertBefore('nV', 'x');
    expect(myList.toString()).toBe('[nV] -> [x] -> null');
  });

  it('can successfully insert after a node in the middle of the linked list', () => {
    let myList = new LinkedList.ll();
    myList.append('A');
    myList.append('B');
    myList.append('x');
    myList.append('D');
    myList.append('E');

    myList.insertAfter('nV', 'x');

    expect(myList.toString()).toBe(
      '[A] -> [B] -> [x] -> [nV] -> [D] -> [E] -> null',
    );
  });

  it('can successfully insert a node after the last node of the linked list', () => {
    let myList = new LinkedList.ll();
    myList.append('A');
    myList.append('B');
    myList.append('C');
    myList.append('D');
    myList.append('x');

    myList.insertAfter('nV', 'x');

    expect(myList.toString()).toBe(
      '[A] -> [B] -> [C] -> [D] -> [x] -> [nV] -> null',
    );
  });

  it('kthFromEnd() Where k and the length of the list are the same', () => {
    const theList = new LinkedList.ll();
    theList.append(10);
    theList.append(9);
    theList.append(8);
    theList.append(7);

    expect(theList.kthFromEnd(3)).toStrictEqual(theList.head.value);
  });
  it('kthFromEnd() Where k is not a positive integer', () => {
    const theList = new LinkedList.ll();
    theList.append(10);
    theList.append(9);
    theList.append(8);
    theList.append(7);

    expect(theList.kthFromEnd(-1)).toStrictEqual('invalid value');
  });

  it('kthFromEnd() When the linked list is empty', () => {
    const theList = new LinkedList.ll();

    expect(theList.kthFromEnd(2)).toStrictEqual('empty linked list');
  });
});
