'use strict';



//define the callback method of accessing files.

const fsUsingCallback = require('./lib/files-callback.js');
const fsUsingPromise = require('./lib/files-promise.js');

const file = `${__dirname}/data/${process.argv.slice(2)[0]}`;
// const file = process.argv.slice(2)[0];

const useCallbacks = (cb) => {

  fsUsingCallback.read(file, (err, data)=> {
    if(err) {console.error(err);}
    else {
      data.lastName = 'Callback';
      fsUsingCallback.write(file, data, (err, result) => {
        if(err) {console.error(err);}
        else {
          fsUsingCallback.read(file, (err, afterData) => {
            cb(afterData);
          });
        }
      });
    }
  });
};


// useCallbacks((data) => console.log(data));

const usePromise = () => {

  return fsUsingPromise.read(file)
    .then( data => {
      data.lastName = 'Promise';
      return data;
    })
    .then( obj => fsUsingPromise.write(file, obj))
    .then( result => fsUsingPromise.read(file))
    .then( data => console.log(data));

};

usePromise();

