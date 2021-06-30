import { useEffect, useState } from 'react';
import * as apiservice from '../service/apiservice';

export default function useCities() {
  const [cities, setCities] = useState();

  useEffect(() => {
    loadAllCities();
  }, []);

  const loadAllCities = () => {
    apiservice
      .loadAllCities()
      .then(setCities)
      .catch((error) => console.log(error.message));
  };

  return { cities };
}
