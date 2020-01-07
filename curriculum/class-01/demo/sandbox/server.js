'use strict';

const express = require('express');
const app = express();
const codeObj = require('./myFunction.js.js');

const obj = { name: 'test person', age: 48}; 

codeObj.myFunction();

app.get('/', (req, res) => res.status(200).json(obj));

app.listen(process.env.PORT);
