'use strict';

const express = require('express');

const errorHandler = require('../middleware/500.js');
const notFoundHandler = require('../middleware/404.js');

const apiRouter = require('../routes/v1.js');

const app = express();

app.use(express.json());

app.use(apiRouter);
// app.use('*', notFoundHandler);
// app.use(errorHandler);


module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log('Listening on PORT', PORT));
  }
};