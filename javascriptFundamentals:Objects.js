// Hello Object
// Write the code, one line for each action:

// Create an empty object user.
let user = {};
// Add the property name with the value John.
user.name = "John";
// Add the property surname with the value Smith.
user.surname = "Smith";
// Change the value of the name to Pete.
user.name = "Pete";
// Remove the property name from the object.
delete user.name;
console.log(user);

// Check for Emptiness

function isEmpty(obj) {
	for (item in obj) {
		return false;
	}
	true;
}

//  sum object properties
let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

let values = Object.values(salaries);
let sum = values.reduce((accumulator, val) => {
	return accumulator + val;
});
console.log(sum);

// Multiply Numeric Property Values by Two
let menu = {
	width: 200,
	height: 300,
	title: "My menu",
};

function MultiplyNumeric(obj) {
	let val = Object.values(obj);
	if (isNaN(val) === false) {
		const multiply = val.map((num) => num * 2);
	}
	console.log(multiply);
	return multiply;
}
console.log(MultiplyNumeric(menu));
