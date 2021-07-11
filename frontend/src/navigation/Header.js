import { BackButton } from './BackButton';
import { AppBar, Toolbar, makeStyles, IconButton } from '@material-ui/core';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxHeight: '70px',
    display: 'flex',
  },
  toolbar: {
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  icon: {
    color: 'white',
    fontSize: 'larger',
  },
  title: {
    fontFamily: 'Sacramento',
    color: 'white',
    marginTop: 20,
  },
});
export default function Header() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const loginpage = location.pathname === '/';

  const handleOpenHome = () => {
    history.push('/home');
  };

  const handleOpenProfile = () => {
    history.push('/user');
  };

  return (
    <AppBar elevation={0} position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <BackButton className={classes.icon} />
        <IconButton onClick={handleOpenHome}>
          <h1 className={classes.title} style={{ position: 'sticky' }}>
            hatschi
          </h1>
        </IconButton>
        {!loginpage ? (
          <IconButton onClick={handleOpenProfile}>
            <PersonRoundedIcon className={classes.icon} />
          </IconButton>
        ) : (
          <div style={{ color: '#8db596' }}>......</div>
        )}
      </Toolbar>
    </AppBar>
  );
}
