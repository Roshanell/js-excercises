// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called prependToString, which accepts two strings.
// The function should return a new string with the second string prepended to the first string.
// Examples:
// prependToString('awesome', 'very') // --> 'veryawesome'
// prependToString('world', 'hello ') // --> 'hello world'
// prependToString('nothing', '') // --> 'nothing'

function prependToString(str1, str2) {
	return str1 + str2;
}

// Exercise 2. Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character.
// The function should return true if the first string includes the character, otherwise it should return false.
// IMPORTANT: Do not use the built in string.includes() function!
// Examples:
// stringIncludes('awesome', 'e'); // --> true
// stringIncludes('awesome', 'z'); // --> false

function stringIncludes(str1, singleCharacter) {
	for (let i = 0; i < str1.length; i++) {
		let checkString = str1.indexOf(singleCharacter);
		if (checkString != -1) {
			return true;
		} else {
			return false;
		}
	}
}

// Exercise 3. Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.
// The function should return the last index at which the character exists or -1 if the character is not found.
// IMPORTANT: Do not use the built in "string".lastIndexOf() function!
// Examples:
// stringLastIndexOf('awesome', 'e'); // --> 6
// stringLastIndexOf('awesome', 'z'); // --> -1
function lastIndexOf(word, char) {
	const i = word.length;

	for (; i > -1; i--) {
		if (word.charAt(i) === char) {
			return i;
		}
	}
	return -1;
}

// Exercise 4. Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove.
// The function should return a new string with the characters removed.
// Examples:
// removeFromString('Elie', 2, 2) // --> 'El'
// removeFromString('Elie', 0, 1) // --> 'lie'
// removeFromString('Hello School', 0, 6) // --> 'School'
// removeFromString('Hello School', 2, 4) // --> 'HeSchool'
// removeFromString('Hello School', 6, 400) // --> 'Hello '

function removeFromString(string, startingIndex, numOfCharToRemove) {
	// start a string
	// tell whhere to start in splice
	// input in splice method
	let newString = string.slice(0, startingIndex);
	let newSring2 = str.slice(startingIndex + numOfCharToRemove);
	return newString + newSring2;
}

console.log(removeFromString("this", 0, 1));

// Exercise 5. Write a function called indexOf, which accepts an array and a number.
// The function should return the first index at which the value exists or -1 if the value is not found.
// IMPORTANT: Do not use the built in array.indexOf() function!
// Examples:
// let arr = [5, 10, 15, 20];
// indexOf(arr, 20); // --> 3
// let arr2 = [1, 2, 3, 4, 5];
// indexOf(arr2, 2); // --> 1
// let arr3 = [1, 2];
// indexOf(arr3, 10); // --> -1

function indexOf(arr, number) {
	for (let index = 0; index < arr.length; index++) {
		// cycles through the arr
		if (arr[index] === number) {
			// if arr item at that index is the same as the number we are looking for
			return index;
			//return that index
		}
	}
	return -1;
}
//else return -1

console.log(indexOf(arr, 20)); // --> 3
console.log(indexOf(arr2, 2)); // --> 1
console.log(indexOf(arr3, 10)); // --> -1

// Exercise 6. Write a function called includes which accepts a collection, a value, and an optional starting index. The function should return true if the value exists in the collection when we search starting from the starting index. Otherwise, it should return false.
// The collection can be a string, an array, or an object. If the collection is a string or array, the third parameter is a starting index for where to search from. If the collection is an object, the function searches for the value among values in the object; since objects have no sort order, the third parameter is ignored.
// Examples:
// includes([1, 2, 3], 1) // --> true
// includes([1, 2, 3], 1, 2) // --> false
// includes([1, 2, 3], 6) // --> false
// includes({ 'a': 1, 'b': 2 }, 1) // --> true
// includes({ 'a': 1, 'b': 2 }, 'a') // --> false
// includes('abcd', 'b') // --> true
// includes('abcd', 'e') // --> false
// includes('abcd', 'a', 2) // --> false

function includes(collection, value, index = 0) {
	//check type of collection
	let type = typeof collection;
	//because typeof array was giving back 'object', I added a
	//method to check if collection is an array
	let isArr = Array.isArray(collection);
	//if string or array - iterate through with a for loop
	if (type === "string" || isArr) {
		//for loop - starting index = index
		for (let i = index; i < collection.length; i++) {
			//return true if collections has the value
			if (collection[i] === value) {
				return true;
			}
		}
	} else if (type === "object") {
		//using for in loop to iterate through object
		for (let item in collection) {
			if (collection[item] === value) {
				return true;
			}
		}
	}
	//otherwise return false
	return false;
}

// Examples:
console.log(includes([1, 2, 3], 1)); // --> true
console.log(includes([1, 2, 3], 1, 2)); // --> false
console.log(includes([1, 2, 3], 6)); // --> false
console.log(includes({ a: 1, b: 2 }, 1)); // --> true
console.log(includes({ a: 1, b: 2 }, "a")); // --> false
console.log(includes("abcd", "b")); // --> true
console.log(includes("abcd", "e")); // --> false
console.log(includes("abcd", "a", 2)); // --> false
