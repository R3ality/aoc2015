'use strict';

let fs = require('fs');
let path = require('path');
let input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'UTF8');

//input = '))((((('; // test input, expecting 3
let floor = 0;

for (let i = 0; i < input.length; i++) {
	floor += (input[i] == '(') ? 1 : -1; // interpret instructions
}

console.log('Instructions take Santa to floor '+ floor);
