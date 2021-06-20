import styled from "styled-components/macro";
import NavigationBar from "../components/NavigationBar";

export default function HomePage() {
  return (
    <Wrapper>
      <h1>Homepage</h1>
      <p>Hey! Here comes your personal pollen forecast for Hamburg!</p>
      <NavigationBar />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
`;
