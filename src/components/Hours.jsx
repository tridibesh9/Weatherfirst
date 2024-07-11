import { useState, useEffect } from "react";
import Hourtiles from "./Hourtiles";

export default function Hourly({ weather }) {
    const [hourweather, setWeather] = useState(Array.isArray(weather) ? weather : []);

    useEffect(() => {
        if (Array.isArray(weather)) {
            setWeather(weather);
            console.log(weather);
        }
    }, [weather]);

    if (hourweather.length === 0) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="hourorigin">
                <h2>Hours Prediction</h2>
            <div className="Hour">
                {hourweather.map((value, i) => (
                    <Hourtiles key={i} weather={value} />
                ))}
            </div>
            </div>
        );
    }
}
