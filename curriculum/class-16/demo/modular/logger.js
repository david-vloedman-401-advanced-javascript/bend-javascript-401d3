'use strict';

const events = require('./events');

events.on('save', payload => log('save', payload));
events.on('delete', payload => log('delete', payload));
events.on('update', payload => log('update', payload));
events.on('some-random-crap', payload => {
  console.log('some stuff emitted', payload);
});


function log(event, payload){
  let time = new Date();
  console.log({ event, time, payload});
}

