const evenNumbers = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]
const animals = ['Dog', 'Cat', 'Rat', 'Lion', 'Elephant', 'Cow', 'Tiger']
const oddNumber = [1, 3, 5]

// evenNumbers.shift() // The shift() method removes the first element from an array and returns that removed element. In this case, it will remove 0 from the evenNumbers array, and the array will be updated to [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24].
// evenNumbers.unshift(0) // The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. In this case, it will add 0 back to the beginning of the evenNumbers array, and the array will be updated to [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24].

const addedArray1 = evenNumbers.concat(animals) // The concat() method is used to merge two or more arrays. It does not change the existing arrays, but instead returns a new array. In this case, addedArray1 will contain all the elements of evenNumbers followed by all the elements of animals, while addedArray2 will contain all the elements of animals followed by all the elements of evenNumbers and oddNumber.
const addedArray2 = animals.concat(evenNumbers, oddNumber) // The concat() method is used to merge two or more arrays. It does not change the existing arrays, but instead returns a new array. In this case, addedArray1 will contain all the elements of evenNumbers followed by all the elements of animals, while addedArray2 will contain all the elements of animals followed by all the elements of evenNumbers and oddNumber.

const elementIndex = animals.indexOf('Cat') // indexOf returns the index of the first occurrence of the specified element in the array, or -1 if it is not found. In this case, 'Cat' is found at index 1 in the animals array, so elementIndex will be 1.
const isIncluded = animals.includes('dog') // false because 'dog' is not the same as 'Dog' (case-sensitive)

animals.slice(5) // ['Cow', 'Tiger']
animals.slice(2, 5) // ['Rat', 'Lion', 'Elephant']

animals.slice(-3) // ['Elephant', 'Cow', 'Tiger']

console.log(addedArray1) // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 'Dog', 'Cat', 'Rat', 'Lion', 'Elephant', 'Cow', 'Tiger']
console.log(addedArray2) // ['Dog', 'Cat', 'Rat', 'Lion', 'Elephant', 'Cow', 'Tiger', 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 1, 3, 5]
console.log(elementIndex) // 1
console.log(isIncluded) // false    