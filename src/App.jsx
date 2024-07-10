import { useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import Location from './components/Location';
import Hourly from './components/Hours';
import {getweatherData} from "./components/GetData"
import Days from './components/Dayss';
function App() {
  
  const [weather_data,setWeather] = useState({})
  const [hour_data,sethour] = useState({})
  const [day_data,setday] = useState({})
  async function getNewData(text){
    try{
      const newData = await getweatherData(text);
      setWeather(newData.current);
      sethour(newData.forecast.forecastday[0].hour)
      const newday = []
      for(var i = 0;i<(newData.forecast.forecastday).length;i++){
        newday.push(newData.forecast.forecastday[i].day)
        newday[i].date = newData.forecast.forecastday[i].date
      }
      setday(newday)
      console.log(newData)
    }
    catch(error){
      console.log(error.message)
    }
  }
  return (
    <div>
    <Navbar getNewData = {getNewData}/>
    <Location weather = {weather_data}/>
    <Hourly weather={hour_data}/>
    <Days weather={day_data}/>
    </div>
  );
}

export default App;
