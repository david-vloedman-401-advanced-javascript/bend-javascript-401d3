'use strict';

const mongoose = require('mongoose');
const Food = require('./model/food-model.js');

const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true});

let food = new Food();

const doDataStuff = async() => {

  let sampleObject = {
    name: 'cauliflower',
    calories: 146,
    type: 'VEGETABLE'
  }

  let newFood = await food.create(sampleObject);
  console.log('Food Created', newFood);

  let allfood = await food.get();
  console.log('All Food', allfood);

  let oneFood = await food.get();
  console.log('One Food', oneFood);

  //disconnect mongoose.
  mongoose.disconnect();

};

//invoke doDataStuff
doDataStuff();
