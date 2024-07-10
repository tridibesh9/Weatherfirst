import { useState, useEffect } from "react";
import Daytiles from "./Daytiles"

export default function Days({ weather }) {
    const [dayweather, setWeather] = useState(Array.isArray(weather) ? weather : []);

    useEffect(() => {
        if (Array.isArray(weather)) {
            setWeather(weather);
            console.log(weather);
        }
    }, [weather]);

    if (dayweather.length === 0) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="Hour">
                {dayweather.map((value, i) => (
                    <Daytiles key={i} weather={value} />
                ))}
            </div>
        );
    }
}
