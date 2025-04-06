import "./SearchBox.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "d2098e0d3608071bd36fd47fb615fff7";

  let getWheatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let data = await response.json();

      let result = {
        city: city,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description
      };

      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      setError(false);
      let info = await getWheatherInfo();
      updateInfo(info);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="search-box">
      <h3>🔎 Search for the Weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
          sx={{ backgroundColor: "#fff", borderRadius: "8px" }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ marginLeft: "10px", height: "55px" }}
        >
          Search
        </Button>
      </form>
      {error && <p className="error">No such place exists!</p>}
    </div>
  );
}
