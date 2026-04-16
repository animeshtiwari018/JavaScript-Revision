// ******************Operations*************************

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2); 
console.log(2/2);
console.log(2%2);

// output of this will be 122 because 1 is also get converted in string becuase of two strings are there and it get concanate with them
console.log(1 + "2" + "2");
console.log("1" + 2 + "2"); /* output: 122 */
console.log(1 + 2 + "2");   /* output: 32 (because of operator presedence*/

// increment operator
//  ****Prefix operation****
let value = 50;
console.log(++value);
console.log(value);
// it increase first and then use

let num1 = Symbol("5");
let num2 = Symbol("5");
// console.log(num1 === num2);

// ****Postfix operation****
// it increase later
console.log(value++);
console.log(value);

// ********DataTypes********

// Primitive-7 (Number, String, Boolean, bigInt, null, undefined, symbol)

// This is the the example of undefined datatypes where variable is defined but it's value is empty
let userName;
console.log(userName);

// example of symbol
let num1 = Symbol("5");
let num2 = Symbol("5");
console.log(num1 === num2);

// Refrence (Non-Primitive) (Array, Objects, Functions)
//              // ****Array****
let users = ["Animesh","Hitesh","Bravo","Shubh"];
console.log(users);

//    ****Objects****
const userData = {
<<<<<<< HEAD
  user: "Animesh",
  id: 101,
  email: "animeshtiwari@gmail.com",
};
console.log(userData);

// ****Function****
let myFunction = function () {
  for (i = 0; i < 10; i++) {
    console.log("Animesh Tiwari");
  }
};
myFunction();



console.log("animesh Tiwari");
=======
    user = "Animesh";
    id = 101;
    email = "animeshtiwari@gmail.com"
}
console.log(userData);
>>>>>>> 1608e489b1a20bcf8aeda08f3633926c5b6f873b
