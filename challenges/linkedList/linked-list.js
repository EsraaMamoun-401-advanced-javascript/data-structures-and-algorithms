'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;

    return this;
  }

  includes(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value) {
        currentNode = currentNode.next;
        return true;
      }
      return false;
    }
  }

  toString() {
    let listString = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      listString.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return listString.join(' ');
  }

  //===============New Code Challenge (CC- 06): Linked List Insertion===============//

  append(value) {
    if (value) {
      let node = new Node(value);
      if (!this.head) {
        this.head = node;
        return this;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      return this;
    }
  }

  insertBefore(value, newValue) {
    if (value && newValue) {
      let node = new Node(newValue);
      if (this.head.value === value) {
        let current = this.head;
        this.head = node;
        this.head.next = current;
        return this;
      } else {
        let current = this.head;
        let prevValue = current;
        while (current.next) {
          current = current.next;
          let lastCurrent = current;
          if (current.value === value) {
            prevValue.next = node;
            prevValue.next.next = lastCurrent;
            return this;
          }
          prevValue = lastCurrent;
        }
      }
    } 
  }

  insertAfter(value, newValue) {
    if (value && newValue) {
      let node = new Node(newValue);
      if (this.head.value === value) {
        let elem = this.head.next;
        let current = this.head;
        current.next = node;
        current.next.next = elem;
        return this;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
          if (current.value === value) {
            let elem = current.next;
            current.next = node;
            current.next.next = elem;
            return this;
          }
        }
      }
    } 
  }
}

module.exports = LinkedList;