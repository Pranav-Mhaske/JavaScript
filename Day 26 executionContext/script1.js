console.log('Program Started');
sayHi()

const Array1 = [1, 2, 3, 4, 5]
const Array2 = [6, 7, 8, 9, 10]

const combinedArray = [...Array1, ...Array2]

console.log(combinedArray);

function introduceMe(name, occupation, age) {
    console.log(`Hello, I am ${name}, a ${occupation} and I am ${age} years old.`);
}

const name = 'Pranav'
const occupation = 'Software Developer'
const age = 23

introduceMe(name, occupation, age)

executionContext()

function executionContext() {
    const a = 10
    const b = 20
    const sum = a + b
    console.log(`The sum of ${a} and ${b} is ${sum}`);
} 

console.log('Program Ended');
