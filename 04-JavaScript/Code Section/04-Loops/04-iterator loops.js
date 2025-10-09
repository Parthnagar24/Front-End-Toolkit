// --- FOR...OF (Iterating VALUES of an Iterable) ---
const usernames = ["Alice", "Bob", "Charlie"];
console.log("\n--- Looping through VALUES (for...of) ---");

for (const user of usernames) {
  // 'user' holds the actual VALUE: "Alice", then "Bob", then "Charlie".
  console.log(`User found: ${user}`);
}

const sentence = "Hello";
for (const char of sentence) {
  // Strings are also iterable.
  console.log(`Character: ${char}`);
}
// Pitfall: You cannot use 'for...of' directly on a plain JavaScript Object.

// --- FOR...IN (Enumerating KEYS/Properties of an Object) ---
const userProfile = {
  name: "John Doe",
  age: 30,
  occupation: "Developer",
};
console.log("\n--- Looping through KEYS (for...in) ---");

for (const key in userProfile) {
  // 'key' holds the property NAME: "name", then "age", then "occupation".
  // This is generally discouraged for arrays (where you should use for/for...of).

  // GOTECHA Protection: ALWAYS use hasOwnProperty to avoid iterating over inherited prototype properties.
  if (userProfile.hasOwnProperty(key)) {
    // Use the key to access the value.
    console.log(`${key}: ${userProfile[key]}`);
  }
}
