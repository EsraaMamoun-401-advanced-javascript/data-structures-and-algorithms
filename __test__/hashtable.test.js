'use strict';

const Hashmap = require('../challenges/hashtable/hashtable');

describe('HashTable Module', () => {

  it('Test adds to the HashTable', () => {
    const newHashmap = new Hashmap(1000);
    newHashmap.add('Hunter x Hunter', 'Gon Freecss');
    newHashmap.map.forEach((data, i) => {
      let theValue = data.values();
      expect(theValue).toEqual([{'Hunter x Hunter': 'Gon Freecss'}]);
    });
  });

  it('Test contains in HashTable', () => {
    const newHashmap = new Hashmap(1000);
    newHashmap.add('Death Note', 'L');
    let isConatainT = newHashmap.contains('Death Note');
    let isConatainF = newHashmap.contains('Sebastian');
    expect(isConatainT).toBeTruthy();
    expect(isConatainF).toBeFalsy();
  });

  it('Test get from HashTable', () => {
    const newHashmap = new Hashmap(1000);
    newHashmap.add('My Hero Academia', 'Shota Aizawa');
    let getValue = newHashmap.get('My Hero Academia');
    expect(getValue.values()).toEqual([{'My Hero Academia': 'Shota Aizawa'}]);
  });
});