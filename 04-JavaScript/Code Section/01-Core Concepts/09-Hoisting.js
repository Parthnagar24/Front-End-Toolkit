console.log(petName); // undefined → Declaration is hoisted
var petName = "Bartholomew";
console.log(petName); // "Bartholomew"

sayHello(); // "Hello!" → function declaration fully hoisted
function sayHello() {
  console.log("Hello!");
}

// console.log(appName); // ReferenceError: Cannot access before initialization
let appName = "My App";

const myConst = 42;
// console.log(myConst); // ReferenceError if accessed before this line
