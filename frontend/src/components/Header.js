import styled from 'styled-components/macro'

export default function Header(){
    return(
        <HeaderStyle>
            <p>Zurück-Button</p>
            <h1>Pollenname</h1>
            <p>Link zum Profil</p>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
  margin:0;
  width: 100%;
  background: #ffdf6b;
  display: grid;
  grid-template-columns: 80px 1fr 80px;
  justify-items: center;
`