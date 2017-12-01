'use strict';

let crypto = require('crypto');

let input = 'ckczppom';
//input = 'abcdef' // test input, expecting 609043

for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
	let hash = crypto.createHash('md5').update(input+i).digest("hex");
	//if (hash.match('^000000.*')) { // 11.1s
	//if (hash.substring(0, 6) === '000000') { // 8.8s
	//if (hash.slice(0, 6) === '000000') { // 8.7s
	if (hash.startsWith('000000')) { // 8.8s, not the fastest but difference in this application is too small to matter
		console.log('Found hash matching the criteria ('+ hash +') at iteration '+ i);
		break;
	}
}
