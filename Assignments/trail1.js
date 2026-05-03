const rows = Number(prompt ("Enter the number of rows for room: ") || "7");
const cols = Number(prompt ("Enter the number of columns for room: ") || "5");

let room = [];

for (let i = 0; i < rows; i++) {
    room[i] = []; // initialize row
    for (let j = 0; j < cols; j++) {
        room[i][j] = "Available";
    }
}

console.log(`Initial seating arrangement for the room: ${JSON.stringify(room)}`);


// var n = prompt ("Enter the row where you want to book seats: ") || "5";

// var m = prompt ("Enter the column of seats you want to book: ") || "3";

// debugger;

// function bookSeats(n, m) {
//     if (n > rows || m > cols) {
//         console.error("Invalid seat coordinates.");
//         return null;
//     }
//     for (let i = 0; i < n; i++) {
//         if (i == n) {
//             for (let j = 0; j < m; j++) {
//                 if (j == m) {
//                     room[i][j] = "Booked";
//                 }
//             }
//         }
//     }
//     return room;    
// }

// const seatingArrangement = bookSeats(n, m);
// console.log(seatingArrangement);