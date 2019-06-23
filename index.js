'use strict';

let n = process.argv[2] ? process.argv[2] : 1;

const Chance = require('chance');
const Sentencer = require('sentencer');

let chance = new Chance();

for (let i = 0; i < n; i++) {
	const prefix = Sentencer.make(`{{ adjective }}`);
	const animal = chance.animal();
	const codename = `${prefix} ${animal}`;

	console.log(codename.toUpperCase());
}
