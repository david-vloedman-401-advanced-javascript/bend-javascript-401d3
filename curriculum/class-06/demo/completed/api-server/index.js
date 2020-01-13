'use strict';

const fetch = require('node-fetch');

const baseUrl = 'http://localhost:3000/products';
function create(data) {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  return fetch(baseUrl, options)
    .then((response) => response.json);
}
create({name: "drones", category: "Tools", price: "250"})
// the server will return the object back with an id
// {id: 3, title: "check it out", author: "Mike"}