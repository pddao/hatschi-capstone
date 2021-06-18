import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { BackButton } from "./BackButton";

export default function Header() {
  return (
    <HeaderStyle>
      <BackButton />
      <h2>hatschi</h2>
      <Link to="/">Link zum Profil</Link>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  margin: 0;
  width: 100%;
  background: #95d5b2;
  font-family: Charter;
  display: grid;
  grid-template-columns: 80px 1fr 80px;
  justify-items: center;
`;
