const a = prompt ("Enter the first number : ") || 5

const b = prompt ("Enter the second number : ") || 7

function swappingOfTwoNumbers(a, b) {
    console.log (`Before swapping : a = ${a} and b = ${b}`)
    let temp = a
    a = b
    b = temp
    console.log (`After swapping : a = ${a} and b = ${b}`)
}
swappingOfTwoNumbers(a, b)