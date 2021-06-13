import styled from 'styled-components/macro'
import Header from "./Header";

export default function DictionaryPollenItem(){
    return(
        <Wrapper>
            <Header/>
            <img src="https://www.landwirtschaftskammer.de/fotos/zoom/a/ambrosiaartemisiifolia.jpg" alt="Ambrosia"/>
            <section>
                <p>Lateinischer Name</p>
                <p> Blütezeit</p>
                <p>Beschreibung</p>
                <p>Footer mit Navigtation</p>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin: 0;
  width: 100%;
  display: grid;
  //grid-template-rows: auto 1fr auto;
 
  img {
    margin: 0;
    width: 100%;
  }
`
