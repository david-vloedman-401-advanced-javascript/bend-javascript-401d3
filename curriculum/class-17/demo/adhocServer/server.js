'use strict';

const net = require('net');
const port = 3333;

const server = net.createServer();

server.listen(port, ()=> console.log('server up on port: ', port));

let socketPool = {};

server.on('connection', (socket) => {
  const id = `Socket-${Math.random()}`;
  socketPool[id]= socket;
  console.log('Welcome', id);

  socket.on('close', () => {
    delete socketPool[id];
    console.log(`Goodbye ${id}`);
  });

  socket.on('data', handleData);
  socket.on('error', (e) => {console.log('socket error', e);});

});

const handleData = (buffer) => {
  let text = buffer.toString().trim();

  
  let [event, payload] = text.split(/\s(.*)/);
  console.log('Event', event, 'Payload', payload);

  for (let socket in socketPool){
    socketPool[socket].write(`${event}: ${payload}`);
  }

};

server.on('error', (e) => {
  console.error('server error', e.message);
});
