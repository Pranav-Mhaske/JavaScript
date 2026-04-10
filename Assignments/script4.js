const a = promt("Enter your name: ") || "User";

const b = prompt("Enter your age") || "21";

function greet(name) {
    return `Hello, ${name}! Welcome to the world of JavaScript.`;
}

const greetingMessage = greet(a);
console.log(greetingMessage);

function canVote(age) {
    return age >= 18 ? "You are eligible to vote." : "You are not eligible to vote.";
}

const votingEligibility = canVote(parseInt(b));
console.log(votingEligibility);