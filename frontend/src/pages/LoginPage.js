import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { Button, makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 400,
    display: 'grid',
  },
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
    <form
      className={classes.form}
      onSubmit={handleSubmit}
      style={{
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <TextField
          variant="filled"
          margin="normal"
          required
          fullWidth
          id="username"
          placeholder="Username*"
          name="username"
          autoComplete="username"
          autoFocus
          type="text"
          onChange={handleChange}
          value={credentials.username}
          helperText="Please enter your username"
        />
      </div>
      <div>
        <TextField
          variant="filled"
          margin="normal"
          required
          fullWidth
          id="password"
          placeholder="Password*"
          name="password"
          autoComplete="password"
          labelText="Password"
          type="password"
          onChange={handleChange}
          value={credentials.password}
          helperText="Please enter your password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{
            marginTop: '30px',
          }}
        >
          Login
        </Button>
      </div>
    </form>
  );
}
