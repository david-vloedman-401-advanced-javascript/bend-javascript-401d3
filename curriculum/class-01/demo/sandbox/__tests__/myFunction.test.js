'use strict';

const codeObj = require('../myFunction.js');

describe('Testing the myFunction.js functionality', () => {
  
  it('Should prove life', () => {
    expect(1).toBe(1);
  });

  it('returns cool stuff', () => {
    expect(codeObj.myFunction()).toBe('Do cool stuff');
  });

});

