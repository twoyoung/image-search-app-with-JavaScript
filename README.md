This is a simple web app with the functionality of searching and fetching images through the API of https://unsplash.com/documentation
languages: HTML, CSS, Javascript

# Things learnt:
## DOM operations:
```
const formEl = document.querySelector("form");

const inputEl = document.getElementById("search-input");

const searchResults = document.querySelector(".search-results");
// return the first element with the class name

const imageWrapper = document.createElement('div');

searchResults.innerHTML = "";

imageWrapper.classList.add("search-result");

imageLink.href = result.links.html;

imageLink.target = "_blank";
// open the linked document in a new window in browser
// target="_self": default behavior - open in the same window

imageLink.textContent = result.alt_description;
// .textContent: higher performance
// .innerText

imageWrapper.appendChild(image);

showMore.style.display = "block";
```

## JavaScript methods & functions:
```
formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    page = 1;
    searchImages();
})
// usually put event.preventDefault() under form submit event to avoid repetitive loading page

const response = await fetch(url);
// JS fetching data from external API

const data = await response.json();
// transform json file to JS object

results.map((result) => {});
```

## async, await; synchronous vs asynchronous 
- The use of 'async' and 'await' in JavaScript is a way to convert its inherently single-threaded, synchronous runtime into a more asynchronous one. This transformation helps prevent time-consuming code from obstructing the program's execution flow. 
- These mechanisms are typically employed when handling tasks such as data retrieval, file reading, or managing timers.
