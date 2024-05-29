const axios = require('axios');

const API_KEY = '3b79bae525a9d252bc9f6d1d81c34d39'; // replace with your OpenWeatherMap API key

function getWeather(city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    axios.get(url)
        .then(response => {
            const data = response.data;
            const temp = data.main.temp;
            const description = data.weather[0].description;
            console.log(`Temperature in ${city} is ${temp} and the weather is ${description}`);
        })
        .catch(error => {
            console.error(`Cannot get weather for ${city}: ${error}`);
        });
}

getWeather('Bengaluru'); // replace 'London' with the city you want