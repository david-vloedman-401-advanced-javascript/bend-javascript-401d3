'use strict';

//callbacks offload functionality.

let myCallback = (data) => {
  console.log('2: Received', data);
};

let useTheCallback = (words, cb) => {
  console.log('1: Calling the callback');
  cb(words);
  console.log('3: After the callback');
};

// useTheCallback('Hello', myCallback);

//extend the callback functionality to include an error first parameter
let errorFirstCallback = (err, data) => {
  if(err) {console.log(err);}
  console.log('2: Received',data);
};

let useTheErrorFirstCallback = (words, cb) => {
  console.log('1: Calling the error first callback');
  //go get that data and return a payload - the call to api
  cb('wrong', words);
  console.log('3: After error first callback');
};

// useTheErrorFirstCallback('Hello', errorFirstCallback);

let asyncCallback = (err, data) => {
  if(err) {throw err;}
  console.log('2: Received ', data);
};

let useTheAsyncCallback = (words, cb) => {
  //do a bunch of work and come up with some text....
  console.log('1.: call the async callback');
  setTimeout( ()=> {
    cb(undefined, words);
  }, 1000);
};

useTheAsyncCallback('Hello', asyncCallback);
