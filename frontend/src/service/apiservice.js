import axios from "axios";

export function loadAllPollenItems() {
  return axios.get(`/api/dictionary/`).then((response) => response.data);
}

export function loadPollenDetails(id) {
  return axios.get(`/api/dictionary/${id}`).then((response) => response.data);
}

export function loadPollenCount() {
  return axios.get(`/api/pollencount/`).then((response) => response.data);
}

export function loadAllCities() {
  return axios.get(`/api/cities/`).then((response) => response.data);
}

export function loadCityByName(name) {
  return axios.get(`/api/cities/${name}`).then((response) => response.data);
}
