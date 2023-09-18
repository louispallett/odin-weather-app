export { showTop, showBottom };

const showTop = ((city, region, temp, description) => {
    // console.log(`${city}, ${region}, ${temp}, ${description}`)
    const cityWrapper = document.querySelector(".city-wrapper");
    const cityElement = document.createElement("div");
    cityElement.setAttribute("id", "city");
    cityElement.textContent = city;
    cityWrapper.appendChild(cityElement);

    const regionWrapper = document.querySelector(".region-wrapper");
    const regionElement = document.createElement("div");
    regionElement.setAttribute("id", "region");
    regionElement.textContent = region;
    regionWrapper.appendChild(regionElement);

    const tempWrapper = document.querySelector(".temp-wrapper");
    // Below is temporary!
    tempWrapper.innerHTML = `<div>
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="white" class="bi bi-cloud-drizzle-fill" viewBox="0 0 16 16">
        <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"/>
    </svg>
    </div>`
    const tempElement = document.createElement("div");
    tempElement.setAttribute("id", "temp");
    tempElement.textContent = `${temp}°C`;
    tempWrapper.appendChild(tempElement);

    const descriptionWrapper = document.querySelector(".description-wrapper");
    const descriptionElement = document.createElement("div");
    descriptionElement.textContent = description;
    descriptionWrapper.appendChild(descriptionElement);
});

const showBottom = ((feelsLike, windDir, wind, humidity) => {
    // can create array of arguments and pass them through a for loop to add to bottom grid!
});