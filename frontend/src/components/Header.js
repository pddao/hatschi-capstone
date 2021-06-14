import styled from 'styled-components/macro'
import {Link} from "react-router-dom";

export default function Header(){
    return(
        <HeaderStyle>
            <Link to="/">Zurück-Button</Link>
            <h2>Flexibler Seitentitel</h2>
            <Link to="/">Link zum Profil</Link>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
  margin: 0;
  width: 100%;
  background: #95d5b2;
  font-family: Charter;
  display: grid;
  grid-template-columns: 80px 1fr 80px;
  justify-items: center;
`