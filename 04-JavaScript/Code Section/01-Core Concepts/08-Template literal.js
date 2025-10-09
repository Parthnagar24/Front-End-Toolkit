const firstName = "Leia";
const score = 85;

// ✅ Interpolation
const greeting = `Welcome back, ${firstName}! Your score is ${score + 5}.`;
console.log(greeting);
// Output: "Welcome back, Leia! Your score is 90."

const html = `
  <div class="user-card">
    <h1>${firstName}</h1>
    <p>Current Score: ${score}</p>
  </div>
`;

console.log(html);
// Prints exactly as formatted, preserving indentation & newlines.

function highlight(strings, ...values) {
  // strings → array of literal parts
  // values  → array of interpolated parts
  return strings.reduce(
    (acc, str, i) => acc + str + (values[i] ? `<B>${values[i]}</B>` : ""),
    ""
  );
}

const winner = "Yoda";
const announcement = highlight`The winner is ${winner}.`;
console.log(announcement);
// Output: "The winner is <B>Yoda</B>."
