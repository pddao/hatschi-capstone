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
      <img src={pollenItem.firstPicUrl} alt="" />
    </Wrapper>
  );
}

const Wrapper = styled.button`
  background: #fff;
  color: #8db596;
  margin: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border-color: #8db596;
  border-width: thick;

  img {
    margin: repat(4, 8px);
    width: 100%;
    padding: 5px;
  }
`;
