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
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    width: 355,
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
                <TableCell>Pollen type</TableCell>
                <TableCell>Today</TableCell>
                <TableCell>Tomorrow</TableCell>
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
