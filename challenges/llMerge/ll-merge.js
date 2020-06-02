'use strict';

const LinkedList = require('../linkedList/linked-list.js');

const mergeLists = (list1, list2) => {
  let linked_list = new LinkedList();

  let l1_findValue = list1;
  let l2_findValue = list2;
  
  while (l1_findValue || l2_findValue) {
     
    if (l1_findValue) {
      linked_list.append(l1_findValue.val);
      l1_findValue = l1_findValue.next;
    }
 
    if (l2_findValue) {
      linked_list.append(l2_findValue.val);
      l2_findValue = l2_findValue.next;
    }
  }

  return linked_list.head;
};

const mergeListsO1 = (list1, list2) => {
    
  let l1_findValue = list1;
  let l2_findValue = list2;
  let l3_findValue = null;
  let l3_head = null;

  while (l1_findValue || l2_findValue) {
    if (l1_findValue) {
      if (!l3_head) {
        l3_findValue = l1_findValue;
        l3_head = l1_findValue;
      } else {
        l3_findValue.next = l1_findValue;
        l3_findValue = l3_findValue.next;
      }
      l1_findValue = l1_findValue.next;
    }

    if (l2_findValue) {
      if (!l3_head) {
        l3_findValue = l2_findValue;
        l3_head = l2_findValue;
      } else {
        l3_findValue.next = l2_findValue;
        l3_findValue = l3_findValue.next;
      }
      l2_findValue = l2_findValue.next;
    }
  }

  return l3_head;
};

module.exports = { 
  mergeLists, 
  mergeListsO1, 
};