'use strict';

const Model = require('../mongo.js');
const schema = require('./food-schema');


class Food extends Model {

  constructor() {
    super(schema);
  }

}

module.exports = new Food();