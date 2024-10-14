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

    close() {
        this.rl.close();
    }
}

module.exports = IOHandler;
