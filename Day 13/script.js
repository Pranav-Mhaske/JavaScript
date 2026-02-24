const firstName = 'Pranav'
const lastName = 'Mhaske'
const userAge = 23
const birthYear = 2003
const isGraduate = true
const hasJob = true
const isEarningGood = false

const userMessage = `My name is ${firstName} ${lastName}. I am ${userAge} years old. I was born in ${birthYear}. It is ${isGraduate ? '' : 'not'} that I am a graduate. It is ${hasJob ? '' : 'not'} that I have a job.`

console.log(userMessage)

// // To see address go inside Memory tab of devtools
// If you want to see the value of a variable, you can hover over it in the code or check the console.
// Include numerical values if want to see address of nubers too
// Take snapshot
// Search with value of any variable to see its address in the snapshot
// Find it and then get its context address presnt in the retainers section
// Then search for that address in the snapshot to see all the variables in it. 
// This will help you understand how memory is being used in your code.
// If same value is used in multiple variables, they will all point to the same address in memory, which is an optimization technique used by JavaScript.
// But if you change the value of one variable, it will not affect the other variables that point to the same address, because they are referencing the same value in memory not the new changed one.
// If while creating a variable you created them differently they can have different addresses in memory even if they have the same value. 
// For example, 
const name1 = 'Pranav'
const name2 = 'Pra' + 'nav' 
const isEqual = (name1 === name2) // true, because both variables have the same value
console.log(isEqual) // true
// But if we check their addresses in memory, they will be different because they were created differently.

