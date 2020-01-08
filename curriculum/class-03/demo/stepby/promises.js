'use strict';

let checkForWords = (words) => new Promise( (resolve,reject) => {

  if (words) {resolve('OK');} // this is where you define the then() action
  else { reject('Bad')} //this is where you define the catch() action

});

// checkForWords()
//   .then(task => console.log('Words', task))
//   .catch(console.error);

//running multiple async actions in series

// checkForWords(true)
//   .then(data => {console.log(data); return checkForWords(data);})
//   .then(data => {console.log(data); return checkForWords(data);})
//   .then(data => {console.log(data); return checkForWords(data);})
//   .then(data => {console.log(data); return checkForWords(false);})
//   .then(data => {console.log(data); return checkForWords(data);})
//   .then(data => {console.log(data); return checkForWords(data);})
//   .then(data => {console.log(data); return checkForWords(data);})
//   .catch(err => {console.error('catch', err); return true;}) //what's going to happen
//   .then(data => {console.log(data); return checkForWords(data);})
//   .then(data => {console.log(data); return checkForWords(false);})
//   .then(data => {console.log(data); return checkForWords(data);})
//   .catch(err => console.error('quit', err));


// running all simultaneously

let stuffToDo = [];

for( let i=0; i<=10; i++) {
  stuffToDo.push(checkForWords(true));
}

// Promise.all(stuffToDo)
//   .then( things => console.log('Things', things))
//   .catch(console.error);
// Promise.all([checkForWords(true), checkForWords(false)])
//   .then( things => console.log('Things', things))
//   .catch(console.error);


async function getWords(text) {

  let result = await (checkForWords(text));
  console.log('Got Words ...', result);
  return result;
}

console.log(getWords('Hello1'));
getWords('Hello2');

getWords('New set of words')
  .then( data => console.log('Got data back', data))
  .catch(console.error);








