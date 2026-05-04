const rows = Number(prompt ("Enter the number of rows for room: ") || "7") - 1;
const cols = Number(prompt ("Enter the number of columns for room: ") || "5") - 1;

let room = [];

for (let i = 0; i < rows; i++) {
    room[i] = []; // initialize row
    for (let j = 0; j < cols; j++) {
        room[i][j] = "Available";
    }
}

console.log(`Initial seating arrangement for the room: ${JSON.stringify(room)}`);


const n = Number(prompt("Enter the row:") || 5) - 1;
const m = Number(prompt("Enter the column:") || 3) - 1;

function bookSeats(n, m) {
    if (n >= rows || m >= cols || n < 0 || m < 0) {
        console.error("Invalid seat coordinates.");
        return null;
    }

    if (room[n][m] === "Booked") {
        console.log("Seat already booked.");
        return room;
    }

    room[n][m] = "Booked";
    return room;
}

bookSeats(n, m);
// const seatingArrangement = bookSeats(n, m);
// console.log(seatingArrangement);
room.forEach(row => console.log(row.join(" | ")));