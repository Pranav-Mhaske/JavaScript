const a = prompt("Enter the amount of liquid in liters:") || "2";

function convertLitersToGallons(liters) {
    const gallons = liters * 0.264172;
    return `The amount of liquid in gallons is: ${gallons.toFixed(2)} gallons.`;
}

const result = convertLitersToGallons(parseFloat(a));
console.log(result);