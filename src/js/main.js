import '../scss/styles.scss';
// import axios from 'axios';
import { showTop, showBottom } from "./app-info"

const fetchData = async (userInput) => {
    try {
        const response = await fetch("http://api.weatherapi.com/v1/current.json?key=d2404bd088b24d72a1164040231309&q=" + userInput, { mode: 'cors' });
        const weatherData = await response.json();
        return weatherData;
    } catch {
        console.error("No data found!");
        return null;
    }
};

const submitNewLocation = (() => {
    const submitBtn = document.querySelector(".search-btn");
    const inputElement = document.querySelector("input");

    submitBtn.addEventListener("click", async (event) => {
        event.preventDefault();

        const userInput = inputElement.value;
        const weatherData = await fetchData(userInput);

        
        fillData(weatherData);
    });
})();

document.addEventListener("DOMContentLoaded", async () => {
    const userInput = "London";
    const weatherData = await fetchData(userInput);
    console.log(weatherData);
    fillData(weatherData);
});

const fillData = ((weatherData) => {
    
    let weatherCountry;
    const locationData = weatherData.location;
    if (locationData.country == "United States of America") {
        weatherCountry = locationData.region + ", USA";
    } else {
        weatherCountry = locationData.country;
    }

    const appData = {
        city: weatherData.location.name,
        country: weatherCountry,
        description: weatherData.current.condition.text,
        tempCel: weatherData.current.temp_c,
        feelsLike: weatherData.current.feelslike_c,
        windDir: weatherData.current.wind_degree,
        windKph: weatherData.current.wind_kph,
        humitity: weatherData.current.humidity,
        uv: weatherData.current.uv,
    }

    showTop(appData.city, appData.country, appData.tempCel, appData.description);
    showBottom(appData.feelsLike, appData.humitity, appData.windKph, appData.windDir, appData.uv);
});