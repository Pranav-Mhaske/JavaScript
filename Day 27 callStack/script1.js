// function introduceMe() {
//     console.log('Hi, My name is Pranav.');
//     introduceMe()
// }

// introduceMe() // This will cause a stack overflow error because the function calls itself indefinitely without a base case to stop the recursion.   

function sayHi() {
    console.log('Hi there!');       
    add(7, 9)
}

function add(x, y) {
    console.log('Adding two numbers...');   
    kuchhBhi()
    return x + y
}

function kuchhBhi() {
    console.log('Kuchh bhi');
}

sayHi()



console.log('Program Ended');