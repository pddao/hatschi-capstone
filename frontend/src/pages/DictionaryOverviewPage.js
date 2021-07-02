import styled from 'styled-components/macro';
import DictionaryPollenItem from '../components/DictionaryPollenItem';
import usePollenItems from '../hooks/usePollenItems';

export default function DictionaryOverviewPage() {
  const { pollenItems } = usePollenItems();

  return (
    <Wrapper>
      <h2>Dictionary of the 8 most common pollen</h2>
      <p>Hallo</p>
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
    color: #e2bcb7;
  }

  .pollenOverviewStyle {
    margin: 8px;
    gap: 0.5em;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
