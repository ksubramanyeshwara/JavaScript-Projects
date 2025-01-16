const stars = document.querySelectorAll(".stars i");
const messages = document.querySelector(".message");
// loop through nodeList
stars.forEach((star, index1) => {
  star.addEventListener("click", (e) => {
    stars.forEach((star, index2) => {
      // add active class to clicked star and any star with lower index
      // remove the active class from higher index
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });

    // can be stored and processed
    const rating = index1 + 1;

    let message = "";
    switch (rating) {
      case 1:
        message = "😞 Very Disappointed";
        break;
      case 2:
        message = "😕 Could Be Better";
        break;
      case 3:
        message = "😊 Good";
        break;
      case 4:
        message = "😃 Very Good";
        break;
      case 5:
        message = "🤩 Excellent!";
        break;
      default:
        message = "";
    }
    messages.innerText = message;
  });
});
