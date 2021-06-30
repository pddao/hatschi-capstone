import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';

export default function usePollenItems() {
  const [pollenItems, setPollenItems] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`/api/dictionary/`, config)
      .then((response) => response.data)
      .then(setPollenItems)
      .catch((error) => console.error(error.message));
  }, [token]);

  return { pollenItems };
}
