import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';

export default function useCities() {
  const [cities, setCities] = useState();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(`/api/cities/`, config)
      .then((response) => response.data)
      .then(setCities)
      .catch((error) => console.error(error.message));
  }, []);

  return { cities };
}
