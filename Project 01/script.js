const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);

    switch (e.target == true) {
      case e.target.id === "orange":
        body.style.backgroundColor = e.target.id;
        break;
      case e.target.id === "green":
        body.style.backgroundColor = e.target.id;
        break;
      case e.target.id === "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case e.target.id === "gray":
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = "White";
    }
  }); //it will listen an event
});
