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

const showBottom = ((feelsLike, humidity, wind, windDir, uv) => {
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
        uvElement.style.background = "#ad03038e";
    } else if (uv < 5) {
        uvElement.style.background = "#03ad1186";
    } else {
        uvElement.style.background = "#b0b3018c";
    }

    uvElement.appendChild(uvInfo);

    const array = [feelsLikeInfo, humidityInfo, windInfo, uvInfo];
    array.map(x => {
        x.setAttribute("id", "info");
    })
});