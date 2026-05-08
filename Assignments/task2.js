n = prompt = Number(prompt("Which conversion you want to check? (1: bit to byte, 2: byte to bit, 3: kilobyte to megabyte, 4: megabyte to kilobyte)") || 0);

function performConversion(n) {
    if (n == 1) {
        return "1 bit = 0.125 byte";
    } else if (n == 2) {
        return "1 byte = 8 bits";
    } else if (n == 3) {
        return "1 kilobyte = 0.001 megabyte";
    } else if (n == 4) {
        return "1 megabyte = 1000 kilobytes";
    } else {
        return "Invalid conversion choice";
    }
}

const result = performConversion(n);
console.log("Result:", result);