import { useState } from "react";
import { useEffect } from "react";
export default function Hourtiles({weather}){
    const[hourweather,setWeather] = useState(weather)
    useEffect(() => {
        setWeather(weather);
        console.log(weather);
    }, [weather]);
    if (!hourweather) {
        return <div>Loading...</div>;
    }
    return(
        <div className="hourtiles">
            <h1>{hourweather.time}</h1>
            <img src= {hourweather.condition.icon} alt="" />
            <p>{hourweather.condition.text}</p>
            <p>Temp - {hourweather.temp_c}</p>
            <p>Humidity - {hourweather.humidity}</p>
            <p>Feels Like - {hourweather.feelslike_c}</p>
            <p>UV - {hourweather.uv}</p>
        </div>
    )
}