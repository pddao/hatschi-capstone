import { BackButton } from './BackButton';
import { AppBar, Toolbar, makeStyles, IconButton } from '@material-ui/core';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
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
  title: {
    color: 'white',
  },
});

export default function Header() {
  const classes = useStyles();
  const history = useHistory();

  const handleOpenHome = () => {
    history.push('/home');
  };

  const handleOpenProfile = () => {
    history.push('/user');
  };

  return (
    <AppBar elevation={0} position="static">
      <Toolbar className={classes.root}>
        <BackButton className={classes.icon} />
        <IconButton onClick={handleOpenHome}>
          <h2 className={classes.title}>hatschi</h2>
        </IconButton>
        <IconButton onClick={handleOpenProfile}>
          <PersonRoundedIcon className={classes.icon} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
