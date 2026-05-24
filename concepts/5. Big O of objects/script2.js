const user = {
  name: "Pranav",        // Key: name, Value: "Pranav"
  age: 24,             // Key: age, Value: 24
  isStudent: false,    // Key: isStudent, Value: false
  
  // A function inside an object is called a "method"
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};


// Insertion - O(1)
user.lastName = "Mhaske"; // Adding a new property to the object
//{name: "Pranav", age: 24, isStudent: false, lastName: "Mhaske"}

// Removal - O(1)
delete user.isStudent; // Removing a property from the object
//{name: "Pranav", age: 24, lastName: "Mhaske"}

// Searching - O(N)
function hasProperty(obj, prop) {
    for (let key in obj) {
        if (key === prop) {
            return true;
        }
    }
    return false;
}
console.log(hasProperty(user, "name")); // true
console.log(hasProperty(user, "age")); // false

// Access - O(1)
console.log(user.name); // Accessing a property of the object