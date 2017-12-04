'use strict';

const fs = require('fs'), path = require('path');
let input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'UTF8');

console.time('run-time');

//input = 'turn on 0,0 through 9,9\ntoggle 2,2 through 3,3\nturn off 5,5 through 6,6'; // test input
input = input.split(/\r\n|\n|\r/).map((line) => line.split(' '));

let grid = new Array(1000).fill(0).map(() => new Array(1000).fill(0)); // construct the grid
//grid = new Array(10).fill(0).map(() => new Array(10).fill(0)); // test grid

input.forEach((str) => {
	let offset = (str[0] === 'turn') ? 0 : 1;
	let instr = str[1-offset];
	let a = str[2-offset].split(',').map(Number);
	let b = str[4-offset].split(',').map(Number);
	//console.log('Targeting range ('+ a +') - ('+ b +') with command '+ instr.toUpperCase());

	for (let i = a[0]; i <= b[0]; i++) {
		for (let j = a[1]; j <= b[1]; j++) {
			switch (instr) {
				case 'on': grid[i][j] = 1; break;
				case 'off': grid[i][j] = 0; break;
				case 'toggle': grid[i][j] = (grid[i][j] === 1) ? 0 : 1; break;
			}
		}
	}
});

//for (let i = 0; i < grid.length; i++) console.log(grid[i].join('')); // print the array

let sum = grid.reduce((a, b) => { return a.concat(b) }).reduce(function(a, b) { return a + b }); // flatten array, then sum all values

console.log('Number of lights that are turned on is '+ sum);

console.timeEnd('run-time');