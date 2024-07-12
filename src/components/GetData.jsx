import axios from "axios";
const baseurl = 'https://api.weatherapi.com/v1/forecast.json?';
const apikey = 'd4a62729e498486fb7c125016240907';

export const getweatherData = async (city) => {
    try {
        const url = `${baseurl}key=${apikey}&q=${city}&days=7`
        console.log(url)
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        throw(error);
    }
};
