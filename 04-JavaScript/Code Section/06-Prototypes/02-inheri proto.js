// 1. Define the Parent Prototype (Super Class methods)
const Animal = {
  isAlive: true,
  // Method that will be shared by all objects inheriting from Animal
  eat: function (food) {
    console.log(`${this.name} is eating ${food}.`);
  },
};

// 2. Create the Child Prototype using Object.create()
// This creates a NEW object whose [[Prototype]] is explicitly set to Animal.
const Cat = Object.create(Animal);

// Add methods unique to the Cat prototype (they will be searched *before* Animal's)
Cat.makeSound = function () {
  console.log("Meow.");
};

// 3. Create an Instance (our final object)
// Create an object whose [[Prototype]] is Cat (which itself links to Animal)
const myPet = Object.create(Cat);
myPet.name = "Whiskers"; // Own property

// 4. Demonstrate the triple-layer Prototype Chain:

// a) Access own property
console.log(myPet.name); // => 'Whiskers' (Found on myPet)

// b) Access Cat prototype method
myPet.makeSound(); // => 'Meow.' (Found on Cat)

// c) Access Animal prototype method (2 steps up the chain)
myPet.eat("tuna"); // => Whiskers is eating tuna. (Found on Animal, 'this' is myPet)

// d) Access Object prototype method (3 steps up the chain)
console.log(myPet.hasOwnProperty("name")); // => true (Found on Object.prototype)

// Pitfall: Shadowing
// If we add 'eat' directly to myPet, it will "shadow" (override) the inherited one.
myPet.eat = function () {
  console.log("I'm eating directly!");
};
myPet.eat(); // => I'm eating directly! (The search stops at the first level)
