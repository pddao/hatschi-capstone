import styled from "styled-components/macro";
import LinkToProfile from "./LinkToProfile";
import { BackButton } from "./BackButton";

export default function Header() {
  return (
    <HeaderStyle>
      <BackButton />
      <h1>
        <a href="/">hatschi</a>
      </h1>
      <LinkToProfile />
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  height: 60%;
  width: 100%;
  background: white;
  font-family: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;

  h1 {
    height: 60%;
  }

  a {
    text-decoration: none;
    color: #8db596;
  }
`;
