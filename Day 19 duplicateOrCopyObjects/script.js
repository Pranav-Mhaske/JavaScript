// const username1 = 'Anurag'
// let username2 = username1
// username2 = username2 + ' Singh'



// const myFruits = fruits

// myFruits.push('Dates')
// myFruits.push('Grapes')

// Object.assign(myFruits, fruits)

const fruits = ['Mango', 'Apple', 'Orange']

const myFruits = [...fruits] // spread operator

myFruits.push('Dates')
myFruits.push('Grapes')

console.log(fruits) // ['Mango', 'Apple', 'Orange']
console.log(myFruits) // ['Mango', 'Apple', 'Orange', 'Dates', 'Grapes']

//object assignment and spread operator works only for shallow copy, if there are nested objects or arrays, they will be shared between the original and the copy.

// const myFruits = [].concat(fruits)
// const myFruits = fruits.slice()

const user1 = {
  firstName: 'Pranav',
  lastName: 'Mhaske',
  pata: {
    city: 'Pune',
    pincode: 411038,
  },
  subject: ['Physics', 'CS', 'Maths']
}

console.log(user1) // { firstName: 'Pranav', lastName: 'Mhaske', pata: { city: 'Pune', pincode: 411038 }, subject: ['Physics', 'CS', 'Maths'] }

// Shallow Copy

// const user2 = {}
// Object.assign(user2, user1)
const user2 = { ...user1 }
console.log(user2) // { firstName: 'Pranav', lastName: 'Mhaske', pata: { city: 'Pune', pincode: 411038 }, subject: ['Physics', 'CS', 'Maths'] }

user2.firstName = 'Pratik'
user2.pata.city = 'Bangalore'
user2.subject.push('English')

// objects insude objects and arrays are reference types, so they will be shared between user1 and user2
console.log(user1) // { firstName: 'Pranav', lastName: 'Mhaske', pata: { city: 'Bangalore', pincode: 411038 }, subject: ['Physics', 'CS', 'Maths', 'English'] }
console.log(user2) // { firstName: 'Pratik', lastName: 'Mhaske', pata: { city: 'Bangalore', pincode: 411038 }, subject: ['Physics', 'CS', 'Maths', 'English'] }
// Shallow copy works only for 1 layer of the object, if there are nested objects or arrays, they will be shared between the original and the copy.