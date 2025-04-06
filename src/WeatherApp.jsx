import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 28.12,
    temp: 25.05,
    tempMax: 25.05,
    tempMin: 25.05,
    humidity: 47,
    weather: "haze"
  });

  let updateInfo = (info) => {
    setWeatherInfo(info);
  };

  return (
    <div className="weather-app">
      <h2>🌦 Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
