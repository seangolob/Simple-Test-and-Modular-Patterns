'use strict';

var hello = require('./lib/greeting');

console.log(hello.greet('Sean'));

// Command line utility that uses proccess.argv
var myArg = process.argv[2];

if(myArg) {
  console.log(hello.greet(myArg));
}

