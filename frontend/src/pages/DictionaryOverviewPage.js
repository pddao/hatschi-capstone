import styled from 'styled-components/macro';
import DictionaryPollenItem from '../components/DictionaryPollenItem';
import usePollenItems from '../hooks/usePollenItems';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    color: '#8db596',
  },
});

export default function DictionaryOverviewPage() {
  const { pollenItems } = usePollenItems();
  const classes = useStyles();

  return (
    <Wrapper>
      <h2 className={classes.title}>Dictionary of the 8 most common pollen</h2>
      <div className="pollenOverviewStyle">
        {pollenItems.map((pollenItem) => (
          <DictionaryPollenItem key={pollenItem.id} pollenItem={pollenItem} />
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 90%;

  h2 {
    text-align: center;
    color: 'primary';
  }

  .pollenOverviewStyle {
    margin: 8px;
    gap: 0.5em;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
