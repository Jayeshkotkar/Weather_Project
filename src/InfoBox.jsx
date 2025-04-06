import "./InfoBox.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({ info }) {
  const INIT_IMAGE =
    "https://images.unsplash.com/photo-1557170308-24e08d78ff53?q=80&w=1470&auto=format&fit=crop";

  const COLD_URL = "https://plus.unsplash.com/premium_photo-1668792545377-49e3dc0257f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  const RAIN_URL = "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="info-box">
      <Card
        sx={{
          boxShadow: 6,
          borderRadius: "20px",
          background: "#f9f9f9"
        }}
      >
        <CardMedia sx={{ height: 200 }} image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL} title="Weather" />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" align="center">
            {info.city }
            {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>}
          </Typography>
          <Typography variant="body1" color="text.secondary" component={"div"}>
            <p>🌡 Temperature: {info.temp}&deg;C</p>
            <p>💧 Humidity: {info.humidity}%</p>
            <p>📉 Min Temp: {info.tempMin}&deg;C</p>
            <p>📈 Max Temp: {info.tempMax}&deg;C</p>
            <p>🌥 Description: {info.weather}</p>
            <p>🤗 Feels Like: {info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
