'use strict';

let fs = require('fs');
let path = require('path');
let input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'UTF8');

let v = false; // verbose output
let visited = { '{"x":0,"y":0}': 2 }; // starting address, visited twice
let coords = {
	'santa': { 'x': 0, 'y': 0 },
	'robo-santa': { 'x': 0, 'y': 0 }
}; // starting coordinates


for (let i = 0; i < input.length; i++) {
	let who = (i % 2 == 0) ? 'santa' : 'robo-santa'; // even instr. for santa, odd instr. for robo
	switch (input[i]) {
		case '^': // north
			coords[who].y++;
			break;
		case 'v': // south
			coords[who].y--;
			break;
		case '>': // east
			coords[who].x++;
			break;
		case '<': // west
			coords[who].x--;
			break;
		default:
			console.log('Skipped unexpected instruction '+ input[i]);
	}
	if (v) console.log('Sending '+ who +' towards '+ input[i] +' to grid '+ JSON.stringify(coords[who]));
	(visited[JSON.stringify(coords[who])]) ? visited[JSON.stringify(coords[who])]++ : visited[JSON.stringify(coords[who])] = 1; // track presents to this address
}

console.log('Santa and robo-santa combined visited '+ Object.keys(visited).length +' houses');