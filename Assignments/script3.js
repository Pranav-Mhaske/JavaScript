const a = prompt("Enter the radius of the circle: ") || "5";

function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}

const result = areaOfCircle(parseFloat(a));
console.log(`Area of the circle with radius ${a} is: ${result.toFixed(2)}`);    

function circumferenceOfCircle(radius) {
    return 2 * Math.PI * radius;
}

const circumference = circumferenceOfCircle(parseFloat(a));
console.log(`Circumference of the circle with radius ${a} is: ${circumference.toFixed(2)}`);
