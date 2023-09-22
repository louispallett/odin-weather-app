import { ar } from "date-fns/locale";
import { format } from "date-fns";

export { showForecast };

const showForecast = ((forecastArray) => {

    for(let i = 1; i < forecastArray.length; i++) {
        const dayElement = document.querySelector(".day" + i);
        removesChildren(dayElement);
        dayElement.appendChild(showDate(forecastArray[i].date));
        dayElement.appendChild(showTemp(forecastArray[i].day.avgtemp_c));
        dayElement.appendChild(showText(forecastArray[i].day.condition.text))
    }

    // console.log(format(new Date(2014, 1, 11), 'EEEE'));


});

const showDate = ((date) => {
    const array = date.split("-");
    let result = [];
    for(let i = 0; i < array.length; i++) {
        let dateNum = parseInt(array[i]);
        result.push(dateNum);
    }
    const dateInfo = document.createElement("div");
    // console.log(result);
    console.log(format(new Date(2023, 9, 22), "eeee"));
    // dateInfo.textContent = date;
    dateInfo.textContent = format(new Date(result[0], result[1], result[2]), "eeee");
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