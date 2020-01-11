'use strict';

const fs = require('fs');

module.exports = exports = {};



/**
 * Wraps fs.readFile, processes the file as a JSON string, returning the object to * the calling function
 * @param  {} file - full path to the file
 * @param  {} cb - Error First Callback
 *
 */
exports.read = ( file, cb) => {
  console.log(file);
  fs.readFile(file, (err, data) => {
    if(err) {cb(err);}
    else {
      try {
        cb( null, JSON.parse(data.toString().trim()));
      } catch(e) { cb(e);}
    }
  });
};


/**
 * Wraps fs.writeFile, processing the 'text' as JSON when it presents as an object, and using the text if not, returns data to the callback as either an error or data
 * @param  {} file
 * @param  {} text
 * @param  {} cb
 */
exports.write = (file, text, cb) => {
  let buffer = Buffer.from( typeof text === 'object'? JSON.stringify(text): text);
  fs.writeFile(file, buffer, cb);
}