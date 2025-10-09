// 🟢 Beginner: Simple Reassignment

let value = 42;
console.log(typeof value); // "number"

value = "The answer";
console.log(typeof value); // "string"

value = true;
console.log(typeof value); // "boolean"

//  🟡 Intermediate: Function with Dynamic Typin

function checkAndLog(input) {
  // Type checked at runtime, not before execution.
  if (typeof input === "number") {
    console.log("It's a number.");
  } else if (typeof input === "string") {
    console.log("It's a string.");
  }
}

checkAndLog(15); // It's a number.
checkAndLog("fifteen"); // It's a string.

// 🔴 Advanced: Pitfall of Loose Typing

let result = 10;

// Later someone accidentally reassigns
result = "ten";

// Unexpected runtime issue:
let final = result * 2;
console.log(final); // NaN (Not a Number)
