function iterativeBinarySearch(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
        // Prevent potential overflow and find the middle index
        let mid = Math.floor(left + (right - left) / 2);

        // Check if the target is present at mid
        if (sortedArray[mid] === target) {
            return mid; 
        }

        // If target is smaller, ignore the right half
        if (sortedArray[mid] > target) {
            right = mid - 1;
        } 
        // If target is larger, ignore the left half
        else {
            left = mid + 1;
        }
    }

    // Target element was not present in the array
    return -1;
}

// Example usage:
const numbers = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.log(iterativeBinarySearch(numbers, 23)); // Output: 5
console.log(iterativeBinarySearch(numbers, 10)); // Output: -1
