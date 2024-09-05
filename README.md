# WeatherApp
![WeaetherApp in Light Mode](Figma/WeatherApp%20Light%20Desktop.png)

![WeaetherApp in Dark Mode](Figma/WeatherApp%20Dark%20Desktop.jpg)
## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Code Structure](#code-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Overview

This Weather App provides current weather and air quality information using the OpenWeatherMap API. It offers weather forecasts for the next 5 days and displays detailed data on temperature, humidity, pressure, and more. The app also includes features for changing temperature units; toggling between light and dark modes; and 'Get Location' button to detect your location for more precise data.

## Features

- **Current Weather Data**: Displays temperature, feels like temperature, humidity, pressure, and visibility.
- **5-Day Forecast**: Provides daily weather forecasts with icons representing various weather conditions.
- **Air Quality Information**: Shows air quality indices and components like PM2.5, SO2, NO2, and O3.
- **Temperature Unit Toggle**: Switches between Celsius and Fahrenheit.
- **Dark Mode**: Toggle between light and dark themes for improved visibility.
- **Get Location**: Detecting your exact location with one mouse click.

## Getting Started

### Prerequisites

- A web browser for testing and viewing the application.
- An API key from OpenWeatherMap. You can get it by signing up at [OpenWeatherMap](https://openweathermap.org/api).

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/UsamaElareeny/WeatherApp.git
   cd WeatherApp
   code .
2. **Setup API Key**
Replace e947735dd4e1e17772f077feb05d633e in the script.js file with your own OpenWeatherMap API key.

3. **Open index.html**
Open the index.html file in your web browser to view the app.

## Usage
+ **Search for Weather**: Enter a city name in the search bar and submit the form to get the current weather and forecast for that city.
+ **Current Location**: Use the geolocation feature to get weather data for your current location.
+ **Change Units**: Toggle between Celsius and Fahrenheit using the unit buttons.
+ **Dark Mode**: Click the dark mode toggle button to switch between light and dark themes.


## Code Structure
- **index.html**: The main HTML file for the app.
- **styles.css**: Contains styles for the app.
- **script.js**: JavaScript file handling weather data retrieval, display logic, and user interactions.

## Contributing
1. Fork the repository.
2. Create a new branch `(git checkout -b feature/your-feature)`.
3. Commit your changes `(git commit -am 'Add some feature')`.
4. Push to the branch `(git push origin feature/your-feature)`.
5. Create a new Pull Request.


## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


## Acknowledgements
+ [OpenWeatherMap](https://openweathermap.org/forecast5) API for providing weather and air quality data.
+ [GeoLocation](https://developers.google.com/maps/documentation/geolocation/overview) API for working behind the scene of the 'Get Location' button.
+ [Font Awesome](https://fontawesome.com/) for the weather icons used in the app.