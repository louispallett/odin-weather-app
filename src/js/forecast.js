export { showForecast };

const showForecast = ((forecastArray) => {

    for(let i = 1; i < forecastArray.length; i++) {
        const dayElement = document.querySelector(".day" + i);
        removesChildren(dayElement);
        dayElement.appendChild(showDate(forecastArray[i].date))
        // console.log(forecastArray[i].date);
        // console.log(forecastArray[i].day.maxtemp_c);
        // console.log(forecastArray[i].day.mintemp_c);
        // console.log(forecastArray[i].day.condition.text);
    }
});

const showDate = ((date) => {
    const dateInfo = document.createElement("div");
    dateInfo.textContent = date;
    return dateInfo;
})

const removesChildren = ((parent) => {
    while(parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
});