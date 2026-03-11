// Q - Create a function that prints a triangle pattern
// Function to print a triangle of a given height
function printTriangle(height) {
    // The variable "row" is declared inside the outer loop, so it is re-initialized to an empty string for each new row of the triangle.
    // for loop to iterate through each level of the triangle
    for (let i = 1; i <= height; i++) {
        let row = "";
        // Second for loop to add the appropriate number of asterisks for the current level
        for (let j = 1; j <= i; j++) {
            row += "*"; 
        }
        console.log(row);
    }
}