import axios from "axios";

export function loadAllPollenItems() {
    return axios
        .get("/api/dictionary/")
        .then((response) => response.data);
}