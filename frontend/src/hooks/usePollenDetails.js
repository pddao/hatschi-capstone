import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';

export default function usePollenDetails(id) {
  const [pollenDetails, setPollenDetails] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`/api/dictionary/${id}`, config)
      .then((response) => response.data)
      .then(setPollenDetails)
      .catch((error) => console.error(error.message));
  }, [id, token]);

  return { pollenDetails };
}
