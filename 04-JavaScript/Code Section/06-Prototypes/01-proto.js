// 1. Creating a simple object literal
const vehicle = {
  // This is an "own property" of the vehicle object
  fuelType: "Gasoline",
  // This is an "own method"
  refuel: function () {
    console.log(`Refueling with ${this.fuelType}.`);
  },
};

// 2. Checking the Prototype Chain
// All object literals implicitly inherit from Object.prototype.
console.log(vehicle.hasOwnProperty("fuelType")); // => true (It's an 'own' property)

// The 'toString' method is NOT defined on 'vehicle', but is available
// because it's inherited from Object.prototype, demonstrating the chain.
console.log(vehicle.toString()); // => [object Object]

// 3. The Prototype Link Access
// The non-standard (but common) way to access the prototype link:
const protoOfVehicle = Object.getPrototypeOf(vehicle);

// The prototype of a plain object is the base Object.prototype
console.log(protoOfVehicle === Object.prototype); // => true

// If we call a method from the prototype, 'this' still refers to 'vehicle'
vehicle.refuel(); // 'this.fuelType' successfully accesses 'Gasoline' on 'vehicle'
