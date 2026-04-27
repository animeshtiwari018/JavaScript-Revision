const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector(".result");

  if (height === "" || isNaN(height) || height <= 0) {
    results.innerHTML = `Height is invalid: ${height}`;
  } else if (weight === "" || isNaN(weight) || weight <= 0) {
    results.innerHTML = `Weight is invalid: ${weight}`;
  } else {
    const height_m = height / 100;
    const BMI = (weight / (height_m * height_m)).toFixed(2);
    results.innerHTML = `BMI is ${BMI}`;
  }
});
