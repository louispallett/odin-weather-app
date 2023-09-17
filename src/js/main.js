import '../scss/styles.scss';
import axios from 'axios';

const appData = {
    location: '',
    description: '',
    tempCel: 0,
};

const fetchWeather = (() => {
    const fetchData = async (userLocation) => {
        try {
            const response = await fetch("http://api.weatherapi.com/v1/current.json?key=d2404bd088b24d72a1164040231309&q=" + userLocation, { mode: 'cors' });
            const weatherData = await response.json();
            return weatherData;
        } catch {
            console.error("No data found!");
            return null;
        }
    };

    return { fetchData };
})();

let location = "London";

fetchWeather.fetchData(location)
    .then(weatherData => {
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

            // const temperature = document.getElementById("temperature");
            // temperature.textContent = appData.tempCel;

            console.log(appData);

        }
    })
    .catch(error => {
        console.error(error);
    });