const path = require('path');
const JSONHandler = require('./jsonHandler');
const InputChecker = require('./inputChecker');

//Use env variables to facilitate deployment in different envs
const filePath = process.env.PRIME_CACHE_PATH || path.join(__dirname, 'jsons/primeNumbers.json');
const jsonHandler = new JSONHandler(filePath);

const primeNumbersCache = jsonHandler.read();
const inputChecker = new InputChecker();

//inputChecker.checkInput('12321');



console.log('Prime Cache: ', primeNumbersCache);