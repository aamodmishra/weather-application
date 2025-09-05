require('dotenv').config();
const axios = require('axios');

const city = process.argv[2];
const apiKey = process.env.API_KEY; // fixed variable name

if (!city) {
    console.log("❌ Please provide a city name!");
    process.exit(1);
}

async function getWeather() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await axios.get(url);
        const data = response.data;

        console.log(`\n🌍 Weather in ${data.name}, ${data.sys.country}:`);
        console.log(`🌡️ Temperature: ${data.main.temp}°C`);
        console.log(`☁️ Condition: ${data.weather[0].description}`);
        console.log(`💧 Humidity: ${data.main.humidity}%\n`);
    } catch (error) {
        if (error.response) {
            console.error("API Error:", error.response.data);
        } else {
            console.error("Error:", error.message);
        }
    }
}

getWeather();
