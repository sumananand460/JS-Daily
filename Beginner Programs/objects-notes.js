// ============================================================
//               OBJECTS IN JAVASCRIPT — NOTES
//         Properties | Methods | Patterns | Built-ins
// ============================================================


// ------------------------------------------------------------
// WHAT IS AN OBJECT?
// ------------------------------------------------------------
// An object is a collection of key-value pairs (properties).
// Keys are strings (or Symbols), values can be anything —
// numbers, strings, arrays, functions, even other objects.
//
// Almost everything in JavaScript is an object (arrays,
// functions, dates, etc.), making this one of the most
// fundamental concepts in the language.


// ------------------------------------------------------------
// 1. CREATING OBJECTS
// ------------------------------------------------------------

// a) Object Literal (most common)
const person = {
  name: 'Alice',
  age: 30,
  isAdmin: false,
};

// b) Using the Object constructor (less common)
const car = new Object();
car.brand = 'Toyota';
car.year  = 2022;

// c) Using Object.create() — creates object with a specific prototype
const animal = Object.create(null); // no prototype
animal.type = 'Dog';

// d) Factory Function — a function that returns an object
function createUser(name, age) {
  return { name, age, active: true };
}
const user1 = createUser('Bob', 25);

// e) Constructor Function — used with the 'new' keyword
function Person(name, age) {
  this.name = name;
  this.age  = age;
}
const alice = new Person('Alice', 30);

// f) Class syntax (modern, preferred for blueprints)
class Animal {
  constructor(name, sound) {
    this.name  = name;
    this.sound = sound;
  }
}
const dog = new Animal('Dog', 'Woof');


// ------------------------------------------------------------
// 2. ACCESSING PROPERTIES
// ------------------------------------------------------------

const book = { title: 'Dune', author: 'Frank Herbert', pages: 412 };

// Dot notation (use when key name is known & valid identifier)
book.title;                          // 'Dune'
book.author;                         // 'Frank Herbert'

// Bracket notation (use for dynamic keys or keys with special chars)
book['pages'];                       // 412

const key = 'title';
book[key];                           // 'Dune' — dynamic key lookup

// Accessing a key that doesn't exist returns undefined (no error)
book.genre;                          // undefined


// ------------------------------------------------------------
// 3. ADDING, UPDATING & DELETING PROPERTIES
// ------------------------------------------------------------

const profile = { username: 'dev42' };

// Add a new property
profile.email = 'dev42@mail.com';
profile['joinedYear'] = 2021;

// Update an existing property
profile.username = 'superdev42';

// Delete a property
delete profile.joinedYear;

console.log(profile);
// { username: 'superdev42', email: 'dev42@mail.com' }


// ------------------------------------------------------------
// 4. METHODS (Functions as Properties)
// ------------------------------------------------------------
// When a function is stored as a property of an object,
// it's called a method.

const calculator = {
  value: 0,

  add(n) {
    this.value += n;      // 'this' refers to the object itself
    return this;          // returning 'this' enables method chaining
  },

  subtract(n) {
    this.value -= n;
    return this;
  },

  reset() {
    this.value = 0;
    return this;
  },

  result() {
    return this.value;
  }
};

calculator.add(10).add(5).subtract(3).result();  // 12 — method chaining


// ------------------------------------------------------------
// 5. THE 'this' KEYWORD
// ------------------------------------------------------------
// 'this' refers to the object that is calling the method.
// Its value depends on HOW a function is called.

const user = {
  name: 'Alice',
  greet() {
    console.log(`Hi, I'm ${this.name}`);  // 'this' = user object
  }
};
user.greet();    // "Hi, I'm Alice"

// WARNING: Arrow functions do NOT have their own 'this'.
// They inherit 'this' from the surrounding scope.
const obj = {
  name: 'Bob',
  greet: () => {
    console.log(this.name);   // 'this' is NOT obj — it's the outer scope
  }
};


// ------------------------------------------------------------
// 6. SHORTHAND SYNTAX (ES6+)
// ------------------------------------------------------------

const name = 'Alice';
const age  = 30;

// Property shorthand — when key and variable name are the same
const userA = { name, age };
// same as: { name: name, age: age }

// Method shorthand
const userB = {
  name: 'Bob',
  greet() {                      // instead of greet: function() {}
    return `Hello, ${this.name}`;
  }
};

// Computed property names — dynamic keys
const field = 'score';
const stats = {
  [field]: 99,                   // key becomes 'score'
  [`${field}_max`]: 100          // key becomes 'score_max'
};


// ------------------------------------------------------------
// 7. DESTRUCTURING
// ------------------------------------------------------------
// Extract properties into individual variables cleanly.

const product = { id: 1, title: 'Keyboard', price: 79.99, inStock: true };

// Basic destructuring
const { title, price } = product;
console.log(title);    // 'Keyboard'
console.log(price);    // 79.99

// Rename while destructuring
const { title: productName, price: cost } = product;
console.log(productName);   // 'Keyboard'

// Default values (used if property is undefined)
const { discount = 0 } = product;
console.log(discount);      // 0

// Destructuring in function parameters
function displayProduct({ title, price, inStock }) {
  console.log(`${title} — $${price} | In Stock: ${inStock}`);
}
displayProduct(product);

// Nested destructuring
const order = { id: 101, customer: { name: 'Alice', city: 'Paris' } };
const { customer: { name: customerName, city } } = order;
console.log(customerName, city);   // 'Alice' 'Paris'


// ------------------------------------------------------------
// 8. SPREAD & REST WITH OBJECTS
// ------------------------------------------------------------

const defaults = { theme: 'light', language: 'en', fontSize: 14 };
const userPrefs = { theme: 'dark', fontSize: 18 };

// Spread — merge objects (later keys overwrite earlier ones)
const config = { ...defaults, ...userPrefs };
// { theme: 'dark', language: 'en', fontSize: 18 }

// Spread to clone an object (shallow copy)
const original = { a: 1, b: 2 };
const copy = { ...original };

// Add/override while spreading
const updated = { ...original, b: 99, c: 3 };
// { a: 1, b: 99, c: 3 }

// Rest — collect remaining properties
const { theme, ...rest } = config;
console.log(theme);   // 'dark'
console.log(rest);    // { language: 'en', fontSize: 18 }


// ------------------------------------------------------------
// 9. LOOPING OVER OBJECTS
// ------------------------------------------------------------

const scores = { Alice: 95, Bob: 87, Carol: 91 };

// for...in — iterates over all enumerable keys
for (const key in scores) {
  console.log(`${key}: ${scores[key]}`);
}

// Object.keys()   — returns array of keys
Object.keys(scores);          // ['Alice', 'Bob', 'Carol']

// Object.values() — returns array of values
Object.values(scores);        // [95, 87, 91]

// Object.entries() — returns array of [key, value] pairs
Object.entries(scores);       // [['Alice', 95], ['Bob', 87], ['Carol', 91]]

// Great for combining with array methods:
Object.entries(scores).forEach(([name, score]) => {
  console.log(`${name} scored ${score}`);
});

const passing = Object.fromEntries(
  Object.entries(scores).filter(([_, score]) => score >= 90)
);
// { Alice: 95, Carol: 91 }


// ------------------------------------------------------------
// 10. CHECKING PROPERTIES
// ------------------------------------------------------------

const config2 = { host: 'localhost', port: 3000 };

// 'in' operator — checks own + inherited properties
'host' in config2;                     // true
'toString' in config2;                 // true (inherited)

// hasOwnProperty — checks only own properties
config2.hasOwnProperty('host');        // true
config2.hasOwnProperty('toString');    // false

// Modern alternative: Object.hasOwn()
Object.hasOwn(config2, 'host');        // true


// ------------------------------------------------------------
// 11. OBJECT METHODS (Built-in)
// ------------------------------------------------------------

const source = { x: 1, y: 2 };
const target = { z: 3 };

// Object.assign() — copy properties from source(s) to target
Object.assign(target, source);
// target is now { z: 3, x: 1, y: 2 }

// Object.freeze() — makes object immutable (no changes allowed)
const frozen = Object.freeze({ name: 'constant' });
frozen.name = 'changed';   // silently fails (or throws in strict mode)
console.log(frozen.name);  // still 'constant'

// Object.seal() — prevents adding/deleting props, but allows updating
const sealed = Object.seal({ count: 0 });
sealed.count = 10;        // allowed — updating existing prop
sealed.newProp = 'hi';   // silently fails — no new properties

// Object.keys() / Object.values() / Object.entries() — see section 9

// Object.fromEntries() — convert array of [key, value] pairs to object
const entries = [['a', 1], ['b', 2]];
Object.fromEntries(entries);    // { a: 1, b: 2 }


// ------------------------------------------------------------
// 12. OPTIONAL CHAINING (?.)
// ------------------------------------------------------------
// Safely access deeply nested properties without errors.

const company = {
  name: 'Acme',
  ceo: {
    name: 'Jane',
    address: { city: 'NYC' }
  }
};

company.ceo?.name;                   // 'Jane'
company.cfo?.name;                   // undefined (no error!)
company.ceo?.address?.city;          // 'NYC'
company.ceo?.address?.zip;           // undefined

// Also works for methods
company.ceo?.getEmail?.();           // undefined (no error if method missing)


// ------------------------------------------------------------
// 13. NULLISH COALESCING (??)
// ------------------------------------------------------------
// Provide a fallback when a value is null or undefined.

const settings = { volume: 0, theme: null };

settings.volume ?? 50;        // 0   — 0 is not null/undefined
settings.theme  ?? 'light';   // 'light' — null triggers fallback
settings.lang   ?? 'en';      // 'en'   — undefined triggers fallback

// vs OR operator (||) which also triggers on 0, '', false:
settings.volume || 50;        // 50 (incorrect! treats 0 as falsy)
settings.volume ?? 50;        // 0  (correct!)


// ------------------------------------------------------------
// 14. PROTOTYPES & INHERITANCE (OVERVIEW)
// ------------------------------------------------------------
// Every object has a hidden [[Prototype]] link.
// When you access a property, JS walks up the chain until found.

const base = { greet() { return 'Hello!'; } };
const child = Object.create(base);   // child's prototype = base
child.greet();                       // 'Hello!' — found on prototype

// Class-based inheritance (modern syntax)
class Vehicle {
  constructor(brand) { this.brand = brand; }
  describe() { return `I am a ${this.brand}`; }
}

class Car extends Vehicle {
  constructor(brand, doors) {
    super(brand);          // call parent constructor
    this.doors = doors;
  }
  describe() {
    return `${super.describe()} with ${this.doors} doors`;
  }
}

const myCar = new Car('Honda', 4);
myCar.describe();   // 'I am a Honda with 4 doors'


// ------------------------------------------------------------
// KEY TAKEAWAY
// ------------------------------------------------------------
// Objects are the backbone of JavaScript. They let you:
//   - GROUP related data and behavior together
//   - MODEL real-world things (users, products, settings)
//   - BUILD reusable structures via classes and prototypes
//   - PASS complex data around your app cleanly
//
// Quick reference:
//   Create      →  {}  |  new  |  Object.create()  |  class
//   Access      →  dot notation  |  bracket notation
//   Loop        →  for...in  |  Object.keys/values/entries()
//   Copy/Merge  →  spread { ...obj }  |  Object.assign()
//   Safe Access →  optional chaining ?.
//   Fallback    →  nullish coalescing ??

// ============================================================
//                        END OF NOTES
// ============================================================
