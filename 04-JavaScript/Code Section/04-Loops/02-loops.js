// --- BEGINNER: Simple Iteration ---
const totalIterations = 5;
for (let i = 0; i < totalIterations; i++) {
  // 1. let i = 0: Initialization. Sets the counter. Uses 'let' for block-scoping.
  // 2. i < totalIterations: Condition. Loop continues as long as this is TRUE.
  // 3. i++: Final Expression. Runs AFTER the code block, updating the counter.
  console.log(`Current count: ${i}`); // Output: 0, 1, 2, 3, 4
}
// Pitfall: Using 'var i' here would leak 'i=5' into the outer scope.

// --- INTERMEDIATE: Iterating Backwards with conditional breaking ---
const letters = ["A", "B", "C", "D", "E"];
for (let i = letters.length - 1; i >= 0; i--) {
  // Initialization: Start at the last index (4).
  // Condition: Stop when i is less than 0 (i.e., stop after index 0 is processed).
  // Final Expression: Decrement the counter (i--).

  if (letters[i] === "B") {
    console.log("Found B, stopping iteration.");
    break; // 'break' immediately exits the entire loop.
  }
  if (letters[i] === "D") {
    console.log("Skipping D.");
    continue; // 'continue' skips the rest of the current loop body and proceeds to the Final Expression (i--).
  }
  console.log(`Processing letter: ${letters[i]}`); // Output: E, Skipping D., C, Found B, stopping iteration.
}

// --- ADVANCED: Nested Loops (For 2D data/grids) ---
const grid = [
  [1, 2],
  [3, 4],
];

for (let row = 0; row < grid.length; row++) {
  // Outer loop iterates through the rows (0 then 1)
  for (let col = 0; col < grid[row].length; col++) {
    // Inner loop iterates through columns of the current row (0 then 1)
    console.log(`Grid position (${row}, ${col}) has value: ${grid[row][col]}`);
  }
}
// Output: (0, 0) value: 1, (0, 1) value: 2, (1, 0) value: 3, (1, 1) value: 4
