import * as apiservice from "../service/apiservice";
import { useEffect, useState } from "react";

export default function usePollenDetails(id) {
  const [pollenDetails, setPollenDetails] = useState([]);

  useEffect(() => {
    loadPollenDetails();
  }, [id]);

  const loadPollenDetails = () => {
    apiservice
      .loadPollenDetails(id)
      .then((data) => setPollenDetails(data))
      .catch((err) => console.log(err.message));
  };

  return { pollenDetails };
}
