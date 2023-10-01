export { showTop, showBottom };
import { showIcon } from "./icon";

/* TO DO

    Add sunrise and sunset icons to the .bottom elements. First find them, then 
    just add these icons via the html - I've commented where they can be added.
    
    The harder job is to finally get the weather icons up depending on the weather. 
    See icon.js on how to do this. Shouldn't be too difficult one you work through the 
    codes on the weather API.
    
    NEED to re contextualize the .location-wrapper so that the weather icon can fit in 
    there. Easiest way to do this is via grid. Turn location wrapper into a 2 x 4 grid, so 
    that the icon can effectively go left of the temp and description. Then, the far left column
    will be empty.*/

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