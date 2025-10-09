class Product {
  // The constructor method is automatically called when a new Product is created via 'new'.
  constructor(name, price) {
    // 'this' refers to the newly created empty object.
    // We initialize (set up) the object's properties here.
    this.name = name;
    this.price = price;
    this.inStock = true; // Set a default, hardcoded initial value.
  }

  // Method to display information
  getInfo() {
    // Accesses the properties set by the constructor.
    return `${this.name} costs $${this.price}. In stock: ${this.inStock}`;
  }
}

// 1. Calls the constructor with 'Laptop' and 1200 as arguments.
// 2. The constructor sets p1.name = 'Laptop' and p1.price = 1200.
const p1 = new Product("Laptop", 1200);

// p1 is now a fully initialized object.
console.log(p1.getInfo()); // Output: Laptop costs $1200. In stock: true

// Common Pitfall: Forgetting the 'new' keyword
// const p2 = Product('Monitor', 300); // In strict mode (which classes implicitly use), this throws an error!
// Why: Without 'new', 'this' might refer to the global object (window/global), leading to unexpected side effects.
