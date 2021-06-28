import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles({
  appbar: {
    top: 0,
    left: 0,
    width: "100%",
    background: green,
  },

  toolbar: {
    background: green,
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar} elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Grid container direction="column">
          <Grid>
            <p>Spalte 1</p>
          </Grid>
          <Grid>
            <p>hatschi</p>
          </Grid>
          <Grid>
            <p>Spalte 3</p>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
