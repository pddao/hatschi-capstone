import styled from 'styled-components/macro'
import Header from "../components/Header";
import {Link} from "react-router-dom";
import DictionaryPollenItem from "../components/DictionaryPollenItem";
import usePollenItems from "../hooks/usePollenItems";


export default function DictionaryOverviewPage(){

    const { pollenItems } = usePollenItems();

    return(
        <Wrapper>
            <Header/>
            <div>
                <h1>Dictionary of the most common pollen</h1>
                <Link to="/dictionary/item">Ambrosia</Link>
                {pollenItems.map((pollenItem) => (
                    <DictionaryPollenItem key={pollenItem.name} pollenItem={pollenItem}/>
                ))}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`

`