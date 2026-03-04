/**
 * REAL-WORLD ARRAY METHOD EXAMPLES
 * Let's use a list of products to see these in action.
 */

const products = [
  { id: 1, name: 'Laptop', price: 1000, category: 'Tech' },
  { id: 2, name: 'Mouse', price: 25, category: 'Tech' },
  { id: 3, name: 'Shoes', price: 80, category: 'Fashion' },
  { id: 4, name: 'Keyboard', price: 50, category: 'Tech' }
];

// --- 1. FILTER: Get only 'Tech' items ---
// Creates a new array with just the items that match the category.
const techItems = products.filter(item => item.category === 'Tech');

// --- 2. MAP: Get an array of just the names ---
// Transforms the objects into a simple list of strings.
const productNames = products.map(item => item.name);

// --- 3. FIND: Look for a specific item by ID ---
// Returns the single object that matches the ID.
const specificItem = products.find(item => item.id === 3);

// --- 4. REDUCE: Calculate the total price ---
// Adds up all prices into one single number.
const totalPrice = products.reduce((sum, item) => sum + item.price, 0);

// --- 5. SOME: Check if any item is expensive ---
// Returns true if at least one item is over $500.
const hasExpensiveItem = products.some(item => item.price > 500);

/**
 * RESULTS:
 * techItems       -> [ {Laptop...}, {Mouse...}, {Keyboard...} ]
 * productNames    -> ["Laptop", "Mouse", "Shoes", "Keyboard"]
 * specificItem    -> { id: 3, name: 'Shoes'... }
 * totalPrice      -> 1155
 * hasExpensiveItem -> true
 */