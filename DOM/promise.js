new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async is done");
    resolve(); /*we have to add this to run then */
  }, 1000);
}).then(function () {
  console.log("Async 1 is resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async 3 is done");
    resolve({
      username: "Animesh Tiwari",
      email: "animeshtiwari178@gmail.coms",
    });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log("user is called");
  console.log(user.username);
});
