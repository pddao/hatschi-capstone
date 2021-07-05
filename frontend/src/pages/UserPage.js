import styled from 'styled-components/macro';
import { Button, Switch, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

export default function UserPage() {
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
          <p>
            Ambrosia <Switch>Toggle</Switch>
          </p>
          <p>
            Hazel <Switch>Toggle</Switch>
          </p>
          <p>
            Mugwort <Switch>Toggle</Switch>
          </p>
          <p>
            Alder <Switch>Toggle</Switch>
          </p>
          <p>
            Ash <Switch>Toggle</Switch>
          </p>
          <p>
            Grasses <Switch>Toggle</Switch>
          </p>
          <p>
            Rye <Switch>Toggle</Switch>
          </p>
          <p>
            Ambrosia <Switch>Toggle</Switch>
          </p>
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
