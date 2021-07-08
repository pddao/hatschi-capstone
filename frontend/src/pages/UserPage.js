import styled from 'styled-components/macro';
import { FormGroup, makeStyles, Switch } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useWatchedPollenItems from '../hooks/useWatchedPollenItems';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';

const useStyles = makeStyles({
  formlabel: {
    '& .MuiFormControlLabel-root': {
      flexDirection: 'initial',
    },
  },
});

export default function UserPage() {
  const { jwtDecoded } = useContext(AuthContext);
  const { updatePollenItemOnWatchlist, watchedPollenItems } =
    useWatchedPollenItems();

  const classes = useStyles();

  const [state, setState] = useState({
    birch: false,
    alder: false,
    ash: false,
    grasses: false,
    hazel: false,
    mugwort: false,
    ragweed: false,
    rye: false,
  });

  const allPollenItemsWatchedByUser = () => {
    const ash = watchedPollenItems.find((item) => item.englishName === 'ash');
    const ashWatchedByUser = ash && ash.watchedBy.includes(jwtDecoded.sub);
    const birch = watchedPollenItems.find(
      (item) => item.englishName === 'birch'
    );
    const birchWatchedByUser =
      birch && birch.watchedBy.includes(jwtDecoded.sub);
    const alder = watchedPollenItems.find(
      (item) => item.englishName === 'alder'
    );
    const alderWatchedByUser =
      alder && alder.watchedBy.includes(jwtDecoded.sub);
    const grasses = watchedPollenItems.find(
      (item) => item.englishName === 'grasses'
    );
    const grassesWatchedByUser =
      grasses && grasses.watchedBy.includes(jwtDecoded.sub);
    const ragweed = watchedPollenItems.find(
      (item) => item.englishName === 'ragweed'
    );
    const ragweedWatchedByUser =
      ragweed && ragweed.watchedBy.includes(jwtDecoded.sub);
    const mugwort = watchedPollenItems.find(
      (item) => item.englishName === 'mugwort'
    );
    const mugwortWatchedByUser =
      mugwort && mugwort.watchedBy.includes(jwtDecoded.sub);
    const hazel = watchedPollenItems.find(
      (item) => item.englishName === 'hazel'
    );
    const hazelWatchedByUser =
      hazel && hazel.watchedBy.includes(jwtDecoded.sub);
    const rye = watchedPollenItems.find((item) => item.englishName === 'rye');
    const ryeWatchedByUser = rye && rye.watchedBy.includes(jwtDecoded.sub);
    setState({
      ...state,
      birch: birchWatchedByUser,
      ash: ashWatchedByUser,
      alder: alderWatchedByUser,
      ragweed: ragweedWatchedByUser,
      mugwort: mugwortWatchedByUser,
      grasses: grassesWatchedByUser,
      rye: ryeWatchedByUser,
      hazel: hazelWatchedByUser,
    });
  };

  useEffect(() => {
    allPollenItemsWatchedByUser();
  }, [watchedPollenItems]);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    updatePollenItemOnWatchlist({
      id: event.target.name,
      watched: event.target.checked,
    });
  };

  console.log(state);
  return (
    <UserPageStyle>
      <h1>My allergies</h1>
      <p>Hey {jwtDecoded.sub}! </p>
      <p>
        Please activate the pollen you are allergic to. Afterwards you can check
        the pollen forecast based on your preferences.{' '}
      </p>

      <form>
        <section>
          <FormGroup className={classes.formlabel}>
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  name="birch"
                  onChange={handleChange}
                  checked={state.birch}
                />
              }
              label="Birch"
              labelPlacement="start"
            />
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  name="hazel"
                  onChange={handleChange}
                  checked={state.hazel}
                />
              }
              label="Hazel"
              labelPlacement="start"
            />
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  name="rye"
                  onChange={handleChange}
                  checked={state.rye}
                />
              }
              label="Rye"
              labelPlacement="start"
            />
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  name="ragweed"
                  onChange={handleChange}
                  checked={state.ragweed}
                />
              }
              label="Ragweed"
              labelPlacement="start"
            />
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  name="grasses"
                  onChange={handleChange}
                  checked={state.grasses}
                />
              }
              label="Grasses"
              labelPlacement="start"
            />
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  name="alder"
                  onChange={handleChange}
                  checked={state.alder}
                />
              }
              label="Alder"
              labelPlacement="start"
            />
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  name="ash"
                  onChange={handleChange}
                  checked={state.ash}
                />
              }
              label="Ash"
              labelPlacement="start"
            />
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  name="mugwort"
                  onChange={handleChange}
                  checked={state.mugwort}
                />
              }
              label="Mugwort"
              labelPlacement="start"
            />
          </FormGroup>
        </section>
      </form>
    </UserPageStyle>
  );
}

const UserPageStyle = styled.div`
  text-align: center;
`;
