// 1. Function Declaration: Stored in memory before execution (hoisted).
function calculateArea(length, width) {
  // length and width are local parameters.
  const area = length * width; // Local variable 'area' created in this function's scope.

  // The 'return' keyword specifies the output of the function.
  // Without 'return', the function implicitly returns 'undefined'.
  return area;
}

// 2. Function Call (Invocation)
const result1 = calculateArea(10, 5);
console.log(result1); // Output: 50 (The returned value is captured in 'result1')

// Common Pitfall: Calling before definition works due to hoisting.
// However, it's generally best practice to define functions before use.
// console.log(multiply(3, 4)); // 12
// function multiply(a, b) { return a * b; }
