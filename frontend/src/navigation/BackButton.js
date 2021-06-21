import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components/macro";

export function BackButton() {
  const history = useHistory();
  const location = useLocation();
  const homepage = location.pathname === "/";

  return (
    !homepage && (
      <Wrapper onClick={() => history.goBack()}>
        <img src={"/new-back-arrow.png"} alt="Back arrow" />
      </Wrapper>
    )
  );
}

const Wrapper = styled.button`
  background: #678a74;
  border: 0;

  img {
    width: 20%;
  }
`;
