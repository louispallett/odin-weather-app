import '../scss/styles.scss';
// import axios from 'axios';
import { showTop, showBottom } from "./app-info"

const appData = {
    city: "",
    country: "",
    description: "",
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
            let country;
            if (locationData.country == "United States of America") {
                country = locationData.region;
            } else {
                country = locationData.country;
            }

            // Update the appData object with fetched data
            appData.city = weatherData.location.name;
            appData.country = country;
            appData.description = weatherData.current.condition.text;
            appData.tempCel = weatherData.current.temp_c;
            appData.feelsLike = weatherData.current.feelslike_c;
            appData.windKph = weatherData.current.wind_kph;
        }

        // console.log(weatherData);
        showTop(appData.city, appData.country, appData.tempCel, appData.description)
    });
});