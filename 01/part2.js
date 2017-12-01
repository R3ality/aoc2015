'use strict';

let fs = require('fs');
let path = require('path');
let input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'UTF8');

//input = '))((((('; // test input, expecting 3
let floor = 0;
let index = null;

for (let i = 0; i < input.length; i++) {
	floor += (input[i] == '(') ? 1 : -1; // interpret instructions
	if (index == null && floor == -1) index = i+1; // if first time visiting -1, record the index
}

console.log('Santa enters basement -1 at instruction number '+ index);
