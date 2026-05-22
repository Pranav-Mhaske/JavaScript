let Instructor = {
 firstName: "Pranav",
 isInstructor: true,
 favoriteNumbers: [1,2,3,4]
}

// Insertion - O(1)
Instructor.lastName = "Mhaske"; // Adding a new property to the object
//{firstName: "Pranav", isInstructor: true, favoriteNumbers: [1, 2, 3, 4], lastName: "Mhaske"}

// Removal - O(1)
delete Instructor.isInstructor; // Removing a property from the object
//{firstName: "Pranav", favoriteNumbers: [1, 2, 3, 4], lastName: "Mhaske"}

// Searching - O(N)
function hasProperty(obj, prop) {
    for (let key in obj) {
        if (key === prop) {
            return true;
        }
    }
    return false;
}
console.log(hasProperty(Instructor, "firstName")); // true
console.log(hasProperty(Instructor, "age")); // false

// Access - O(1)
console.log(Instructor.firstName); // Accessing a property of the object