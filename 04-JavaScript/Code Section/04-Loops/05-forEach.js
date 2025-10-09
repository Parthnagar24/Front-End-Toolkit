// --- ARRAY.PROTOTYPE.FOREACH (High-order function loop) ---
const prices = [10.99, 5.5, 20.0];

console.log("\n--- Array.forEach ---");
prices.forEach((price, index, array) => {
  // forEach takes a callback function. It implicitly loops through the array.
  // 1. 'price': The current element value (REQUIRED).
  // 2. 'index': The index of the current element (OPTIONAL).
  // 3. 'array': The array being traversed (OPTIONAL/Rarely used).
  const discountedPrice = price * 0.9;
  console.log(
    `Item at index ${index} costs $${price}, discounted to $${discountedPrice.toFixed(
      2
    )}.`
  );

  // KEY DIFFERENCE: You CANNOT use 'break' or 'continue' inside a forEach loop.
  // To stop early or skip, you must use a standard 'for' loop or the 'some'/'every' array methods.
});
