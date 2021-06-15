import axios from "axios"

export default function loadAllPollenItems(){
    return axios.get("/api/dictionary/").then((response) => response.data);
}