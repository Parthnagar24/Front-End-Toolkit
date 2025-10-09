// 1. Define the Constructor Function (our blueprint)
function User(username, email) {
  // These are 'own properties' unique to each instance
  this.username = username;
  this.email = email;
}

// 2. Attach a method to the Constructor's prototype
// This method will be SHARED by ALL User instances.
// Benefit: Memory efficient. Only one copy of 'greet' exists in memory.
User.prototype.greet = function () {
  // 'this' will dynamically refer to the specific instance calling the method
  console.log(`Hello, I am ${this.username}.`);
};

// 3. Create Instances (Objects)
const user1 = new User("Alice", "a@example.com");
const user2 = new User("Bob", "b@example.com");

// 4. Checking the Chain in action
user1.greet(); // Calls the SHARED 'greet' method, but 'this' is 'user1'

// Check if the method is an 'own property' of the instance:
console.log(user1.hasOwnProperty("greet")); // => false (It's inherited from the prototype)

// Verify the link: user1's [[Prototype]] is exactly User.prototype
console.log(Object.getPrototypeOf(user1) === User.prototype); // => true
