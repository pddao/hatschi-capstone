import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';

export default function useWatchedPollenItems() {
  const [watchedPollenItems, setWatchedPollenItems] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`/api/pollenitems/watched`, config)
      .then((response) => response.data)
      .then(setWatchedPollenItems)
      .catch((error) => console.error(error.message));
  }, [token]);

  function updatePollenItemOnWatchlist(pollenItemToWatch) {
    axios
      .post(
        '/api/pollenitems/watched',
        { id: pollenItemToWatch.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() =>
        setWatchedPollenItems([...watchedPollenItems, pollenItemToWatch])
      )
      .catch((error) => console.error(error.message));
  }

  return { updatePollenItemOnWatchlist, watchedPollenItems };
}
