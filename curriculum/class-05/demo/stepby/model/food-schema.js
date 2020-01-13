'use strict';

const mongoose = require('mongoose');

const food = mongoose.Schema( {
  name: {type: String, required: true},
  calories: {type: Number, required: true},
  type: { type: String, uppercase: true, enum: ['FRUIT', 'VEGETABLE', 'PROTEIN']},

});

//go and get one item when .findOne() method is invoked
food.post('findOne', function() {
  //doc.name = doc.name.toUpperCase();
});

//create a new record instance when .init() is invoked
food.post('init', function() {
  //console.log(this);
});

food.post('save', function() {
  //console.log('saving', this);
});

module.exports = mongoose.model('food', food);
