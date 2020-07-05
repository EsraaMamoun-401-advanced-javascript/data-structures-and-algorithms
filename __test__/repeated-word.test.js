const repeatedWord = require('../challenges/repeatedWord/repeated-word');

describe('testing repeated-words', () => {
  it('regular old string', () => {
    let string = 'Once upon a time, there was a brave princess who...';
    expect(repeatedWord(string)).toBe('a');

  });

  it('regular string', () => {
    let string = 'I am Esra\'a.';
    expect(repeatedWord(string)).toBe(null);
  });

  it('string with numbers', () => {
    let string = 'good 2 go';
    expect(repeatedWord(string)).toBe(null);
  });

  it('empty string', () => {
    let string = '';
    expect(repeatedWord(string)).toBe(null);
  });

  it('word not just a letter', () => {
    let string = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    expect(repeatedWord(string)).toBe('summer');
  });
});