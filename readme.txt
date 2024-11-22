1. Install node modules  
$ npm install  


2. Setup weather api key  
Open weather API key can be signed up for at https://home.openweathermap.org/users/sign_up  

Create a .env file in the directory with the below content:
----------

OPEN_WEATHER_API_KEY=<api key>

----------


3. Run  
$ node index.js  

Go to http://localhost:5000/weather/<latitude>/<longitude>
