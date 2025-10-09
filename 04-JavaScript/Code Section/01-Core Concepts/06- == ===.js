// 🟢 Beginner — The Basics

console.log(10 == "10"); // true → '10' → 10
console.log(10 === "10"); // false → Type mismatch

// 🟡 Intermediate — Special Rules

console.log(null == undefined); // true → Special case rule
console.log(null === undefined); // false → Different types

console.log(0 == false); // true → false → 0 → same numeric value
console.log(0 === false); // false → Number vs Boolean

// 🔴 Advanced — Object References

let a = { id: 1 };
let b = { id: 1 };

console.log(a == b); // false → Different memory references
console.log(a === b); // false → Same reason
