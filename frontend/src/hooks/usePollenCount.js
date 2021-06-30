import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';

export default function usePollenCount() {
  const [pollenCounts, setPollenCounts] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`/api/pollencount/`, config)
      .then((response) => response.data)
      .then(setPollenCounts)
      .catch((error) => console.error(error.message));
  }, []);

  return { pollenCounts };
}
