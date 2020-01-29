'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');

socket.on('sunrise', (payload)=> {
  console.log(payload, ': Get ready for work!');
});

socket.on('sunset', (payload)=> {
  console.log(payload, ': Go get some beers!');
});



