import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

export default function LinkToProfile() {
  const history = useHistory();

  return (
    <Wrapper onClick={() => history.push("/user")}>
      <p>To Profile</p>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  color: white;
  background: #8db596;
  border: 0;
  height: 60%;
`;
