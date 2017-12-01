'use strict';

let crypto = require('crypto');

let input = 'ckczppom';
//input = 'abcdef' // test input, expecting 609043

for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
	let hash = crypto.createHash('md5').update(input+i).digest("hex");
	if (hash.startsWith('00000')) {
		console.log('Found hash matching the criteria ('+ hash +') at iteration '+ i);
		break;
	}
}
