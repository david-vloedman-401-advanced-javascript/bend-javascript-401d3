'use strict';

const express = require('express');
const app = express();
const net = require('net');

const client = new net.Socket();
client.connect(3001, 'localhost', ()=> {});

app.use(express.json());
app.get('/things', getThings);
app.post('/things', createThings);
app.put('/things/:id', updateThings);
app.delete('/things/:id', deleteThings);

function getThings(req, res){
  let things = {
    count: 2,
    results: [{},{}]
  }
  res.send(things);
}

function createThings(req, res) {
  let thing = req.body;
  let event = JSON.stringify({event: 'create', payload: thing});
  client.write(event);

  res.status(200).send(thing);
}

function updateThings() {

}

function deleteThings(){

}






app.listen(3000, ()=> console.log('API up on 3000'));