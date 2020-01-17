'use strict';

const express = require('express');
const router = express.Router();

const teams = require('../models/teams.js');
const players =require('../models/players.js');



function getModel( req, res, next) {
//this will go and grab the param from the url and use that param as the model.
//use decision structure to determine what has been asked for...
  let model = req.params.model;

  switch (model) {
  case 'teams':
    req.model = teams;
    next();
    return;
  case 'players':
    req.model = players;
    next();
    return;
  default:
    next('Invalid Model');
    return;
  }


}

router.param('model', getModel);

router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost);
router.get('/api/v1/:model/:id', handleGetOne);

router.get('/test', (req, res) => {
  res.send('hello');
})

function handleGetAll(req, res, next) {
  req.model.get()
    .then(record => res.json(record))
    .catch(next);

}
function handleGetOne(req, res, next) {
  let id = req.params.id;
  req.model.get(id)
    .then(record => res.json(record))
    .catch(next);
}
function handlePost(req, res, next) {
  req.model.post(req.body)
    .then(result => res.json(result))
    .catch(next);
}

module.exports = router;