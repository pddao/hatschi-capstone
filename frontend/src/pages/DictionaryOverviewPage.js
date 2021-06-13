import styled from 'styled-components/macro'
import DictionaryDetailsPage from "./DictionaryDetailsPage";

export default function DictionaryOverviewPage(){
    return(
        <Wrapper>
            <div>
                <h1>Dictionary of the most common pollen</h1>
                <p>
                    List of pollen
                </p>
                <DictionaryDetailsPage/>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`

`