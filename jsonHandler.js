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
        console.warn("Warning - json file not found: ", this.filePath);
        return {}; //Return empty if json doesn't exist, app will rely solely on the algorithm instead
    }

    writePrimeCacheToFile(primeCache) {
        if (primeCache.length > 0) {
            const primeCacheJSON = JSON.stringify(primeCache, null, 2);
            fs.writeFileSync(this.filePath, primeCacheJSON, 'utf8');
        }
    }
}

module.exports = JSONHandler;
