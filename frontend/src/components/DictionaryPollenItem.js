import styled from 'styled-components/macro'
import Header from "./Header";
import {Link} from "react-router-dom";

export default function DictionaryPollenItem({pollenItem}){
    return(
        <Wrapper>
            <Header/>
            <img src="https://www.landwirtschaftskammer.de/fotos/zoom/a/ambrosiaartemisiifolia.jpg" alt="Ambrosia"/>
            <section>
                <p> {pollenItem.latinName} </p>
                <p> Blütezeit</p>
                <p>Beschreibung</p>
                <p>Footer mit Navigtation</p>
                <Link to="/">Home</Link>
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
