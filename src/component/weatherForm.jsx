import { useState } from "react";
import Card from "./card";
import "../App.css"; //if your
function Weather() {
  const [cityName, setcityName] = useState("");
  const [cityLocation, setcityLocation] = useState("");
  const [cityTemp, setTemperature] = useState("");
  const [windspeed, setwindspeed] = useState("");
  function onCityChnage(e) {
    setcityName(e.target.value);
  }
  async function checkWeather(e) {
    e.preventDefault(0);
    try {
      const weatherRes = await fetch(
        `https://P2pclouds.up.railway.app/v1/learn/weather?city=${cityName}`
      );
      const weather = await weatherRes.json();
      setTemperature(weather.current.temp_c);
      setcityLocation(weather.location.name);
      setwindspeed = weather.current.wind_kph;
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }
  return (
    <div>
      <h1>Weather App</h1>
      <div className="container slide-in-fwd-center">
        <label className="label" for="city-name">
          City
        </label>
        <form onSubmit={checkWeather}>
          <input
            type="text"
            name="cityName"
            placeholder="Enter your city name"
            id="city-input"
            onChange={onCityChnage}
          />
          <button className="btn" type="submit">
            Get Weather
          </button>
        </form>
        <Card
          cityLocation={cityLocation}
          cityTemp={cityTemp}
          windspeed={windspeed}
        />
      </div>
    </div>
  );
}
export default Weather;
