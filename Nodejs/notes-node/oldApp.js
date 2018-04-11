console.log('Starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

console.log(_.isString(true));
console.log(_.isString('holis'));

var filteredArray = _.uniq(['Ricardo' ,1 ,'Ricardo' ,1 ,2,3,4]);
console.log("filteredArray:",filteredArray);

// var user = os.userInfo();

// // console.log(user);
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);

// var res = notes.addNote();
// console.log(res);
// var res = notes.add(5,-2);
// console.log(res);

