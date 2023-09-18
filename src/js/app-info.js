export { showTop, showBottom };

const showTop = ((city, region, temp, description) => {
    // console.log(`${city}, ${region}, ${temp}, ${description}`)
    const cityWrapper = document.querySelector(".city-wrapper");

    const cityElement = document.createElement("div");
    cityElement.setAttribute("id", "city");
    cityElement.textContent = city;
    cityWrapper.appendChild(cityElement);
});

const showBottom = ((feelsLike, windDir, wind, humidity) => {

});