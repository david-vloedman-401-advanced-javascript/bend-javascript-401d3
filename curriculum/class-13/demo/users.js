'use strict'; 

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let SECRET = 'myserverhasfleas';

let db = {};
const users = {};


users.save = async function (record) {

  if (!db[record.username]) { 

    record.password = await bcrypt.hash(record.password, 5)
    record.id = 12345;
    db[record.username] = record;  

    return record;

  } 
  return Promise.reject();
}

users.authenticeBasic = async function (user, pass) {

  let valid = await bcrypt.compare(pass, db[user].password);
  return valid? db[user]: Promise.reject() ;

}

users.authenticateToken = async function (token) {

    try {
      let parsedTokenObject = jwt.verify(token, SECRET);
      console.log(parsedTokenObject);

      if(db[parsedTokenObject.username]) {
        return Promise.resolve(parsedTokenObject);
      } else {
        return Promise.reject();
      }

    }catch (e) { return Promise.reject();}

}

users.generateToken = function (user) {

  let token = jwt.sign({username: user.username, id: user.id}, SECRET)
  return token;
}

users.list = ()=> db;

module.exports = users;
