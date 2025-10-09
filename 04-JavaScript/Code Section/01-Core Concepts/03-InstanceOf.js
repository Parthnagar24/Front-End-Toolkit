// 🟢 Beginner: Built-in Objects

let myDate = new Date();
let myArray = [1, 2];

console.log(myDate instanceof Date); // true
console.log(myArray instanceof Array); // true
console.log(myArray instanceof Object); // true → because Array inherits from Object

// 🟠 Intermediate: Custom Classes

class Car {
  constructor(model) {
    this.model = model;
  }
}

let prius = new Car("Prius");

console.log(prius instanceof Car); // true
console.log(prius instanceof Object); // true → every class inherits from Object

// 🔵 Advanced: Primitives and Pitfalls

let aString = "test";
console.log(aString instanceof String); // false → primitive string, not object

let bString = new String("test");
console.log(bString instanceof String); // true → it's a String object wrapper
