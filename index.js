const express = require('express');
const fetch = require('isomorphic-fetch');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();

const weatherLink = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + process.env.OPEN_WEATHER_API_KEY;


// show static index page
app.use(express.static(path.join(__dirname, 'views')));

// allow cross-origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// get weather by latitude and longitude
app.get('/weather/:lat/:lon', (req, res) => {
    fetch(`${weatherLink}&lat=${req.params.lat}&lon=${req.params.lon}`)
        .then(response => response.json())
        .then(weather => res.send(weather))
        .catch(error => res.send(error));
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
