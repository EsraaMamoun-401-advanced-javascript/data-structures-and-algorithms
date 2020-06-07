'use strict';

const PseudoQueue = require('../challenges/queueWithStacks/queue-with-stacks.js');

describe('Stack Operations', () => {
  it('1. Can successfully enqueue onto a stack', () => {
    let newQueue = new PseudoQueue();
    expect(newQueue.isEmpty()).toBeTruthy();
    newQueue.enqueue('Arame');
    expect(newQueue.peek()).toBe('Arame');
  });

  it('2. Can successfully enqueue multiple values onto a PseudoQueue', () => {
    let newQueue = new PseudoQueue();
    newQueue.enqueue('Arame');
    newQueue.enqueue('Itachi');
    newQueue.enqueue('Gaara');
    newQueue.enqueue('Hesoka');
    expect(newQueue.peek()).toBe('Arame');
  });

  it('3. Can successfully dequeue off the PseudoQueue', () => {
    let newQueue = new PseudoQueue();
    newQueue.enqueue('Arame');
    newQueue.enqueue('Narotu');
    newQueue.enqueue('Itachi');
    newQueue.enqueue('Gaara');

    expect(newQueue.isEmpty()).toBe(false);
    expect(newQueue.peek()).toBe('Arame');

    newQueue.dequeue();

    expect(newQueue.peek()).toBe('Arame');
  });

  it('4. Can successfully dequeue multiple nodes onto a PseudoQueue', () => {
    let newQueue = new PseudoQueue();
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

    expect(newQueue.isEmpty()).toBe(true);
    expect(newQueue.peek()).toBe(null);
  });

  it('5. Can successfully peek the top node of the PseudoQueue', () => {
    let newQueue = new PseudoQueue();
    newQueue.enqueue('Arame');

    expect(newQueue.peek()).toBe('Arame');
  });

  it('6. Raises an exception when peek or pop is called on an empty PseudoQueue', () => {
    let newQueue = new PseudoQueue();

    expect(newQueue.isEmpty()).toBeTruthy();
    expect(newQueue.peek()).toBeFalsy();
    expect(() => {
      newQueue.dequeue();
    }).toThrow();
  });

});