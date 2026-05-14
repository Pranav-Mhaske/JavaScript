function addTillN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(addTillN(5)); // Output: 15
// The time complexity of this function is Ω(n) because it iterates through all numbers from 1 to n once.

function addTillNOptimized(n) {
    return (n * (n + 1)) / 2;
}

console.log(addTillNOptimized(5)); // Output: 15
// The time complexity of this optimized function is Ω(1) because it uses a constant number of operations regardless of the input size n.

function printPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(`(${arr[i]}, ${arr[j]})`);
        }
    }
}

printPairs([1, 2, 3]);
// The time complexity of this function is Ω(n^2) because it uses nested loops that iterate through the array.
