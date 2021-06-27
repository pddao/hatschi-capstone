import styled from "styled-components/macro";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";

export default function NavigationBar() {
  return (
    <div>
      <HomeOutlinedIcon>Home</HomeOutlinedIcon>
      <PersonOutlineOutlinedIcon>Profile</PersonOutlineOutlinedIcon>
      <MenuBookOutlinedIcon>Dictionary</MenuBookOutlinedIcon>
    </div>
    // <NavigationBarStyle>
    //   {/*<NavLink to="/">Home</NavLink>*/}
    //   {/*<NavLink to="/dictionary">Dictionary</NavLink>*/}
    //   {/*<NavLink to="/pollencount">Pollen forecast</NavLink>*/}
    //   {/*<NavLink to="/user">Profile</NavLink>*/}
    //   <a className="active" href="#">
    //     <i className="fa fa-fw fa-home"></i> Home
    //   </a>
    //   <a href="#">
    //     <i className="fa fa-fw fa-search"></i> Search
    //   </a>
    //   <a href="#">
    //     <i className="fa fa-fw fa-envelope"></i> Contact
    //   </a>
    //
    //   <a href="#">
    //     <i className="fa fa-fw fa-user"></i> Login
    //   </a>
    // </NavigationBarStyle>
  );
}

const NavigationBarStyle = styled.footer`
  background-color: #fff;
  border-top-color: black;

  height: 40px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  color: white;
`;
