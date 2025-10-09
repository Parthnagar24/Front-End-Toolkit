// Beginner: Generating NaN
console.log(0 / 0); // Output: NaN (Mathematically undefined)
console.log("test" * 5); // Output: NaN (Attempting arithmetic with a non-numeric string)
console.log(Math.sqrt(-1)); // Output: NaN (Cannot take the square root of a negative number)

// Intermediate: The NaN Pitfall (The only value in JS not equal to itself)
console.log(NaN == NaN); // Output: false
console.log(NaN === NaN); // Output: false
// Pitfall reasoning: NaN is a state of error. If you get two different errors, they aren't 'equal'.

// Advanced: Correctly checking for NaN
let userValue = Number("abc"); // userValue is NaN
if (isNaN(userValue)) {
  console.log("Use the global isNaN() to check for Not a Number.");
}

// Recommended Modern Check (More accurate, doesn't coerce non-numbers)
if (Number.isNaN(userValue)) {
  console.log("Use Number.isNaN() for a strict NaN check.");
}
// isNaN("hello") -> true (coerces to NaN)
// Number.isNaN("hello") -> false (doesn't coerce, safer)
