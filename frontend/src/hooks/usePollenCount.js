import { useEffect, useState } from "react";
import * as apiservice from "../service/apiservice";

export default function usePollenCount() {
  const [pollenCounts, setPollenCounts] = useState([]);

  useEffect(() => {
    loadPollenCount();
  }, []);

  const loadPollenCount = () => {
    apiservice
      .loadPollenCount()
      .then((data) => setPollenCounts(data.content))
      .catch((error) => console.log(error.message));
  };

  return { pollenCounts };
}
