'use strict';

const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: 'https://sqs.us-east-2.amazonaws.com/734320817617/myQueue',
  handleMessage: handler,
});

function handler(message) {
  // I'm just sure I could do something way more interesting that log out the message
  // ... like maybe run your lambda function???
  console.log(message.Body);
}

app.on('error', (err) => {
  console.error(err.message);
});

app.on('processing_error', (err) => {
  console.error(err.message);
});

app.start();

