'use strict';

const express = require('express');
const app = express();
const myRoutes = require('../routes/mine.js');
const yourRoutes = require('../routes/yours.js');


//Global use

app.use(myRoutes);
app.use('/your', yourRoutes);


app.get('/foo', (req,res) => {
  console.log(req.params);
  console.log(req.query);
  console.log(typeof req.param.bind, req.param.id);
  res.send('ok');
});

app.get('/foo/:id', (req, res) => {
  console.log(req.params.id);
  console.log(req.query);
  console.log(typeof req.param.bind, req.param.id);
  res.send('ok');
});


module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8118;
    app.listen(PORT, () => console.log('listening on port ', PORT));
  },
};