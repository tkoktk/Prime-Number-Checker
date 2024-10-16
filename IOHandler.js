const readline = require('readline');

class IOHandler {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    askQuestion(question) {
        return new Promise((resolve) => {
            this.rl.question(question, (answer) => {
                resolve(answer);
            });
        });
    }

    print(message) {
        console.log(message);
    }

    displayNumbers(primeNumbersFromCache) {
        if (primeNumbersFromCache.length > 0) {
            const sortedNumbers = primeNumbersFromCache.sort((a, b) => a - b);
            this.print(`Prime numbers: ${sortedNumbers.join(', ')}`);
        } else {
            this.print(`No Prime numbers found`);
        }
    }

    close() {
        this.rl.close();
    }
}

module.exports = IOHandler;
