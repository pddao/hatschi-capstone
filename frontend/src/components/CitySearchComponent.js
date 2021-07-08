import useCities from '../hooks/useCities';
import { useState } from 'react';
import usePollenCount from '../hooks/usePollenCount';
import {
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  withStyles,
} from '@material-ui/core';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import Autocomplete from '@material-ui/lab/Autocomplete';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}))(TableCell);

const useStyles = makeStyles({
  autocomplete: {
    width: 'auto',
    paddingRight: '15px',
  },
  filtersection: {
    alignItems: 'right',
  },
  filter: {
    width: 'auto',
    margin: '0 auto',
    textAlign: 'center',
  },
  table: {
    width: 355,
  },
  description: {
    margin: '0 10px',
  },
});

export default function CitySearchComponent() {
  const { cities } = useCities();
  const { pollenCount } = usePollenCount();
  const [location, setLocation] = useState('');
  const [value, setValue] = useState('All pollen');
  // const [filter, setFilter] = useState([]);
  const classes = useStyles();

  const handleChange = (event, value) => {
    event.preventDefault();
    const response_position = cities.find(
      (city) => city.name === value
    )?.response_position;
    setLocation(response_position);
  };

  const handleFilter = (event) => {
    setValue(event.target.value);
    // allPollenItemsWatchedByUser();
    // setFilter();
    // watchedPollenItems.watchedBy.include(jwt_decode.sub);
  };

  return (
    <div>
      <h3>City search</h3>

      <section>
        <Autocomplete
          options={cities?.map((city) => city.name)}
          className={classes.autocomplete}
          onChange={(event, value) => handleChange(event, value)}
          renderInput={(params) => (
            <TextField {...params} placeholder="Choose a city" />
          )}
        />
        <p className={classes.description}>
          Here comes your personal pollen forecast for the region{' '}
          {pollenCount[0]?.content[location]?.region_name}! Pleaser consider:
          next update takes place at {pollenCount[0]?.next_update}.
        </p>
      </section>

      <section className={classes.filtersection}>
        <InputLabel id="label" style={{ textAlign: 'right', marginRight: 5 }}>
          <FilterListRoundedIcon color="primary" fontSize="small" />
          Filter for:
          <Select
            value={value}
            className={classes.filter}
            onChange={handleFilter}
          >
            <MenuItem value={'All pollen'}>All pollen</MenuItem>
            <MenuItem value={'My allergies'}>My allergies</MenuItem>
          </Select>
        </InputLabel>
      </section>

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
