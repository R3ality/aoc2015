'use strict';

const fs = require('fs'), path = require('path');
let input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'UTF8');

console.time('run-time');

input = input.split(/\r\n|\n|\r/);
let nice = 0;

for (let i = 0; i < input.length; i++) {
	if (input[i].match(/.*(ab|cd|pq|xy).*/)) continue; // if disallowed substrings, skip
	if (getVowels(input[i]) < 3) continue; // if not enough vovels, skip

	for (let j = 0; j < input[i].length; j++) { // loop characters in the string
		if (j+1 >= input[i].length) break; // if look-ahead is out of bounds, skip
		if (input[i][j] === input[i][j+1]) { // if look-ahead is matching current
			nice++; // increment our nice counter
			break; // break out of the loop
		}
	}
}

function getVowels(str) {
	var m = str.match(/[aeiou]/gi);
	return m === null ? 0 : m.length;
}

console.log('Number of nice strings for part I is '+ nice);

console.timeEnd('run-time');