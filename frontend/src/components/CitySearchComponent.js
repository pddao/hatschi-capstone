import useCities from '../hooks/useCities';
import { useState } from 'react';
import usePollenCount from '../hooks/usePollenCount';
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  withStyles,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    width: 355,
  },
  autocomplete: {
    display: 'flex',
    width: 325,
    margin: '0 auto',
  },
});

export default function CitySearchComponent() {
  const { cities } = useCities();
  const { pollenCount } = usePollenCount();
  const [location, setLocation] = useState('');
  const classes = useStyles();

  const handleChange = (event) => {
    event.preventDefault();
    setLocation(event.target.value);
  };

  return (
    <div>
      <h3>City search</h3>

      <section>
        <label htmlFor="cities">Choose a city:</label>
        <select name="cities" id="cities" onChange={handleChange}>
          {cities?.map((city) => (
            <option key={city.id} value={city.response_position}>
              {city.name}
            </option>
          ))}
        </select>

        <Autocomplete
          options={cities?.map((city) => city.name)}
          className={classes.autocomplete}
          onChange={(event, value) => handleChange(event, value)}
          // value={city.response_position}
          renderInput={(params) => (
            <TextField {...params} placeholder="Choose a city" />
          )}
        />
      </section>

      <p>
        Here comes your personal pollen forecast for the region{' '}
        {pollenCount[0]?.content[location]?.region_name}! Pleaser consider: next
        update takes place at {pollenCount[0]?.next_update}.
      </p>

      <section>
        <TableContainer className={classes.table}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <StyledTableCell>Pollen type</StyledTableCell>
                <StyledTableCell>Today</StyledTableCell>
                <StyledTableCell>Tomorrow</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Birch</TableCell>
                <TableCell>
                  {pollenCount[0]?.content[location]?.Pollen.Birke.today}
                </TableCell>
                <TableCell>
                  {pollenCount[0]?.content[location]?.Pollen.Birke.tomorrow}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Alder</TableCell>
                <TableCell>
                  {pollenCount[0]?.content[location]?.Pollen.Erle.today}
                </TableCell>
                <TableCell>
                  {pollenCount[0]?.content[location]?.Pollen.Erle.tomorrow}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ash</TableCell>
                <TableCell>
                  {pollenCount[0]?.content[location]?.Pollen.Esche.today}
                </TableCell>
                <TableCell>
                  {pollenCount[0]?.content[location]?.Pollen.Esche.tomorrow}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hazel</TableCell>
                <TableCell>
                  {pollenCount[0]?.content[location]?.Pollen.Hasel.today}
                </TableCell>
                <TableCell>
                  {pollenCount[0]?.content[location]?.Pollen.Hasel.tomorrow}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mugwort</TableCell>
                <TableCell>
                  {pollenCount[0]?.content[location]?.Pollen.Beifuss.today}
                </TableCell>
                <TableCell>
                  {' '}
                  {pollenCount[0]?.content[location]?.Pollen.Beifuss.tomorrow}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ragweed</TableCell>
                <TableCell>
                  {pollenCount[0]?.content[location]?.Pollen.Ambrosia.today}
                </TableCell>
                <TableCell>
                  {pollenCount[0]?.content[location]?.Pollen.Ambrosia.tomorrow}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Rye</TableCell>
                <TableCell>
                  {pollenCount[0]?.content[location]?.Pollen.Roggen.today}
                </TableCell>
                <TableCell>
                  {pollenCount[0]?.content[location]?.Pollen.Roggen.tomorrow}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Grasses</TableCell>
                <TableCell>
                  {pollenCount[0]?.content[location]?.Pollen.Graeser.today}
                </TableCell>
                <TableCell>
                  {pollenCount[0]?.content[location]?.Pollen.Graeser.tomorrow}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </div>
  );
}
