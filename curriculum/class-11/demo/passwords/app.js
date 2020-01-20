'use strict';

let base64 = require('base-64');
let bcrypt = require('bcrypt');

console.log('\n-----------------------Base64----------------- \n');

let string = 'someusername: P@55w0rD!';

let encoded = base64.encode(string);
let decoded = base64.decode(encoded);

console.log('string', string);
console.log('encoded', encoded);
console.log('decoded', decoded);


console.log('\n-----------------------Hashing using bcrypt----------------- \n');

let password = 'P@55w0rD!';
let complexity = 5;

async function encrypt(rounds) {

  let hashed1 = await bcrypt.hash(password, rounds);
  let p1 = '$2b$05$8udBhviWuSXVZ8H.CAQpj.lrrEeC1QGOmI/yUdTPVyNDNSzg8nS5i';
  let p2 = '$2b$05$7HvKpPuS9wpFZTXy4hanA.fJf2Vwn0gaSv/V.uU408EmIujtMtwCC';
  let p3 = '$2b$05$7HvKpPuS9wpFZTXy4hanA.xJf2Vwn0gaSv/V.uU408EmIujtMtwCC';

  let isH1Valid = await bcrypt.compare(password, hashed1);
  let isP1Valid = await bcrypt.compare(password, p1);
  let isP2Valid = await bcrypt.compare(password, p2);
  let isP3Valid = await bcrypt.compare(password, p3);
  
  console.log(password);
  console.log(hashed1);
  console.log(isH1Valid);
  console.log(isP1Valid);
  console.log(isP2Valid);
  console.log(isP3Valid);
  
}

encrypt(complexity)

