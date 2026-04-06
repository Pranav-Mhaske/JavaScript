prompt("Enter the number till which want to get the sum of natural numbers: ") || "10";

function sumOfNaturalNumbers(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

const result = sumOfNaturalNumbers(parseInt(a));
console.log(`Sum of natural numbers till ${a} is: ${result}`);