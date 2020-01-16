'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const foodroutes = require('../routes/food-routes.js');

// use custom routes

app.use(morgan('dev'));

//Global use
app.use(express.json());
app.use(cors());
app.use(foodroutes);

app.get('/testmorgan', (req, res) => {
  res.send('This is a test of morgan');
});


module.exports = {

  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log('listening on port ', PORT));
  },
};

