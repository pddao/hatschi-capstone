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
            <h1>Dictionary of the most common pollen</h1>
            <div>
                {pollenItems.map((pollenItem) => (
                    <DictionaryPollenItem key={pollenItem.englishName} pollenItem={pollenItem}/>
                ))}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`

`