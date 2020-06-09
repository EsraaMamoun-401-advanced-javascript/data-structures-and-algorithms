'use strict';

function multiBracketValidation(input) {
  let count = 0;
  let inputArray = input.split('');
  inputArray.forEach(element => {
    if (element === '(') count++;
    else if (element === ')' && --count < 0) return false;      
    if (element === '{') count++;
    else if (element === '}' && --count < 0) return false; 
    if (element === '[') count++; 
    else if (element === ']' && --count < 0) return false;
  });
    
  return count === 0; 

}

console.log('{} =====>', multiBracketValidation('{}'));
console.log('{}(){} =====>', multiBracketValidation('{}(){}'));
console.log('()[[Extra Characters]] =====>', multiBracketValidation('()[[Extra Characters]]'));
console.log('(){}[[]] =====>', multiBracketValidation('(){}[[]]'));
console.log('{}{Code}[Fellows](()) =====>', multiBracketValidation('{}{Code}[Fellows](())'));
console.log('[({}] =====>', multiBracketValidation('[({}]'));
console.log('(]( =====>', multiBracketValidation('(]('));


module.exports = multiBracketValidation;