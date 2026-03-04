// Creating an object first
const car = {
	Model : "City",
	Brand : "Honda",
	Colour : "Glistring Black",
	Model_Year : 2026
};

// Updating properties of object
car.Airbags = true;

// Deleting a property from the object
delete car.Airbags;

// Showing the output
console.log(car);