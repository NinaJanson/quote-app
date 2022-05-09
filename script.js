const button = document.querySelector("button");
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

button.addEventListener("click", newQuote);

function newQuote() {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })

    .then((data) => {
      quote.innerText = data.data[0].quoteText;
      author.innerText = "-" + data.data[0].quoteAuthor;
    });
}
