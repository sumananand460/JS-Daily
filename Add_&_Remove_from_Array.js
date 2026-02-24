/**
 * ADDING AND REMOVING FROM AN ARRAY
 * These methods modify the existing 'products' list.
 */

const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Mouse', price: 25 }
];

// --- 1. PUSH: Add a new item to the END ---
// Use this to "add to cart."
products.push({ id: 5, name: 'Monitor', price: 200 });

// --- 2. UNSHIFT: Add a new item to the FRONT ---
// Good for "featured" or newest items.
products.unshift({ id: 0, name: 'Gift Card', price: 10 });

// --- 3. POP: Remove the LAST item ---
// Removes 'Monitor' (the last one we added).
products.pop();

// --- 4. SHIFT: Remove the FIRST item ---
// Removes 'Gift Card'.
products.shift();

// --- 5. SPLICE: Remove a specific item by index ---
// Syntax: .splice(index, howMany)
// Let's remove the item at index 1 ('Mouse').
products.splice(1, 1);

/**
 * FINAL STATE:
 * products -> [ { id: 1, name: 'Laptop', price: 1000 } ]
  */