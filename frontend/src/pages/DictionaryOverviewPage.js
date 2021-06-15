import styled from 'styled-components/macro'
import Header from "../components/Header";
import {Link} from "react-router-dom";
import DictionaryPollenItem from "../components/DictionaryPollenItem";


export default function DictionaryOverviewPage(){
    return(
        <Wrapper>
            <Header/>
            <div>
                <h1>Dictionary of the most common pollen</h1>
                <Link to="/dictionary/item">Ambrosia</Link>
                <DictionaryPollenItem/>
                <DictionaryPollenItem/>
                <DictionaryPollenItem/>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`

`