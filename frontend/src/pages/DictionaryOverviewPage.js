import DictionaryPollenItem from '../components/DictionaryPollenItem';
import usePollenItems from '../hooks/usePollenItems';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '100%',
    margin: '5px',
  },
  cards: {
    gap: '0.5em',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyItems: 'center',
    marginTop: '20px',
  },
});

export default function DictionaryOverviewPage() {
  const { pollenItems } = usePollenItems();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Dictionary</h1>
      <p>
        Click on the cards of the 8 most common pollen in Germany to find more
        about each pollen type.
      </p>
      <div className={classes.cards}>
        {pollenItems.map((pollenItem) => (
          <DictionaryPollenItem key={pollenItem.id} pollenItem={pollenItem} />
        ))}
      </div>
    </div>
  );
}
