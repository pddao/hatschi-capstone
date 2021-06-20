import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export default function NavigationBar() {
  return (
    <NavigationBarStyle>
      <Link to="/">Home</Link>
      <Link to="/dictionary">Dictionary</Link>
      <Link>Profile</Link>
    </NavigationBarStyle>
  );
}

const NavigationBarStyle = styled.footer`
  background-color: lightgrey;
  height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: white;
`;
