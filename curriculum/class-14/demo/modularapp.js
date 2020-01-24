'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const jwt = require('jsonwebtoken');
const basicAuth = require('./auth-middleware.js');
const authorize = require('./oauth-middleware.js');
const bearerAuth = require('./bearer-auth-middleware.js');
const acl = require('./acl-middleware.js');
const users = require('./users');

const app = express();

app.use(express.json());

let SECRET = 'myserverhasfleas';

app.use(express.static('./public'));


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

app.get('/user', bearerAuth, (req, res) => {

  res.status(200).json(req.user);
  // res.status(200).send(req.bob);
})

app.get('/oauth', authorize, (req, res) => {
  // res.status(200).send('Something fun about the user');
  res.status(200).send(req.token);
})

app.get('/create', bearerAuth, acl("create"), ( req, res) => {
  res.status(200).send('Create OK!');
})
app.get('/update', bearerAuth, acl("update"), ( req, res) => {
  res.status(200).send('Update OK!');
})
app.get('/delete', bearerAuth, acl("delete"), ( req, res) => {
  res.status(200).send('Delete OK!');
})


app.listen(3000, () => console.log('server is up!'));

