
// Function Definition

function introduceMe(username, profession, age) {
    // console.log(typeof username);
    // console.log(typeof profession);
    // console.log(typeof age);
    console.log('Hi,');
    console.log(`My name is ${username || 'UserName'}.`);
    console.log(`I am a ${profession}`);
    console.log(`I am ${age} years old.`); 
}

// //                  Function Call
// const returnValue = introduceMe()

console.log(introduceMe('Pranav', 'Software Engineer', 23));  
introduceMe('Pratik', 'Mechanical Engineer', 26)
console.log(introduceMe);

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

const sum = addTwoNumbers(5, 10);
console.log(sum);// Output: 15
console.log(addTwoNumbers(7, 3));// Output: 15

function greet(name) {
    return `Hello, ${name}!`;
}

const greeting = greet('Pranav');
console.log(greeting);
console.log(greet('Pratik'));

function calculateArea(radius) {
    return Math.PI * radius * radius;
}
const area = calculateArea(5);
console.log(area);
console.log(calculateArea(6));

function isEven(number) {
    return number % 2 === 0;
}
const evenCheck = isEven(4);
console.log(evenCheck); // Output: true
console.log(isEven(7)); // Output: false

function findMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
const max = findMax(5, 3);
console.log(max); // Output: 5
console.log(findMax(5, 8));   // Output: 8

function reverseString(str) {
    return str.split('').reverse().join('');
}
const reversed = reverseString('Hello');
console.log(reversed); // Output: 'olleH'
console.log(reverseString('JavaScript')); // Output: 'tpircSavaJ'

function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calculateFactorial(n - 1);
}
const factorial = calculateFactorial(5);
console.log(factorial); // Output: 120
console.log(calculateFactorial(4)); // Output: 24