'use strict';

const Stacks_Queues = require('../challenges/stacksAndQueues/stacks-and-queues.js');

describe('Stack Operations', () => {
  it('1. Can successfully push onto a stack', () => {
    let newStack = new Stacks_Queues.Stack();
    newStack.push('Narotu');

    expect(newStack.isEmpty()).toBe(false);
    expect(newStack.peek()).toBe('Narotu');
  });

  it('2. Can successfully push multiple values onto a stack', () => {
    let newStack = new Stacks_Queues.Stack();
    newStack.push('Narotu');
    newStack.push('Itachi');
    newStack.push('Gaara');
    newStack.push('Bakage');

    expect(newStack.isEmpty()).toBe(false);
    expect(newStack.peek()).toBe('Bakage');
  });

  it('3. Can successfully pop off the stack', () => {
    let newStack = new Stacks_Queues.Stack();
    newStack.push('Arame');
    newStack.push('Narotu');
    newStack.push('Itachi');
    newStack.push('Gaara');

    expect(newStack.isEmpty()).toBe(false);
    expect(newStack.peek()).toBe('Gaara');

    newStack.pop();

    expect(newStack.peek()).toBe('Itachi');
  });

  it('4. Can successfully pop multiple nodes onto a stack', () => {
    let newStack = new Stacks_Queues.Stack();
    newStack.push('Arame');
    newStack.push('Narotu');
    newStack.push('Itachi');
    newStack.push('Gaara');

    expect(newStack.isEmpty()).toBe(false);
    expect(newStack.peek()).toBe('Gaara');

    newStack.pop();
    newStack.pop();
    newStack.pop();
    newStack.pop();

    expect(newStack.isEmpty()).toBe(true);
    expect(newStack.top).toBe(null);
  });

  it('5. Can successfully peek the top node of the stack', () => {
    let newStack = new Stacks_Queues.Stack();
    newStack.push('Arame');

    expect(newStack.peek()).toBe('Arame');
  });

  it('6. Can successfully instantiate an empty stack', () => {
    let newStack = new Stacks_Queues.Stack();

    expect(newStack.isEmpty()).toBe(true);
    expect(newStack.top).toBe(null);
  });

  it('7. Raises an exception when peek or pop is called on an empty stack', () => {
    let newStack = new Stacks_Queues.Stack();

    expect(newStack.isEmpty()).toBe(true);
    expect(newStack.top).toBe(null);

    expect(() => {
      newStack.peek();
    }).toThrow();
    expect(() => {
      newStack.pop();
    }).toThrow();
  });

});

//================================================//
//================================================//
//================================================//

describe('Stack Operations', () => {
  it('1. Can successfully enqueue onto a stack', () => {
    let newQueue = new Stacks_Queues.Queue();
    expect(newQueue.isEmpty()).toBeTruthy();
    newQueue.enqueue('Arame');
    expect(newQueue.peek()).toBe('Arame');
  });

  it('2. Can successfully enqueue multiple values onto a queue', () => {
    let newQueue = new Stacks_Queues.Queue();
    newQueue.enqueue('Arame');
    newQueue.enqueue('Itachi');
    newQueue.enqueue('Gaara');
    newQueue.enqueue('Hesoka');
    expect(newQueue.peek()).toBe('Arame');
  });

  it('3. Can successfully dequeue off the queue', () => {
    let newQueue = new Stacks_Queues.Queue();
    newQueue.enqueue('Arame');
    newQueue.enqueue('Narotu');
    newQueue.enqueue('Itachi');
    newQueue.enqueue('Gaara');

    expect(newQueue.isEmpty()).toBe(false);
    expect(newQueue.peek()).toBe('Arame');

    newQueue.dequeue();

    expect(newQueue.peek()).toBe('Narotu');
  });

  it('4. Can successfully dequeue multiple nodes onto a queue', () => {
    let newQueue = new Stacks_Queues.Queue();
    newQueue.enqueue('Arame');
    newQueue.enqueue('Narotu');
    newQueue.enqueue('Itachi');
    newQueue.enqueue('Gaara');

    expect(newQueue.isEmpty()).toBeFalsy;
    expect(newQueue.peek()).toBe('Arame');

    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();

    expect(newQueue.isEmpty()).toBe(false);
    expect(newQueue.front).toBe(null);
  });

  it('5. Can successfully peek the top node of the queue', () => {
    let newQueue = new Stacks_Queues.Queue();
    newQueue.enqueue('Arame');

    expect(newQueue.peek()).toBe('Arame');
  });

  it('6. Raises an exception when peek or pop is called on an empty stack', () => {
    let newQueue = new Stacks_Queues.Queue();

    expect(newQueue.isEmpty()).toBe(true);

    expect(() => {
      newQueue.peek();
    }).toThrow();
    expect(() => {
      newQueue.dequeue();
    }).toThrow();
  });

});