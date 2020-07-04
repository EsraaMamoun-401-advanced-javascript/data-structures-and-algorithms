'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addL(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    return key.split('').reduce((p, n) => {
      return p + n.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  add(key, value) {

    let hash = this.hash(key);
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }

    let entry = { [key]: value };
    this.map[hash].addL(entry);
  }

  get(key) {
    const idx = this.hash(key);
    while (this.map[idx] !=  key){
      if(this.map[idx] !== undefined) return this.map[idx];
      else return undefined; 
    }
  }
  contains(key){
    let value = this.get(key);
    if(value) return true;
    else return false;
  }
}



// let newHashmap = new Hashmap(1000);
// newHashmap.add('Hunter x Hunter', 'Gon Freecss');
// newHashmap.add('Death Note', 'L');
// newHashmap.add('My Hero Academia', 'Shota Aizawa');
// newHashmap.add('Black Butler', 'Sebastian');

// newHashmap.map.forEach((data, i) => {
//   console.log(i, data.values());
// });
// console.log('contains===', newHashmap.contains('Death Note'));

module.exports = Hashmap;
