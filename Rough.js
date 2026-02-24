/*
let name = "Suman";
let age = 21;

// Template Literals - ${}
console.log(`Hello my name is ${name} and my age is ${age}.`) 
*/








//`````````````````````````````````````````````````````````````````````````````````````````
// `````1. Array`````

/*  let numbers = new Array(1, 2, 3);  // Creating new array
console.log(numbers); */

/*  let empty = new Array(5); // Creates array with 5 empty slots
console.log(empty); */

// `````1.1 Array.from()`````

/*  let name = Array.from("Hello");
console.log(name); */

/*  let nums = Array.from({length: 10}, (_, i) => i + 1); // [1,2,3,4,5]
console.log(nums); */

// `````Accessing Elements`````

/*  let fruits = ["apple", "banana", "orange", "mango"];
//  Index:          0         1         2         3

  console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "orange"
console.log(fruits[3]); // "mango"
console.log(fruits[4]); // undefined (doesn't exist)

// Access last element
console.log(fruits[fruits.length - 1]); // "mango"

// Modern way to access last element
console.log(fruits.at(-1)); // "mango"
console.log(fruits.at(-2)); // "orange" */

// Calculates the length of the array
/*  let arr = [1,3,45,56,7889,42]; */ 
/*  console.log(arr.length);  */ 

//  Change length
/*  arr.length = 3;
console.log(arr);*/

/*`````````````````````````````````````X```````````````````````````````````````````````````*/

//``````````|Object Creation Method (1)|````````````

/*
let car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2023;

console.log(car);
*/

//```````````|ES6 Class Object Declaration Method|```````````

/*
class User {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello my name is ${this.name}!`);
  }
}

let user1 = new User("Suman",21);

console.log(user1.age);
*/

/* let person = {
  name : "Suman"
};

person.age = 21;
person.city = "Bhubaneswar";
person.name = "Anand"

console.log(person); */
