const a = prompt("Enter any number to check if it is prime or not: ") || "7";

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const result = isPrime(parseInt(a));
if (result) {
    console.log(`${a} is a prime number.`);
} else {
    console.log(`${a} is not a prime number.`);
}
