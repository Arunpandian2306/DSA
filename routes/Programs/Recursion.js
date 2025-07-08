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
