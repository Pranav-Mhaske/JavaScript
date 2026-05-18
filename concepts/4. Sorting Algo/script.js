const input = prompt("Enter the array elements separated by commas:");
const array = input.split(",").map(Number);

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index of the target element
    }
  }
  return -1; // Return -1 if the target element is not found
}

// Example usage:
const targetElement = 1;
const result = linearSearch(array, targetElement);

if (result !== -1) {
  console.log(`Element found at index: ${result}`);
} else {
  console.log("Element not found in the array.");
}