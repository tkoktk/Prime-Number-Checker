class InputChecker {
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

    isSpaceOrNaN(input){
        if (input.includes(' ')) return true;
        return isNaN(input);
    }

    checkInput(input){
        if (this.isSpaceOrNaN(input)) {
            console.log(`Yes`);
        } else {
            console.log('No');
        }
    }
}

module.exports = InputChecker;