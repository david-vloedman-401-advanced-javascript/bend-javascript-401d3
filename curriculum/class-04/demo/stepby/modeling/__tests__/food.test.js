'use strict';

const Food = require('../food.modular.js');

describe(' Food Model', () => {
  
  let food;

  beforeEach( () => {
    food = new Food();
  });

  it( 'can post() a new food', () => {
    let obj = {name: 'Test Food', calories:2};
    return food.create(obj)
      .then( record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(err => console.error('ERR', err));
  });


  it( 'can sanitize() and validate my entries, by returning undefined with missing requirements', () => {
    const testRecord = {};
    expect(food.sanitize(testRecord)).toBeFalsy();
  });

  it('can get() a food', () => {
    let obj = {name: 'Test Food', calories:2};
    return food.create(obj)
      .then(record => {
        return food.get(record.id)
          .then(food => {
            Object.keys(obj).forEach(key => {
              expect(food[0][key]).toEqual(obj[key]);
            });
          });
      });
  });





})