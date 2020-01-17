'use strict';

const schema = require('./players-schema.js');
const dataModelFromTrevor = require('@trevorthompson/mongo-model');

class Players extends dataModelFromTrevor { }

module.exports = new Players(schema);

