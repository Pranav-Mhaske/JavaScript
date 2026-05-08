n = prompt = Number(prompt("Which conversion you want to check? (1: bit to byte, 2: byte to kilobyte, 3: kilobyte to megabyte, 4: megabyte to gigabyte, 5: gigabyte to terabyte)") || 0);

function performConversion(n) {
    if (n == 1) {
        return "1 byte = 8 bits";
    } else if (n == 2) {
        return "1 kilobyte = 1024 bytes";
    } else if (n == 3) {
        return "1 megabyte = 1024 kilobytes";
    } else if (n == 4) {
        return "1 gigabyte = 1024 megabytes";
    } else if (n == 5) {
        return "1 terabyte = 1024 gigabytes";
    } else {
        return "Invalid conversion choice";
    }
}

const result = performConversion(n);
console.log("Result:", result);