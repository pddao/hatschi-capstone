import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import DictionaryPollenItemDetails from "./DictionaryPollenItemDetails";

export default function DictionaryPollenItem({ pollenItem }) {
  const history = useHistory();
  const handleClick = () => {
    history.push("/dictionary/${pollenItem.englishName}");
  };

  return (
    <Wrapper onClick={handleClick} component={DictionaryPollenItemDetails}>
      <h2>{pollenItem.englishName}</h2>
      <img
        src="https://www.landwirtschaftskammer.de/fotos/zoom/a/ambrosiaartemisiifolia.jpg"
        alt="Ambrosia"
      />
    </Wrapper>
  );
}

const Wrapper = styled.button`
  margin: 0;
  width: 100%;

  img {
    margin: repat(4, 8px);
    width: 100%;
  }
`;
