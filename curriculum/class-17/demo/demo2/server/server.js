'use strict';

const net = require('net');
const port = 3001;

const server = net.createServer();

server.listen(port, ()=> console.log('server up on port: ', port));

let socketPool = {};

server.on('connection', (socket) => {
  const id = `Socket-${Math.random()}`;
  socketPool[id]= socket;
  console.log('Welcome', id);
  socket.on('data', handleData);
  socket.on('error', (e) => {console.log('socket error', e);});
  socket.on('close', () => {
    delete socketPool[id];
    console.log(`Goodbye ${id}`);
  });

});

const handleData = (buffer) => {

  let message = JSON.parse(buffer.toString().trim());
  broadcast(message);
};

function broadcast(message) {

  let payload = JSON.stringify(message);
  for (let socket in socketPool){
    socketPool[socket].write(`${payload}`);
  }

}

server.on('error', (e) => {
  console.error('server error', e.message);
});
