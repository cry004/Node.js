console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('AWS'));
var f = _.uniq(['A','A',2,3]);
console.log(f);


//console.log(notes.add(9,-2));
// var user = os.userInfo();

// fs.appendFile('greeting.txt', `Hello  ${user.username}! You are ${notes.age}.`);
