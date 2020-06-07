'use strict';

class PseudoQueue {
  constructor() {

    this.stack1 = [];  // I can use also this.stack1 = new Array(); it's the same work...
    this.stack2 = [];
  }

  enqueue(value) {
    return this.stack1.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw 'This node is null';
    }

    if (!this.stack1.length) {
      if (!this.stack2.length) {
        return null;
      }
    }
    if (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.stack1.length > 0) return this.stack1[0];
    return this.stack2[this.stack2.length - 1];
  }

  isEmpty() {
    return !this.stack1[0];
  }

}

let newPseudoQueue = new PseudoQueue();
console.log('newPseudoQueue isEmpty Before enqueue: ', newPseudoQueue.isEmpty());
console.log('newPseudoQueue before enqueue: ', newPseudoQueue);
console.log('newPseudoQueue befor enqueue Peek: ', newPseudoQueue.peek());
newPseudoQueue.enqueue('Arame');
newPseudoQueue.enqueue('Itachi');
newPseudoQueue.enqueue('Gaara');
newPseudoQueue.enqueue('Hesoka');
console.log('newPseudoQueue isEmpty after enqueue: ', newPseudoQueue.isEmpty());
console.log('newPseudoQueue after enqueue: ', newPseudoQueue);
console.log('newPseudoQueue Peek: ', newPseudoQueue.peek());
newPseudoQueue.dequeue();
console.log('newPseudoQueue after dequeue1: ', newPseudoQueue);
newPseudoQueue.dequeue();
console.log('newPseudoQueue after dequeue2: ', newPseudoQueue);
newPseudoQueue.dequeue();
console.log('newPseudoQueue after dequeue3: ', newPseudoQueue);
newPseudoQueue.dequeue();
console.log('newPseudoQueue after dequeue4: ', newPseudoQueue);
console.log('newPseudoQueue Peek after dequeue: ', newPseudoQueue.peek());

module.exports = PseudoQueue;