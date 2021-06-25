import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { BackButton } from "./BackButton";

export default function Header() {
  return (
    <HeaderStyle>
      <BackButton />
      <h2>hatschi</h2>
      <Link to="/user">Link to your profile</Link>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  height: 80%;
  width: 100%;
  background: #678a74;
  font-family: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;

  h2 {
    color: white;
    font-family: inherit;
  }
`;
