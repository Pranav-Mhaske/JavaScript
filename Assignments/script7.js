const a = prompt("Enter the length of quadrilateral: ") || "5";

const b = prompt("Enter the breadth of quadrilateral: ") || "3";

function calculateArea(length, breadth) {
    return length * breadth;
}

const area = calculateArea(parseFloat(a), parseFloat(b));
console.log(`The area of the quadrilateral is: ${area.toFixed(2)}`);

function calculatePerimeter(length, breadth) {
    return 2 * (length + breadth);
}

const perimeter = calculatePerimeter(parseFloat(a), parseFloat(b));
console.log(`The perimeter of the quadrilateral is: ${perimeter.toFixed(2)}`);

function calculateDiagonal(length, breadth) {
    return Math.sqrt(length * length + breadth * breadth);
}

const diagonal = calculateDiagonal(parseFloat(a), parseFloat(b));
console.log(`The diagonal of the quadrilateral is: ${diagonal.toFixed(2)}`);