// Week 1 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
// Underneath the function, write the line of code that runs the function.

function logGreeting() {
	console.log("Hello!");
}

// Exercise 2. Define a function called getName() that *returns* a string that is your name.
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.
function getName(name1) {
	return name1;
}
console.log(getName("Roshanell"));
// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2().

function logGreeting2(){
    function myName(name){
        let name = "Roshanell"
    }
 return {
   `Hello! my name is ${name}.`
}


// Exercise 4. Write a function that takes 3 parameters that are all numbers.
// The function should return the sum of the 3 numbers.
// Then write some function calls you would use to test your function.

function takesInThree(num1,num2,num3){
return num1 + num2 + num3
}

console.log(takesInThree(1,2,3)) // 3
console.log(takesInThree(4,5,6)) // 15


// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
// Otherwise it should return false.
// Then write some function calls you would use to test your function.

function checkForDiscounts(age){
    if(age <= 14){
        // console.log(true)
        return true
    } else if (age >= 65){
        // console.log(true)
        return true
    } else{
        // console.log(false)
        return false
    }
}

console.log(checkForDiscounts(14)) // true
console.log(checkForDiscounts(22)) // false
console.log(checkForDiscounts(67))// true


// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
// The function should print the string the given number of times.
// Then write some function calls you would use to test your function.
function takesInTwo( number, string){
 return string.repeat(number)
}

console.log(takesInTwo(1, "Just Keep Swimming! "))
console.log(takesInTwo(4, "You got this! "))
console.log(takesInTwo(9, "Whoop Whoop! "))

// Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
	return p1 * 2;
}
const y = 4;
const z = mysteryFunction1(y);
console.log("The value of y is " + y);
console.log("The value of z is " + z);

// Without running the code, write down in a comment:
// 1. What mysteryFunction1 does

// mysteryFunction1 multiplies a mvairable by two.

// 2. What prints out for the value of y
// 8

// 3. What prints out for the value of z

// y* 2 + y*2
// 16

// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?

// Exercise 8. Read the following code (don't run it yet)
function mysteryFunction2(p1, p2) {
	const x = p1 - p2;
	return x;
}
const a = mysteryFunction2(10, 4);
const b = mysteryFunction2(a, 1);
console.log("The value of a is " + a);
console.log("The value of b is " + b);

// Without running the code, write down in a comment:
// 1. What mysteryFunction2 does
// 2. What prints out for the value of a
// 3. What prints out for the value of b
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?

// Exercise 9. This exercise is to practice reading the documentation for functions.
// String.split() is a function in the JavaScript standard library that you can use in your code.
// Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Try to use it to solve the following challenges:



// Here's a string I made representing my grocery list.
// Using split() and groceryList, make an array of my grocery list items
const groceryList = "eggs, carrots, orange juice";
let arrOfGroceryList = groceryList.split(" ")


console.log(arrOfGroceryList)

// Here's a string I made representing my morning schedule.
// Using split() and mySchedule, make an array of the *first 2* things I do in the morning
// There are multiple ways to do this, but try doing it using only the split() function.
const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";



const groceryList = "eggs, carrots, orange juice";
let arrOfGroceryList = groceryList.split(" ", 2)


console.log(arrOfGroceryList)



// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//
// This was fairly easy to me. Numbers 3 and seven ntripped me up. It also was my first time using the split method with a sperator.
// Email your file to the course staff,
// or commit your file to GitHub and email us a link.
