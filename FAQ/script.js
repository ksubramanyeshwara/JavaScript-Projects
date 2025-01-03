// Select all elements with the id 'faq-heading', 'faq-text', and 'icon'
const faqHeading = document.querySelectorAll("#faqHeading");
const faqText = document.querySelectorAll("#faqText");
const icon = document.querySelectorAll("#icon");

// Initially hide all faqText and set icons to "+"
faqText.forEach((text, index) => {
  text.classList.add("display");
  icon[index].textContent = "+";
});

// Add click event listeners to each faqHeading
faqHeading.forEach((heading, index) => {
  heading.addEventListener("click", () => {
    // Hide all faqText and reset icons
    faqText.forEach((text, i) => {
      if (i !== index) {
        text.classList.add("display");
        icon[i].textContent = "+";
      }
    });
    // Toggle the clicked faqText and update its icon
    const displayText = faqText[index].classList.toggle("display");
    icon[index].textContent = displayText ? "+" : "-";
  });
});
