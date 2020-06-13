'use strict';

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, 'dog');
  }

  speak() {
    return 'Haaw';
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name, 'cat');
  }

  speak() {
    return 'Meooow';
  }
}

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}


class DogAndCatShelter {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(animal) {
    let newNode = new Node(animal);

    if (!this.front && !this.rear) {
      this.front = newNode;
      this.rear = newNode;
      return;
    }
    this.rear.next = newNode;
    this.rear = newNode;
  }

  dequeue(pref) {

    let nodeToDequeue = this.front;
    if (!pref === 'dog' && !pref === 'cat')
      this.front = this.front.next;
    nodeToDequeue.next = null;

    return nodeToDequeue;
  }

  toString() {
    let currentNode = this.front;
    let str = '';

    while (currentNode) {
      str += '{ name: ' + currentNode.val.name + ', species: ' + currentNode.val.species +  ', speak: ' + currentNode.val.speak() + '} - > ';

      currentNode = currentNode.next;
    }

    str += 'null';
    return str;

  }

}

let shelter = new DogAndCatShelter();

let newDog = new Dog('Blonde');
shelter.enqueue(newDog);

let newCat = new Cat('Bagera');
shelter.enqueue(newCat);

console.log(shelter.toString());

module.exports = {
  Animal,
  Dog,
  Cat,
  Node,
  DogAndCatShelter,
};