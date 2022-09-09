//This will be the server index

import express from "express";
import cors from "cors";
//import dotenv from "dotenv";

const app = express();
const PORT = 8081;
//dotenv.config();
/*
An array of student objects to show my 2 pm class
const students = [
  {firstname: "Lisa", lastname: "Lee"},
  {firstname: "Cristina", lastname: "Rodriguez"},
  {firstname: "Diana", lastname: "Olivas"},
  {firstname: "Andrea", lastname: "Sanchez"},
  {firstname: "Paola", lastname: "Trejo"},
]
*/
//configuring cors middleware
app.use(cors());

app.get('/', (req, res) => {
  res.json("howdy")
});

app.get('/api/weather', (req, res) => {
  const WEATHER = [
    {
      "lat": 39.31,
      "lon": -74.5,
      "timezone": "America/New_York",
      "timezone_offset": -18000,
      "current": {
        "dt": 1646318698,
        "sunrise": 1646306882,
        "sunset": 1646347929,
        "temp": 98,
        "feels_like": 111,
        "pressure": 1014,
        "humidity": 90,
        "dew_point": 275.99,
        "uvi": 2.55,
        "clouds": 40,
        "visibility": 10000,
        "wind_speed": 8.75,
        "wind_deg": 360,
        "wind_gust": 13.89,
        "weather": 
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          },
      },
}];

res.json(WEATHER);

});
app.listen(PORT, () => console.log(`HOLA! Server running on Port http://localhost:${PORT}`));
// const API_KEY= process.env.API_KEY;
// // First fetch request 
// app.get('/weather', (req, res) => { 
//   const city = req.query.cityName; 
//   const apiKey = API_KEY; 
//   const params = new URLSearchParams({ 
//     q: req.query.cityName, 
//     appid: apiKey, 
//     units: 'imperial', 
//   }); 
//   const url = `https://api.openweathermap.org/data/2.5/weather?${params}`; 
//   console.log(url); 
//   fetch(url) 
//     .then((res) => res.json()) 
//     .then((data) => { 
//       res.send({ data }); 
//     }) 
//     .catch((err) => { 
//       console.log(err); 
//     }); 
//   });
//   //wrote this console.log to test and make sure the API_KEY import was working
//   //console.log("test", API_KEY);