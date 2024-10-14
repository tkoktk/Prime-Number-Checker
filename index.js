const path = require('path');
const InputChecker = require('./inputChecker');
const JSONHandler = require('./jsonHandler');

const inputChecker = new InputChecker();

const jsonHandler = new JSONHandler(path.join(__dirname, 'jsons/primeNumbers.json'));

const primeNumbersCache = jsonHandler.read();

inputChecker.checkInput('12321');