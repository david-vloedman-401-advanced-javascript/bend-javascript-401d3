'use strict';

const validator = require('./lib/validator.js');

const schema = {
  fields: {
    id: { type: 'string', required: true },
    name: { type: 'string', required: true },
    age: { type: 'number' },
    children: { type: 'array', valueType: 'string' },
  },
};

const susan = {
  id: '123-45-6789',
  name: 'Susan McDeveloperson',
  age: 37,
  children: [],
};

const fred = {
  id: 38,
  name: 'Freddy McCoder',
  children: [],
};

console.log(validator.isValid(schema, susan)); // true
console.log(validator.isValid(schema, fred)); // false
