// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async is done");
//     resolve(); /*we have to add this to run then */
//   }, 1000);
// }).then(function () {
//   console.log("Async 1 is resolved");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async 3 is done");
//     resolve({
//       username: "Animesh Tiwari",
//       email: "animeshtiwari178@gmail.coms",
//     });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log("user is called");
//   console.log(user.username);
// });

// const URL = fetch(
//   "https://api.openweathermap.org/data/2.5/weather?units=metric&q=",
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Error", error));

// const user = {
//   name: "Animesh",
//   age: 19,
//   city: "Jaipur",
// };

// // without destructuring
// const obj1 = user.name;
// const obj2 = user.age;
// const obj3 = user.city;

// // with destructuring
// const { name, age, city } = user;
// console.log(name, age, city);

// Spread operators
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1, 6, 7, 8];
// console.log(arr2);

// Rest operators
// const arr1 = (1, 2, 3, 4);
// const arr2 = [5, 6, 7, ...arr1];
// console.log(arr2);

const str = "hello";
console.log(...str);

const arr1 = [1, 2, 3, 4];
console.log(...arr1);
