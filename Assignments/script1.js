const a = prompt("Enter a number to get its factorial : ") || "5";

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

const result = factorial(parseInt(a));
console.log(`Factorial of ${a} is: ${result}`);