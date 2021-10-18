/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog

class Dog {

}

var husky = new Dog();
var poodle = new Dog();

console.log(husky);
console.log(poodle);

// Prompt 2: Snack

class Snack {

}

var celeryBoats = new Snack();
var nachos = new Snack();

console.log(celeryBoats);
console.log(nachos);

// Prompt 3: Shirt

class SummerShirt {

}

var shortSleeve = new SummerShirt();
var tankTop = new SummerShirt();

console.log(shortSleeve);
console.log(tankTop);


//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

class DogBreed {
  constructor() {
    this.kidFriendly = true
    this.gender = "female"
    this.weight = 51
  }
}

var husky = new DogBreed();
console.log(husky);

// Prompt 2: Snack

class KidSnack {
  constructor() {
    this.healthy =  true
    this.time = "afternoon"
    this.ingredients = 3
  }
}
 var celeryBoat = new KidSnack();
 console.log(celeryBoat);

// Prompt 3: Shirt

class WorkShirt {
  constructor() {
    this.season = "fall"
    this.size = "medium"
    this.color = "burnt sienna"
  }
}
var buttonUp = new WorkShirt();
console.log(buttonUp);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog

class DogHealth {
  constructor(weight, energy, temp) {
    this.weight = weight;
    this.energy = energy;
    this.temperature = temp;
  }
}

var husky = new DogHealth(142, "Low", 104);
console.log(husky);


// Prompt 2: Snack

class SchoolSnack {
  constructor(healthy, day, numIngredients) {
    this.healthy = healthy;
    this.day = day;
    this.numIngredients = numIngredients;
  }
}
var celeryBoat = new SchoolSnack(true, "Tuesday", 3);
console.log(celeryBoat);

// Prompt 3: Shirt

class Shirt {
  constructor(color, season, environment) {
    this.color = color;
    this.season = season;
    this.environment = environment;
  }
}
var blouse = new Shirt("Purple", "Winter", "Work Casual");
console.log(blouse);
