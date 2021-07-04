import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { Button, makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 300,
    display: 'grid',
    justifyItems: 'flex-end',
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
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.root}>
        <TextField
          variant="filled"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          type="text"
          onChange={handleChange}
          value={credentials.username}
          helperText="Please enter your username"
        />
      </div>
      <div className={classes.root}>
        <TextField
          variant="filled"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          autoComplete="password"
          autoFocus
          labelText="Password"
          type="text"
          onChange={handleChange}
          value={credentials.password}
          helperText="Please enter your password"
        />
        <Button
          className={classes.root}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      </div>
    </form>
  );
}
