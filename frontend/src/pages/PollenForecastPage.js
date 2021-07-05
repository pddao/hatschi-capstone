import CitySearchComponent from '../components/CitySearchComponent';
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
    fontSize: 'small',
  },
});

export default function PollenForecastPage() {
  const classes = useStyles();

  return (
    <div>
      <h1>Pollen Forecast</h1>

      <CitySearchComponent />

      <TableContainer size="small">
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>0</TableCell>
              <TableCell>no pollen count</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>0-1</TableCell>
              <TableCell>no-low pollen count</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>low pollen count</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1-2</TableCell>
              <TableCell>low-medium pollen count</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>medium pollen count</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2-3</TableCell>
              <TableCell>medium-high pollen count</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>high pollen count</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
