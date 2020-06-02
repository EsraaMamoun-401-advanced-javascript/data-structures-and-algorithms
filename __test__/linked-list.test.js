// 'use strict';

// const LinkedList = require('../challenges/linkedList/linked-list.js');

// describe('Linked List Module', () => {
//   it('constructor', () => {
//     let theList = new LinkedList();
//     expect(theList.head).toBeNull();
//   });

//   it('insert() when there is node and value', () => {
//     let val = 'any value';
//     let theList = new LinkedList();
//     theList.insert(val);
//     expect(theList.head.vlaue).toEqual(val);
//   });

//   it('insert() type of the next value', () => {
//     let val = 'any value';
//     let theList = new LinkedList();
//     theList.insert(val);
//     expect(typeof (theList.head.next)).toEqual('object');
//   });

//   it('includes()', () => {
//     let val = 'any value';
//     let theList = new LinkedList();
//     theList.includes(val);
//     expect(theList.head.vlaue).toEqual(val);

//     console.log('current theList includes()', theList);
//   });

//   let arrayToTestTypes = [1, 'any string', {}, true];

//   arrayToTestTypes.forEach(value => {

//     it(`toString() to make ${typeof (value)} as string`, () => {
//       let theList = new LinkedList;
//       let val = value;
//       theList.toString(val);
//       expect(typeof (theList.toString())).toEqual('string');
//     });

//   });

//   it('append() to add new value in the end', () => {
//     let theList = new LinkedList;
//     let value = 'test';
//     theList.append(value);
//     theList.append(5);
//     expect(theList).toEqual({ 'head': { 'next': { 'next': null, 'vlaue': 5 }, 'vlaue': 'test' } });
//   });

//   it('insertBefore() to insert new value before any value we target it', () => {
//     let theList = new LinkedList;
//     let firstVal = 'test1';
//     let secondVal = 'test2';
//     theList.append(firstVal);
//     theList.append(secondVal);
//     theList.insertBefore(firstVal, secondVal);
//     expect(theList.head).toEqual({ 'next': { 'next': null, 'vlaue': 'test2' }, 'vlaue': 'test1' });
//   });

//   it('insertAfter() to insert new value after any value we target it', () => {
//     let theList = new LinkedList;
//     let firstVal = 'test1';
//     let secondVal = 'test2';
//     theList.append(secondVal);
//     theList.append(firstVal);
//     theList.insertAfter(firstVal, secondVal);
//     expect(theList).toEqual({ 'head': { 'next': { 'next': null, 'vlaue': 'test1' }, 'vlaue': 'test2' } });
//   });

//   it('kthFromEnd() Where k and the length of the list are the same', () => {
//     const theList = new LinkedList();
//     theList.append(10);
//     theList.append(9);
//     theList.append(8);
//     theList.append(7);

//     expect(theList.kthFromEnd(3)).toStrictEqual(theList.head.value);
//   });
//   it('kthFromEnd() Where k is not a positive integer', () => {
//     const theList = new LinkedList();
//     theList.append(10);
//     theList.append(9);
//     theList.append(8);
//     theList.append(7);

//     expect(theList.kthFromEnd(-1)).toStrictEqual('invalid value');
//   });

//   it('kthFromEnd() When the linked list is empty', () => {
//     const theList = new LinkedList();

//     expect(theList.kthFromEnd(2)).toStrictEqual('empty linked list');
//   });
// });

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
