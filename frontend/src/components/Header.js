import styled from 'styled-components/macro'

export default function Header(){
    return(
        <HeaderStyle>
            <p>Zurück-Button</p>
            <h2>Flexibler Seitentitel</h2>
            <p>Link zum Profil</p>
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