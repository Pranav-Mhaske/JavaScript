const username = 'Pranav' // global scope
let userAge = 25 //global scope
var a = 50 // global scope

function add() {
  debugger
  const username = 'Manav'//block scope
  const x = 5 //block scope
  const y = 8 // block scope
  console.log(x + y)
  console.log(username)
}

function subtract() {
  const x = 15 // block scope
  const y = 18// block scope
  console.log(x - y)
  console.log(username) // User name is not defined over her so it took globaly defined value
}

add()
subtract()

console.log('Program Ended')