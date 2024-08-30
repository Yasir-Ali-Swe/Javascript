class Person {
    // Private fields
    #name;
    #id;
    #age;
  
    // Constructor to initialize properties
    constructor(name, id, age) {
      this.#name = name;
      this.#id = id;
      this.#age = age;
    }
  
    // Getter for name
    get name() {
      return this.#name;
    }
  
    // Setter for name
    set name(value) {
      if (typeof value === "string" && value.trim() !== "") {
        this.#name = value;
      } else {
        console.log("Invalid name.");
      }
    }
  
    // Getter for id
    get id() {
      return this.#id;
    }
  
    // Setter for id
    set id(value) {
      if (typeof value === "number" && value > 0) {
        this.#id = value;
      } else {
        console.log("Invalid ID.");
      }
    }
  
    // Getter for age
    get age() {
      return this.#age;
    }
  
    // Setter for age
    set age(value) {
      if (typeof value === "number" && value > 0) {
        this.#age = value;
      } else {
        console.log("Invalid age.");
      }
    }
  
    // Method to display person's information
    displayInfo() {
      console.log(`Name: ${this.#name}, ID: ${this.#id}, Age: ${this.#age}`);
    }
  }
  
  // Usage
  const person = new Person("Alice", 1, 30);
  
  // Display initial information
  person.displayInfo(); // Name: Alice, ID: 1, Age: 30
  
  // Update properties using setters
  person.name = "Bob";
  person.id = 2;
  person.age = 35;
  
  // Display updated information
  person.displayInfo(); // Name: Bob, ID: 2, Age: 35
  
  // Attempting to set invalid values
  person.name = ""; // Invalid name.
  person.id = -1; // Invalid ID.
  person.age = -5; // Invalid age.
  
  // Display information after invalid updates
  person.displayInfo(); // Name: Bob, ID: 2, Age: 35 (unchanged)
  