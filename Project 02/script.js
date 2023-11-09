const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  if (height === "" || height < 0 || isNaN(height)) {
    result.textContent = "Please enter valid Height in CM";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please enter valid Weight in KG";
  } else {
    const bmi = parseInt(weight / ((height * height) / 10000).toFixed(2));
    switch (true) {
      case bmi < 18.6:
        result.innerHTML = `<span>Your BMI is ${bmi} and You are Under Weight</span>`;
        break;
      case bmi >= 18.6 && bmi < 24.9:
        result.innerHTML = `<span>Your BMI is ${bmi} and Your Weight is Normal</span>`;
        break;
      case bmi >= 24.9:
        result.innerHTML = `<span>Your BMI is ${bmi} and You are Over Weight</span>`;
        break;
      default:
        result.innerHTML = `<span>Enter Valid Details</span>`;
    }
  }
});
