// Day 01: Variables & Data Types

// Tasks/Activities:

// Activity 1: Variable Declaration

/* Task 1 */
var num = 20;
console.log(num); // 20

/* Task 2 */
let username = "sourabh";
console.log(username); // sourabh



// Activity 2: Constant Declaration

/* Task 3 */
const isBoolean = true;
console.log(isBoolean); // true



// Activity 3: Data Types

/* Task 4 */
let number = 100;
let string = "hello world!";
let boolean = false;
let object = {
  username: "John Doe",
  age: 25,
  location: "New York",
};
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(typeof number); // number
console.log(typeof string); // string
console.log(typeof boolean); // boolean
console.log(typeof object); // object
console.log(typeof array); // array



// Activity 4: Reassigning Variables

/* Task 5 */
let a = 5;
console.log(a); // 5

a = 10;
console.log(a); // 10



// Activity 5: Understanding "Const"

/* Task 6 */
const newUser = "hitesh";
newUser = "john";
console.log(newUser); // TypeError: Assignment to constant variable.
