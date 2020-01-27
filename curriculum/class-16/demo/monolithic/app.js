'use strict';

const EventEmitter = require('events');

const events = new EventEmitter();

//emit(), and on()

events.on('save', handleSave);
events.on('delete', payload => log('delete', payload));
events.on('cache-update', payload => log('cache-update', payload));
events.on('update', payload => log('update', payload));
events.on('some-random-crap', payload => {
  console.log('some stuff emitted', payload);
});



function handleSave(payload) {
  console.log(`Record ${payload.id} was saved`);
  events.emit('cache-update', { id:payload.id});
}

function log(event, payload){
  let time = new Date();
  console.log({ event, time, payload});
}

events.emit('update', {id: 77});
events.emit('delete', {id: 88});
events.emit('save', {id: 99});
events.emit('some-random-crap', {id: 42});
