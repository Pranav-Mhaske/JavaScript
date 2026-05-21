
// Example using performance.now()
const input = prompt("Enter the input for the function: " || "5");

const start = performance.now();
// Your algorithm or function here
myFunction(input);

const end = performance.now();
console.log(`Execution time: ${end - start} ms`);

// Example using console.time() and console.timeEnd()

console.time('myFunction');
// Your algorithm or function here
myFunction(input);
console.timeEnd('myFunction');

// Example using Date.now()

const start1 = Date.now();
// Your algorithm or function here
myFunction(input);

const end1 = Date.now();
console.log(`Execution time: ${end1 - start1} ms`);

// Example using process.hrtime() (Node.js)

const start2 = process.hrtime();
// Your algorithm or function here
myFunction(input);

const end2 = process.hrtime(start2);
console.log(`Execution time: ${end2[0]}s ${end2[1] / 1000000}ms`);    


function myFunction(input) {
    input = Number(input);
    // Simulating a time-consuming task
    for (let i = 0; i < 100; i++) {
        // Some operation
        Math.random();
    }
}

