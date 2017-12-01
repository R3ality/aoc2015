'use strict';

let fs = require('fs');
let path = require('path');
let input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'UTF8');

//input = '2x3x4\n1x1x10'; // test input, expecting 101 paper & 34 + 14 ribbon

input = input.split(/\r\n|\n|\r/).map(d => { // split to each present
	return d.split('x').map(Number); // then split to each dimension
});

let paper = 0;
let ribbon = 0;

input.forEach((d) => {
	// needed for each present: 2*l*w + 2*w*h + 2*h*l + area of smallest side
	d.sort((a, b) => a - b); // sort the dimensions from smallest to largest
	paper += 2*d[0]*d[1] + 2*d[1]*d[2] + 2*d[2]*d[0] + d[0]*d[1];
	// need for each present: shortest distance around sides + volume of the present
	ribbon += 2*d[0] + 2*d[1] + d[0]*d[1]*d[2];
});

console.log('The elves need to order '+ paper +' sq feet of paper and '+ ribbon +' feet of ribbon');