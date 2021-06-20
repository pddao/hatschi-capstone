import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { BackButton } from "./BackButton";

export default function Header() {
  return (
    <HeaderStyle>
      <BackButton />
      <h2>hatschi</h2>
      <Link to="/">Link to your profile</Link>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  //position: fixed;
  //top: 0;
  //margin: 0;
  width: 100%;
  background: #678a74;
  font-family: "Patrick Hand", cursive;
  display: grid;
  grid-template-columns: 80px 1fr 80px;
  justify-items: center;

  h2 {
    color: white;
  }
`;
