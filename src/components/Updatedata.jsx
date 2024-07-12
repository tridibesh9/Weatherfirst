import { getweatherData } from "./GetData";

export let data = {};

export const getNewData = async (text) => {
  try {
    const newData = await getweatherData(text);
    const new_current = newData.current;
    new_current.loc_name = newData.location.name;
    new_current.reg_name = newData.location.region;

    const newday = newData.forecast.forecastday.map(forecastDay => {
      const day = forecastDay.day;
      day.date = forecastDay.date;
      return day;
    });

    data = {
      current: new_current,
      hour: newData.forecast.forecastday[0].hour,
      days: newday,
    };
  } catch (error) {
    console.log(error.message);
  }
};
