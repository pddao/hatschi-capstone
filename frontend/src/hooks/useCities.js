import { useEffect, useState } from "react";
import * as apiservice from "../service/apiservice";

export default function useCities() {
  const [city, setCity] = useState();

  useEffect(() => {
    loadAllCities();
  }, []);

  const loadAllCities = () => {
    apiservice
      .loadAllCities()
      .then((data) => setCity(data))
      .catch((error) => console.log(error.message));
  };

  return { city };
}
