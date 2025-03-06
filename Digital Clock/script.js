function updateClock() {
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  const nowDateTime = new Date();
  console.log(nowDateTime);
  // const hours = nowDateTime.getHours() % 12; when we reach 12 % 12 turns to 0 but we want 12 so
  const hours = nowDateTime.getHours() % 12 || 12;
  const minutes = nowDateTime.getMinutes().toString().padStart(2, "0");
  // let minute = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const seconds = nowDateTime.getSeconds().toString().padStart(2, "0");
  const ampm = nowDateTime.getHours() < 12 ? "AM" : "PM";
  timeElement.textContent = `${hours}:${minutes}:${seconds}:${ampm}`;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  dateElement.textContent = nowDateTime.toLocaleDateString(undefined, options);
}

window.onload = updateClock;
setInterval(updateClock, 1000);

// setInterval(updateClock, 1000);
// updateClock();
