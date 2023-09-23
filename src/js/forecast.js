import { ar } from "date-fns/locale";
import { format, addDays } from "date-fns";

/* TO DO:

    The next thing we need to do is replace the showText() with a function for creating an icon based on the weather.
    
        First: try and get an icon to go up there. Currently the icon will not import because there is not loader. You can find the docs on asset management
        here: https://webpack.js.org/guides/asset-management/. However, this doesn't seem to be working because of a lack of loader.
        
        Then, once an icon can go up, determine how to pick an icon based on the weather API (chance of rain?) then load it on.
        
    Next, we need to push out an icon for chance of rain depending on the number - you can do this via an if statement (based on rain %).*/

// import noRain from "../assets/droplet.svg";

export { showForecast };

const showForecast = ((forecastArray) => {

    for(let i = 1; i < forecastArray.length; i++) {
        const dayElement = document.querySelector(".day" + i);
        removesChildren(dayElement);
        dayElement.appendChild(showDay(i));
        dayElement.appendChild(showTemp(forecastArray[i].day.avgtemp_c));
        dayElement.appendChild(showRainChance(forecastArray[i].day.daily_chance_of_rain));
        dayElement.appendChild(showText(forecastArray[i].day.condition.icon))
    }
});

const showDay = ((i) => {
    const dateInfo = document.createElement("div");

    // date_fns counts months lie arrays (Jan = 0, December = 11). So, instead we can just create a variable for the 
    // current date, use addDays(currentDate, how much we want to add(in this case via our for loop - i)) and then format the 
    // date and return it
    const currentDate = new Date();
    const day = addDays(currentDate, i);

    dateInfo.textContent = format(new Date(day), "eeee");
    return dateInfo;
});

const showTemp = ((temp) => {
    const tempInfo = document.createElement("div");
    tempInfo.textContent = temp + "°C";
    return tempInfo;
});

const showRainChance = ((rain) => {
    const rainInfoWrapper = document.createElement("div");
    rainInfoWrapper.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-droplet" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
    <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
  </svg>`
    const rainInfo = document.createElement("div");    
    rainInfo.textContent = rain + "%";
    rainInfoWrapper.appendChild(rainInfo);
    return rainInfoWrapper;
})

const showText = ((text) => {
    const iconWrapper = document.createElement("div");
    const img = document.createElement("img");
    iconWrapper.appendChild(img);
    return iconWrapper;
});

const removesChildren = ((parent) => {
    while(parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
});