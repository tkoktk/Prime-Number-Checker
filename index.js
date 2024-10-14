const path = require('path');
const JSONHandler = require('./jsonHandler');
const InputChecker = require('./inputChecker');
const IOHandler = require('./IOHandler');

console.log('Welcome to PrimeChecker!')

//Use env variables to facilitate deployment in different envs
const filePath = process.env.PRIME_CACHE_PATH || path.join(__dirname, 'jsons/primeNumbers.json');
const jsonHandler = new JSONHandler(filePath);

const primeNumbersCache = jsonHandler.read();
console.log('Current Prime Cache: ', primeNumbersCache);

const ioHandler = new IOHandler();
const inputChecker = new InputChecker();

async function getInputFromUser() {
    const usernameInput = await ioHandler.askQuestion('\nEnter your username: ');
    let looping = true;

    while (looping) {
        const numberInput = await ioHandler.askQuestion('\nEnter any numeric sequence: ');

        // Calculations go here
        ioHandler.print(`You entered: ${numberInput}`);

        //Validate input
        if (inputChecker.isSpaceOrNaN(numberInput)) {

        } else {
            inputChecker.checkInput(numberInput);
            ioHandler.displayNumbers(inputChecker.getPrimeNumbersCache());
        }

        const nextAction = await ioHandler.askQuestion('Would you like to check another number? \nType "exit" to quit or press "enter" to continue: ');

        if (nextAction.toLowerCase() === 'exit') {
            looping = false;
        }
    }
    ioHandler.close();
}

getInputFromUser();



