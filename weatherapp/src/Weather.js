// Weather.js

import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 50px auto;
  max-width: 400px;
`;

const Input = styled.input`
  padding: 8px;
  margin-right: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const WeatherInfo = styled.div`
  margin-top: 20px;
`;

const Error = styled.p`
  color: red;
  margin-top: 10px;
`;

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

  return (
    <Container>
      <h1>Weather App</h1>
      <Input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button onClick={fetchWeatherData}>Get Weather</Button>

      {weatherData && (
        <WeatherInfo>
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </WeatherInfo>
      )}

      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default Weather;
