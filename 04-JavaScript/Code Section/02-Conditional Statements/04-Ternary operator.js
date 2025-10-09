const currentLevel = 11;
const maxLevel = 10;

// Syntax: condition ? expression_if_true : expression_if_false
const statusMessage =
  currentLevel > maxLevel
    ? "Eligible for Prestige Class." // Runs if condition is true (11 > 10 is true)
    : "Continue leveling up."; // Runs if condition is false

console.log(statusMessage);
// Output: Eligible for Prestige Class.
