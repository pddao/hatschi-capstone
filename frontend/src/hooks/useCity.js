import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';

export default function useCity(name) {
  const [city, setCity] = useState();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`/api/cities/${name}`, config)
      .then((response) => response.data)
      .then(setCity)
      .catch((error) => console.error(error.message));
  }, [name, token]);

  return { city };
}
