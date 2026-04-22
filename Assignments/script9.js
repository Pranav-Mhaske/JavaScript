const a = prompt ("Enter the distance traveled in kilometers: ") || "100";

const b = prompt ("Enter the time taken in hours: ") || "2";

function calculateSpeed(distance, time) {
    if (time <= 0) {
        return "Time must be greater than zero.";
    }
    const speed = distance / time;
    return `The speed is ${speed} km/h.`;
}

const result = calculateSpeed(parseFloat(a), parseFloat(b));
console.log(result);


const c = prompt ("Enter the distance traveled in miles: ") || "70";

const d = prompt ("Enter the time taken in hours: ") || "2";

function calculateSpeedMiles(distance, time) {
    if (time <= 0) {
        return "Time must be greater than zero.";
    }
    const speed = distance / time;
    return `The speed is ${speed} mph.`;
}

const resultMiles = calculateSpeedMiles(parseFloat(c), parseFloat(d));
console.log(resultMiles);
