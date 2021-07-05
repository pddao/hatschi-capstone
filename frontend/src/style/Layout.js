import styled from 'styled-components/macro';
import Header from '../navigation/Header';
import NavigationBar from '../navigation/NavigationBar';

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
  position: fixed;
  top: 0;
  left: 0;
  height: calc(100% - 55px);
  width: 100%;
  display: grid;

  div {
    overflow-y: auto;
  }
`;
