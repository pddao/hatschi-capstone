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

const useStyles = makeStyles({
  formgroup: {
    marginLeft: 15,
  },
  '& .MuiFormControlLabel.root': {
    margin: '4px 4px',
  },
});

export default function UserPage() {
  const classes = useStyles();
  // const handleChange = () => {
  //   setAllergy;
  // };

  return (
    <UserPageStyle>
      <h1>User page</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        alt="Placeholder"
      />
      <p>Hey username! Here you can edit your profile and add allergies. </p>
      <form action="">
        <label>
          <TextField helperText={'First name'} required={true} type={'text'} />
        </label>
        <label>
          <TextField helperText={'Last name'} required={true} type={'text'} />
        </label>
        <label>
          <TextField helperText={'Password'} required={true} type={'text'} />
        </label>

        <section>
          <h2>Allergies</h2>
          <p>Your choice determines the pollen forecast.</p>
          <FormGroup className={classes.formgroup}>
            <FormControlLabel
              control={<Switch color="primary" />}
              // onChange={handleChange}
              label="Birch"
            />
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Hazel"
            />
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Rye"
            />
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Ambrosia"
            />
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Grasses"
            />
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Alder"
            />
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Ash"
            />
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Mugwort"
            />
          </FormGroup>
        </section>
        <Button startIcon={<SaveIcon />} variant="outlined" color="primary">
          Save
        </Button>
      </form>
    </UserPageStyle>
  );
}

const UserPageStyle = styled.div`
  text-align: center;

  img {
    justify-self: center;
    width: 25%;
  }
`;
