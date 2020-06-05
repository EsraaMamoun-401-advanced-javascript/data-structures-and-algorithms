'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let nodeToPush = new Node(value);

    if (this.isEmpty()) {
      this.top = nodeToPush;
      return;
    }

    nodeToPush.next = this.top;
    this.top = nodeToPush;
  }

  pop() {
    let nodeToPop = this.top;

    if (this.isEmpty()) {
      throw 'This node is null';
    }

    this.top = this.top.next;
    nodeToPop.next = null;

    return nodeToPop;

  }

  peek() {
    if (this.top) return this.top.value;

    throw 'This node is null';
  }

  isEmpty() {
    return !this.top;
  }
}

let newStack = new Stack();

console.log('newStack isEmpty Before push: ', newStack.isEmpty());

newStack.push('Itachi');
newStack.push('Gaara');
newStack.push('Arame');
newStack.push('Hesoka');



console.log('newStack: ',newStack);

console.log('newStack Peek: ',newStack.peek());

console.log('newStack Pop: ',newStack.pop());

console.log('newStack After Pop: ',newStack);

console.log('newStack isEmpty after push: ', newStack.isEmpty());


class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {

    let nodeToQueue = new Node(value);

    if (this.isEmpty()) {
      this.front = nodeToQueue;
      this.rear = nodeToQueue;
      return;
    }

    this.rear.next = nodeToQueue;
    this.rear = nodeToQueue;
  }

  dequeue() {
    let nodeToDequeue = this.front;

    if (this.isEmpty()) {
      throw 'This node is null';
    }

    this.front = this.front.next;
    nodeToDequeue.next = null;

    return nodeToDequeue;
  }

  peek() {
    if (this.isEmpty()) {
      throw 'This node is null';
    }

    return this.front.value;
  }

  isEmpty() {
    return !this.front && !this.rear;
  }
}

module.exports = {
  Stack,
  Queue,
};