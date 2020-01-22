// code up the logic to authenticate incoming requests.

'use strict';

const base64 = require('base-64');
const users = require('./users.js');

module.exports = (req, res, next) => {

  if (!req.headers.authorization) { next('Invalid Login'); return;}

  let basic = req.headers.authorization.split(' ').pop();

  let [user, pass] = base64.decode(basic).split(':');


  //this needs to be async or a promise - come back to complete.
  users.authenticationBasic(user, pass)
    .then( validUser => {
      req.token = users.generateToken(validUser);
      next();
    })
    .catch( err => next('Invalid Login'));

};
