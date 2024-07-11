import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Location from './components/Location';
import Hourly from './components/Hours';
import { getNewData, data } from './components/Updatedata';
import Days from './components/Dayss';
import axios from "axios";

function App() {
  const [weather_data, setWeather] = useState([]);
  const [hour_data, setHour] = useState([]);
  const [day_data, setDay] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        const ip = response.data.ip;
        
        await getNewData(ip);
        setWeather(data.current);
        setHour(data.hour);
        setDay(data.days);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  const handleGetNewData = async (text) => {
    await getNewData(text);
    setWeather(data.current);
    setHour(data.hour);
    setDay(data.days);
  };

  return (
    <div>
      <Navbar getNewData={handleGetNewData} />
      <Location weather={weather_data} />
      <Hourly weather={hour_data} />
      <Days weather={day_data} />
    </div>
  );
}

export default App;
