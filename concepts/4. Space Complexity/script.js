function addTillN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(addTillN(5)); // Output: 15
// The space complexity of this function is O(1) because it only uses a constant amount of extra space regardless of the input size.

function addTillNOptimized(n) {
    return (n * (n + 1)) / 2;
}

console.log(addTillNOptimized(5)); // Output: 15
// The space complexity of this optimized function is O(1) because it uses a constant number of operations regardless of the input size n.

function printPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(`(${arr[i]}, ${arr[j]})`);
        }
    }
}

printPairs([1, 2, 3]);
// The space complexity is O(1) because it only uses a constant amount of extra space regardless of the input size.

function create2DArray(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(new Array(n).fill(0));
    }
    return arr;
}

console.log(create2DArray(3));
// The space complexity of this function is O(n^2) because it creates a 2D array of size n x n, which requires space proportional to the square of the input size.  

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // Output: 5
// The space complexity of this function is O(n) because the maximum depth of the recursion is n, which means that at most n function calls will be on the call stack at any given time.

function generatePermutations(arr) {
    if (arr.length === 0) {
        return [[]];
    }
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        const permutations = generatePermutations(remaining);
        for (const permutation of permutations) {
            result.push([current].concat(permutation));
        }
    }
    return result;
}

console.log(generatePermutations([1, 2, 3]));
// The space complexity of this function is O(n!) because it generates all permutations of the input array, which results in n! different arrangements, and each arrangement requires space to store.

