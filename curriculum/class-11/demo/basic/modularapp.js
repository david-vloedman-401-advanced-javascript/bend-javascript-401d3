'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const jwt = require('jsonwebtoken');
const basicAuth = require('./auth-middleware.js');
const users = require('./users');

const app = express();

app.use(express.json());

let SECRET = 'myserverhasfleas';

app.post('/signup', async (req, res) => {

  users.save(req.body) 
    .then( user => {
      let token = users.generateToken(user);
      res.status(200).send(token);
    })
    .catch( e => {res.status(403).send('error creating user')});
});

app.post('/signin', basicAuth, (req, res) => {

    res.status(200).send(token);

});


app.get('/users', (req, res) => {
  res.status(200).json(users.list());
})


app.listen(3000, () => console.log('server is up!'));

