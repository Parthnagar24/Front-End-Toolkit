// 🟢 Beginner: Implicit Coercion

console.log(1 + "1"); // "11" → '+' favors string → '1' + '1'
console.log(10 - "5"); // 5   → '-' forces numeric conversion
console.log(true + true); // 2   → true → 1, 1 + 1 = 2

// 🔵 Intermediate: Explicit Coercion
if ("0") {
  console.log("This runs."); // '0' (non-empty string) → truthy
}

if (0) {
  console.log("This does not run."); // 0 → falsy
}

//🔴 Advanced: Explicit Coercion (Best Practice

let amount = "500";
let tax = "50";

// Implicit addition would concatenate:
console.log(amount + tax); // "50050" ❌

// Explicit coercion ensures correctness:
let total = Number(amount) + Number(tax);
console.log(total); // 550 ✅
