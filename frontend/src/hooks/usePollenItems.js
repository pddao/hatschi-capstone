import { useEffect, useState } from 'react';
import * as apiservice from '../service/apiservice';

export default function usePollenItems() {
  const [pollenItems, setPollenItems] = useState([]);

  useEffect(() => {
    loadPollenData();
  }, []);

  const loadPollenData = () => {
    apiservice
      .loadAllPollenItems()
      .then(setPollenItems)
      .catch((err) => console.log(err.message));
  };

  return { pollenItems };
}
