'use strict';

const EE = require('events');

const events = new EE();


//we are exporting an instance of the EE Class. This instance gives us a pool of events.
module.exports = events;
