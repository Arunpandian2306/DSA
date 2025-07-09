// What is Recursive (Recursion)?
// Recursion is a process where a function calls itself to solve a smaller version of a problem

// factorial
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log("factorial>>>", factorial(5)); // 120

// sun of natural numbers

function sum(n) {
  if (n === 0) return 0; // base case
  return n + sum(n - 1); // recursive call
}

console.log("sum>>>", sum(5));

// fibonacci
function fibonacci(n) {
  if (n <= 1) return n; // base case
  return fibonacci(n - 1) + fibonacci(n - 2); // sum of last two terms
}

for (let i = 0; i < 7; i++) {
  console.log("fibonacci>>>", fibonacci(i));
}
// Output: 0 1 1 2 3 5 8

//Power function (x^n)
function power(x, n) {
  if (n === 0) return 1; // base case: x⁰ = 1
  return x * power(x, n - 1); // xⁿ = x * xⁿ⁻¹
}

console.log("powerfunction>>>", power(2, 3)); // 8 → 2 * 2 * 2
