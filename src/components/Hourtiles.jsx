import { useState } from "react";
import { useEffect } from "react";
export default function Hourtiles({weather}){
    const[hourweather,setWeather] = useState(weather)
    const [className,setClass] = useState("hourtiles")
    useEffect(() => {
        setWeather(weather);
        console.log(weather);
        var newClass = "hourtiles "
        if(weather.is_day == 0)
            if(weather.cloud >=60)
                newClass = "hourtiles " + "cloudy_night"
            else if(weather.precip_mm >=4)
                newClass = "hourtiles "+"rainy"
            else
                newClass = "hourtiles "+"Night"
        else{
             if(weather.precip_mm >=3)
                newClass = "hourtiles "+"rainy"
            else if(weather.cloud >=50)
                newClass = "hourtiles " + "cloudy"
            else
                newClass = "hourtiles "+"sunny"
        }
        setClass(newClass)
    }, [weather]);
    if (!hourweather) {
        return <div>Loading...</div>;
    }
    return(
        <div className={className}>
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