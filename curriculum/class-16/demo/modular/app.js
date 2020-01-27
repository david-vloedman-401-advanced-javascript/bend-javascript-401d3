'use strict';

const events = require('./events.js');


// define a logger
require('./logger.js');
require('./cache.js');

// define a cache 

events.emit('save', {id: 77});
events.emit('update', {id: 88});
//emit something