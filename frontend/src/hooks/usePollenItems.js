import {useEffect, useState} from "react";
import * as apiservice from "../service/apiservice"

export default function usePollenItems() {
    const [pollenItems, setPollenItems] = useState([]);

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        apiservice.loadAllPollenItems().then((data) => setPollenItems(data))
    }

    return (
        {pollenItems}
    )
}