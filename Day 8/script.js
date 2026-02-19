const userAge = 22

const isSchoolStudent = (userAge >= 5) && (userAge <= 18)
const isCollegeStudent = (userAge >= 18) && (userAge <= 24)

const isStudent = isSchoolStudent || isCollegeStudent

const andResult = 0 && 2
const orResult = 0 || 2

const andResult2 = '' && 'Hello'
const orResult2 = '' || 'Hello'

const andResult3 = 'Hello' && null
const orResult3 = 'Hello' || null

const andResult4 = 'Hello' && -4 + 4
const orResult4 = undefined || 4 + 8 * 5

const andResult5 = 'Hello' && console.log('hello1')
const orResult5 = undefined || console.log('hello2')

console.log('isSchoolStudent:', isSchoolStudent)
console.log('isCollegeStudent:', isCollegeStudent)
console.log('isStudent:', isStudent)

console.log('andResult:', andResult)
console.log('orResult:', orResult)

console.log('andResult2:', andResult2)
console.log('orResult2:', orResult2)

console.log('andResult3:', andResult3)
console.log('orResult3:', orResult3)

console.log('andResult4:', andResult4)
console.log('orResult4:', orResult4)

console.log('andResult5:', andResult5)
console.log('orResult5:', orResult5)    