// Weather.js

import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "a3c79758b7d82414f9b304fec4991587";

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setWeatherData(null);
      setError("City not found. Please try again.");
    }
  };
  console.log(weatherData);

  return (
    <div className="weather-container">
      <h1 className="weather-heading">Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="weather-input"
      />
      <button onClick={fetchWeatherData} className="weather-button">
        Get Weather
      </button>

      {weatherData && (
        <div className="weather-info">
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>Temperature: {Math.floor(weatherData.main.temp / 10)} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}

      {error && <p className="weather-error">{error}</p>}
    </div>
  );
};

export default Weather;
