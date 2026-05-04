new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async is done");
    resolve(); /*we have to add this to run then */
  }, 1000);
}).then(function () {
  console.log("Async 1 is resolved");
});
