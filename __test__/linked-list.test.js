'use strict';

const LinkedList = require('../challenges/linkedList/linked-list.js');

describe('Linked List Module', () => {
  it('constructor', () => {
    let theList = new LinkedList();
    expect(theList.head).toBeNull();
  });

  it('insert() when there is node and value', () => {
    let val = 'any value';
    let theList = new LinkedList();
    theList.insert(val);
    expect(theList.head.vlaue).toEqual(val);
  });

  it('insert() type of the next value', () => {
    let val = 'any value';
    let theList = new LinkedList();
    theList.insert(val);
    expect(typeof (theList.head.next)).toEqual('object');
  });

  it('includes()', () => {
    let val = 'any value';
    let theList = new LinkedList();
    theList.includes(val);
    expect(theList.head.vlaue).toEqual(val);

    console.log('current theList includes()', theList);
  });

  let arrayToTestTypes = [1, 'any string', {}, null, true];

  arrayToTestTypes.forEach(value => {
  
    it('toString() to make any type as string', () => {
      let theList = new LinkedList;
      let val = value;
      theList.toString(val);
      expect(typeof(theList.toString())).toEqual('string');
    });

  });

});