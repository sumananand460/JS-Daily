// Creating a method in Object

let person = {
	firstName : "Suman",
	lastName : "Anand",


	// Method `fullName()`
	fullName : function() {
		return this.firstName + " " + this.lastName;
	},


	// Method greet()
	greet() {
		return "Hello, I am " + this.firstName;
	}
};

console.log(person.greet());
console.log(person.fullName());

