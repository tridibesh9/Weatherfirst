import React, { useEffect, useState } from "react";

export default function Location({ weather }) {
    const [currentWeather, setCurrent] = useState(weather);

    useEffect(() => {
        setCurrent(weather);
        console.log(weather);
    }, [weather]);

    if (!currentWeather) {
        return <div>Loading...</div>;
    }

    return (
        <div className="Location">
            <div className="Locationinfo">
                {/* Add any location-specific information here */}
            </div>
            <div className="Locationgrid">
                <div>Temp - C - {currentWeather.temp_c}</div>
                <div>Temp - F - {currentWeather.temp_f}</div>
                <div>Feeling Like - {currentWeather.feelslike_c}</div>
                {/* Add any additional weather information here */}
            </div>
        </div>
    );
}
