import { BackButton } from './BackButton';
import { AppBar, Toolbar, makeStyles, IconButton } from '@material-ui/core';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  toolbar: {
    justifyContent: 'center',
    color: '#fff',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  icon: {
    color: 'white',
  },
});

export default function Header() {
  const classes = useStyles();
  const history = useHistory();

  const handleOpenProfile = () => {
    history.push('/user');
  };

  const handleOpenHome = () => {
    history.push('/home');
  };

  return (
    <AppBar elevation={0} position="static">
      <Toolbar className={classes.toolbar}>
        <BackButton />
        <IconButton onClick={handleOpenHome}>
          <h2>hatschi</h2>
        </IconButton>
        <IconButton onClick={handleOpenProfile}>
          <PersonRoundedIcon className={classes.icon} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
