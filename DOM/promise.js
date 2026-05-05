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

const user = {
  name: "Animesh",
  age: 19,
  city: "Jaipur",
};

// without destructuring
const obj1 = user.name;
const obj2 = user.age;
const obj3 = user.city;

// with destructuring
const { name, age, city } = user;
console.log(name, age, city);
