const fs = require('fs');

//I decided to use a JSON for the cache for speedy read/write

class JSONHandler {
    constructor(filePath) {
        this.filePath = filePath;
    }

    read() {
        if (fs.existsSync(this.filePath)) {
            const data = fs.readFileSync(this.filePath, 'utf-8');
            const primeNumbersJSON = JSON.parse(data);
            return primeNumbersJSON.primes;
        }
        console.warn("Warning - json file not found: " + this.filePath);
        return {}; //Return empty if json doesn't exist, can try to check using algorithm in this scenario
    }

    write(data) {
        fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    }
}

module.exports = JSONHandler;
