/* <li>+= Addition Assignment Operator.</li>
  <li>-= Subtraction Assignment Operator.</li>
  <li>%= Remainder Assignment Operator.</li>
  <li>*= Multiplication Assignment Operator.</li>
  <li>/= Division Assignment Operator.</li>
  <li>**= Exponentiation Assignment Operator.</li> */

let a = 50;
a += 10; // a = a + 10
console.log(a); // 60

let b = 100;
b -= 20; // b = b - 20
console.log(b); // 80

let c = 15;
c *= 2; // c = c * 2
console.log(c); // 30

let d = 50;
d /= 5; // d = d / 5
console.log(d); // 10

let e = 10;
e **= 3; // e = e ** 3
console.log(e); // 1000

let f = 25;
f %= 4; // f = f % 4
console.log(f); // 1

// Increment and Decrement Operators:

let g = 5;
g++; // g = g + 1
console.log(g); // 6

let h = 10;
h--; // h = h - 1
console.log(h); // 9

let i = 3;
++i + i++; // Pre-increment and post-increment
console.log(i); // 5

// Pre-increment (++i) increments i before using it, while post-increment (i++) uses the current value of i and then increments it. In this case, the expression evaluates to 4 + 4, and then i becomes 5 after the post-increment.
