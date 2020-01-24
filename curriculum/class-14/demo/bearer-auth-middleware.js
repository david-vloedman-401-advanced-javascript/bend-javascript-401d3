'use strict';

const users = require('./users.js');

module.exports = (req, res, next) => {
  
//strip out the header from req.headers.authorication -  Authorization: Bearer asdlkjwoievnaweiu12laskjg

if (!req.headers.authorization) { nexct('Invalid Login'); return; }

  let token = req.headers.authorization.split(' ').pop();


  //call the user and have the user authenticate the token... this assumes I have a authToken method.

  users.authenticateToken(token)
    .then( validUser => {
      req.user = validUser;
      req.bob = 'hey bob';
      next();
    })
    .catch(err => next('Invalid Login'));
  //assuming a promise, use then and catch to handle promise.

};