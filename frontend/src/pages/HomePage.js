import {Link} from "react-router-dom";
import styled from "styled-components/macro";
import Header from "../components/Header";

export default function HomePage() {
    return (
        <Wrapper>
            <Header/>
            <h1>Homepage</h1>
            <Link to="/dictionary">Dictionary</Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`

`