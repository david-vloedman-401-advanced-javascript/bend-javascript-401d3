'use strict';

const superagent = require('superagent');
const users = require('./users.js');

const CLIENT_ID = '' ;
const CLIENT_SECRET = '';
const tokenServer = 'https://github.com/login/oauth/access_token';
const apiServer = 'https://api.github.com/user';
const redirect = 'http://localhost:3000/oauth';

// app.get('/oauth', authorize);

module.exports = async function authorize(req, res, next) {

  try {
    let code = req.query.code;
    console.log( '(1) CODE: ', code);

    //use code to exchange for a token
    let remoteToken = await exchangeCodeForToken(code);
    console.log('(2) ACCESS TOKEN ', remoteToken)

    //go and get the remote user
    let remoteUser = await getRemoteUserInfo(remoteToken)
    console.log('(3) GITHUB USER ', remoteUser)

    let [user, token] = await getUser(remoteUser);
    req.user = user;
    req.token = token;
    console.log('(4) LOCAL USER', user);
    // res.status(200).send('got my user');
    next();
    
  } catch (e) {next(`ERR: ${e.message}`)}


};

async function exchangeCodeForToken(code) {

  let tokenResponse = await superagent.post(tokenServer).send( {
    code: code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: redirect,
    grant_code: 'authorization_code',
  })

  let access_token = tokenResponse.body.access_token;

  return access_token;

}

async function getRemoteUserInfo(token) {

 let userResponse = 
  await superagent.get(apiServer)
    .set('user-agent', 'express-app')
    .set('Authorization', `token ${token}`)

  let user = userResponse.body;

  return user
}

async function getUser(remoteUser) {
  let userRecord = {
    username: remoteUser.login,
    password: 'oauthpassword'
  }

  let user = await users.save(userRecord);
  let token = users.generateToken(user);

  return [user, token]

}
