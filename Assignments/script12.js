const a = prompt (" Enter Temperature in Degree Celcius : ") || 25

function convertTemperature(a) {
    let fahrenheit = (a * 9/5) + 32
    console.log (`Temperature in Degree Celcius : ${a}°C`)
    console.log (`Temperature in Degree Fahrenheit : ${fahrenheit}°F`)
}
convertTemperature(a)