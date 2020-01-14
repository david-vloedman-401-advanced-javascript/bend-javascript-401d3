'use strict';

module.exports = (req, res, next) => {
  console.log('Unknown Route');
  res.status(404);
  res.send('No idea where you want to go');
  res.end();
};
