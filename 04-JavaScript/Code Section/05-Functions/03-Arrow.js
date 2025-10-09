// Concise Arrow Function: Implicit return for single expressions.
// No need for 'return' or curly braces {}.
const square = (num) => num * num;
console.log(square(9)); // Output: 81

// Multi-line Arrow Function: Requires curly braces {} and an explicit 'return'.
const power = (base, exponent) => {
  // Inline comment: Uses the built-in Math object.
  return Math.pow(base, exponent);
};
console.log(power(2, 4)); // Output: 16

// Major Difference (The "Gotcha"): Arrow functions do not bind their own 'this'.
// They inherit 'this' from the surrounding lexical context (where they are defined).
// This solves a lot of historical JS confusion in object methods and callbacks.
