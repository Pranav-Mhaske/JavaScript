const a = prompt("Enter the your height in feet :") || "5";

const b = prompt("Enter the your weight in kg :") || "50";

function calculateBMI(heightInFeet, weightInKg) {
    const heightInMeters = heightInFeet * 0.3048;
    const bmi = weightInKg / (heightInMeters * heightInMeters);
    return `Your BMI is: ${bmi.toFixed(2)}.`;
}

const result = calculateBMI(parseFloat(a), parseFloat(b));
console.log(result);