console.log('Program Start')


// for(let i = 0; i <= 10; i++) {
//     if(i % 2 === 0) {
//         console.log(i); 
//     }
// }



const Array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = 0; i < Array1.length; i++) {
    if(Array1[i] % 2 === 0) {
        console.log(Array1[i]); 
    }
}

const Array2 = []

for(let i = 0; i < Array1.length; i++) {
    if(Array1[i] % 2 === 0) {
        Array2.push(Array1[i])
    }
}
console.log(Array2)

console.log('Program Ended')