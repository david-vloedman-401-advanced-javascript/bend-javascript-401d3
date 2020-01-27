'use strict';

const EventEmitter = require('events');

class Animal extends EventEmitter {

  bark() {
    console.log('bark');
    this.emit('bark', 'bark bark bark');
  }

}

const mydog = new Animal();

mydog.on('bark', (payload) => console.log(payload));

mydog.bark();
