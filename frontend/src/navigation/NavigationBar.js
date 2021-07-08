import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import HomeRounded from '@material-ui/icons/HomeRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import LocalFloristRoundedIcon from '@material-ui/icons/LocalFloristRounded';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    height: '55px',
    width: '100%',
    borderTop: '3px solid' + grey[300],
    justifyContent: 'space-around',
    borderRadius: '30px 30px 0 0',

    '& .MuiBottomNavigationAction-root.Mui-selected': {
      color: 'primary',
    },
  },
});

export default function NavigationBar() {
  const classes = useStyles();
  const [page, setPage] = useState('');
  const history = useHistory();
  const location = useLocation();
  const loginpage = location.pathname === '/';

  const handleChange = (event, newPage) => {
    history.push(newPage);
    setPage(newPage);
  };

  return (
    !loginpage && (
      <BottomNavigation
        value={page}
        onChange={handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          value={'/home'}
          label="Home"
          icon={<HomeRounded />}
        />
        <BottomNavigationAction
          value={'/pollencount'}
          label="Forecast"
          icon={<LocalFloristRoundedIcon />}
        />
        <BottomNavigationAction
          value={'/dictionary'}
          label="Dictionary"
          icon={<MenuBookRoundedIcon />}
        />
        <BottomNavigationAction
          value={'/user'}
          label="Profile"
          icon={<PersonRoundedIcon />}
        />
      </BottomNavigation>
    )
  );
}
