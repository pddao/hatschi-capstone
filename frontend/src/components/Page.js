import styled from "styled-components/macro";
import Header from "./Header";

export default function Page(props) {
  return (
    <PageStyle>
      <Header />
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
