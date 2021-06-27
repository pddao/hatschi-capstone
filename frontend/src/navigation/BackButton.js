import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components/macro";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";

export function BackButton() {
  const history = useHistory();
  const location = useLocation();
  const homepage = location.pathname === "/";

  return (
    !homepage && (
      <Wrapper onClick={() => history.goBack()}>
        <ArrowBackIosOutlinedIcon>Back</ArrowBackIosOutlinedIcon>
      </Wrapper>
    )
  );
}

const Wrapper = styled.button`
  background: #678a74;
  border: 0;
  height: 60%;

  img {
    width: 20%;
  }
`;
