'use strict';

const DataModel = require('./general_model.js');

const schema = {
  id: {required: true},
  name: {required: true},
  calories: {required: true},
};

class Food extends DataModel {

  constructor() {
    super(schema);
  }

  //have some more specific methods in here... 

}

module.exports = Food;