'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');

const weather = io.connect('http://localhost:3000/weather');

const emergency = io.connect('http://localhost:3000/emergency');

socket.emit('sunrise', 'sunrise');
socket.emit('sunset', 'sunset');

weather.emit('rain', 'Weather Forecast');
weather.emit('snow', 'Weather forecast');

emergency.emit('fire', 'Warehouse fire near Docks');
emergency.emit('crime', 'Break-In on 120th Street in progress');

