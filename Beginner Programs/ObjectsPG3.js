function Car (brand, model, year, color) {
	this.brand = brand,
	this.model = model,
	this.year = year,
	this.color = color
	this.drive = function() {
		console.log(`You are driving ${this.model}!`)
	}
}

const Car1 = new Car("TATA", "Safari", 2020, "Black");
const Car2 = new Car("Honda", "City", 2024, "Red");
const Car3 = new Car("Toyota", "Tocoma", 2023, "Grey");
const Car4 = new Car("Skoda", "Slavia", 2025, "Matte Black");

Car1.drive(); // Calling the drive method

console.log(Car1.brand);
console.log(Car1.model);
console.log(Car1.year);
console.log(Car1.color);