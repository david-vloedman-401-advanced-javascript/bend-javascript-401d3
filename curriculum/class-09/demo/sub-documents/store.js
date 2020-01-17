'use strict';

const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/class-09';
mongoose.connect(URI);

//Create 3 schemas
const itemsSchema = mongoose.Schema({
  name: { type: String},
  price: {  type: Number },
  quantity: { type: Number}
});

const orderSchema = mongoose.Schema({
  items: [ {type: itemsSchema} ]
});

const userSchema = mongoose.Schema({
  name: {type: String, required: true},
  orders: [ {type: orderSchema}]
});

//In Mongoose, we need to create classes based on the schemas in order to work with them. 
const Users = mongoose.model('users', userSchema);
const Orders = mongoose.model('orders', orderSchema);
const Items = mongoose.model('items', itemsSchema);

createRecords();

async function createRecords(){

//create some user records, orer records and item records
  try {

    const user = await new Users({name: "Calvin Cheng"}).save();
    const order = new Orders({ items: []});

    order.items.push( new Items({"name": "Phone", "price":999,"quantity": 1}));
    order.items.push( new Items({"name": "TV", "price":599,"quantity": 1}));
    order.items.push( new Items({"name": "Pants", "price":19.99,"quantity": 1}));

    user.orders.push(order);
    const obj = await user.save();

    console.log(JSON.stringify(obj, null, 2)); //pretty print deep object

  }catch (e) {console.error(e.message)}

  disconnect();

}

function disconnect() {
  mongoose.disconnect();
}

