// Multiple conditions checked sequentially.
const weather = "cloudy";
const temperature = 25; // Celsius

if (weather === "sunny" && temperature > 30) {
  // Condition 1: Check if both sunny AND hot.
  console.log("It's a beach day! Use sunscreen.");
} else if (weather === "rainy") {
  // Condition 2: If C1 was false, check if it's rainy.
  console.log("Grab an umbrella and a book.");
} else if (temperature > 20) {
  // Condition 3: If C1 and C2 were false, check if it's warm.
  // NOTE: This runs even if weather is 'cloudy', as long as temp > 20.
  console.log("Nice comfortable weather.");
} else {
  // Default action if none of the above conditions were met.
  console.log("Unsure of the weather, check your local forecast.");
}
// Output: Nice comfortable weather. (C3 is the first true condition reached)
