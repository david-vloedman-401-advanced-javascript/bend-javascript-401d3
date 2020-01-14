'use strict';
/**
 * Internal Error middleware 
 * @param  {} err
 * @param  {} req
 * @param  {} res
 * @param  {} next

 */
module.exports = (err, req, res, next) => {
  console.log(err);
  res.status(500).send(err);
};
