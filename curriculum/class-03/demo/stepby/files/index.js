'use strict';

const fs = require('fs');
const util = require('util');
const reader = require('./lib/reader.js'); //this brings back the object containing 2 methods

let file = `${__dirname}/data/file.txt`;

//callback style

// fs.readFile(file, (err, data) => {
//   if(err) {throw err;}
//   console.log('Callback', data.toString().trim());
// });

//promise way... 
//we're going to turn the readfile callback into a promise..

// let readFilePromise = util.promisify(fs.readFile);

//call the promise

// readFilePromise(file)
//   .then( data => console.log('Promise', data.toString().trim()))
//   .catch(err => {throw err;});

//Async Await

// async function readFileAsync(file) {
//   try {
//     let data = await readFilePromise(file);
//     console.log('Async', data.toString().trim());
//   }
//   catch (err) {throw err}
// }

// readFileAsync(file);

// Use the reader's callback methodology to asynchronously access the file.

reader.readerWithCallback(file, (err,data) => {
  if(err) {throw err;}
  console.log('Callback from my reader module', data);
});

//promisified way 

reader.readerWithPromise(file)
  .then( data => console.log('Promise from my reader module', data))
  .catch(err => {throw err;});

//async way
async function readFileAsyncFromModule(file){
  try {
    let data = await reader.readerWithPromise(file);
    console.log('Async from module reader ', data);
  }
  catch (err) { throw err}
}

readFileAsyncFromModule(file);

