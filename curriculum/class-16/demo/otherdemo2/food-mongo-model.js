'use strict';

const EventEmitter = require('events');
const mongoose = require('mongoose');

//connect to mongo using mongoose
//create a schema by invoking mongoose.Schema, passing in the actual object schema
//using mongoose.model, pass in the collection you want to create followed by the mongoose schema created in previous step... you now have a class, that has YOUR schema... every record is basically a new object instance of that class you created. 

const schema = mongoose.model('food', mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  type: { type: String, uppercase: true, enum: ['FRUIT', 'VEGETABLE', 'PROTEIN'] },
}));

class FoodModel extends EventEmitter{

  create(record) {
    let newRecord = new schema(record);
    schema.countDocuments( {}, (err, count) => {
      this.emit('create', count);
    });
    return newRecord.save();
  }

}

module.exports = new FoodModel();
