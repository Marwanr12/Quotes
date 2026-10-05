const arrayOfQuotes = [
  {
    author: 'Jim Rohn', 
    quote: 'Beware of what you become in pursuit of what you want.'
  },
  {
    author: 'Epictetus', 
    quote: 'It\'s not what happens to you, but how you react to it that matters.'
  },
  {
    author: 'Frank Sinatra', 
    quote: 'The best revenge is massive success.'
  },
  {
    author: 'Wayne Gretzy', 
    quote: 'You miss 100% of the shots you don\'t take.'
  },
  {
    author: 'Nelson Mandela', 
    quote: 'Resentment is like drinking poison and waiting for the other person to die.'
  },
  {
    author: 'Elbert Hubbard', 
    quote: 'Do not take life too seriously. You will never get out of it alive.'
  }
];
const quoteBtn = document.getElementById('quote-btn');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
let lastIndex;
function generateQuote() {
  let random;
  do {
    random = Math.floor(Math.random() * arrayOfQuotes.length);
  } while (random === lastIndex);
 lastIndex = random;
quoteText.textContent = `"${arrayOfQuotes[random].quote}"`;
  authorText.textContent = `--${arrayOfQuotes[random].author}`;
}
quoteBtn.addEventListener('click', generateQuote);