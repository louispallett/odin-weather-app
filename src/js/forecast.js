export { showForecast };

const showForecast = ((forecastArray) => {

    for(let i = 1; i < forecastArray.length; i++) {
        const dayElement = document.querySelector(".day" + i);
        removesChildren(dayElement);
        dayElement.appendChild(showDate(forecastArray[i].date));
        dayElement.appendChild(showTemp(forecastArray[i].day.avgtemp_c));
        dayElement.appendChild(showText(forecastArray[i].day.condition.text))
    }
});

const showDate = ((date) => {
    const dateInfo = document.createElement("div");
    dateInfo.textContent = date;
    return dateInfo;
});

const showTemp = ((temp) => {
    const tempInfo = document.createElement("div");
    tempInfo.textContent = temp;
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