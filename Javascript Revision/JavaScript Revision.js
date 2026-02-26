// This is the Whole Javascript Revision for all the basic javascript
// concepts.

// For Printing in console
console.log("Hello world");

// Variables
let name = "Abhinav"; // Values can be changed in let variables
const pi = 3.14; // Values cannot be changed in const variables
// We Not Use VAR anymore, because it used not to give error on multiple variables with same name
var age = 25;

// data types
// Array
let array = [1, 2, 3, 4, 5];
let dictionary = {a: 123, b: 456, c: 789};

console.log("Standard For Loop")
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log("For Each Loop")
array.forEach(element => {
    console.log(element);
});

console.log(dictionary.c);
// numbers, boolean, string, null, undefined

// Time out function
// It runs after a specified timeout
setTimeout(() => {
    console.log("This is a timeout function");
}, 2000); // 2000 milliseconds = 2 seconds
console.log("This will be printed before the timeout function");