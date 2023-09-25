import { ar } from "date-fns/locale";
import { format, addDays } from "date-fns";
import dropletEmpty from "../assets/droplet.svg";
import dropletHalf from "../assets/droplet-half.svg";
import dropletFull from "../assets/droplet-full.svg";

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