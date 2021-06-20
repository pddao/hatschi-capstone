import styled from "styled-components/macro";
import Header from "./Header";
import NavigationBar from "./NavigationBar";

export default function Layout(props) {
  return (
    <PageStyle>
      <Header />
      <NavigationBar />
      <div>{props.children}</div>
    </PageStyle>
  );
}
const PageStyle = styled.div`
  top: 0;
  left: 0;
  display: grid;
  width: 100%;

  div {
    overflow-y: auto;
  }
`;
