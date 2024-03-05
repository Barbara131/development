/** @format */

// var generateName = require('sillyname');

// 1. Generating random names from sillyname package
// ECMASCRIPT MODULE(ECM) INSTEAD OF THE ABOVE COMMONJS(CJS)

// import generateName from 'sillyname';
// var sillyName = generateName();

// console.log(`My Nick name is ${sillyName}.`);

// 2. Generating random superhero name from Superheroes packages
// const superheroes = require('superheroes');

import superheroes from 'superheroes';

const name = superheroes.random();
//=> 'Spider-Ham'

console.log(`I am ${name}!`);
