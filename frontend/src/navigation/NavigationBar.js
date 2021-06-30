import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

export default function NavigationBar() {
  return (
    <NavigationBarStyle>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dictionary">Dictionary</NavLink>
      <NavLink to="/pollencount">Pollen forecast</NavLink>
      <NavLink to="/user">Profile</NavLink>
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  color: white;
`;
