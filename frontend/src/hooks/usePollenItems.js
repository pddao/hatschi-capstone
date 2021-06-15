import {useEffect, useState} from "react";
import loadAllPollenItems from "../components/service/apiservice";

export default function usePollenItems(){
    const [pollenItems, setPollenItems] = useState([]);

    useEffect(() => {
        loadAllPollenItems()
    }, [])

    const loadAllPollenItems = () => {
        apiservice.loadAllPollenItems().then((data) => setPollenItems(data))
    }
    return (
        {loadAllPollenItems}
    )
}