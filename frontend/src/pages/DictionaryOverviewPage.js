import styled from 'styled-components/macro'
import DictionaryPollenItem from "../components/DictionaryPollenItem";

export default function DictionaryOverviewPage(){
    return(
        <Wrapper>
            <div>
                {/*<h1>Dictionary of the most common pollen</h1>*/}
                {/*<p>*/}
                {/*    List of pollen*/}
                {/*</p>*/}
                <DictionaryPollenItem/>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`

`