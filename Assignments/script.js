const n = parseInt(prompt("Fibonacci Series till number: ") || "10");

function fibonacci(num) {
  let a = 0, b = 1, next;
  while (a <= num) {
    console.log(a);
    next = a + b;
    a = b;
    b = next;
  }
}

fibonacci(n);