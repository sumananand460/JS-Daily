/**
 * **JAVASCRIPT IMPORTANT NOTES**
 * A quick reference for core concepts and best practices.
 */

// --- 1. VARIABLES ---
// **const**: Use for values that never change. Safest default.
// **let**: Use for values that will be reassigned.
// **var**: Avoid this. It is outdated and can cause bugs.

// --- 2. EQUALITY ---
// **=== (Strict)**: Checks both value and type. ALWAYS use this.
// **== (Loose)**: Tries to convert types before comparing. Avoid it.

// --- 3. FUNCTIONS ---
// **Arrow Functions**: Modern, shorter syntax. 
// Example: const greet = () => console.log("Hello");

// --- 4. STRINGS ---
// **Template Literals**: Use backticks (`) and ${} to insert variables.
// Example: `Total is: ${price}`

// --- 5. LOGIC & TYPES ---
// **Truthy/Falsy**: Values like 0, "", null, and undefined are **false**.
// **Objects/Arrays**: Even empty ones [] {} are **true**.

// --- 6. ASYNC CODE ---
// **async/await**: Used to handle tasks that take time (like fetching data).
// It prevents the browser from freezing while waiting for a result.

// --- 7. DEBUGGING ---
// **console.log()**: Your primary tool to check values in the console.