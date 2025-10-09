class Animal {
  // Base class constructor: initializes properties common to ALL animals.
  constructor(species, age) {
    this.species = species;
    this.age = age;
  }
}

class Dog extends Animal {
  // Derived class constructor: needs breed and specific behavior (like training)
  constructor(species, age, breed) {
    // GOTCHA: MUST call super() FIRST in a derived class constructor.
    // Why: super() runs the parent's constructor (Animal's) and, crucially,
    // initializes 'this' for the derived class, completing Step 3 of the 'new' flow.
    super(species, age);

    // Pitfall: If we tried to use 'this.breed = breed' here BEFORE super(), it would throw a ReferenceError!

    // Now that 'this' is fully initialized by the parent, we can add subclass-specific properties.
    this.breed = breed;
    this.isTrained = false;
  }

  train() {
    this.isTrained = true;
    console.log(`${this.breed} is now trained!`);
  }
}

const myDog = new Dog("Canine", 3, "Golden Retriever");

// The inherited property 'species' was set via super() calling the Animal constructor.
console.log(`My dog is a ${myDog.breed} (${myDog.species}).`);
myDog.train();
