import { ar } from "date-fns/locale";
import { format, addDays } from "date-fns";

export { showForecast };

const showForecast = ((forecastArray) => {

    for(let i = 1; i < forecastArray.length; i++) {
        const dayElement = document.querySelector(".day" + i);
        removesChildren(dayElement);
        dayElement.appendChild(showDate(i));
        dayElement.appendChild(showTemp(forecastArray[i].day.avgtemp_c));
        dayElement.appendChild(showText(forecastArray[i].day.condition.text))
    }
});

const showDate = ((i) => {
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

const showText = ((text) => {
    const textInfo = document.createElement("div");
    textInfo.textContent = text;
    return textInfo;
});

const removesChildren = ((parent) => {
    while(parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
});