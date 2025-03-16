const generateButton = document.getElementById("generate-button");
const color = document.getElementById("color");
const createButton = document.getElementById("create-button");
const generatedButtonsContainer = document.getElementById(
  "generated-buttons-container"
);
const body = document.body;

function hexColorGenerator() {
  const hexColorCodes = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    /*
    Math.random() returns a random decimal between 0 (inclusive) and 1 (exclusive)
    hexColorCodes.length is 16 (the length of "0123456789abcdef")
    Multiplying them gives a random decimal between 0 and 16
    Math.floor() rounds down to the nearest integer, giving a whole number between 0 and 15

    When the random index is between 10-15, you'll get one of the letters a through f:
    Index 10 → 'a'
    Index 11 → 'b'
    Index 12 → 'c'
    Index 13 → 'd'
    Index 14 → 'e'
    Index 15 → 'f'
    */
    const randomIndex = Math.floor(Math.random() * hexColorCodes.length);
    color += hexColorCodes[randomIndex];
  }
  console.log(color);

  return color;
}

generateButton.addEventListener("click", () => {
  color.value = hexColorGenerator();
});

function isValidHexColor(color) {
  /*
  regex pattern:

    ^# - Must start with a hash symbol
    ([a-fA-F0-9]{3}|[a-fA-F0-9]{6}) - Must contain either:
    [a-fA-F0-9]{3} - Exactly 3 hex characters (shorthand format like #F00)
    OR
    [a-fA-F0-9]{6} - Exactly 6 hex characters (full format like #FF0000)
    $ - Nothing else after these characters

    The test() method returns:
    true if the string matches the pattern
    false if it doesn't match
  */
  const hexRegex = /^#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/;
  return hexRegex.test(color);
}

function buttonCreator() {
  return function () {
    const button = document.createElement("button");
    button.classList.add("button");
    button.textContent = color.value;
    button.style.backgroundColor = color.value;

    button.addEventListener("click", () => {
      body.style.backgroundColor = button.style.backgroundColor;
    });
    generatedButtonsContainer.appendChild(button);
    color.value = "";
  };
}

createButton.addEventListener("click", () => {
  if (color.value === "" || !isValidHexColor(color.value)) {
    alert(
      "Please enter a valid hex color code (e.g., #FF5733) or Generate the color code"
    );
    return;
  }
  // calls the function and immediatly invoke the function
  buttonCreator()();
});
