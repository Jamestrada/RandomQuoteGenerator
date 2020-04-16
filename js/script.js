/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
Developed by: James Estrada

The random quote generator displays a 
random quote each time a button is clicked 
or a period of time has passed.
******************************************/

// Array of objects to store data of quotes
const quotes = [
    {
        quote: "Failure doesn't matter: you only have to be right once.",
        source: "Drew Houston",
        citation: "Commencement at MIT",
        year: 2013
    },
    {
        quote: "Luck is what happens when preparation meets opportunity",
        source: "Seneca"
    },
    {
        quote: "Just because someone stumbles and loses their way, it doesn't mean they're lost forever",
        source: "Professor X (Patrick Stewart)",
        citation: "X-Men: Days of Future Past",
        year: 2014,
        tags: ["[film]"]
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        source: "Confucius",
        tags: ["[motivational]", "[wisdom]", "[wordstoliveby]"]
    },
    {
        quote: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
        source: "Jesus Christ",
        citation: "Matthew 7:7 NIV",
        tags: ["[bible]", "[religion]"]
    },
    {
        quote: "You, me, or nobody is gonna hit as hard as life. But it ain’t about how hard you hit. It’s about how hard you can get hit and keep moving forward.",
        source: "Rocky Balboa (Sylvester Stallone)",
        citation: "Rocky Balboa",
        year: 2006,
        tags: ["[film]"]
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        source: "Thomas Edison"
    }
];

/**
 * Create a random number to return a random quote object from the quotes array.
 * 
 * @returns {object} A quote object that contains 'quote' and 'source' as required properties; 'citation', 'year', and 'tag' as optionals.
 */
const getRandomQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
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
        html += `<span style="font-size: 0.9em; font-weight: bold">&ensp;${quote.tags.join(' ')}</span>`; // Inline CSS for new tags property; join list of tag(s) with space.
    }
    html += `</p>`;
    document.getElementById('quote-box').innerHTML = html;
}

// Pass the function printQuote as a reference into setInterval's handler so it can be called every 17 seconds.
setInterval(printQuote, 17000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);