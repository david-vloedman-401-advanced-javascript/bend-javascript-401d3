// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set region
AWS.config.update({region: 'us-east-2'});

let counter = 0;

setInterval(sendMessage, 250);



function sendMessage() {

  const params = {
    Message: `Message Number ${++counter}`,
    TopicArn: 'arn:aws:sns:us-east-2:734320817617:mySNS',
  };

  const publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

  publishTextPromise.then(
    function(data) {
      console.log(`Message sent to the topic ${params.TopicArn}`, params.Message);
      console.log('MessageID is ' + data.MessageId);
      if (counter%100 === 0) {
        sendEmail();
      }

    })
    .catch(
      function(err) {
        console.error(err, err.stack);
      });
}

function sendEmail(){
  const emailParams = {
    Message: `Message Number ${counter} was received, Yay!!`,
    TopicArn: 'arn:aws:sns:us-east-2:734320817617:emailatCount',
  };
  const publishEmailPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(emailParams).promise();

  publishEmailPromise.then(
    function(data){
      console.log(`EMail sent to topic ${emailParams.TopicArn}`, emailParams.Message);
    }
  ).catch(
    function(err) {
      console.error(err, err.stack);
    }
  );
}
