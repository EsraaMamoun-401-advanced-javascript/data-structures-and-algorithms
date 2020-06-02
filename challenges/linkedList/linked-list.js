// 'use strict';

// const Node = require('./node.js');

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   insert(value) {
//     let node = new Node(value);

//     if (!this.head) {
//       this.head = node;
//     }

//     let currentNode = this.head;

//     while (currentNode.next) {
//       currentNode = currentNode.next;
//     }

//     currentNode.next = node;

//     return this;
//   }

//   includes(value) {
//     let node = new Node(value);

//     if (!this.head) {
//       this.head = node;
//     }

//     let currentNode = this.head;

//     while (currentNode) {
//       if (currentNode.value) {
//         currentNode = currentNode.next;
//         return true;
//       }
//       return false;
//     }
//   }

//   toString() {
//     let listString = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       listString.push(currentNode.value);
//       currentNode = currentNode.next;
//     }

//     return listString.join(' ');
//   }

//   //===============New Code Challenge (CC- 06): Linked List Insertion===============//

//   append(value) {
//     if (value) {
//       let node = new Node(value);
//       if (!this.head) {
//         this.head = node;
//         return this;
//       }
//       let current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = node;
//       return this;
//     }
//   }

//   insertBefore(value, newValue) {
//     if (value && newValue) {
//       let node = new Node(newValue);
//       if (this.head.value === value) {
//         let current = this.head;
//         this.head = node;
//         this.head.next = current;
//         return this;
//       } else {
//         let current = this.head;
//         let prevValue = current;
//         while (current.next) {
//           current = current.next;
//           let lastCurrent = current;
//           if (current.value === value) {
//             prevValue.next = node;
//             prevValue.next.next = lastCurrent;
//             return this;
//           }
//           prevValue = lastCurrent;
//         }
//       }
//     } 
//   }

//   insertAfter(value, newValue) {
//     if (value && newValue) {
//       let node = new Node(newValue);
//       if (this.head.value === value) {
//         let elem = this.head.next;
//         let current = this.head;
//         current.next = node;
//         current.next.next = elem;
//         return this;
//       } else {
//         let current = this.head;
//         while (current.next) {
//           current = current.next;
//           if (current.value === value) {
//             let elem = current.next;
//             current.next = node;
//             current.next.next = elem;
//             return this;
//           }
//         }
//       }
//     } 
//   }

//   //===============New Code Challenge (CC- 07): Linked List k-th value===============//

//   kthFromEnd(k){
//     let counter = 0; 
//     if ((typeof(k) === 'number') && k>=0){
//       if (this.head){
//         counter ++;
//         let current = this.head;
//         let anotherCurrent = this.head;
//         while(current.next){
//           current = current.next;
//           counter++;
//         }
//         for (let i = 0; i<(counter-k-1); i++){
//           anotherCurrent = anotherCurrent.next;
//         }
//         if ((counter-k-1)<0){
//           return 'exception';
//         }
//         return anotherCurrent.value;
  
//       } else {
//         return 'empty linked list';
//       }
//     } else {
//       return 'invalid value';
//     }
//   } 
// }

// module.exports = LinkedList;

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

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
    let currentNode = this.head;
    let str = '';

    while (currentNode) {
      str += '[' + currentNode.val + '] -> ';
      currentNode = currentNode.next;
    }

    str += 'null';

    return str;
  }

  //===============New Code Challenge (CC- 06): Linked List Insertion===============//


  append(newVal) {
    let currentNode = this.head;

    if (!currentNode) {
      this.head = new Node(newVal);
      return;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    let newNode = new Node(newVal);
    currentNode.next = newNode;
  }

  insertBefore(newVal, beforeVal) {
    let prevCurrentNode = null;
    let currentNode = this.head;

    if (currentNode && currentNode.val === beforeVal) {
      let newNode = new Node(newVal);
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    while (currentNode) {
      if (currentNode.val === beforeVal) {
        let newNode = new Node(newVal);
        prevCurrentNode.next = newNode;
        newNode.next = currentNode;
        return;
      }

      prevCurrentNode = currentNode;
      currentNode = currentNode.next;
    }
    return false;
  }

  insertAfter(newVal, afterVal) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.val === afterVal) {
        let newNode = new Node(newVal);

        let nextCurrentNode = currentNode.next;
        currentNode.next = newNode;
        newNode.next = nextCurrentNode;
      }

      currentNode = currentNode.next;
    }

    return false;
  }

  //===============New Code Challenge (CC- 07): Linked List k-th value===============//

  kthFromEnd(k){
    let counter = 0; 
    if ((typeof(k) === 'number') && k>=0){
      if (this.head){
        counter ++;
        let current = this.head;
        let anotherCurrent = this.head;
        while(current.next){
          current = current.next;
          counter++;
        }
        for (let i = 0; i<(counter-k-1); i++){
          anotherCurrent = anotherCurrent.next;
        }
        if ((counter-k-1)<0){
          return 'exception';
        }
        return anotherCurrent.value;
  
      } else {
        return 'empty linked list';
      }
    } else {
      return 'invalid value';
    }
  } 
}

module.exports = {
  node: Node,
  ll: LinkedList, 
};