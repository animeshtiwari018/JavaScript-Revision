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
