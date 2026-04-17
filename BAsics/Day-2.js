// ********String********
let newString = "This is a syntax to print string"
console.log(newString);

console.log(newString.length);
console.log(newString.toUpperCase());
console.log(newString.toLowerCase());
console.log(newString.includes('syntax'));
console.log(newString.charAt('2'));

// in Slice method of js we can even use -values to slice from back or reverse 
console.log(newString.slice(-40, 5));
console.log(newString.slice(0,5));

console.log(newString.substring(0,5));
console.log(newString.replace("string", "String"));


let isUSer = "  Animesh     "
console.log(isUSer.trim());


// ***********Number and Maths***************
const newNumber = new Number(100);
console.log(newNumber); 
console.log(newNumber.toString());
console.log(newNumber.toString().length);

// *****toFixed*****
const anotherNumber = 100.345;
console.log(anotherNumber.toFixed());
console.log(anotherNumber.toFixed(1));
// so toFixed is used to round off the number after the decimeal value we have to pass in the argument how much number we need after the decimal value 
// **Important:- toFixed always return String value after the conversion
const firstNum = 100.456;
const y = firstNum.toFixed(); 
// console.log(typeof y);  /* String */
console.log(Number(y));
console.log(typeof y); 
console.log(typeof firstNum); /* Number */

const finalResult = Number((100.67).toFixed());
console.log(finalResult);
console.log(typeof finalResult);

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));
