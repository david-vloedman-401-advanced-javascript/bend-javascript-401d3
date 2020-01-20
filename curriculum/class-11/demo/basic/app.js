'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

let users = {}; //pretend database;
let SECRET = 'myserverhasfleas';

app.post('/signup', async (req, res) => {

  let user = req.body;
  if(!users[user.username]) {
    user.password = await bcrypt.hash(req.body.password, 5)

    users[user.username] = user;
    let token = await jwt.sign({ username: user.username}, SECRET)
    res.status(200).send(token);
  } 
  else {
    res.status(403).send('Username taken, sorry');
  }

});

app.post('/signin', async (req, res) => {

  let basic = req.headers.authorization.split(' ').pop();

  let [ user, pass] = base64.decode(basic).split(':');  

  let verified = users[user]? await bcrypt.compare(pass, users[user].password): false;

  if (verified) {

    let token = jwt.sign( {username: user.username}, SECRET);

    res.status(200).send(token);


  }else {
    res.status(403).send('Invalid Login');
  }



})


app.get('/users', (req, res) => {
  res.status(200).json(users);
})


app.listen(3000, () => console.log('server is up!'));

