//  ****setTimeout****

// const neww = setTimeout(function () {
//   alert("You are Noob");
// }, 2000);

// const clearNew = clearTimeout(neww);

const changeMe = function () {
  document.querySelector("h2").innerHTML = "IG Bravo";
};

setTimeout(changeMe, 2000);
clearTimeout(changeMe);
