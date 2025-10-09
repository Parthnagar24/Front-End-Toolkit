// 1. Basic if/else Structure
const isLoggedIn = true; // Our condition variable

if (isLoggedIn) {
  // This block executes because isLoggedIn is 'true'.
  console.log("Welcome back, user!");
} else {
  // This block is skipped because the 'if' block ran.
  console.log("Please log in to continue.");
}
// Output: Welcome back, user!

// 2. Truthy and Falsy Check
const username = "Alice"; // A non-empty string is a Truthy value.

if (username) {
  // Since "Alice" is Truthy, this 'if' runs.
  console.log(`Hello, ${username}.`);
}

const userPoints = 0; // The number 0 is explicitly a Falsy value.

if (userPoints) {
  // This block is SKIPPED because 0 is Falsy.
  console.log("You have points to spend!");
} else {
  // This 'else' block runs instead.
  console.log("Points are currently at zero.");
}
// Output: Hello, Alice.
// Output: Points are currently at zero.
