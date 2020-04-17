/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
Developed by: James Estrada

The random quote generator displays a 
random quote each time a button is clicked 
or a period of time has passed.
******************************************/

let lastNumber;

// Pass the function printQuote as a reference into setInterval's handler so it can be called every 17 seconds.
let timer = setInterval(printQuote, 17000);

/**
 * Create a random number to return a random quote object from the quotes array.
 * 
 * @returns {object} A quote object that contains 'quote' and 'source' as required properties; 'citation', 'year', and 'tag' as optionals.
 */
const getRandomQuote = () => {
    let randomNumber;
    // Check if it's a different random number other than the previous one, otherwise get another one to avoid returning the same quote object.
    do {
        randomNumber = Math.floor(Math.random() * quotes.length);
    } while (randomNumber === lastNumber)
    lastNumber = randomNumber
    return quotes[randomNumber];
};

/**
 * Create a random number from an 8-bit color possible representation.
 * 
 * @returns {number} A random number from 0 to 255 to use it as the intensity for each rgb value.
 */
const getRandomColor = () => Math.floor(Math.random() * 256);

/**
 * Get a random quote object and display it in the browser.
 * 
 * @returns {undefined} Display quote in the browser through a concatenated html string.
 */
function printQuote() {
    // Reset timer.
    clearInterval(timer);
    timer = setInterval(printQuote, 17000);

    // Select the body tag and change the background color to a random one.
    document.querySelector('body').style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;

    const quote = getRandomQuote();
    let html = `<p class="quote">${quote.quote}</p><p class="source">${quote.source}`;
    if (quote.citation) {
        html += `<span class="citation">${quote.citation}</span>`;
    }
    if (quote.year) {
        html += `<span class="year">${quote.year}</span>`;
    }
    if (quote.tags) {
        html += `<span class="tags">&ensp;${quote.tags.join(' ')}</span>`; // Join list of tag(s) with space.
    }
    html += `</p>`;
    document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);