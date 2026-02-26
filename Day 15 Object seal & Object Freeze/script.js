let username = 'Pranav'

const user = {
  firstName: 'Manav',
  lastName: 'Jadhav',
  pata: {
    city: 'Pune',
    pinCode: 411065,
    state: 'Maharashtra',
    moreDetails: {
      population: 9798897897,
      area: '7657 km',
    },
  },
  age: 24,
  isGraduate: true,
  isEngaged: false,
}

// Object.seal(user)
Object.freeze(user)

console.log('isGraduate' in user);
console.log('isEngaged' in user);
console.log(user.isGraduate);
console.log(user['isEngaged']);