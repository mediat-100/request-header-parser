const Window = require('window');
const dotenv = require('dotenv');
const ip = require('ip');

const express = require('express');

dotenv.config({ path: './config.env' });

const window = new Window();

// Start express app
const app = express();

app.get('/api/whoami', (req, res) => {
  let myIpAddress = ip.address();
  let myLanguage = window.navigator.language;
  let mySoftware = window.navigator.userAgent;
  res.json({
    ipaddress: myIpAddress,
    language: myLanguage,
    software: mySoftware,
  });
});

// Listener
app.listen(process.env.PORT, '127.0.0.1', () => {
  console.log('app running on port', process.env.PORT);
});
