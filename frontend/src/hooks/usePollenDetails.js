import * as apiservice from "../service/apiservice";
import { useEffect } from "react";

export default function usePollenDetails(id) {
  const [pollenDetails, setPollenDetails] = usePollenDetails();

  useEffect(() => {
    loadPollenDetails();
  }, [id]);

  const loadPollenDetails = () => {
    apiservice
      .loadPollenDetails()
      .then((data) => setPollenDetails(data))
      .catch((err) => console.log(err.message));
  };

  return { pollenDetails };
}
