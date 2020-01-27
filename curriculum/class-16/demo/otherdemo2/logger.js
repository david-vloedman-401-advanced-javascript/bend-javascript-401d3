'use strict';

const events = require('./food-mongo-model.js');

events.on('create', payload => log('record created', payload));

function log(event, payload){
  let time = new Date();
  console.log({event, time, payload});
}