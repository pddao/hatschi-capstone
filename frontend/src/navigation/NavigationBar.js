import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
import { grey, red } from "@material-ui/core/colors";
import { HomeRounded } from "@material-ui/icons";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import LocalFloristRoundedIcon from "@material-ui/icons/LocalFloristRounded";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
    left: 0,
    height: "55px",
    width: "100%",
    borderTop: "4px solid" + grey[100],
    justifyContent: "space-around",
  },
});

export default function NavigationBar() {
  const classes = useStyles();
  const [page, setPage] = useState("");
  const history = useHistory();
  const handleChange = (event, newPage) => {
    history.push(newPage);
    setPage(newPage);
  };

  return (
    <BottomNavigation
      value={page}
      onChange={handleChange}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        value={"/"}
        label="Home"
        icon={<HomeRounded />}
        className={classes.selected}
      />
      <BottomNavigationAction
        value={"/pollencount"}
        label="Forecast"
        icon={<LocalFloristRoundedIcon />}
      />
      <BottomNavigationAction
        value={"/dictionary"}
        label="Dictionary"
        icon={<MenuBookRoundedIcon />}
      />
      <BottomNavigationAction
        value={"/user"}
        label="Profile"
        icon={<PersonRoundedIcon />}
      />
    </BottomNavigation>
  );
}
