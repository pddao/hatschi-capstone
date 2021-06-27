import styled from "styled-components/macro";
import DictionaryPollenItem from "../components/DictionaryPollenItem";
import usePollenItems from "../hooks/usePollenItems";
import NavigationBar from "../navigation/NavigationBar";

export default function DictionaryOverviewPage() {
  const { pollenItems } = usePollenItems();

  return (
    <Wrapper>
      <h2>Dictionary of the 8 most common pollen</h2>

      <div className="pollenOverviewStyle">
        {pollenItems.map((pollenItem) => (
          <DictionaryPollenItem key={pollenItem.id} pollenItem={pollenItem} />
        ))}
      </div>
      <NavigationBar />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 90%;
  h2 {
    text-align: center;
  }

  .pollenOverviewStyle {
    margin: 8px;
    gap: 0.5em;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
