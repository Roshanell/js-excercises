// Week 3 - Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called keys, which accepts an object and returns an array of all of the keys in the object.
// IMPORTANT: Do not use the built in Object.keys() function!

// let obj = { a: 1, b: 2, c: 3 };
// let obj2 = { first: "Matt", last: "Lane" };
// let obj3 = {};

function keys(obj, newArr) {
	const arr = Object.entries(obj);

	let arr1 = [];
	// initalize a new empty
	for (let i = 0; i < arr.length; i++) {
		// loopmthrough each item in arr
		arr1.push(arr[i][0]);
		// push the first item in each arr to the empty arr
	}
	return arr1;
}

console.log(keys(obj)); // ["a", "b", "c"]
console.log(keys(obj2)); // ["first", "last"]
console.log(keys(obj3)); // []

// Exercise 2. Write a function called values, which accepts an object and returns an array of all of the values in the object.
// IMPORTANT: Do not use the built in Object.values() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// values(obj); // [1,2,3]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// values(obj2); // ["Matt", "Lane", true]
// let obj3 = {};
// values(obj3); // []

let obj = { a: 1, b: 2, c: 3 };
let obj2 = { first: "Matt", last: "Lane", isDogOwner: true };
let obj3 = {};

function values(obj, newArr) {
	const arr = Object.entries(obj);

	let arr1 = [];
	// initalize a new empty
	for (let i = 0; i < arr.length; i++) {
		// loopmthrough each item in arr
		arr1.push(arr[i][1]);
		// 		arr1.push(arr[i][0]);
		// push the first item in each arr to the empty arr
	}
	return arr1;
}

console.log(values(obj)); // [1,2,3]
console.log(values(obj2)); // ["Matt", "Lane", true]
console.log(values(obj3)); // []

// Exercise 3. Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.
// IMPORTANT: Do not use the built in Object.entries() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// entries(obj);
// [["a",1], ["b",2], ["c",3]]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// entries(obj2);
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
// let obj3 = {};
// entries(obj3); // []

let finalArr = [];
function entries(obj) {
	let keys = Object.keys(obj);
	// define what keys are
	let values = Object.values(obj);
	//define what values are
	// console.log(keys, values)
	let i,
		l = Math.min(keys.length, values.length);
	// define what i and l are gets the least length

	for (let i = 0; i < l; i++) {
		// iterates through arr
		finalArr.push([keys[i], values[i]]);
		// push each instance of key and value pair
		// console.log(finalArr)
	}
	// finalArr.push(...keys.slice(l), ... values.slice(l))
	return finalArr;
}

//console.log(entries(obj));
// [["a",1], ["b",2], ["c",3]]
//console.log(entries(obj2));
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
//console.log(entries(obj3)); // []

// Exercise 4. Write a function called pluck, which takes an array of objects and the name of a key.
// The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.
// Examples:
// pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name')
// ["Tim", "Matt", "Elie"]
// pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner')
// [true, false, undefined]

//QUESTIONS why isn't my flatten method working and why can't I just use obj.values and get it over with

let arr2 = [];
function pluck(arrOfObj, nameOfKey) {
	for (let i = 0; i < arrOfObj.length; i++) {
		let values = Object.values(arrOfObj[i]);
		console.log(values);
		arr2.push(values);
		//original did not work two lines did not work
		//   values = values.push(Object.values(arrOfObj[i]))
		// const flatArr2 = arr2.flat(Infinity)
		// console.log(arr2.flat(2))
	}
	return arr2;
}
console.log(
	pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }], "name")
);

// Exercise 5. Write a function called stringFromObject that generates a string from an object's key/value pairs.
// The format should be "key = value, key = value".
// Each key/value pair should be separated by a comma and space except for the last pair.
// Examples:
// stringFromObject({ a: 1, b: '2' });
// "a = 1, b = 2"
// stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
// "name = Elie, job = Instructor, isCatOwner = false"
// stringFromObject({}); // ""

// Exercise 6. Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
// The function should return an array with the following format: [lowestKey, highestKey]
// Examples:
// minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]
// minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]
