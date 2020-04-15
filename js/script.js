/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator

The random quote generator displays a 
random quote each time a button is clicked 
or a period of time has passed.
******************************************/

// Array of objects to store data of quotes
const quotes = [
    {
        quote: "Failure doesn't matter: you only have to be right once.",
        source: 'Drew Houston',
        citation: 'Commencement at MIT',
        year: 2013
    },
    {
        quote: "Luck is what happens when preparation meets opportunity",
        source: 'Seneca'
    },
    {
        quote: "Just because someone stumbles and loses their way, it doesn't mean they're lost forever",
        source: 'Professor X (Patrick Stewart)',
        citation: 'X-Men: Days of Future Past',
        year: 2014
    },
    {
        quote: "You, me, or nobody is gonna hit as hard as life. But it ain’t about how hard you hit. It’s about how hard you can get hit and keep moving forward.",
        source: 'Rocky Balboa (Sylvester Stallone)',
        citation: 'Rocky Balboa',
        year: 2006
    },
    {
        quote: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
        source: 'Jesus Christ',
        citation: 'Matthew 7:7 NIV'
    }
];

/**
 * Create a random number to return a random quote object from the quotes array.
 * 
 * @returns {object} A quote object that contains 'quote' and 'source' as required properties; 'citation' and 'year' as optionals.
 */
const getRandomQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
};

/**
 * Get a random quote object and display it in the browser.
 * 
 * @returns {undefined} Display quote in the browser through a concatenated html string.
 */
function printQuote() {
    const quote = getRandomQuote();
    let html = `<p class="quote">${quote.quote}</p><p class="source">${quote.source}`;
    if (quote.citation) {
        html += `<span class="citation">${quote.citation}</span>`;
    }
    if (quote.year) {
        html += `<span class="year">${quote.year}</span>`;
    }
    html += `</p>`;
    document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);