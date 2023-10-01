import { ar } from "date-fns/locale";
import { format, addDays } from "date-fns";
import dropletEmpty from "../assets/droplet.svg";
import dropletHalf from "../assets/droplet-half.svg";
import dropletFull from "../assets/droplet-full.svg";

import { showIcon } from "./icon";

export { showForecast };

const showForecast = ((forecastArray) => {

    for(let i = 1; i < forecastArray.length; i++) {
        const dayElement = document.querySelector(".day" + i);
        removesChildren(dayElement);
        dayElement.appendChild(showDay(i));
        dayElement.appendChild(displayIcon(forecastArray[i].day.condition.code));
        dayElement.appendChild(showTemp(forecastArray[i].day.avgtemp_c));
        dayElement.appendChild(showRainChance(forecastArray[i].day.daily_chance_of_rain));
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
    const rainIcon = document.createElement("img");    
    if(rain > 70) {
        rainIcon.src = dropletFull
    } else if(rain < 20) {
        rainIcon.src = dropletEmpty;
    } else {
        rainIcon.src = dropletHalf;
    }
    rainInfoWrapper.appendChild(rainIcon);

    const rainInfo = document.createElement("div");    
    rainInfo.textContent = rain + "%";
    rainInfoWrapper.appendChild(rainInfo);
    return rainInfoWrapper;
})

const displayIcon = ((code) => {
    const iconWrapper = document.createElement("div");
    const img = document.createElement("img");
    img.src = showIcon(code);
    img.setAttribute("width", "32");
    img.setAttribute("height", "32");
    iconWrapper.appendChild(img);
    return iconWrapper;
});

const removesChildren = ((parent) => {
    while(parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
});