import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

export default function PrivateRoute(props) {
  const { token } = useContext(AuthContext);

  return token ? <Route {...props} /> : <Redirect to={'/'} />;
}
