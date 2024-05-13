/*
let js = "Awesome";
console.log(24 * 23 - 37 * 23);
console.log("Jonas")
console.log(23)
let friend = "Ajay Patle";
console.log(friend)
*/

// Number: floating point numbers, for decimal and integers
// String: used inside single or double quotes to distinguish them from variable
// Boolean: true or false
// Undefined: simply just declared but not yet defined; ex let person;
// Null: also means empty value
// Symbol: unique and cannot be changed data type.
// BigInt: larger than that can be hold by number
//                   Javascript allows you to have dynamic typing means that you don't need to mention datatype explicitly
//                  You can change the type of data any variable holds inside it
//                      You can change the content of a variable
/*
    Comments in Javascript are same as in C++
*/

/*
let booL = true;
console.log(booL);
console.log(typeof (booL));
booL = 34;
console.log(typeof booL);
booL = "Pushpendra";
console.log(typeof booL);

// undefined
let year;
console.log(year);
console.log(typeof year);

// typeof null should return null but it doesn't because, of bug in javascript which is not rectified till yet:- it returns object
console.log(typeof null)
*/

// Variable Declaration
//let age = 30
//age = 31 // mutate the data

// const birthYear = 2004;
// birthYear = 2005;
// Empty const variable are not allowed
// const val;       this declaration will result in an error.

// avoid using var but can be used to delcare variable
// var job = "programmer";
// job = "Teacher";

// It is possible to create variable without even declaring it, but not a good practice
// becuase javascript gives it a global scope

// lastname = "Uikey";
// console.log(lastname, job, age);

// +: addition, -: subtraction, *: multiplication, /: division, **: exponential, +: concatenate string, =: assignment operator

// check the operator precedence from mdn operator precedence page
// Also check the order of execution or operator (L to R) or (R to L)

// let markBMI = 78 / 1.69 ** 2, JohnBMI = 92 / (1.95 * 1.95);
// let markHigherBMI = markBMI > JohnBMI;
// console.log(markHigherBMI);
/*
markBMI = 95 / 1.88 ** 2, JohnBMI = 85 / 1.76 ** 2;
markHigherBMI = markBMI > JohnBMI;
console.log(markHigherBMI);
*/
// if (markHigherBMI) {
//  console.log("Mark's BMI(" + markBMI + ") is higher than John's BMI(" + JohnBMI + ").")
// }
// else {
//  console.log("Mark's BMI(" + markBMI + ") is lower than John's BMI(" + JohnBMI + ").")
// }


// Template literals: We can always manually concatenate strings using + operator but yeah, using template literals is easy.
let firstName = "Pushpendra";
let university = "IITB";

const description = `I'm ${firstName}, currently studying at ${university}!`;

console.log(description);
// Using multiline of strings using Template Literals
console.log(`This is a string
with multiline                              
features, Yeah I can actually write
a multiline code without using that "\\n"`);         // Advantage of template literals over traditional string concatenation.

// Truthy values are those values which on conversion to boolean gives "True".
// Similar logic goes for falsy value "False". some examples are: 0, null, undefined, '', NaN 

// For performing calculation on different datatypes we use type coercion. 
let x = 23;
x = x + "";
console.log(x);

x = x + 4;
console.log(x);
x = x - 9;
console.log(x)
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(''))
console.log(Boolean(NaN))
console.log(Boolean(undefined))

//Type coercion is used to implicitly change some datatype by Javascript 

//const favourite = Number(prompt("What is your favourite number?"));

//console.log(favourite);

//  "===" is used to check equality of data as well as type
//  "==" checks data, if possibly can be true with coercion
/*if (favourite !== 23) {             // This checks without type coercion.
    console.log("Why not 23?");
} else {
    console.log("Number is 23");
}
*/
// Statements are those which donot produces the value on their own. Ex: if-else statement.
// Expressions are those which produces the value in their own. Ex: 23 + 389

console.log(`I am ${2024 - 2005} year's old.`);  // we can put only expression inside the $ and not the statement.

// Conditional
const age = 32
age >= 18 ? console.log(`You're allowed to drink wine.`) : console.log(`You're not allowed to drink wine.`)