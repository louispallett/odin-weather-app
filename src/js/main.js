import '../scss/styles.scss';
import axios from 'axios';

const location = "Istanbul";
const image = document.querySelector("img");

const fetchWeather = (() => {
    const showWeather = (async(userLocation) => {
        try {
            const weatherData = await axios.get("http://api.weatherapi.com/v1/current.json?key=d2404bd088b24d72a1164040231309&q=" + userLocation);
            
            const location = weatherData.data.location;
            const data = weatherData.data;

            const country = location.country;
            let nameLocation;
            if(country == "United States of America") {
                nameLocation = `${location.name}, ${location.region}`;
            } else {
                nameLocation = `${location.name}, ${country}`;
            }

            console.log(data);
            const current = data.current;
            const tempC = current.temp_c;

            console.log(`Location: ${nameLocation}`);
            console.log(tempC);
        } catch {
            console.error("No data found!");
        }
    });

    return { showWeather };
})();

fetchWeather.showWeather(location);