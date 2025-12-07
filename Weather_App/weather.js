import readline from "readline/promises";
//import fetch from "node-fetch"; // Needed for Node.js (unless Node 18+)

// OpenWeather API Details
const API_KEY = "ce23b3cc8a589d9ced69bd1a593edb29";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getWeather = async (city) => {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found... Please check the city name!");
        }

        const data = await response.json();

        console.log("\nWeather Information:");
        console.log(`City: ${data.name}`);
        console.log(`Temperature: ${data.main.temp}°C`);
        console.log(`Description: ${data.weather[0].description}`);
        console.log(`Humidity: ${data.main.humidity}%`);
        console.log(`Wind Speed: ${data.wind.speed} m/s\n`);
    } catch (error) {
        console.log(error.message);
    }
};

const city = await rl.question("Enter the city name: ");
await getWeather(city);

rl.close();
