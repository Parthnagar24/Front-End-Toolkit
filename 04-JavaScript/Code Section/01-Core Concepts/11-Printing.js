// Beginner: Basic logging
let user = "Neo";
console.log("Logged in user:", user); // Log multiple arguments cleanly

// Intermediate: Different Console Methods for Clarity
console.warn("Warning: This function is deprecated."); // Logs with a yellow background/icon
console.error("Critical: Database connection failed."); // Logs with a red background/icon, useful for errors

// console.info("Info: Processing started."); // Standard logging, sometimes styled differently

// Advanced: Inspecting Objects and Performance
const myObject = { id: 1, data: [1, 2, 3] };
console.log(myObject); // Logs a clickable, collapsed representation of the object.
console.dir(myObject); // Logs the full, raw JavaScript object properties (useful for DOM elements).

console.time("Array Creation"); // Start a timer named "Array Creation"
const arr = Array(1000000).fill(0);
console.timeEnd("Array Creation"); // Stops the timer and prints the elapsed time (Performance check)
