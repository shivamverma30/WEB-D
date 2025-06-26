import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({ info }) {
  const getImageForWeather = (weather) => {
    const w = weather.toLowerCase();
    if (w.includes("rain")) return "https://images.unsplash.com/photo-1605129229566-597f5aa0c151?auto=format&fit=crop&w=800&q=80";
    if (w.includes("cloud")) return "https://images.unsplash.com/photo-1505480449763-1c0c54f9b1a2?auto=format&fit=crop&w=800&q=80";
    if (w.includes("clear")) return "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80";
    if (w.includes("snow")) return "https://images.unsplash.com/photo-1608889176439-06b60be6fa57?auto=format&fit=crop&w=800&q=80";
    if (w.includes("haze") || w.includes("fog")) return "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=800&q=80";
    return "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80";
  };

  const weatherImage = getImageForWeather(info.weather);

  return (
    <div className="InfoBox" style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 180 }}
          image={weatherImage}
          title="weather image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}%</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>The weather is <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
