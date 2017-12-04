'use strict';

const fs = require('fs'), path = require('path');
let input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'UTF8');
//input = 'qjhvhtzxzqqjkmpb\nxxyxx\nuurcxstgmygtbstg\nieodomkazucvgmuy'; // test input, expecting 2

console.time('run-time');

input = input.split(/\r\n|\n|\r/);
let nice = 0;

input.forEach((str) => {
	let a = false, b = false; // booleans for tracking if string is compliant with rules A and B

	for (let i = 0; i < str.length; i++) { // loop characters
		if (!a && i+2 < str.length) { // if rule A is not yet satisfied and lookahead is still within bounds
			if (str[i] === str[i+2]) a = true; // if rule A is satisfied
		}
		if (!b && i+3 < str.length) { // if rule B is not yet satisfied and lookahead is still within bounds
			if (str.includes(str.substring(i, i+2), i+2)) b = true; // if rule B is satisfied
		}
		if (a && b) { // both rules A and B are satisfied, increment count
			nice++;
			break;
		}
	}
});

console.log('Number of nice strings for part II is '+ nice);

console.timeEnd('run-time');