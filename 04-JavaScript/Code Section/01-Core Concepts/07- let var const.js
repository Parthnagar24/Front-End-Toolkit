// 🧠 Beginner Level
var x = 10;
let y = 20;
const z = 30;

x = 15; // ✅ var can be reassigned
y = 25; // ✅ let can be reassigned
// z = 35; // ❌ TypeError: Assignment to constant variable

console.log(x, y, z); // 15 25 30

// ⚙️ Intermediate: Scope Differences
function testScope() {
  if (true) {
    var funcScoped = "Visible everywhere in function";
    let blockScoped = "Visible only inside if";
    const constScoped = "Also only inside if";
  }

  console.log(funcScoped); // ✅ Works
  // console.log(blockScoped); // ❌ ReferenceError
  // console.log(constScoped); // ❌ ReferenceError
}

testScope();

// 🧠 Advanced: Const Mutability Pitfall
const user = { name: "Alice" };
// user = { name: "Bob" }; // ❌ Can't reassign reference
user.name = "Bob"; // ✅ Can mutate properties
console.log(user.name); // "Bob"
