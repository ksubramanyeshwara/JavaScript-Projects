const quoteContainer = document.getElementById("quote-container");
const quote = document.getElementById("quote");
const quoteAuthor = document.getElementById("quote-author");
const newQuote = document.getElementById("new-quote");
const copyQuote = document.getElementById("copy-quote");
const saveQuote = document.getElementById("save-quote");
const shareX = document.getElementById("x-share");
const shareWhatsapp = document.getElementById("whatsapp-share");

const UNSPLASH_ACCESS_KEY = "EBFoMoDzzf3chyYtV9Gz9tBu9b7WwST-rtzhtxa9UJ0";

// Function to fetch random quotes
async function randomQuotes() {
  try {
    const response = await fetch(
      "https://api.freeapi.app/api/v1/public/quotes/quote/random",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    quote.textContent = `"${data.data.content}"`;
    quoteAuthor.textContent = `By ${data.data.author}`;
  } catch (error) {
    console.log(error);
  }
}

// Function to fetch random images
async function randomImages() {
  try {
    const response = await fetch("https://api.unsplash.com/photos/random", {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });
    const data = await response.json();
    quoteContainer.style.backgroundImage = `url(${data.urls.regular})`;
  } catch (error) {
    alert("Error Fetching image");
  }
}

// Function to fetch random quotes and images
function randomQuoteImages() {
  randomQuotes();
  randomImages();
}

// Call the function on page load
document.addEventListener("DOMContentLoaded", randomQuoteImages);

// Call the function on button click
newQuote.addEventListener("click", randomQuoteImages);

// Function to copy quote to clipboard
copyQuote.addEventListener("click", () => {
  let text = quote.textContent;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      copyQuote.textContent = "Copied";
      setTimeout(() => (copyQuote.textContent = "Copy Quote"), 2000);
    })
    .catch((error) => {
      alert("Failed to Copy", error);
    });
});

// Function to share on X
function shareOnX() {
  const quoteText = quote.textContent;
  const authorText = quoteAuthor.textContent;
  const shareText = `${quoteText} - ${authorText}`;
  //conver the text string to url
  const encodedText = encodeURIComponent(shareText);
  const twitterUrl = `https://x.com/intent/post?text=${encodedText}`;
  //open in new tab
  window.open(twitterUrl, "_blank");
}

// Call the function on button click
shareX.addEventListener("click", shareOnX);

// Function to share on WhatsApp
function shareOnWhatsApp() {
  const quoteText = quote.textContent;
  const authorText = quoteAuthor.textContent;
  const shareText = `${quoteText} - ${authorText}`;
  //conver the text string to url
  const encodedText = encodeURIComponent(shareText);
  const whatsappUrl = `https://wa.me/?text=${encodedText}`;
  window.open(whatsappUrl, "_blank");
}

// Call the function on button click
shareWhatsapp.addEventListener("click", shareOnWhatsApp);
