import styled from "styled-components/macro";

export default function NavigationBar() {
  return (
    <NavigationBarStyle>
      <a href="/">Home</a>
      <a href="/dictionary">Dictionary</a>
      <a href="/pollencount">Pollen forecast</a>
      <a href="/user">Profile</a>
    </NavigationBarStyle>
  );
}

const NavigationBarStyle = styled.footer`
  background-color: #fff;
  height: 40px;
  position: fixed;
  margin-top: 40px;
  bottom: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  color: #000;
  margin .home-icon {
    background: url("https://img.icons8.com/material-rounded/50/000000/home.png");
  }
`;

//#8db596;
