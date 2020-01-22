
'use strict';

const superagent = require('superagent');
const express = require('express');

const app = express();

app.use(express.static('./public'));
app.use(express.json());

const ID = '867850787554-fi8f426d3p685fl6pjjt6qb1h8jlv2le.apps.googleusercontent.com';
const SECRET = 'XfSvjA_yKse_hKI4D3wBBelG';
const tokenServer = 'https://www.googleapis.com/oauth2/v4/token';
const apiServer = 'https://www.googleapis.com/oauth2/v3/userinfo/'; //this has changed from plus route
const redirect = 'http://localhost:3000/oauth';

app.get('/oauth', authorize);

function authorize(req, res){
  console.log('(1) CODE:', req.query.code); //now tak
  
  return superagent.post(tokenServer)
    .type('form') //google requires a form
    .send({ //we send in the code we got based on my identity, now we want to exchange the code for a token with the token server.
      code: req.query.code,
      client_id: ID,
      client_secret: SECRET,
      redirect_uri: redirect,
      grant_type: 'authorization_code',
    })
    .then( response => {
      let access_token = response.body.access_token;
      console.log('(2) TOKEN', access_token); //i have the token, this token is me! has access to my account 
      // res.status(200).send('looks good so far'); 
      return access_token;
    })
    .then( token => {
      return superagent.get(apiServer) //now against the apiServer, we can use bearer auth...using token.
        .set('Authorization', `Bearer ${token}`)
        .then( response => {
          const user = response.body;
          console.log('(3) USER:', user);
          res.status(200).send('looks good so far'); 
        });
    })
    .catch( e => console.log(e));
}

app.listen(3000, ()=> console.log('server up'));
