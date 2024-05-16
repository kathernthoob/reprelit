// Define a generic Country class with a type parameter T
class Country<T> {
  // Property to hold the name of the country
  private name: T;

  // Constructor to set the country name
  constructor(name: T) {
    this.name = name;
  }

  // Method to display the country name
  displayName(): void {
    console.log(`Country name: ${this.name}`);
  }
}

// Create a new instance of Country with the name "Canada"
// The type parameter is inferred to be string | number
const myCountry = new Country<string | number>("Canada");

// Call the displayName method to output the country name
myCountry.displayName();
