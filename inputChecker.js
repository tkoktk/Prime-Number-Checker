class InputChecker {
    constructor(primeCache) {
        this.primeCache = primeCache;
        this.foundPrimeNumbers = [];
    }
    isPrime(input) {

        if (input <= 1) return false;
        if (input === 2) return true; //2 is the only even prime number
        if (input % 2 === 0) return false;

        /*
        To make the prime checking algorithm faster than just manually checking every possible factor
        We increment through only the odd numbers
        In Number theory, checking beyond the square root is redundant, because
        every factor > than the square root already has a corresponding smaller factor below it
         */

        for (let i = 3; i <= Math.sqrt(input); i += 2) {
            if (input % i === 0) return false;
        }
        return true;
    }

    //Thought this is the most convenient way to check for letters, spaces and special symbols all in one
    isSpaceOrNaN(input){
        if (input.includes(' ')) return true;
        return isNaN(input);
    }

    checkInput(input){
        //Validate input - should contain no spaces/symbols/letters
        if (this.isSpaceOrNaN(input)) {
            console.log("Invalid input - try again")
        } else {
            this.searchInputforPrimes(input);
        }
    }

    searchInputforPrimes(input){
        for (let start = 0; start < input.length; start++) {
            for (let end = start + 1; end <= input.length; end++) {
                const slice = input.slice(start, end);

                //Check cache first for speed
                if (this.isInCache(slice) || this.isPrime(slice)) {
                    this.addNumberToFoundCache(slice);
                }
            }
        }
    }

    addNumberToFoundCache(number) {
        //Avoids duplication
        if (!this.isInCache(number) && !this.isInFoundNumbers(number)) {
            this.foundPrimeNumbers.push(number);
        }
    }

    isInCache(number) {
        return this.primeCache.includes(number);
    }

    isInFoundNumbers(number) {
        return this.foundPrimeNumbers.includes(number);
    }

    getPrimeNumbersCache() {
        return this.primeCache;
    }

    getFoundPrimeNumbers() {
        return this.foundPrimeNumbers;
    }

    buildPrimeCacheJSON() {
        //Using a set to avoid duplication while ensuring that the values are numbers
        const primeNumbersArray = Array.from(new Set([
            ...this.primeCache.map(Number),
            ...this.foundPrimeNumbers.map(Number)
        ]));

        const sortedPrimeNumbersArray = primeNumbersArray.sort((a, b) => a - b);
        const primeNumbersObject  = {
            primes: sortedPrimeNumbersArray,
        }

        return primeNumbersObject;
    }
}

module.exports = InputChecker;