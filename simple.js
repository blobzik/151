function isPrime(num) {
    for (let i = 2; i < 8; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
}

function printPrimes(min, max) {
    for (let i = min; i <= max; i++) {
        if (isPrime(i)) console.log(i);
    }
}

let a = 25
let b = 63

printPrimes(a, b);
