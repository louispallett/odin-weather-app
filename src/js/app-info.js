export { showTop, showBottom };
import { showIcon } from "./icon";

const removesChildren = ((parent) => {
    while(parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
});

const showTop = ((city, region, temp, description, code) => {
    const cityWrapper = document.querySelector(".city-wrapper");
    removesChildren(cityWrapper);
    const cityElement = document.createElement("div");
    cityElement.textContent = city;
    cityWrapper.appendChild(cityElement);

    const regionWrapper = document.querySelector(".region-wrapper");
    removesChildren(regionWrapper);
    const regionElement = document.createElement("div");
    regionElement.textContent = region;
    regionWrapper.appendChild(regionElement);

    const tempWrapper = document.querySelector(".temp-wrapper");
    removesChildren(tempWrapper);
    const tempElement = document.createElement("div");
    tempElement.textContent = `${temp}°C`;
    tempWrapper.appendChild(tempElement);

    const descriptionWrapper = document.querySelector(".description-wrapper");
    removesChildren(descriptionWrapper);
    const descriptionElement = document.createElement("div");
    descriptionElement.textContent = description;
    descriptionWrapper.appendChild(descriptionElement);

    const iconWrapper = document.getElementById("weather-icon");
    removesChildren(iconWrapper);
    const weatherIcon = document.createElement("img");
    weatherIcon.src = showIcon(code);
    iconWrapper.appendChild(weatherIcon);
});

const showBottom = ((feelsLike, humidity, wind, windDir, uv, sunrise, sunset) => {
    const feelsLikeElement = document.getElementById("feels-like");
    removesChildren(feelsLikeElement);
    const feelsLikeInfo = document.createElement("div");
    feelsLikeInfo.textContent = feelsLike + "°C";
    feelsLikeElement.appendChild(feelsLikeInfo);

    const humidityElement = document.getElementById("humidity");
    removesChildren(humidityElement);
    const humidityInfo = document.createElement("div");
    humidityInfo.textContent = humidity + "%";
    humidityElement.appendChild(humidityInfo);
    
    const windElement = document.getElementById("wind");
    removesChildren(windElement);
    const windInfo = document.createElement("div");
    windInfo.textContent = wind + " kph";
    windElement.appendChild(windInfo);

    const windArrow = document.getElementById("wind-arrow");
    windArrow.style.transform = `rotate(${windDir}deg)`;
    
    const uvElement = document.getElementById("UV");
    removesChildren(uvElement);
    const uvInfo = document.createElement("div");
    uvInfo.textContent = uv;
    if(uv > 8) {
        uvElement.style.background = "#ad0303";
    } else if (uv < 5) {
        uvElement.style.background = "#03ad11";
    } else {
        uvElement.style.background = "#b0b301";
    }

    uvElement.appendChild(uvInfo);

    const sunriseWrapper = document.getElementById("sunrise");
    removesChildren(sunriseWrapper);
    const sunriseInfo = document.createElement("div");
    sunriseInfo.textContent = sunrise;
    sunriseWrapper.appendChild(sunriseInfo);

    const sunsetWrapper = document.getElementById("sunset");
    removesChildren(sunsetWrapper);
    const sunsetInfo = document.createElement("div");
    sunsetInfo.textContent = sunset;
    sunsetWrapper.appendChild(sunsetInfo);

    const array = [feelsLikeInfo, humidityInfo, windInfo, uvInfo, sunriseInfo, sunsetInfo];
    array.map(x => {
        x.setAttribute("id", "info");
    })
});