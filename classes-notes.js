// ============================================================
//               CLASSES IN JAVASCRIPT — NOTES
//      Syntax | Inheritance | Encapsulation | Patterns
// ============================================================


// ------------------------------------------------------------
// WHAT IS A CLASS?
// ------------------------------------------------------------
// A class is a blueprint for creating objects with shared
// properties and methods. Introduced in ES6, classes provide
// a cleaner, more readable syntax over the older constructor
// function + prototype pattern.
//
// Think of a class as a template:
//   Class  →  Cookie Cutter (the blueprint)
//   Object →  Cookie        (the instance made from it)
//
// Under the hood, JavaScript classes still use prototypes —
// they are "syntactic sugar" over the prototype system.


// ------------------------------------------------------------
// 1. DEFINING A CLASS
// ------------------------------------------------------------

class Person {
  // The constructor runs automatically when you use 'new'
  constructor(name, age) {
    this.name = name;    // instance property
    this.age  = age;     // instance property
  }

  // Method — shared across all instances (lives on prototype)
  greet() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }

  introduce() {
    return `Nice to meet you! Call me ${this.name}.`;
  }
}

// Creating instances using 'new'
const alice = new Person('Alice', 30);
const bob   = new Person('Bob', 25);

alice.greet();       // "Hi, I'm Alice and I'm 30 years old."
bob.greet();         // "Hi, I'm Bob and I'm 25 years old."

// Each instance has its own properties
alice.name;          // 'Alice'
bob.name;            // 'Bob'

// But methods are shared (not duplicated per instance)
alice.greet === bob.greet;    // true — same function on prototype


// ------------------------------------------------------------
// 2. CONSTRUCTOR METHOD
// ------------------------------------------------------------
// The constructor is a special method called once when a new
// instance is created. It sets up the initial state.
// There can only be ONE constructor per class.

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year  = year;
    this.speed = 0;      // default value
  }

  describe() {
    return `${this.year} ${this.brand} ${this.model}`;
  }
}

const myCar = new Car('Toyota', 'Corolla', 2022);
myCar.describe();    // '2022 Toyota Corolla'
myCar.speed;         // 0


// ------------------------------------------------------------
// 3. INSTANCE METHODS
// ------------------------------------------------------------
// Methods defined in the class body are available on every
// instance. They can access instance data via 'this'.

class BankAccount {
  constructor(owner, balance = 0) {
    this.owner   = owner;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) return 'Amount must be positive.';
    this.balance += amount;
    return `Deposited $${amount}. New balance: $${this.balance}`;
  }

  withdraw(amount) {
    if (amount > this.balance) return 'Insufficient funds.';
    this.balance -= amount;
    return `Withdrew $${amount}. New balance: $${this.balance}`;
  }

  getBalance() {
    return `$${this.balance}`;
  }
}

const account = new BankAccount('Alice', 1000);
account.deposit(500);     // 'Deposited $500. New balance: $1500'
account.withdraw(200);    // 'Withdrew $200. New balance: $1300'
account.getBalance();     // '$1300'


// ------------------------------------------------------------
// 4. STATIC METHODS & PROPERTIES
// ------------------------------------------------------------
// Static members belong to the CLASS itself, not instances.
// Use them for utility functions or shared constants.

class MathHelper {
  static PI = 3.14159;   // static property

  static square(n) {
    return n * n;
  }

  static cube(n) {
    return n * n * n;
  }

  static clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
}

// Called on the CLASS, not an instance
MathHelper.PI;               // 3.14159
MathHelper.square(4);        // 16
MathHelper.cube(3);          // 27
MathHelper.clamp(15, 0, 10); // 10

// Static methods are NOT available on instances
const m = new MathHelper();
m.square(4);    // TypeError: m.square is not a function

// Common real-world use: factory / helper static methods
class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  static createAdmin(name) {
    return new User(name, 'admin');   // static factory method
  }

  static createGuest() {
    return new User('Guest', 'guest');
  }
}

const admin = User.createAdmin('Alice');
admin.role;    // 'admin'


// ------------------------------------------------------------
// 5. GETTERS & SETTERS
// ------------------------------------------------------------
// Getters and setters let you define computed or controlled
// access to properties using clean dot-notation syntax.

class Temperature {
  constructor(celsius) {
    this._celsius = celsius;   // _ signals "internal" property
  }

  // Getter — accessed like a property: temp.fahrenheit
  get fahrenheit() {
    return this._celsius * 9/5 + 32;
  }

  // Getter for celsius
  get celsius() {
    return this._celsius;
  }

  // Setter — validates before setting: temp.celsius = 25
  set celsius(value) {
    if (value < -273.15) throw new Error('Below absolute zero!');
    this._celsius = value;
  }
}

const temp = new Temperature(100);
temp.fahrenheit;        // 212  — getter (no parentheses!)
temp.celsius;           // 100
temp.celsius = 25;      // setter — validates and sets
temp.fahrenheit;        // 77

// Another common use: computed full name
class FullName {
  constructor(first, last) {
    this.first = first;
    this.last  = last;
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  set fullName(name) {
    [this.first, this.last] = name.split(' ');
  }
}

const fn = new FullName('John', 'Doe');
fn.fullName;              // 'John Doe'
fn.fullName = 'Jane Smith';
fn.first;                 // 'Jane'
fn.last;                  // 'Smith'


// ------------------------------------------------------------
// 6. CLASS FIELDS (Modern Syntax)
// ------------------------------------------------------------
// Class fields let you declare properties directly in the
// class body without needing the constructor.

class Counter {
  count = 0;           // public field (instance property)
  step  = 1;

  increment() { this.count += this.step; }
  decrement() { this.count -= this.step; }
  reset()     { this.count = 0; }
}

const c = new Counter();
c.increment();
c.increment();
c.count;    // 2

// Private fields (# prefix) — truly private, not accessible outside
class SecureCounter {
  #count = 0;          // private field
  #maxCount;

  constructor(max) {
    this.#maxCount = max;
  }

  increment() {
    if (this.#count < this.#maxCount) this.#count++;
  }

  get value() { return this.#count; }
}

const sc = new SecureCounter(3);
sc.increment();
sc.increment();
sc.value;       // 2
sc.#count;      // SyntaxError — private fields can't be accessed outside


// ------------------------------------------------------------
// 7. INHERITANCE (extends & super)
// ------------------------------------------------------------
// A child class inherits properties and methods from a parent.
// Use 'extends' to inherit and 'super' to call the parent.

class Animal {
  constructor(name, sound) {
    this.name  = name;
    this.sound = sound;
    this.alive = true;
  }

  speak() {
    return `${this.name} says ${this.sound}!`;
  }

  breathe() {
    return `${this.name} is breathing.`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, 'Woof');   // MUST call super() before using 'this'
    this.breed = breed;    // additional property
  }

  // New method specific to Dog
  fetch(item) {
    return `${this.name} fetches the ${item}!`;
  }

  // Override parent method
  speak() {
    return `${super.speak()} (tail wagging)`;   // super calls parent method
  }
}

class Cat extends Animal {
  constructor(name, isIndoor) {
    super(name, 'Meow');
    this.isIndoor = isIndoor;
  }

  purr() {
    return `${this.name} purrs contentedly.`;
  }
}

const rex  = new Dog('Rex', 'Labrador');
const luna = new Cat('Luna', true);

rex.speak();          // 'Rex says Woof! (tail wagging)'
rex.fetch('ball');    // 'Rex fetches the ball!'
rex.breathe();        // 'Rex is breathing.' — inherited from Animal

luna.speak();         // 'Luna says Meow!'
luna.purr();          // 'Luna purrs contentedly.'


// ------------------------------------------------------------
// 8. CHECKING INSTANCES
// ------------------------------------------------------------

rex instanceof Dog;     // true
rex instanceof Animal;  // true  — Dog extends Animal
rex instanceof Cat;     // false

// Check the constructor
rex.constructor === Dog;        // true
rex.constructor.name;           // 'Dog'

// Check if method exists on prototype chain
'speak'   in rex;    // true
'purr'    in rex;    // false
'fetch'   in luna;   // false


// ------------------------------------------------------------
// 9. MULTI-LEVEL INHERITANCE
// ------------------------------------------------------------
// Classes can extend other subclasses too.

class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return `Color: ${this.color}`;
  }

  area() {
    return 0;   // default
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width  = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

class Square extends Rectangle {
  constructor(color, side) {
    super(color, side, side);   // square is a rectangle with equal sides
    this.side = side;
  }

  describe() {
    return `A ${this.color} square with side ${this.side}`;
  }
}

const sq = new Square('red', 5);
sq.area();        // 25   — from Rectangle
sq.perimeter();   // 20   — from Rectangle
sq.getColor();    // 'Color: red' — from Shape
sq.describe();    // 'A red square with side 5' — own method

sq instanceof Square;     // true
sq instanceof Rectangle;  // true
sq instanceof Shape;      // true


// ------------------------------------------------------------
// 10. MIXINS (Sharing Behavior Without Inheritance)
// ------------------------------------------------------------
// JavaScript only supports single inheritance (one parent).
// Mixins let you compose reusable behaviors from multiple sources.

// Mixin functions — add methods to a class's prototype
const Serializable = (Base) => class extends Base {
  serialize() {
    return JSON.stringify(this);
  }

  static deserialize(json) {
    return Object.assign(new this(), JSON.parse(json));
  }
};

const Timestamped = (Base) => class extends Base {
  constructor(...args) {
    super(...args);
    this.createdAt = new Date().toISOString();
  }
};

// Apply mixins by wrapping the base class
class BaseModel {
  constructor(data) {
    Object.assign(this, data);
  }
}

class UserModel extends Serializable(Timestamped(BaseModel)) {}

const u = new UserModel({ name: 'Alice', role: 'admin' });
u.name;         // 'Alice'
u.createdAt;    // ISO timestamp
u.serialize();  // JSON string of the object


// ------------------------------------------------------------
// 11. ABSTRACT-LIKE CLASSES
// ------------------------------------------------------------
// JavaScript has no true abstract classes, but you can simulate
// them by throwing errors for methods that MUST be overridden.

class AbstractLogger {
  constructor() {
    if (new.target === AbstractLogger) {
      throw new Error('Cannot instantiate abstract class directly.');
    }
  }

  // Subclasses MUST implement this
  log(message) {
    throw new Error('log() must be implemented by subclass.');
  }

  // Shared implementation
  info(message)  { this.log(`[INFO]  ${message}`); }
  warn(message)  { this.log(`[WARN]  ${message}`); }
  error(message) { this.log(`[ERROR] ${message}`); }
}

class ConsoleLogger extends AbstractLogger {
  log(message) {
    console.log(message);
  }
}

class FileLogger extends AbstractLogger {
  constructor(filename) {
    super();
    this.filename = filename;
  }

  log(message) {
    // In real code: write to file
    console.log(`Writing to ${this.filename}: ${message}`);
  }
}

// new AbstractLogger();       // Error: Cannot instantiate abstract class
const logger = new ConsoleLogger();
logger.info('Server started');     // [INFO]  Server started
logger.warn('High memory usage');  // [WARN]  High memory usage


// ------------------------------------------------------------
// 12. CLASS EXPRESSIONS
// ------------------------------------------------------------
// Like function expressions, classes can be assigned to variables.

// Anonymous class expression
const Rectangle2 = class {
  constructor(w, h) { this.w = w; this.h = h; }
  area() { return this.w * this.h; }
};

// Named class expression (name only visible inside the class)
const Circle = class CircleShape {
  constructor(r) { this.r = r; }
  area() { return Math.PI * this.r ** 2; }
};

const r = new Rectangle2(4, 5);
r.area();    // 20

const circle = new Circle(7);
circle.area().toFixed(2);    // '153.94'


// ------------------------------------------------------------
// 13. COMPARING OLD vs NEW SYNTAX
// ------------------------------------------------------------

// OLD — Constructor function + prototype
function PersonOld(name, age) {
  this.name = name;
  this.age  = age;
}
PersonOld.prototype.greet = function() {
  return `Hi, I'm ${this.name}`;
};

// NEW — Class syntax (equivalent, cleaner)
class PersonNew {
  constructor(name, age) {
    this.name = name;
    this.age  = age;
  }
  greet() {
    return `Hi, I'm ${this.name}`;
  }
}

// Both work the same way under the hood!
const p1 = new PersonOld('Alice', 30);
const p2 = new PersonNew('Alice', 30);
p1.greet();    // "Hi, I'm Alice"
p2.greet();    // "Hi, I'm Alice"


// ------------------------------------------------------------
// KEY TAKEAWAY
// ------------------------------------------------------------
// Classes are blueprints for creating structured, reusable objects.
//
// Core building blocks:
//   constructor()   →  Runs on 'new', sets initial state
//   Methods         →  Shared behavior across all instances
//   static          →  Belongs to the class, not instances
//   get / set       →  Controlled property access
//   #privateField   →  Truly private, hidden from outside
//   extends         →  Inherit from a parent class
//   super()         →  Call the parent constructor or method
//
// When to use classes:
//   ✔ Modeling real-world entities (User, Product, Order)
//   ✔ You need multiple instances with shared structure
//   ✔ Building component-based systems or frameworks
//   ✔ When inheritance or encapsulation is needed
//
// Quick cheat sheet:
//   class Foo {}                    — define a class
//   new Foo()                       — create an instance
//   class Bar extends Foo {}        — inherit from Foo
//   super()                         — call parent constructor
//   static method() {}              — class-level method
//   get prop() {} / set prop() {}   — getter / setter
//   #field = value                  — private field

// ============================================================
//                        END OF NOTES
// ============================================================
