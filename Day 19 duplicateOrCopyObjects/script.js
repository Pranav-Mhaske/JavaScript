// const username1 = 'Anurag'
// let username2 = username1
// username2 = username2 + ' Singh'

const fruits = ['Mango', 'Apple', 'Orange']

// const myFruits = fruits

// myFruits.push('Dates')
// myFruits.push('Grapes')

// Object.assign(myFruits, fruits)
const myFruits = [...fruits]
console.log(fruits) // ['Mango', 'Apple', 'Orange']
console.log(myFruits) // ['Mango', 'Apple', 'Orange']

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
user2.pata.city = 'Pune'
user2.subject.push('English')

console.log(user1) // { firstName: 'Pranav', lastName: 'Mhaske', pata: { city: 'Pune', pincode: 411038 }, subject: ['Physics', 'CS', 'Maths', 'English'] }
console.log(user2) // { firstName: 'Pratik', lastName: 'Mhaske', pata: { city: 'Pune', pincode: 411038 }, subject: ['Physics', 'CS', 'Maths', 'English'] }