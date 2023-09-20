export { showTop, showBottom };

const removesChildren = ((parent) => {
    while(parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
});

const showTop = ((city, region, temp, description) => {
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
    // Below is temporary!
    tempWrapper.innerHTML = `<div>
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" class="bi bi-cloud-drizzle-fill" viewBox="0 0 16 16">
        <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"/>
    </svg>
    </div>`
    const tempElement = document.createElement("div");
    tempElement.textContent = `${temp}°C`;
    tempWrapper.appendChild(tempElement);

    const descriptionWrapper = document.querySelector(".description-wrapper");
    removesChildren(descriptionWrapper);
    const descriptionElement = document.createElement("div");
    descriptionElement.textContent = description;
    descriptionWrapper.appendChild(descriptionElement);
});

const showBottom = ((feelsLike, humidity, wind, windDir) => {
    const feelsLikeElement = document.getElementById("feels-like");
    feelsLikeElement.innerHTML = "";
    const feelsLikeInfo = document.createElement("div");
    feelsLikeInfo.textContent = feelsLike + "°C";
    feelsLikeElement.appendChild(feelsLikeInfo);

    const humidityElement = document.getElementById("humidity");
    humidityElement.innerHTML = "";
    const humidityInfo = document.createElement("div");
    humidityInfo.textContent = humidity;
    humidityElement.appendChild(humidityInfo);
    
    const windElement = document.getElementById("wind");
    windElement.innerHTML = "";
    const windInfo = document.createElement("div");
    windInfo.textContent = wind;
    windElement.appendChild(windInfo);
    
    const windDirElement = document.getElementById("wind-dir");
    windDirElement.innerHTML = "";
    const windDirInfo = document.createElement("div");
    windDirInfo.textContent = windDir;
    windDirElement.appendChild(windDirInfo);

    const array = [feelsLikeInfo, humidityInfo, windInfo, windDirInfo];
    array.map(x => {
        x.setAttribute("id", "info");
    })
});