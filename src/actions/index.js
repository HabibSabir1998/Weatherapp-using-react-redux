import axios from 'axios';

const API_KEY = '0f5e47ddbb2cd2434b54b9447127e421';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},pk`;
    const request = axios.get(url);

    console.log("Request:",request);

    return{
        type: FETCH_WEATHER,
        payload: request
       };
    }