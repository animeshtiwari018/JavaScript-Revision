// const mySym = Symbol("key");

// const user = {
//   name: "Animesh Tiwari",
//   "full name": "Animesh Tiwari",
//   location: "Jaipur",
//   isLoggedIn: false,
//   age: 19,
//   email: "animeshtiwari178@gmail.com",
//   lastLoggedIn: ["Monday", "Tuesday"],
//   [mySym]: "myKey",
// };

// console.log(user.email);
// console.log(user.age);
// console.log(user[mySym]);
// // // now it is not possible to accesss full name using . so here we use
// console.log(user["full name"]);

// user.email = "animesh@microsoft.com"
// console.log(user)
// Object.freeze(user)

// user.email = "animesh@google.com";
// console.log(user)

// ****Function using objects

// this only add 1 value in num 1 = 20;
// const calculatePrice = function (num1) {
//   return num1;
// };
// console.log(calculatePrice(20, 40));

// so this is called rest operator (...num) rest and spread both of them has same syntax
// const newCalculatePrice = function (...num1) {
//   return num1;
// };
// console.log(newCalculatePrice(20, 40));

// const user = {
//   firstName: "Animesh",
//   lastName: "Tiwari",
// };

// const output = function (otherOutput) {
//   console.log(`The first name of user is ${otherOutput.firstName}`);
// };

// output(user);
