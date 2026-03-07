
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
