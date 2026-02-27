const username = 'Pranav'

const carsCollection = ['Alto', 'Amaze', 'Breeza', 'Nexon']

const newObject = {} // Object literal
const newArray = [] // Array literal

console.log(carsCollection) // ['Alto', 'Amaze', 'Breeza', 'Nexon']
// Accessing elements in an array
console.log(carsCollection[0]) // Alto
console.log(carsCollection[1]) // Amaze
console.log(carsCollection[2]) // Breeza
console.log(carsCollection[3]) // Nexon

// Modifying elements in an array
carsCollection[0] = 'Swift'
console.log(carsCollection) // ['Swift', 'Amaze', 'Breeza', 'Nexon']

// Adding new elements to an array
carsCollection.push('i20')
console.log(carsCollection) // ['Swift', 'Amaze', 'Breeza', 'Nexon', 'i20']

// Removing the last element from an array
carsCollection.pop()
console.log(carsCollection) // ['Swift', 'Amaze', 'Breeza', 'Nexon']

// Length of the array
console.log(carsCollection.length) // 4

// Iterating over an array
for (let i = 0; i < carsCollection.length; i++) {
    console.log(carsCollection[i])
}

// Using forEach to iterate over an array
// carsCollection.forEach(car => {
//     console.log(car)
// })