import axios from "axios";

export function loadAllPollenItems() {
  return axios.get(`/api/dictionary/`).then((response) => response.data);
}

export function loadPollenDetails(id) {
  return axios.get(`/api/dictionary/${id}`).then((response) => response.data);
}
