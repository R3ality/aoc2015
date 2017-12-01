'use strict';

let fs = require('fs');
let path = require('path');
let input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'UTF8');

let v = false; // verbose output
let visited = { '{"x":0,"y":0}': 1 }; // starting address, visited once
let coords = { 'x': 0, 'y': 0 }; // starting coordinates

for (let i = 0; i < input.length; i++) {
	switch (input[i]) {
		case '^': // north
			coords.y++;
			break;
		case 'v': // south
			coords.y--;
			break;
		case '>': // east
			coords.x++;
			break;
		case '<': // west
			coords.x--;
			break;
		default:
			console.log('Skipped unexpected instruction '+ input[i]);
	}
	if (v) console.log('Heading '+ input[i] +' to grid '+ coords);
	(visited[JSON.stringify(coords)]) ? visited[JSON.stringify(coords)]++ : visited[JSON.stringify(coords)] = 1; // track presents to this address
}

console.log('Santa visited '+ Object.keys(visited).length +' houses');
