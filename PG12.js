// Variable Scope in JavaScript
// Global scope: variables declared outside any function are in the global scope and can be accessed from anywhere in the code
// Function scope: variables declared inside a function are in the function scope and can only be accessed within that function
// Block scope: variables declared with "let" or "const" inside a block (e.g., inside an if statement or a loop) are in the block scope and can only be accessed within that block
let globalVar = "I'm available everywhere";

function myFunction() {
    let functionVar = "I only exist inside this function";
    const alsoScoped = "Me too";
    
    console.log(globalVar);  // ✅ Works
    console.log(functionVar); // ✅ Works
    console.log(alsoScoped); // ✅ Works
}

myFunction();

/* 
myFunction();
console.log(globalVar);  // ✅ Works
console.log(functionVar); // ❌ Error! Not defined outside the function
console.log(alsoScoped); // ❌ Error! Not defined outside the function
*/