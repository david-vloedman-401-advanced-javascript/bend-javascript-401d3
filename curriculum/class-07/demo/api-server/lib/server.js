'use strict'

const express = require('express');
const app = express();
const notFoundHandler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');
const logger = require('./middleware/logger');

app.use(express.json());
app.use(logger);

let db = [ {name: 'Cabbage', id: 1}];
/**
 * @function
 * @param  {} '/api/v1/food'
 * @param  {} (req
 * @param  {} res
 * @param  {} next

 */
app.get('/api/v1/food', (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results});
});

app.get('/api/v1/food/:id', (req, res, next) => {
  let id = req.params.id;
  let record = db.filter( (record) => record.id === parseInt(id));
  res.json(record[0]);
});

app.post('/api/v1/food', (req, res, next) => {

  let { name } = req.body;
  let record = { name };
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
});

app.put('/api/v1/food/:id', (req, res, next) => {
  let idToUpdate = req.params.id;
  let {name, id} = req.body;
  let updatedRecord = { name, id};
  db = db.map( record => (record.id=== parseInt(idToUpdate)) ? updatedRecord: record );
  res.json({});
});

app.delete('api/v1/food/:id', (req, res, next) => {
  let id = req.params.id;
  db = db.filter( record => record.id !== parseInt(id));
  res.json({});
});

app.use('*', notFoundHandler);
app.use(errorHandler);

// app.listen(3000, ()=> console.log('server is running on port 3000'));

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening again, on port ${PORT}`));
  }

};
