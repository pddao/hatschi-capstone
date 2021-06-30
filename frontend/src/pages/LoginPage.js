import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {},
});

const initialState = {
  username: '',
  password: '',
};

export default function LoginPage() {
  const [credentials, setCredentials] = useState(initialState);
  const { login } = useContext(AuthContext);
  const classes = useStyles();

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(credentials);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.root}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={credentials.username}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="text"
            name="password"
            onChange={handleChange}
            value={credentials.password}
          />
        </label>
        <button>Login</button>
      </div>
    </form>
  );
}
