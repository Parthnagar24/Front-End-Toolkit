// 1. Basic Usage of typeof Operator

console.log(typeof "hello"); // "string"
console.log(typeof 100); // "number"
console.log(typeof true); // "boolean"
let unassigned;
console.log(typeof unassigned); // "undefined"

// 2. Checking for objects and arrays and functions

console.log(typeof function add() {}); // "function"
// Functions are special objects with callable behavior.

console.log(typeof [1, 2, 3]); // "object"
// Arrays are objects internally with numeric keys and length.

console.log(typeof { name: "Alice" }); // "object"
// Plain objects are collections of key-value pairs.

//  3. Type Based logic

function processValue(value) {
  if (typeof value === "string") {
    console.log("It's a string!");
  } else if (typeof value === "number") {
    console.log("It's a number!");
  }
  console.log("Value:", value);
}

// 4. Check for arrays

Array.isArray([1, 2, 3]); // true
Array.isArray({}); // false

// 5.  check for objects

function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// 6.Check for null and NaN

console.log(typeof null);
Number.isNaN(value); // true only for NaN, not for other numbers
console.log(typeof NaN); // "number"
