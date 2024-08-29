class Person {
  // Constructor to initialize properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display a greeting
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Usage
const person = new Person("Alice", 30);

// Call the greet method
person.greet(); // Hello, my name is Alice and I am 30 years old.
