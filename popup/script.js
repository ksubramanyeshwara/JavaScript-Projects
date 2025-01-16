const container = document.querySelector("#container");
container.classList.add("container");
const overlay = document.querySelector(".overlay");

const button = document.createElement("button");
button.innerText = "Click Me";
button.classList.add("btn");

const popupBox = document.createElement("div");
popupBox.classList.add("popupbox");

const closebutton = document.createElement("span");
closebutton.setAttribute("class", "close-btn");
closebutton.innerText = "X";
popupBox.appendChild(closebutton);

const info = document.createElement("p");
info.setAttribute("class", "info");
info.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam magni quia doloribus ab assumenda voluptatibus quam, officia nam quos nobis? Iure earum saepe culpa non dolorem distinctio! Soluta, fugit laudantium. Enim architecto perspiciatis necessitatibus quaerat voluptatibus inventore sed veritatis repudiandae fuga. Earum dolorum cumque harum numquam sapiente, eos excepturi atque laudantium obcaecati";
popupBox.appendChild(info);

button.addEventListener("click", (e) => {
  popupBox.classList.toggle("visible");
  overlay.classList.toggle("visible");
});

closebutton.addEventListener("click", () => {
  popupBox.classList.toggle("visible");
  overlay.classList.toggle("visible");
});

container.appendChild(button);
container.appendChild(popupBox);
