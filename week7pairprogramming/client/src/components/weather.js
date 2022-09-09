import { useState, useEffect } from "react";

const Weather = (props) => {
    const [weather, setWeather] = useState([])

    const loadData = () => {
      fetch('http://localhost:8081/api/weather/')
      .then((response) => response.json())
      .then(data => {
        console.log("this is line 10", data);
        setWeather(data);
      })
    }

  useEffect(() => {
    loadData();
  }, [])

  return(
    <div>
      {weather.map((weather, index) => {
          return (
          <p key={index}>
            Temp: {weather.current.temp} <br></br>
            Feels Like: {weather.current.feels_like}<br></br>
            Pressure: {weather.current.humidity}<br></br>

          </p>
          )
        })}
    </div>
  )
  // "temp": 282.21,
  // "feels_like": 278.41,
  // "pressure": 1014,
}

export default Weather;