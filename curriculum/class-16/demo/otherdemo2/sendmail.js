'use strict';

const events = require('./food-mongo-model.js');
const sendmail = require('sendmail')();

events.on('create', payload => mail('create mail set', payload));

function mail(event, payload) {

  sendmail({
    from: 'calvincheng919@gmail.com',
    to: 'calvincheng919@gmail.com',
    subject: 'record was created on this fine day',
    html: 'Your email event responder worked!! Yay!!',
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
  });
}
