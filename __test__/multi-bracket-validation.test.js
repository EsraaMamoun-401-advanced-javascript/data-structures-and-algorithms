'use strict';

const multiBracketValidation = require('../challenges/multiBracketValidation/multi-bracket-validation.js');


describe('Multi Bracket Validation', () => {
  it('Balance brakets return true', () => {

    let theFunction = multiBracketValidation('{}');
    expect(theFunction).toBeTruthy();
  });

  it('Unbalance brakets return false', () => {

    let theFunction = multiBracketValidation('(](');
    expect(theFunction).toEqual(false);
  });

  it('With Extra Characters return true', () => {

    let theFunction = multiBracketValidation('()[[Extra Characters]]');
    expect(theFunction).toEqual(true);
  });

  it('Unbalance brakets return false', () => {

    let theFunction = multiBracketValidation(')}]');
    expect(theFunction).toEqual(false);
  });
});