'use strict';

const express = require('express');
const router = express.Router();


router.param('color', (req, res, next) => {
  // req.color = req.params.color;
  req.color = 'hi mom';
  next();
}); 

router.get('/my/:color/stuff', (req, res) => {

  const out = {
    
    fromParam: req.params.color,
    fromReq: req.color,

  };
  res.status(200).send(out);
});

router.get('/my/stuff', getMyStuff);

function getMyStuff(req, res, next) {
  res.status(200).send('Get off my lawn hippie!');
}

module.exports = router;