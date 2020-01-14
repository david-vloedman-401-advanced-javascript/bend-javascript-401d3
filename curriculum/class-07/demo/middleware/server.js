'use strict';

const express = require('express');
const serverError = require('./500.js');
const notFoundHandler = require('./404.js');
const app = express();

//the benefit to externalizing is that when we test, we do not need to fire up the server... we can simply test the function and have confidence that the route will work.
const handleAllGets = (req, res) => {
  console.log('animals are a pain on the console');
  res.status(200).send('animails are a pain, but ' + req.body);
};



const logger = (req, res, next) => {
  console.log(req.method, req.path);
  req.body = "Got it logged";
  next();
};

app.use(logger);
app.use(express.json());

const emailAccting = (req, res, next) => {
  console.log('emailed accounting');
  //....
};

const hello = (word) => {
  return (req, res, next) => {
    if (req.path === '/cats') {
      console.log('hello', word);
      next();
    } else { next('no dogs allowed');}
  };
};

const handleAllPosts = (req, res) => {
  res.status(200).send(req.body);
}

//Have you seen this pattern in 201?
app.get('/cats', hello('kitty'), handleAllGets);
app.get('/dogs', hello('doggie'), handleAllGets);
app.post('/cats', handleAllPosts);

app.get('/fruit', (req, res) => {
  let output= {
    type: req.query.type
  };
  res.status(200).json(output);
});

app.get('/fruit/:type', (req, res) => {
  let output = {
    type: req.params.type
  };
  res.status(200).json(output);
});



app.use( serverError );

app.get('*', notFoundHandler);

app.listen(3000, ()=> console.log('listening on 3000'));

