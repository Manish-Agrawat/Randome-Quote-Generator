const span = document.querySelector("#quoteText");
const author = document.querySelector("#author");
const button = document.querySelector("#newQuoteBtn");

function randome(length) {
  let index = Math.floor(Math.random() * length);
  return index;
}

function generateRandomColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
  document.documentElement.style.setProperty("--main-bg-color", randomColor);
}

// Fetching the quote from the API

async function fetchQuote() {
  try {
    const response = await fetch("https://dummyjson.com/quotes");
    const data = await response.json();
    let i = randome(data.quotes.length);
    // console.log(data.quotes[i]);

    span.textContent = data.quotes[i].quote;
    author.textContent = "💕 " + data.quotes[i].author;
    generateRandomColor();
  } catch (error) {
    console.error("Error fetching quote:", error);
    span.textContent = "Error fetching quote. Please try again later.";
  }
}
fetchQuote();

// Fetching a new quote when the button is clicked
button.addEventListener("click", fetchQuote);
