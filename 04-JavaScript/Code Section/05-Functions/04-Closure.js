// Closure Example: A function factory
function createCounter() {
  // 1. 'count' is defined in the outer scope of 'createCounter'.
  let count = 0;

  // 2. The inner function 'increment' is returned.
  // 'increment' maintains a reference to the 'count' variable,
  // creating a closure.
  return function increment() {
    count++;
    console.log(`Current Count: ${count}`);
  }; // The inner function is the closure.
}

// 3. 'counter1' now holds the inner 'increment' function.
const counter1 = createCounter();

// 4. The 'createCounter' function has finished running,
// but 'counter1' still has access to its 'count' variable (which remains in memory).
counter1(); // Output: Current Count: 1
counter1(); // Output: Current Count: 2

// 5. Creating a new counter creates a separate, isolated 'count' variable.
const counter2 = createCounter();
counter2(); // Output: Current Count: 1 (Separate closure instance)
