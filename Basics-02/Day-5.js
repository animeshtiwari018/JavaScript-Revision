const mySym = Symbol("key");

const user = {
  name: "Animesh Tiwari",
  "full name": "Animesh Tiwari",
  location: "Jaipur",
  isLoggedIn: false,
  age: 19,
  email: "animeshtiwari178@gmail.com",
  lastLoggedIn: ["Monday", "Tuesday"],
  [mySym]: "myKey",
};

console.log(user.email);
console.log(user.age);
console.log(user[mySym]);
// // now it is not possible to accesss full name using . so here we use
console.log(user["full name"]);

user.email = "animesh@microsoft.com"
console.log(user)
Object.freeze(user)

user.email = "animesh@google.com";
console.log(user)