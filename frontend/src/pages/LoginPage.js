import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { Button, Grid, makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles({
  form: {
    display: 'grid',
    gridGap: '0.5rem',
    justifyContent: 'center',
    justifyItems: 'center',
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
    <form className={classes.root} onSubmit={handleSubmit}>
      <Grid className={classes.form} style={{ paddingTop: '140px' }}>
        <TextField
          variant="filled"
          margin="normal"
          required
          fullWidth
          id="username"
          placeholder="Username*"
          name="username"
          autoComplete="username"
          type="text"
          onChange={handleChange}
          value={credentials.username}
          helperText="Please enter your username"
          style={{ width: '300px' }}
        />
      </Grid>
      <Grid className={classes.form}>
        <TextField
          variant="filled"
          margin="normal"
          required
          fullWidth
          id="password"
          placeholder="Password*"
          name="password"
          autoComplete="password"
          type="password"
          onChange={handleChange}
          value={credentials.password}
          helperText="Please enter your password"
          style={{ width: '300px' }}
        />
      </Grid>

      <Grid className={classes.form} style={{ paddingTop: '30px' }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ width: '300px' }}
        >
          Login
        </Button>
      </Grid>
    </form>
  );
}
