'use strict';

const schema = require('./teams-schema.js');
const dataModelFromTrevor = require('@trevorthompson/mongo-model');

class Teams extends dataModelFromTrevor { }

module.exports = new Teams(schema);

