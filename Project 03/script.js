const clock = document.querySelector("#clock");

// setInterval(()=>{}, 1000) arrow function
setInterval(function () {
  const date = new Date();
  //   clock.innerHTML = date.toTimeString();
  clock.textContent = date.toLocaleTimeString();
}, 1000); //1000 === 1second
