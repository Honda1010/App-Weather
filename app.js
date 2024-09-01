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

let currCity = 'London';
let units = 'metric'

// Selectors
let city = document.getElementById("");
let dateTime = document.getElementById("");

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
function getWeather(){
    const API_KEY = 'e947735dd4e1e17772f077feb05d633e';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`)
    .then(res => res.json())
    .then(data => {
        city.innerHTML = `${data.name}, ${ConvertCountryCode(data.sys.country)}`;
        dateTime.innerHTML = ConvertTimeStamp(data.dt, data.timezone);
        
    })
}
document.body.addEventListener('load', getWeather());