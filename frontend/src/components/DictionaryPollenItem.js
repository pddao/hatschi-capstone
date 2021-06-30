import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

export default function DictionaryPollenItem({ pollenItem }) {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/dictionary/${pollenItem.id}/details`);
  };

  return (
    <Wrapper onClick={handleClick}>
      <h2>{pollenItem.englishName}</h2>
      <img
        src="https://www.landwirtschaftskammer.de/fotos/zoom/a/ambrosiaartemisiifolia.jpg"
        alt="Ambrosia"
      />
    </Wrapper>
  );
}

const Wrapper = styled.button`
  background: lightgrey;
  font-family: "Patrick Hand", cursive;
  margin: 0;
  width: 100%;
  border-radius: 10px;
  border: 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);

  img {
    margin: repat(4, 8px);
    width: 100%;
  }
`;
