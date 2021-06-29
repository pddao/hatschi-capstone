import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { BackButton } from './BackButton';
import LinkToProfile from './LinkToProfile';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

const useStyles = makeStyles({
  toolbar: {
    justifyContent: 'center',
    color: '#fff',
  },
  a: {
    textDecoration: 'none',
    color: 'white',
  },
});

export default function Header() {
  const classes = useStyles();
  const [page, setPage] = useState('');
  const history = useHistory();
  const handleChange = (event, newPage) => {
    history.push(newPage);
    setPage(newPage);
  };

  return (
    <AppBar elevation={0} position="static">
      <Toolbar className={classes.toolbar} value={page} onChange={handleChange}>
        <BackButton />
        <LinkToProfile />
        <a href="/" className={classes.a}>
          hatschi
        </a>
        <PersonRoundedIcon value={'/user'} />
      </Toolbar>
    </AppBar>
  );
}
