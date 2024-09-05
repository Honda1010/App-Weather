const API_KEY = 'e947735dd4e1e17772f077feb05d633e';
const weatherIcons = [
    { code: 200, icon: '<i class="fa-solid fa-bolt"></i>' }, // Thunderstorm with light rain
    { code: 201, icon: '<i class="fa-solid fa-bolt"></i>' }, // Thunderstorm with rain
    { code: 202, icon: '<i class="fa-solid fa-bolt"></i>' }, // Thunderstorm with heavy rain
    { code: 300, icon: '<i class="fa-solid fa-cloud-rain"></i>' }, // Light intensity drizzle
    { code: 301, icon: '<i class="fa-solid fa-cloud-rain"></i>' }, // Drizzle
    { code: 302, icon: '<i class="fa-solid fa-cloud-rain"></i>' }, // Heavy intensity drizzle
    { code: 500, icon: '<i class="fa-solid fa-cloud-rain"></i>' }, // Light rain
    { code: 501, icon: '<i class="fa-solid fa-cloud-showers-heavy"></i>' }, // Moderate rain
    { code: 502, icon: '<i class="fa-solid fa-cloud-showers-heavy"></i>' }, // Heavy intensity rain
    { code: 511, icon: '<i class="fa-solid fa-snowflake"></i>' }, // Snow
    { code: 600, icon: '<i class="fa-solid fa-snowflake"></i>' }, // Light snow
    { code: 601, icon: '<i class="fa-solid fa-snowflake"></i>' }, // Snow
    { code: 602, icon: '<i class="fa-solid fa-snowflake"></i>' }, // Heavy snow
    { code: 701, icon: '<i class="fa-solid fa-smog"></i>' }, // Mist
    { code: 711, icon: '<i class="fa-solid fa-smog"></i>' }, // Smoke
    { code: 721, icon: '<i class="fa-solid fa-smog"></i>' }, // Haze
    { code: 731, icon: '<i class="fa-solid fa-wind"></i>' }, // Sand/dust whirls
    { code: 741, icon: '<i class="fa-solid fa-smog"></i>' }, // Fog
    { code: 751, icon: '<i class="fa-solid fa-wind"></i>' }, // Sand
    { code: 761, icon: '<i class="fa-solid fa-wind"></i>' }, // Dust
    { code: 762, icon: '<i class="fa-solid fa-wind"></i>' }, // Volcanic ash
    { code: 771, icon: '<i class="fa-solid fa-wind"></i>' }, // Squalls
    { code: 781, icon: '<i class="fa-solid fa-tornado"></i>' }, // Tornado
    { code: 800, icon: '<i class="fa-solid fa-sun"></i>' }, // Clear sky
    { code: 801, icon: '<i class="fa-solid fa-cloud-sun"></i>' }, // Few clouds
    { code: 802, icon: '<i class="fa-solid fa-cloud"></i>' }, // Scattered clouds
    { code: 803, icon: '<i class="fa-solid fa-cloud"></i>' }, // Broken clouds
    { code: 804, icon: '<i class="fa-solid fa-cloud"></i>' } // Overcast clouds
];

let currCity = 'Cairo';
let units = 'metric'

// Selectors
let city = document.getElementById("city");
let dateTime = document.getElementById("dateTime");
let weatherForcast = document.getElementById("weather_forcast");
let weatherIcon = document.getElementById("weather_icon");
let weatherFeelsLikeTemperature = document.getElementById("weather_feels_like_temperature");
let weatherMinTemperature = document.getElementById("weather_min_temperature");
let weatherMaxTemperature = document.getElementById("weather_max_temperature");

let forecastContainer = document.getElementById("forecast_container");

let sunrise = document.getElementById("sunrise");
let sunset = document.getElementById("sunset");

let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure")
let visibility = document.getElementById("visibility");
let weatherTemperature = document.getElementById("Weather_temperature");

let PM25 = document.getElementById("PM25");
let SO2 = document.getElementById("SO2");
let NO2 = document.getElementById("NO2");
let O3 = document.getElementById("O3");
let airQuality = document.getElementById("air_quality");

let SmSearchContainer = document.getElementById("sm_search_container");
let Icons = document.getElementById("icons");
let Logo = document.getElementById("logo");

document.getElementById("search_form_desktop").addEventListener('submit', e=> {
    let search = document.getElementById("search_bar_desktop");
    e.preventDefault();
    currCity = search.value;
    getWeather(`https://api.openweathermap.org/data/2.5/forecast?q=${currCity}&appid=${API_KEY}&units=${units}`);
});
document.getElementById("search_form_mobile").addEventListener('submit', e=> {
    let search = document.getElementById("search_bar_mobile");
    e.preventDefault();
    currCity = search.value;
    getWeather(`https://api.openweathermap.org/data/2.5/forecast?q=${currCity}&appid=${API_KEY}&units=${units}`);
});

function getLocation(){
    navigator.geolocation.getCurrentPosition(GoGetWeather, ErrorCallBack, options);
}
function GoGetWeather(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeather(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${units}`);
}
function ErrorCallBack(error) {
    console.error("Error occurred. Error code: " + error.code);
    // Error codes:
    // 0: unknown error
    // 1: permission denied
    // 2: position unavailable
    // 3: timeout
}
const options = {
    enableHighAccuracy: true, // Request the most accurate position possible
    timeout: 500, // Set a timeout (in milliseconds) for the request
    maximumAge: 0 // Do not cache the position (0 = always request a fresh position)
};

function SmSearchPopUp(){
    // Resetting All
    SmSearchContainer.classList.remove("hidden");
    Icons.classList.remove("hidden");
    Logo.classList.remove("hidden");
    // Setting Icon and Logo to hidden
    Icons.classList.add("hidden");
    Logo.classList.add("hidden");
}
function SmSearchPopDown(){
    // Resetting All
    SmSearchContainer.classList.remove("hidden");
    Icons.classList.remove("hidden");
    Logo.classList.remove("hidden");

    // Setting Icon and Logo to hidden
    SmSearchContainer.classList.add("hidden");
}

let CButton = document.getElementById("c_button");
let FButton = document.getElementById("f_button");

function ChangeC() {
    FButton.classList.remove("ring");
    CButton.classList.add("ring");
    units = 'metric';
    getWeather(`https://api.openweathermap.org/data/2.5/forecast?q=${currCity}&appid=${API_KEY}&units=${units}`);
}

function ChangeF() {
    FButton.classList.add("ring");
    CButton.classList.remove("ring");
    units = 'imperial';
    getWeather(`https://api.openweathermap.org/data/2.5/forecast?q=${currCity}&appid=${API_KEY}&units=${units}`);
}

// Convert country code to name
function ConvertCountryCode(country){
    let regionNames = new Intl.DisplayNames(["en"], {type:"region"});
    return regionNames.of(country);
}
// Convert Time Stamp
function ConvertTimeStamp(timestamp, timezone){
    const convertTimeZone = timezone / 3600; // Convert seconds to hours
    const date = new Date(timestamp * 1000);
    const options = {
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric",
        hour:"numeric",
        minute:"numeric",
        timeZone:`Etc/GMT${convertTimeZone >= 0 ? "-":"+"}${Math.abs(convertTimeZone)}`,
        hour12: true,
    }
    return date.toLocaleString("en-US", options);
}
function formatTime(timestamp) {
    const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true // Set to false for 24-hour format
    };
    return date.toLocaleTimeString('en-US', options);
}
function getWeather(URL) {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            //Updating the city name in case the first API call is done by longtitude and latitude
            currCity = data.city.name;
            // Handle current weather data
            city.innerHTML = `${data.city.name}, ${ConvertCountryCode(data.city.country)}`;
            dateTime.innerHTML = ConvertTimeStamp(data.list[0].dt, data.city.timezone);
            weatherForcast.innerHTML = `${data.list[0].weather[0].main}`;
            
            // Get Weather Icon
            const weatherCode = data.list[0].weather[0].id;
            const weatherIconObj = weatherIcons.find(icon => icon.code === weatherCode);
            weatherIcon.innerHTML = `${weatherIconObj.icon}`;

            weatherFeelsLikeTemperature.innerHTML = `${data.list[0].main.feels_like}&#176`;
            weatherMinTemperature.innerHTML = `Min: ${data.list[0].main.temp_min}&#176`;
            weatherMaxTemperature.innerHTML = `Max: ${data.list[0].main.temp_max}&#176`;

            sunrise.innerHTML = formatTime(data.city.sunrise);
            sunset.innerHTML = formatTime(data.city.sunset);

            humidity.innerHTML = `${data.list[0].main.humidity}&#37;`;
            pressure.innerHTML = `${data.list[0].main.pressure}hPa`;
            visibility.innerHTML = `${(data.list[0].visibility / 1000)}KM`;
            weatherTemperature.innerHTML = `${data.list[0].main.temp}&#176`;

            // Filter out data for each day
            const forecastDays = data.list.filter(entry => entry.dt_txt.endsWith('12:00:00'));
            forecastContainer.innerHTML = '<h1 class="text-3xl mb-3 md:mb-0">5 Days Forecast</h1>';
            forecastDays.forEach(forecast => {
                const weatherCode = forecast.weather[0].id;
                const weatherIconObj = weatherIcons.find(icon => icon.code === weatherCode);

                forecastContainer.innerHTML += `
                    <div class="flex justify-around mb-4 md:mb-0">
                        <div class="w-1/3">
                            ${weatherIconObj.icon}
                            <p class="inline-block">${Math.round(forecast.main.temp)}&#176;</p>
                        </div>
                        <p class="w-1/3">${ConvertTimeStamp(forecast.dt, data.city.timezone).split(',')[1]}</p>
                        <p class="w-1/3">${new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</p>
                    </div>
                `;
            });
            getAirQuality(data.city.coord.lat, data.city.coord.lon);
        })
        .catch(error => console.error('Error fetching weather data:', error));
}
function getAirQualityDescription(aqi) {
    switch (aqi) {
        case 1:
            return 'Good';
        case 2:
            return 'Fair';
        case 3:
            return 'Moderate';
        case 4:
            return 'Poor';
        case 5:
            return 'Very Poor';
        default:
            return 'Unknown';
    }
}
function getAirQuality(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            PM25.innerHTML = `${data.list[0].components.pm2_5}`;
            SO2.innerHTML = `${data.list[0].components.so2}`;
            NO2.innerHTML = `${data.list[0].components.no2}`;
            O3.innerHTML = `${data.list[0].components.o3}`;
            airQuality.innerHTML = `${getAirQualityDescription(data.list[0].main.aqi)}`;
        })
        .catch(error => {
            console.error('Error fetching air quality data:', error);
            airQuality.innerHTML = 'N/A';
            PM25.innerHTML = 'N/A';
            SO2.innerHTML = 'N/A';
            NO2.innerHTML = 'N/A';
            O3.innerHTML = 'N/A';
        });
}

document.body.addEventListener('load', getWeather(`https://api.openweathermap.org/data/2.5/forecast?q=${currCity}&appid=${API_KEY}&units=${units}`));

// Handle darkmode button
const toggleButton = document.getElementById('dark-mode-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

toggleButton.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  
  if (document.documentElement.classList.contains('dark')) {
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  } else {
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  }
});