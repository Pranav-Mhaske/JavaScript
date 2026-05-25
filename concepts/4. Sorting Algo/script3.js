const stack = [10, 20, 30, 40, 50]; // 50 is at the 'top'
const target = 30;

function linearSearchStack(stack, target) {
    // Iterate from top (end of array) to bottom (start of array)
    for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i] === target) {
            return i; // Returns the index of the found element
        }
    }
    return -1; // Return -1 if not found
}

const result = linearSearchStack(stack, target);
console.log(result !== -1 ? `Found at index ${result}` : "Not found");
