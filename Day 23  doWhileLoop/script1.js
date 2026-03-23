console.log('Program Start')

const Array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let i = 0
do {
    console.log(Array1[i]); 
    i++
} while (i < Array1.length)

console.log('Program Ended')

const Array2 = []

let j = 0
do {
    if(Array1[j] % 2 === 0) {
        Array2.push(Array1[j])
    }
    j++
} while (j < Array1.length)

console.log(Array2)