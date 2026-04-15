const p = prompt("Enter Principal amount: ") || "10000";

const r = prompt("Enter Rate of interest: ") || "5";

const t = prompt("Enter Time in years: ") || "2";

function calculateSimpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
}

const simpleInterest = calculateSimpleInterest(parseFloat(p), parseFloat(r), parseFloat(t));
console.log(`The simple interest is: $${simpleInterest.toFixed(2)}`);

function calculateTotalAmount(principal, simpleInterest) {
    return principal + simpleInterest;
}

const totalAmount = calculateTotalAmount(parseFloat(p), simpleInterest);
console.log(`The total amount after ${t} years is: $${totalAmount.toFixed(2)}`);

function calculateCompoundInterest(principal, rate, time) {
    return principal * Math.pow((1 + rate / 100), time) - principal;
}

const compoundInterest = calculateCompoundInterest(parseFloat(p), parseFloat(r), parseFloat(t));
console.log(`The compound interest is: $${compoundInterest.toFixed(2)}`);

function calculateTotalAmountWithCompoundInterest(principal, compoundInterest) {
    return principal + compoundInterest;
}

const totalAmountWithCompoundInterest = calculateTotalAmountWithCompoundInterest(parseFloat(p), compoundInterest);
console.log(`The total amount with compound interest after ${t} years is: $${totalAmountWithCompoundInterest.toFixed(2)}`);