function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    // Check if current element matches the target
    if (arr[i] === target) {
      return i; // Return the index if found
    }
  }
  return -1; // Return -1 if the target is not in the array
}

// Example usage:
const numbers = [10, 5, 8, 13, 2];
console.log(linearSearch(numbers, 13)); // Output: 3
console.log(linearSearch(numbers, 7));  // Output: -1