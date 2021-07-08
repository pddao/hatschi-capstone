import CitySearchComponent from '../components/CitySearchComponent';
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}))(TableCell);

const useStyles = makeStyles({
  root: {
    height: 'calc(100% - 55px)',

    '& .MuiTableContainer-root': {
      width: 350,
      margin: '0 0 10px 0',
    },
  },
});

export default function PollenForecastPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Pollen Forecast</h1>
      <CitySearchComponent />

      <TableContainer className={classes.table}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
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
