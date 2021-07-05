import { BackButton } from './BackButton';
import {
  AppBar,
  Toolbar,
  makeStyles,
  IconButton,
  Grid,
} from '@material-ui/core';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxHeight: '70px',
  },
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
    fontSize: 'larger',
  },
  title: {
    display: 'flex',
    justifyItems: 'center',
    fontFamily: 'Sacramento',
    color: 'white',
    padding: 0,
    alignContent: 'center',
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
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          display="flex"
          gridTemplateRow="repeat(3, 1fr)"
          paddingTop="30px"
        >
          <Grid>
            <BackButton className={classes.icon} />
          </Grid>
          <Grid>
            <IconButton onClick={handleOpenHome}>
              <h1 className={classes.title}>hatschi</h1>
            </IconButton>
          </Grid>
          <Grid>
            {!loginpage ? (
              <IconButton onClick={handleOpenProfile}>
                <PersonRoundedIcon className={classes.icon} />
              </IconButton>
            ) : (
              <div></div>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
