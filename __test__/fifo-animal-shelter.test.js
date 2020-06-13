'use strict';

let TheShelter = require('../challenges/fifoAnimalShelter/fifo-animal-shelter.js');

describe('DogAndCatShelter', () => {
  it('Dog enqueue', () => {
    let shelter = new TheShelter.DogAndCatShelter();

    let newDog = new TheShelter.Dog('Blonde');
    shelter.enqueue(newDog);
    expect(shelter.toString()).toEqual('{ name: Blonde, species: dog, speak: Haaw} - > null');
  });

  it('Cat enqueue', () => {
    let shelter = new TheShelter.DogAndCatShelter();
    let newCat = new TheShelter.Cat('Bagera');
    shelter.enqueue(newCat);
    expect(shelter.toString()).toEqual('{ name: Bagera, species: cat, speak: Meooow} - > null');
  });

  it('Dog dequeue', () => {
    let shelter = new TheShelter.DogAndCatShelter();

    let newDog1 = new TheShelter.Dog('Blonde');
    let newDog2 = new TheShelter.Dog('Andy');
    shelter.enqueue(newDog1);
    shelter.enqueue(newDog2);
    shelter.dequeue();
    expect(shelter.toString()).toEqual('{ name: Blonde, species: dog, speak: Haaw} - > null');
  });

  it('Cat dequeue', () => {
    let shelter = new TheShelter.DogAndCatShelter();
    let newCat1 = new TheShelter.Cat('Bagera');
    let newCat2 = new TheShelter.Cat('White');
    shelter.enqueue(newCat2);
    shelter.enqueue(newCat1);
    shelter.dequeue();
    expect(shelter.toString()).toEqual('{ name: White, species: cat, speak: Meooow} - > null');
  });
});