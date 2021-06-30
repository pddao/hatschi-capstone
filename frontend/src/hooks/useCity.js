import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';

export default function useCity() {
  const [city, setCity] = useState();
  const { token } = useContext(AuthContext);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    loadCityByName();
  }, []);

  const loadCityByName = (name) => {
    axios
      .get(`/api/cities/${name}`, config)
      .then((response) => response.data)
      .then(setCity)
      .catch((error) => console.error(error.message));
  };

  return { city };
}
