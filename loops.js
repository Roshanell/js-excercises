// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let i = 1;
while (i <= 1 && i <= 5) {
  console.log(i);
  i++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let i = 1;
do while(i <= 1 && i <=5){
    console.log(i)
    i++
}
// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (let i = 1; i <=5; i++ ){
    console.log(i)
}
// something odd happens when I put i++ on it begins to skip count

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

for (let i = 10; i >= 1; i--){
    console.log(i)
}

let i = 1
while(i > 10 ){
    console.log(i)
    i++
    
}

// 
let i = 10
//starts at 10
    while(i <= 10 && i > 0 ){ 
// while i is between 1 and 1-
    console.log(i)
    // console.log i
    i--
    //decrease by one
    
}


let i = 10;
do{
    console.log (i)
    i--
}
while (i<=10 && i>0)

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

for (let i = 7; i < 27; i++){
    console.log(i)
}

let i = 26;
do{
    console.log(i)
    i--
}
while (i <=27 && i>7)

let i=26
while(i < 27 && i > 7){
    console.log(i)
    i--
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.


let i = 10;
while(i >= 10 && i <= 100){
    i += 10;
    console.log(i)
}

for(let i = 0; i >=100; i+=10){
    console.log(i)
}


let i = 0;

do{
    console.log(i)
    i += 10
}
while (i >= 0 && i <=100)
// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour = 1;
while (counterFour < 2) {
  console.log("HELP ME!");
  counterFour--;
}

// This will be an infinite loop because when the computer checks the valaue for counterFour t
//o see if it is less than two. It will always be true since the counter starts at 1. 
//This will cause the counter to keep counting forever.

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

let myFavoriteInterger = 8;
for (i=0; i<9; i++){
    console.log(i)

}
// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

let myFavoriteInterger = 8;
for (i=0; i<9; i++){
    if (i != myFavoriteInterger){
        console.log(i `not my favorite number`)
    } else {
        console.log( i `my favorite number!`)
    }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//

/*There are three types of loops. For, do while. and while loops. We would use them based  
If I know how many times the loop needs to run then I could use a for loop. If I want the loop to run only as many times 
as a condition is met I would use  while loop (basically when I do not know how many times the code will need to be ran). 
When you know you want the code to execute at least one time you would use a do while loop.
*/ 


// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <=3; outsideCounter ++ ) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter > 0;  insideCounter -- ) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}


// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// This was good practice I would say not hard per say, but I did have to look 
//up the syntax for do while loops and while loops as I do not use them often. The nested for loop was challenging. It took me abot 10 minutes to complete.

// Email your file to us or commit your file to GitHub and email us a link.
