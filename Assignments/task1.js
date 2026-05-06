function performOperation(n) {
    if (n < 0) {
        return "Negative number";
    } else if (n == 1) {
        return a + b;
    } else if (n == 2) {
        return a - b;
    } else if (n == 3) {
        return a * b;
    } else if (n == 4) {
        return a / b;
    } else {
        return "Invalid operation";
    }
}

const a = Number(prompt("Enter the first number:"));
const b = Number(prompt("Enter the second number:"));

const operation = Number(prompt("Choose an operation (1: Sum, 2: Difference, 3: Product, 4: Quotient):"));

const result = performOperation(operation);
console.log("Result:", result);