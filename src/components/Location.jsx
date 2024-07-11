import React, { useEffect, useState } from "react";

export default function Location({ weather }) {
    const [currentWeather, setCurrent] = useState(weather)
    const [className,setClass] = useState("Location")
    useEffect(() => {
        setCurrent(weather);
        console.log(weather);
        var newClass = "Location "
        if(weather.is_day == 0)
            if(weather.cloud >=60)
                newClass = "Location " + "cloudy_night"
            else if(weather.precip_mm >=4)
                newClass = "Location "+"rainy"
            else
                newClass = "Location "+"Night"
        else{
             if(weather.precip_mm >=3)
                newClass = "Location "+"rainy"
            else if(weather.cloud >=50)
                newClass = "Location " + "cloudy"
            else
                newClass = "Location "+"sunny"
        }
        setClass(newClass)
    }, [weather]);

    if (currentWeather.condition == null) {
        return <div>Loading...</div>;
    }
    

    return (
        <div className={className} >
            <div className="Locationinfo">
                <img src= {currentWeather.condition.icon} alt="" />
                <h1>{currentWeather.loc_name}</h1>
                <h3>{currentWeather.reg_name}</h3>
            </div>
            <div className="Locationgrid">
                <h3>{currentWeather.last_updated}</h3>
                
                <p>{currentWeather.condition.text}</p>
                <p>Temp - {currentWeather.temp_c}</p>
                <p>Humidity - {currentWeather.humidity}</p>
                <p>Feels Like - {currentWeather.feelslike_c}</p>
                <p>UV - {currentWeather.uv}</p>
            </div>
        </div>
    );
}
