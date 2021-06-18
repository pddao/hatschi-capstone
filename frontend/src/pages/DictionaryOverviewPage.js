import styled from "styled-components/macro";
import Header from "../components/Header";
import DictionaryPollenItem from "../components/DictionaryPollenItem";
import usePollenItems from "../hooks/usePollenItems";

export default function DictionaryOverviewPage() {
  const { pollenItems } = usePollenItems();

  return (
    <Wrapper>
      <Header />

      <h2>Dictionary of the 8 most common pollen</h2>

      <div className="pollenOverviewStyle">
        {pollenItems.map((pollenItem) => (
          <DictionaryPollenItem key={pollenItem.id} pollenItem={pollenItem} />
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h2 {
    text-align: center;
  }

  .pollenOverviewStyle {
    margin: 4px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
