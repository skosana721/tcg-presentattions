// variables

var firstName = "Dell";

const lastName = "Peterson";

// string concatenate
var fullName = firstName + " " + lastName;
var string = "JavaScript" + " is " + "boring";

// data type

var number = 2;
var boolean = true;
var string = "vs code";
var Undifined = undefined;
var NUll = null;
var array = [firstName, lastName];
var object = { age: 55, firstName: "Wongani", lastName: ".Com" };

var declare;
declare = 7;

// decrement and increment

var value = 8;
var increment = value++;
var decrement = value--;

//equality operators

var equal = 8 == "8";
var strictly = 8 === "8";
var inequality = 2 !== "2";

// function

function addNumbers(a, b) {
  return a + b;
}
addNumbers(2, 5);

// array method
let arr = [2, 5, 8, "string", true];

arr.unshift(1);
arr.shift();
arr.push(false);
arr.pop();

// access an array
// array 0 index based

console.log(arr[2]);
console.log(arr.length - 1);
function combineStrings(str1, str2) {
  let string = str1 + str2;
  let array = [];
  array.push(string);

  return array;
}
combineStrings("Combine", " Strings");

// if statements
let state = "tcg";
// if (state !== "tcg") {
//   console.log("true");
// } else {
//   console.log("false");
// }

// for loop

// for (let k = 0; k < 10; k++) {
//   console.log("Hello World");
// }

let sentence = "The boss was angry and shouted, “Why isn’t he here? He hasn’t finished that report yet!”";
console.log(sentence);
