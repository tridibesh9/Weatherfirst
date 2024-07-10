import { useState } from "react";
import { useEffect } from "react";
export default function Daytiles({weather}){
    const[dayweather,setWeather] = useState(weather)
    useEffect(() => {
        setWeather(weather);
        console.log(weather);
    }, [weather]);
    if (!dayweather) {
        return <div>Loading...</div>;
    }
    return(
        <div className="hourtiles">
            <h1>{dayweather.date}</h1>
            <img src= {dayweather.condition.icon} alt="" />
            <p>{dayweather.condition.text}</p>
            <p>Max Temp - {dayweather.maxtemp_c}</p>
            <p>Min Temp - {dayweather.mintemp_c}</p>
            <p>Avg Temp - {dayweather.avgtemp_c}</p>
            <p>Avg Humidity - {dayweather.avghumidity}</p>
            <p>Daily Chance of Rain - {dayweather.daily_chance_of_rain}%</p>
            <p>Feels Like - {dayweather.feelslike_c}</p>
            <p>UV - {dayweather.uv}</p>
        </div>
    )
}