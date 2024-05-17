// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = 23;
if (x === 23) console.log('Twenty Three');

console.log('Hii, How are you doing all the way!');
*/
// One most important thing of the coding is writing the psuedo-code, how
// will it look like, and then make the code work, by doing different parts by diff parts

// break the problems into sub-problems,
// understand the problem,

// methods inside the functions require the this method to access the local attribute, but
// attributes inside can be accessed after declaration using the 'dot' operator.
/*
function measureKelvin() {
    const measurements = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('Degree celsius')),
    };
    debugger;                                   // "debugger" keyword of javascript is specially to debug it. it will automatically 
                                            // starts the column which is used to debug in the inspection.
    const kelvin = measurements.value + 273;
    return kelvin;
}
console.log(measureKelvin());
*/
// In order to use the objects inside the function, you have to first declare objects, unlike you can simply use variables without
// declaration, otherwise this will throw you an error.

// To debug using console use breakpoints in the resources column and run the script.
// execution will stop at the breakpoint and then you can check one by one, what's going on with the variables there, and
// hence debug the problem.
