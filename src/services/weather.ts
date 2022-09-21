import axios from 'axios'
import { WEATHER_API } from '../consts/api';

export function getWeather(city: any) {
  const {center} = city;
  const [lon, lat] = center;

  return axios
    .get(`${WEATHER_API}?lat=${lat}&lon=${lon}&units=metric`)
    .then(response => response.data);
}
