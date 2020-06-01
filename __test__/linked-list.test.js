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

  let arrayToTestTypes = [1, 'any string', {}, true];

  arrayToTestTypes.forEach(value => {
  
    it(`toString() to make ${typeof(value)} as string`, () => {
      let theList = new LinkedList;
      let val = value;
      theList.toString(val);
      expect(typeof(theList.toString())).toEqual('string');
    });

  });

  it(' append() to add new value in the end', () => {
    let theList = new LinkedList;
    let value = 'test';
    theList.append(value);
    theList.append(5);
    expect(theList).toEqual({'head': {'next': {'next': null, 'vlaue': 5}, 'vlaue': 'test'}});
  });

  it('insertBefore() to insert new value before any value we target it', () => {
    let theList = new LinkedList;
    let firstVal = 'test1';
    let secondVal = 'test2';
    theList.append(firstVal);
    theList.append(secondVal);
    theList.insertBefore(firstVal, secondVal);
    expect(theList.head).toEqual({'next': {'next': null, 'vlaue': 'test2'}, 'vlaue': 'test1'});
  });

  it('insertAfter() to insert new value after any value we target it', () => {
    let theList = new LinkedList;
    let firstVal = 'test1';
    let secondVal = 'test2';
    theList.append(secondVal);
    theList.append(firstVal);
    theList.insertAfter(firstVal, secondVal);
    expect(theList).toEqual({'head': {'next': {'next': null, 'vlaue': 'test1'}, 'vlaue': 'test2'}});
  });
});