import '../scss/styles.scss';
// import axios from 'axios';

// import { appData, fetchWeather } from './api-info';

const appData = {
    location: '',
    description: '',
    tempCel: 0,
    feelsLike: 0,
    windKph: 0,
};

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

document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.querySelector(".search-btn");
    const inputElement = document.querySelector("input");

    submitBtn.addEventListener("click", async (event) => {
        event.preventDefault();

        const userInput = inputElement.value;
        const weatherData = await fetchData(userInput);

        if (weatherData) {
            const locationData = weatherData.location;
            let nameLocation;
            if (locationData.country == "United States of America") {
                nameLocation = `${locationData.name}, ${locationData.region}`;
            } else {
                nameLocation = `${locationData.name}, ${locationData.country}`;
            }

            // Update the appData object with fetched data
            appData.location = nameLocation;
            appData.description = weatherData.current.condition.text;
            appData.tempCel = weatherData.current.temp_c;
            appData.feelsLike = weatherData.current.feelslike_c;
            appData.windKph = weatherData.current.wind_kph;
        }

        console.log(appData);
    });
});