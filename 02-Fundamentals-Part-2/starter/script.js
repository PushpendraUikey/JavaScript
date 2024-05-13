'use strict';
// enables strcit mode for the code and has to be the first line as well as no code before this to enable, comments are allowed
// it forbids us to do certain things and shows visual errors to us the developers.

//let hasDriverslicense = false;
//const passTest = true;

// if (passTest) hasDriverlicense = true;  #variable not defined error
//if (hasDriverslicense) console.log(`I can drive.`)

//const interface = 'Audio';        # private error
// const private = 23;              #private error



/*  Function */
/*
function logger() {
    console.log('My name is Pushpendra.')
}

logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}
const juice = fruitProcessor(5, 9);
console.log(juice);
console.log(fruitProcessor(5, 0));
*/

/*
const age1 = calcAge1(2005);
function calcAge1(birthYear) {
    return 2024 - birthYear;
}                                       // function can be called before initialisation then, we will call it.
console.log(age1);
const calcAge2 = function (birthYear) { // This function can't be called before initialisation
    return 2024 - birthYear;            // this definition also allows us to store function into a variable
}                                       // This is a type of function without name but works when called with calcAge2
const age2 = calcAge2(2005);
console.log(age1, age2);
*/
/*
// Arrow Function
const clacAge3 = birthYear => 2024 - birthYear;
//Parameter   // return value.
const age3 = clacAge3(2005);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstname) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return `${firstname} retires after ${retirement} years.`;
}

console.log(yearsUntilRetirement(2005, "Pushpendra"))
*/
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`
    return juice;
}

console.log(fruitProcessor(4, 5));
*/

// Arrays
/*
const friend1 = "Pushpendra";
const friend2 = "Mohit";
const friend3 = "Peter";

const friends = ['Pushpendra', 'Mohit', 'Peter'];
console.log(friends);

const years = new Array(1998, 1999, 2000, 2001, 2004, 2023)
console.log(years);

console.log(friends.length);
console.log(years.length);
friends[2] = 'Jonas';
const firstName = 'Pushpendra';
const jonas = [firstName, 'Schmedtmann', 2024 - 2005, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);
*/
// we can perform various tasks on individual values of array but can't do 
// on all at once,

/*
//--------------- Adds element
const friends = ['Ajay', 'Steven', 'Peter', 'Pushpendra'];
const newLength = friends.push('Nishad');         // Push function adds up the one more element in array
// Push function gives the length of newarray formed alongwith the addidng element 
console.log(friends);
console.log(newLength);

let leng = friends.unshift('Shubham');
console.log(friends);
console.log(leng);
// push() adds in the end but the unshift() adds in the beginning.

//----------------Remove elemetns
let popped = friends.pop();
console.log(popped);
console.log(friends);
// pop function removes the element from the end

let poppedFirst = friends.shift();   // remove the first element
console.log(poppedFirst);
console.log(friends);


//--------------------------Finding the index of any element.----------
console.log(friends.indexOf('Peter'))// index of function gives the index of 
// passed argument, if not exist then gives -1

//-------------------------Checking the presence of any element in an array----------
console.log(friends.includes('Pushpendra'))
// includes() function returns true if the element is present
// otherwise it returns false, if not present

if (friends.includes('Pushpendra')) {
    console.log(`You are going to win any contest, not becuase Pushpendra is 
    is so much powerful, which he is acutally, but he has a lot of strategies 
    to win as well.`)
}
*/

// IMPORTANT-------- Length of any array in JAVASCRIPT can be varied.
// No need to define an array with it's length, just initialise the zeroth index.
/*
const PushpArray = [
    'Pushpendra',
    'IITBombay',
    'Professor',
    ['Michael', 'Peter', 'Steven']
];

//-------------------Object ---------------...
const pushp = {
    Name: 'Pushpendra',
    lastName: 'Uikey',
    Age: 19,
    College: 'IITB',
    Branch: 'CSE',
    GraduationYear: '27'
};      // Objects contains Key-Value pair
// NO Order
console.log(pushp);

// Fetching the properties of object using dot and brackets
console.log(pushp.Age);
console.log(pushp['College']);
// edge the square bracket attribute has is that, we can put any
// expression to put inside the square bracket.
const lt = 'Graduation';
const nt = 'Name';
console.log(pushp[`${lt}Year`]);
console.log(pushp['last' + nt]);

const intresetedIn = prompt(`What do you want to know about Pushpendra? Chosse
between Name, lastName, Age, College, Branch, Graduation.`);

if (pushp[intresetedIn]) {
    console.log(pushp[intresetedIn]);
} else {
    console.log(`Wrong request! Choose between Name, lastName, Age, College, Branch, Graduation.`);
}

//------------Adding properties
pushp.location = "Mumbai";
pushp['linkedIn'] = "@pushpatheKing";
pushp.friends = ['Ajay', 'Kirti', 'Mohit', 'Rahul'];
console.log(pushp)

console.log(`${pushp.Name} has ${pushp.friends.length} friends and his best friend is ${pushp.friends[3]}.`);
*/
// In objects you get the values with the help of keys


//---------------------------------- Object methods ----------
/*
const pushp = {
    Name: 'Pushpendra',
    lastName: 'Uikey',
    Age: 19,
    College: 'IITB',
    Branch: 'CSE',
    GraduationYear: '27',
    calcAge: function (birthYear) {
        return 2024 - birthYear;
    }
};
pushp.location = "Mumbai";
pushp['linkedIn'] = "@pushpatheKing";
pushp.friends = ['Ajay', 'Kirti', 'Mohit', 'Rahul'];

console.log(pushp);
console.log(pushp.calcAge(2005));
console.log(pushp.calcAge(2000));
//--------------------------//
console.log(pushp.calcAge(1998));
console.log(pushp['calcAge'](2000));
// Above givens are just two types to call a method inside an Object.
*/
/*
const pushp = {
    Name: 'Pushpendra',
    lastName: 'Uikey',
    College: 'IITB',
    birthYear: 2005,
    Branch: 'CSE',
    GraduationYear: '27',
    calcAge: function () {
        console.log(this);
        this.Age = 2024 - this.birthYear;
        return this.Age;
    }
};
pushp.location = "Mumbai";
pushp['linkedIn'] = "@pushpatheKing";
pushp.friends = ['Ajay', 'Kirti', 'Mohit', 'Rahul'];
console.log(pushp);
console.log(pushp.calcAge());
// this------------- it is similar to self of python, it is used to
// access the it's own attributes, and we get rid of the name of object
// Here if you pass arguments which is quite unnecessary then it won't do 
// anything with the argument passed to it.
console.log(pushp);
// Using this we can create new key-Value pair inside the object.

console.log(`${pushp.Name} is a first year UnderGraduate at ${pushp.College}
 in ${pushp.Branch} department, and he has ${pushp.Age > 18 ? "a" : "no"} driver license.`);
// Beware while using string literals, because we can only use expression 
// inside those curly braces, and ternary operator is an expression.
*/

// ----------------------- For loop -------------------------//
// for loop keeps running until the condition is true. and it is similar to the C++ syntax of for loop

for (let rep = 1; rep <= 3; rep++) {
    console.log(`Doing something new for the ${rep} time.`);
}
const types = [];
// Looping through Arrays is same as we do in C++, using the INDEXING-METHOD and all
const PushpArray = [
    'Pushpendra',
    'IITBombay',
    'Professor',
    ['Michael', 'Peter', 'Steven']
];
for (let i = 0; i < 4; i++) {
    console.log(PushpArray[i]);
    if (typeof PushpArray[i] == 'object') continue;
    types[i] = typeof PushpArray[i];  // You can push elements in an array as well, types.push(typeof PushpArray[i])
}
console.log(types);
console.log(PushpArray[3]);
// Similarly you can think upon the break, similar execution but it stops the loop

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end.......!');
}

const x = 5;
