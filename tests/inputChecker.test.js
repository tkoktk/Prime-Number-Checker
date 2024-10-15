const InputChecker = require("../inputChecker");

describe('Testing InputChecker Method: isPrime', () => {
    let testInputChecker;

    beforeEach(() => {
        testInputChecker = new InputChecker();
    });

    test('returns true for prime numbers', () => {
        expect(testInputChecker.isPrime(2)).toBe(true);
        expect(testInputChecker.isPrime(5)).toBe(true);
        expect(testInputChecker.isPrime(13)).toBe(true);
    });

    test('returns false for non-prime numbers', () => {
        expect(testInputChecker.isPrime(4)).toBe(false);
        expect(testInputChecker.isPrime(9)).toBe(false);
    });

    test('handles negative numbers and zero', () => {
        expect(testInputChecker.isPrime(-3)).toBe(false);
        expect(testInputChecker.isPrime(0)).toBe(false);
    });
});

describe('Testing InputChecker Method: isPrime', () => {
    let testInputChecker;

    beforeEach(() => {
        testInputChecker = new InputChecker();
    });

    test('logs "Invalid input - try again" when input is a letter, a space or a symbol', () => {
        const consoleSpy = jest.spyOn(console, 'log');

        testInputChecker.checkInput('a')
        expect(consoleSpy).toHaveBeenCalledWith("Invalid input - try again");

        testInputChecker.checkInput(' ')
        expect(consoleSpy).toHaveBeenCalledWith("Invalid input - try again");

        testInputChecker.checkInput('£')
        expect(consoleSpy).toHaveBeenCalledWith("Invalid input - try again");

        consoleSpy.mockRestore(); // Restore the console.log function
    });
});

describe('InputChecker searchInputforPrimes Method', () => {
    let testInputChecker;

    beforeEach(() => {
        testInputChecker = new InputChecker();
    });

    test('calls isPrime on every potential input slice', () => {
        const isPrimeSpy = jest.spyOn(testInputChecker, 'isPrime');
        testInputChecker.searchInputforPrimes('123');

        expect(isPrimeSpy).toHaveBeenCalledWith('1');
        expect(isPrimeSpy).toHaveBeenCalledWith('12');
        expect(isPrimeSpy).toHaveBeenCalledWith('123');
        expect(isPrimeSpy).toHaveBeenCalledWith('2');
        expect(isPrimeSpy).toHaveBeenCalledWith('23');
        expect(isPrimeSpy).toHaveBeenCalledWith('3');

        isPrimeSpy.mockRestore();
    });

    test('sucessfully adds prime numbers to foundPrimeNumbers array', () => {
        testInputChecker.searchInputforPrimes('113');

        expect(testInputChecker.getFoundPrimeNumbers()).toEqual(['11', '113', '13', '3']);
    });

    test('non-prime numbers are not added to foundPrimeNumbers array', () => {
        testInputChecker.searchInputforPrimes('44');
        //No primes, so the array should be empty
        expect(testInputChecker.getFoundPrimeNumbers()).toEqual([]);
    });
});

