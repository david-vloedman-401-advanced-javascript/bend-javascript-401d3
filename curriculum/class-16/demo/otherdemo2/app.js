'use strict';

const mongoose = require('mongoose');
const food = require('./food-mongo-model.js');
require('./logger.js');
require('./sendmail');
// const food = get food model that has emitter inherited

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect('mongodb://localhost:27017/myFunkyServer',mongooseOptions);

//call the food objec/model... 

food.create({
  name: 'kababs',
  calories: 250,
  type: 'PROTEIN',
})
  .then( data => {
    console.log(data);
  })
  .then( () => mongoose.connection.close())
  .catch(err => console.log(err));
