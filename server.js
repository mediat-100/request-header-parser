const dotenv = require('dotenv');
const express = require('express');

dotenv.config({ path: './config.env' });

// Start express app
const app = express();

app.get('/api/whoami', (req, res) => {
  let myIpAddress = req.ip;
  let myLanguage = req.get('Accept-Language');
  let mySoftware = req.get('User-Agent');
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
