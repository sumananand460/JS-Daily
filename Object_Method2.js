// ES6 Class Syntax for Object Declaration

/*
- 'class' is used as a template for creating objects.
- 'constructor' is used to intialize the object properties
- 'this' keyword is used for reference for the properties
*/

class User {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello my name is ${this.name} and my age is ${this.age}.`);
  }
}

let user1 = new User("Suman",21);	//Instantation

console.log(user1.name);
console.log(user1.age);

user1.greet(); // For calling greet() method.
