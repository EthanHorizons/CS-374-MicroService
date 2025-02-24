const express = require('express');
const app = express();
const port = 3001;

const natureQuotes = {
    inspirational: [
      "In every walk with nature, one receives far more than he seeks.",
      "The earth has music for those who listen.",
      "Look deep into nature, and then you will understand everything better.",
      "Adopt the pace of nature: her secret is patience.",
      "Nature does not hurry, yet everything is accomplished."
    ],
    peaceful: [
      "The clearest way into the Universe is through a forest wilderness.",
      "Nature is not a place to visit. It is home.",
      "The forest is the therapist, the guide opens the door.",
      "Nature always wears the colors of the spirit.",
      "In nature, nothing is perfect and everything is perfect."
    ],
    reflective: [
      "The earth is what we all have in common.",
      "Time spent amongst trees is never time wasted.",
      "The mountains are calling, and I must go.",
      "Every flower is a soul blossoming in nature.",
      "The silence of nature is very real. It surrounds you, you can feel it."
    ],
    adventurous: [
      "Go into the wilderness, and it will heal you.",
      "Not all those who wander are lost.",
      "The wilderness holds answers to more questions than we have yet learned to ask.",
      "The best view comes after the hardest climb.",
      "Life is either a daring adventure or nothing at all."
    ],
    contemplative: [
      "The sky is the daily bread of the eyes.",
      "To sit in the shade on a fine day, and look upon the verdant green grass, is the most perfect refreshment.",
      "Every sunset brings the promise of a new dawn.",
      "Nature is the art of God.",
      "The beauty of the natural world lies in the details."
    ]
  };
  //route for specifying category
  app.get('/quotes/:category', (req, res) => {
    const category = req.params.category.toLowerCase();
    if (natureQuotes[category]) {
        const quotes = natureQuotes[category];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        res.json({ quote: randomQuote });
      } else {
        res.status(404).json({ error: "Category not found" });
      }
  });
  //route for random quote
  app.get('/quotesRandom', (req, res) => {
    const categories = Object.keys(natureQuotes);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const quotes = natureQuotes[randomCategory];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json({ quote: randomQuote });
  });
  
  app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
  });