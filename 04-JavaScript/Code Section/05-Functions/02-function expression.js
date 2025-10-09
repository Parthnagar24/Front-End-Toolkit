// Function Expression: The function is treated like any other variable.
// The 'add' variable holds a reference to the anonymous function.
const add = function (a, b) {
  return a + b;
};

// Calling 'add' works fine.
console.log(add(2, 3)); // Output: 5

// Common Pitfall: Function expressions are NOT hoisted.
// console.log(subtract(10, 5)); // <-- This line would throw a ReferenceError!
const subtract = function (x, y) {
  return x - y;
};
