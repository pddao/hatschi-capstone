import styled from 'styled-components/macro';
import Header from '../navigation/Header';
import NavigationBar from '../navigation/NavigationBar';

export default function Layout(props) {
  return (
    <PageStyle>
      <Header />
      <div>{props.children}</div>
      <NavigationBar />
    </PageStyle>
  );
}
const PageStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: min-content 1fr min-content;

  div {
    overflow-y: auto;
    margin: 5px;
  }
`;
