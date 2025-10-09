// --- WHILE Loop Example ---
let energyLevel = 10;
// WHILE: Checks the condition FIRST. If initially false, the block never runs.
while (energyLevel > 0) {
  console.log(`Running task... Energy remaining: ${energyLevel}`);
  // IMPORTANT: Ensure the condition *eventually* becomes false, otherwise it's an infinite loop!
  energyLevel -= 3; // The update/decrement is handled INSIDE the block.
}
console.log("Out of energy. The loop is finished.");
// Output: 10, 7, 4, 1 (Loop stops when energy becomes -2)

// --- DO...WHILE Loop Example ---
let password = "";
// DO...WHILE: Runs the block AT LEAST ONCE, then checks the condition.
do {
  // In a real app, this would be user input, but we'll simulate.
  if (password.length === 0) {
    password = "mySecretPassword"; // Simulating the first run setting the password
    console.log("Initial run: Setting password.");
  } else {
    console.log("The loop ran again because the condition was true.");
  }
} while (password.length < 5); // The condition is checked AFTER the first run.
// If password was already "long", the block still executes once.
