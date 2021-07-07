import styled from 'styled-components/macro';
import {
  Button,
  FormGroup,
  makeStyles,
  Switch,
  TextField,
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import useWatchedPollenItems from '../hooks/useWatchedPollenItems';

const useStyles = makeStyles({
  formgroup: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',
  },
});

export default function UserPage() {
  // const { watchedPollenItems } = useWatchedPollenItems();
  const classes = useStyles();

  // console.log(watchedPollenItems);

  return (
    <UserPageStyle>
      <h1>User page</h1>
      <p>Hey username! Here you can edit your profile and add allergies. </p>
      <h3>Profile information</h3>
      <form action="">
        <label>
          <TextField helperText={'First name'} required={true} type={'text'} />
          <EditIcon fontSize="small" />
        </label>
        <label>
          <TextField helperText={'Last name'} required={true} type={'text'} />
          <EditIcon fontSize="small" />
        </label>
        <label>
          <TextField helperText={'Password'} required={true} type={'text'} />
          <EditIcon fontSize="small" />
        </label>
        <Button
          startIcon={<SaveIcon />}
          fullWidth
          variant="contained"
          color="primary"
          disableElevation
        >
          Save profile information
        </Button>
      </form>
      <form>
        <section>
          <h3>Allergies</h3>
          {/*{watchedPollenItems.map((item) => (*/}
          {/*  <AllergyItem key={item.id} watched={watchedPollenItems.find()}*/}
          {/*))}*/}
          <p>Your choice determines the pollen forecast.</p>
          <FormGroup className={classes.formgroup} row>
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Birch"
              labelPlacement="start"
            />
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Hazel"
              labelPlacement="start"
            />
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Rye"
              labelPlacement="start"
            />
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Ambrosia"
              labelPlacement="start"
            />
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Grasses"
              labelPlacement="start"
            />
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Alder"
              labelPlacement="start"
            />
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Ash"
              labelPlacement="start"
            />
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Mugwort"
              labelPlacement="start"
            />
          </FormGroup>
        </section>
        <Button
          startIcon={<SaveIcon />}
          fullWidth
          variant="contained"
          color="primary"
          disableElevation
        >
          Save allergies
        </Button>
      </form>
    </UserPageStyle>
  );
}

const UserPageStyle = styled.div`
  text-align: center;
  margin: 10px;
`;
