'use strict';

const LinkedList = require('../challenges/linkedList/linked-list.js');
const mergeLists = require('../challenges/llMerge/ll-merge.js');
const mergeLists_O1 = mergeLists.mergeListsO1;

describe('ll-merge module', () => {
  it('works for two lists of the same length', () => {
    let list1 = new LinkedList.ll();
    list1.append(1);
    list1.append(3);
    list1.append(2);

    let list2 = new LinkedList.ll();
    list2.append(5);
    list2.append(9);
    list2.append(4);

    let zipped = mergeLists_O1(list1.head, list2.head);

    expect(zipped.val).toBe(1);
    expect(zipped.next.val).toBe(5);
    expect(zipped.next.next.val).toBe(3);
    expect(zipped.next.next.next.val).toBe(9);
    expect(zipped.next.next.next.next.val).toBe(2);
    expect(zipped.next.next.next.next.next.val).toBe(4);
    expect(zipped.next.next.next.next.next.next).toBe(null);

    let expectedValues = [1, 5, 3, 9, 2, 4, null];
    let currentNode = zipped;
    let i = 0;

    while (currentNode) {
      expect(currentNode.val).toBe(expectedValues[i]);
      currentNode = currentNode.next;
      i++;
    }
  });
});
