import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { BackButton } from './BackButton';
import LinkToProfile from './LinkToProfile';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

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

  return (
    <AppBar elevation={0} position="static">
      <Toolbar className={classes.toolbar}>
        <BackButton />
        <a href="/" className={classes.a}>
          hatschi
        </a>
        <PersonRoundedIcon />
        <LinkToProfile />
      </Toolbar>
    </AppBar>
  );
}
