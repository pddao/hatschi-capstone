import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";

export function BackButton() {
  const history = useHistory();

  return (
    <Wrapper onClick={() => history.goBack()}>
      <img src={"/back-arrow.png"} alt="Back arrow" />
    </Wrapper>
  );
}

const Wrapper = styled.button`
  background: #678a74;
  img {
    width: 25%;
  }
`;
