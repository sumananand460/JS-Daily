// A fucntion to calculate the area of a circle given its radius
function calculateCircleArea(radius) {
    if (radius < 0) { // Check for negative radius
        return "Radius cannot be negative."; // Return an error message if the radius is negative
    }
    const area = Math.PI * Math.pow(radius, 2); // Calculate the area using the formula A = πr^2
    return area; // Return the calculated area
}
