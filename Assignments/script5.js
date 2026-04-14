const a = prompt("Enter the number of hours you work per day: ") || "8";

const b = prompt("Enter your hourly wage: ") || "500";

function calculateDailyEarnings(hours, wage) {
    return hours * wage;
}

const dailyEarnings = calculateDailyEarnings(parseFloat(a), parseFloat(b));
console.log(`Your daily earnings are: $${dailyEarnings.toFixed(2)}`);

function calculateWeeklyEarnings(dailyEarnings) {
    return dailyEarnings * 5; // Assuming a 5-day workweek
}

const weeklyEarnings = calculateWeeklyEarnings(dailyEarnings);
console.log(`Your weekly earnings are: $${weeklyEarnings.toFixed(2)}`);

function calculateMonthlyEarnings(weeklyEarnings) {
    const c = weeklyEarnings * 4; // Assuming 4 weeks in a month
    return c;
}

const monthlyEarnings = calculateMonthlyEarnings(weeklyEarnings);
console.log(`Your monthly earnings are: $${monthlyEarnings.toFixed(2)}`);

function calculateAnnualEarnings(monthlyEarnings) {
    return monthlyEarnings * 12; // Assuming 12 months in a year
}

const annualEarnings = calculateAnnualEarnings(monthlyEarnings);
console.log(`Your annual earnings are: $${annualEarnings.toFixed(2)}`);

