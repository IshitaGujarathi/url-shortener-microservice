require('dotenv').config();
let express = require('express');
let app = express();

// ✅ Root-level request logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next(); // move to the next middleware or route
});

// ✅ /json route
app.get('/json', (req, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  res.json({ message: message });
});

module.exports = app;
