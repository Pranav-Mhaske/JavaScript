const a = prompt("Enter distance in kilometers:") || "100";

const b = prompt("Enter fuel consumed in liters:") || "5";

function calculateFuelEfficiency(distance, fuel) {
    if (fuel <= 0) {
        return "Fuel consumed must be greater than zero.";
    }
    const efficiency = distance / fuel;
    return `Average fuel consumption is ${efficiency} km/l.`;
}

const result = calculateFuelEfficiency(parseFloat(a), parseFloat(b));
console.log(result);