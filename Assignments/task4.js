const a = Number(prompt("Enter Year of your birth:") || 2000);
const b = Number(prompt("Enter the Month of your birth:") || 6);
const c = Number(prompt("Enter the Day of your birth:") || 1);

function calculateAge(a, b, c) {
    const today = new Date();
    const birthDate = new Date(a, b - 1, c);

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDifference =
        today.getMonth() - birthDate.getMonth();

    if (
        monthDifference < 0 ||
        (monthDifference === 0 &&
         today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
}

const age = calculateAge(a, b, c);

console.log(`Your age is: ${age} years`);