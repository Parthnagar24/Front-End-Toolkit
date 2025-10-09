// This is a standard function, but it acts as a constructor when called with 'new'.
function LegacyVehicle(type, wheels) {
  // Inside the function, 'this' refers to the newly created object (due to 'new').
  this.type = type;
  this.wheelCount = wheels;

  // We can also define a method directly on the instance (less common/efficient)
  this.start = function () {
    console.log(`The ${this.type} is starting up.`);
  };

  // NOTE: Unlike a class, if we omit 'new' here, it won't strictly error,
  // but 'this' pollutes the global object (unless in strict mode).

  // Returning a primitive (like 5) is IGNORED. The instance is returned.
  // Returning a non-primitive object (e.g., return {custom: true}) will OVERRIDE
  // the newly created instance, and {custom: true} will be returned instead.
}

const bike = new LegacyVehicle("Bicycle", 2);
bike.start(); // Output: The Bicycle is starting up.
