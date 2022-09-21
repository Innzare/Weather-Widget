import axios from 'axios';
import { CITIES_API } from '../consts/api';

export function getCities(city: string) {
  return axios.get(`${CITIES_API}?${city}.json&types=place&language=en`)
    .then(response => response.data);
};

export function getCitiesByCoords(lon: number, lat: number) {
  return axios.get(`${CITIES_API}?${lon},${lat}.json&types=place&language=en`)
    .then(response => response.data);
};

export function getCurrentCity (options: any) {
  return new Promise(function (resolve, reject) {
    return navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}
